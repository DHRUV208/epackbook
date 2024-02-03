import { Grid, FormHelperText } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useDispatch, useSelector } from 'react-redux';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  updateVehicleSize,
  updateSizeChooseVehicleType,
  requestToGetAllVehicleSize,
  requestToSaveVehicleSize,
  resetVehicleSize,
  requestDeleteVehicleSize,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import {
  vehicleSizeInitialValues,
  addvehicleSizeValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';

const VehicleSize = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {
    vehicleManagement: {
      vehicleSize: { add, listVehicleSize, apiStatus },
      vehicleType: { listVehicleType }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: vehicleSizeInitialValues,
    validationSchema: addvehicleSizeValidationSchema
  });

  const onVehicleSizeChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleSize(evt?.target?.value));
  };

  const onSaveVehicleSizeHandler = () => {
    let payload = {
      vehicleSize: add?.value,
      vehicleType: add?.chooseVehicleType
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleSize(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Size');
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
        setMessage('Vehicle Size Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleSize());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleSize());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);
  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleSize());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Size  Deleted');
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
    dispatch(requestToGetAllVehicleSize());
  }, [apiStatus?.isSaved]);

  const onVehicleTypeChange = (evt) => {
    formik.setFieldValue('chooseVehicleType', evt?.target?.value);
    dispatch(updateSizeChooseVehicleType(evt?.target?.value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleSize(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'vehicleSize',
        headerName: 'Vehicle Size',
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
              onChange={onVehicleSizeChange}
              label={'Enter Vehicle Size'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              onFocus={formik.handleChange}
              value={formik?.values.value}
              error={Boolean(formik?.errors?.value) && formik?.touched?.value}
            />
            <FormHelperText error>
              {formik?.errors?.value && formik?.touched?.value && formik.errors.value}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveVehicleSizeHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleSize
                ?.filter((item) => !item.isDeleted)
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
export default VehicleSize;
