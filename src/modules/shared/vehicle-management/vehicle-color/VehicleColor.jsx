import { Grid, FormHelperText } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import {
  updateVehicleColor,
  // updateColorVehicleType,
  requestToGetAllVehicleColor,
  requestToSaveVehicleColor,
  resetVehicleColor,
  requestDeleteVehicleColor,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  vehicleColorInitialValues,
  addvehicleColorValidationSchema
} from './../../../../common-components/validator/settings-validator/vehicle-management/index';

const VehicleColor = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const {
    vehicleManagement: {
      vehicleColor: { add, listVehicleColor, apiStatus }
    }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: vehicleColorInitialValues,
    validationSchema: addvehicleColorValidationSchema
  });

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleColor(data?._id));
  };

  const onVehicleColorChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleColor(evt?.target?.value));
  };
  const onSaveVehicleColorHandler = () => {
    let payload = {
      vehicleColorName: add.value
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleColor(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Color');
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
        setMessage('Vehicle Color Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleColor());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleColor());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleColor());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Color Deleted');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllVehicleColor());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'vehicleColorName',
        headerName: 'Vehicle Color Name',
        width: 150,
        editable: false
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
              onChange={onVehicleColorChange}
              label={'Enter Vehicle Color Name'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              onFocus={formik.handleChange}
              value={formik?.values.value}
              error={Boolean(formik?.errors?.value) && formik?.touched?.value}
            />
            <FormHelperText error>
              {formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveVehicleColorHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleColor
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
export default VehicleColor;
