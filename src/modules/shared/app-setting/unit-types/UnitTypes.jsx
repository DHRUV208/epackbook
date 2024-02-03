import { Grid, Paper, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  updateUnitTypes,
  requestToSaveUnitTypes,
  requestToGetAllUnitTypes,
  requestDeleteUnitTypes,
  resetUnitType,
  resetUnitTypesApiStatus,
  resetUnitTypesDeleteStatus
} from '../../../../store/slices/AppConfigurationSlice';
import {
  unitTypeInitialValues,
  addUnitTypeValidationSchema
} from '../../../../common-components/validator/settings-validator/app-Configuration';
import GenericAction from '../../../../common-components/form-elements/genericAction';

const UnitTypes = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: unitTypeInitialValues,
    validationSchema: addUnitTypeValidationSchema
  });
  const {
    appConfiguration: {
      unitTypes: { add, listUnitTypes, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const onUnitTypesChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateUnitTypes(evt?.target?.value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteUnitTypes(data?._id));
  };

  const onSaveUnitTypesHandler = () => {
    let payload = {
      unitType: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveUnitTypes(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Unit Type');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Unit Type Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetUnitType());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Unit Type Already Exist');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetUnitTypesApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllUnitTypes());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Unit Type Deleted');
      setTimeout(() => {
        dispatch(resetUnitTypesDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetUnitTypesDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllUnitTypes());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'unitType',
        headerName: 'Unit Type',
        width: 150,
        editable: false
      },
      {
        field: '_id',
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
              onChange={onUnitTypesChange}
              label={'Enter unit type'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik.values.value}
              error={Boolean(formik?.errors?.value) && formik?.touched?.value}
            />
            <FormHelperText error>
              {formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveUnitTypesHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listUnitTypes
                .filter((item) => !item.isDeleted)
                .map((item, index) => ({
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
export default UnitTypes;
