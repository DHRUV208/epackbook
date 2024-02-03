import { Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  updateVehicleType,
  requestToGetAllVehicleType,
  requestToSaveVehicleType,
  resetVehicleType,
  requestDeleteVehicleType,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import { useDispatch, useSelector } from 'react-redux';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import {
  vehicleTypeInitialValues,
  addvehicleTypeValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';

const VehicleType = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const dispatch = useDispatch();
  const {
    vehicleManagement: {
      vehicleType: { add, listVehicleType, apiStatus }
    }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: vehicleTypeInitialValues,
    validationSchema: addvehicleTypeValidationSchema
  });

  const onVehicleTypeChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleType(evt?.target?.value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleType(data?._id));
  };
  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'vehicleType',
        headerName: 'Vehicle Type',
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
  }, []);

  const onSaveVehicleTypeHandler = () => {
    let payload = {
      vehicleType: add?.value
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleType(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Type');
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
        setMessage('Vehicle Type Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleType());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleType());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleType());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Type  Deleted');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1000);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1000);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllVehicleType());
  }, [apiStatus?.isSaved]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onVehicleTypeChange}
              label={'Enter Vehicle Type'}
              onBlur={formik.handleBlur}
              onKeyUp={formik?.handleChange}
              onFocus={formik.handleChange}
              value={formik?.values.value}
              error={Boolean(formik.errors.value) && formik.touched.value}
            />
            <FormHelperText error>
              {formik.errors.value && formik.touched.value && formik.errors.value}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton type="submit" onClick={onSaveVehicleTypeHandler}>
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleType
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
export default VehicleType;
