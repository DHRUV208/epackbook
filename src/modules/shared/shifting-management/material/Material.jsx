import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import {
  addMaterialValidationSchema,
  materialInitialValues
} from '../../../../common-components/validator/settings-validator/shifting-management';
import {
  resetMaterial,
  requestToGetAllMaterial,
  requestToSaveMaterial,
  updateMaterialValue,
  resetMaterialApiStatus,
  resetMaterialDeleteStatus,
  requestToDeleteMaterial
} from '../../../../store/slices/ShiftingManagementSlice';

import { useDispatch } from 'react-redux';

const Material = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: materialInitialValues,
    validationSchema: addMaterialValidationSchema
  });

  const dispatch = useDispatch();
  const {
    shiftingManagement: {
      material: { add, listMaterial, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const onMaterialValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateMaterialValue(evt?.target?.value));
  };
  const onSaveAddMaterialHandler = () => {
    let payload = {
      materialName: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveMaterial(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Material');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetMaterial());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllMaterial());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Material Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetMaterial());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetMaterialApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllMaterial());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetMaterialDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetMaterialDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteMaterial(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'materialName',
        headerName: 'Material',
        width: 200,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 200,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
      },
      {
        field: '',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericAction data={data?.row} onDeleteHandler={(data) => onDeleteHandler(data)} />
          );
        }
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              error={formik?.errors?.value && formik?.touched?.value}
              onBlur={formik.handleBlur}
              onFocus={formik.handleChange}
              onKeyUp={formik.handleChange}
              value={formik?.values?.value}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              onChange={onMaterialValueChange}
              label={'Enter Material Name'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddMaterialHandler} type="sumbit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listMaterial
                .filter((item) => !item.isDeleted)
                ?.map((item, index) => ({
                  ...item,
                  id: index + 1
                }))}
              columns={columns}
            />
          </Grid>
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default Material;
