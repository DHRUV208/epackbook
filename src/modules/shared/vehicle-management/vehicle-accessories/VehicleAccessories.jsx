import { Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useEffect, useMemo, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useDispatch, useSelector } from 'react-redux';
import Toasty from '../../../../common-components/form-elements/toasty';

import {
  updateVehicleAccessory,
  updateChooseAccessoryVehicleType,
  requestToSaveVehicleAccessory,
  requestToGetAllVehicleAccessory,
  resetVehicleAccessory,
  requestDeleteVehicleAccessory,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import {
  vehicleAccessoryInitialValues,
  addvehicleAccessoryValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { listVehicleCompany } from '../../../../services/vehicleManagement';

const VehicleAccessory = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: vehicleAccessoryInitialValues,
    validationSchema: addvehicleAccessoryValidationSchema
  });

  const {
    vehicleManagement: {
      vehicleAccessory: { add, listVehicleAccessory, apiStatus },
      vehicleType: { listVehicleType }
    }
  } = useSelector((state) => state);

  const onVehicleAccessoriesChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleAccessory(evt?.target?.value));
  };

  const onVehicleTypeChange = (evt) => {
    formik.setFieldValue('chooseVehicleType', evt?.target?.value);
    dispatch(updateChooseAccessoryVehicleType(evt?.target?.value));
  };

  const onSaveVehicleAccessoriesHandler = () => {
    let payload = {
      vehicleAccessory: add?.value,
      vehicleType: add?.chooseVehicleType
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleAccessory(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Accessory');
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
        setMessage('Vehicle Accessory Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleAccessory());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleAccessory());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleAccessory());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Company  Deleted');
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
    dispatch(requestToGetAllVehicleAccessory());
  }, [apiStatus?.isSaved]);
  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleAccessory(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'vehicleAccessory',
        headerName: 'Vehicle Accessory',
        width: 150,
        editable: false
      },
      {
        field: 'vehicleType',
        headerName: 'Vehicle Type',
        width: 150,
        editable: false,
        renderCell: (data) => {
          const { vehicleType } = data?.row;
          const idtoVehicleType = listVehicleType.filter((item) => {
            if (item?._id === vehicleType) {
              return item;
            }
          });
          return idtoVehicleType[0]?.vehicleType;
        }
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
            <GenericDropdown
              onChange={onVehicleTypeChange}
              label={'Vehicle Type Name'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              onFocus={formik.handleChange}
              value={formik?.values.chooseVehicleType}
              error={
                Boolean(formik?.errors?.chooseVehicleType) && formik?.touched?.chooseVehicleType
              }
              data={listVehicleType.map((item) => ({
                label: item.vehicleType,
                value: item._id
              }))}
            />
            <FormHelperText error>
              {formik?.errors?.chooseVehicleType &&
                formik?.touched?.chooseVehicleType &&
                formik?.errors?.chooseVehicleType}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onVehicleAccessoriesChange}
              label={'Enter Vehicle Accessory Name'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values.value}
              onFocus={formik.handleChange}
              error={Boolean(formik?.errors?.value) && formik?.touched?.value}
            />
            <FormHelperText error>
              {formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveVehicleAccessoriesHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleAccessory
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
export default VehicleAccessory;
