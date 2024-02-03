import { Fragment, useMemo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import {
  resetMovingType,
  updateMovingTypeValue,
  requestToSaveMovingType,
  requestToGetAllMovingType,
  resetMovingTypeApiStatus,
  resetMovingTypeDeleteStatus,
  requestToDeleteMovingType
} from '../../../../store/slices/ShiftingManagementSlice';
import {
  movingTypeInitialValues,
  addMovingTypeValidationSchema
} from '../../../../common-components/validator/settings-validator/shifting-management';
import Toasty from '../../../../common-components/form-elements/toasty';

const MovingType = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {
    shiftingManagement: {
      movingType: { add, listMovingType, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: movingTypeInitialValues,
    validationSchema: addMovingTypeValidationSchema
  });
  const dispatch = useDispatch();
  const onMovingTypeValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateMovingTypeValue(evt?.target?.value));
  };
  const onSaveAddMovingTypeHandler = () => {
    let payload = {
      movingType: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveMovingType(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Moving Type');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetMovingType());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllMovingType());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllMovingType());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetMovingTypeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetMovingTypeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteMovingType(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'movingType',
        headerName: 'Moving Type',
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

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Moving Type Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetMovingType());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetMovingTypeApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

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
              onChange={onMovingTypeValueChange}
              label={'Enter Moving Type '}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddMovingTypeHandler} type="sumbit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listMovingType
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
export default MovingType;
