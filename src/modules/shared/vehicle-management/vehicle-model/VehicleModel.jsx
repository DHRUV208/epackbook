import { Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  requestToGetAllVehicleModel,
  requestToSaveVehicleModel,
  updateModelVehicleCompany,
  updateVehicleModel,
  updateChooseModelVehicleType,
  resetVehicleModel,
  requestDeleteVehicleModel,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import {
  vehicleModelInitialValues,
  addvehicleModelValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';

const VehicleModel = () => {
  const dispatch = useDispatch();
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: vehicleModelInitialValues,
    validationSchema: addvehicleModelValidationSchema
  });
  const {
    vehicleManagement: {
      vehicleModel: { add, listVehicleModel, apiStatus },
      vehicleType: { listVehicleType },
      vehicleCompany: { listVehicleCompany }
    }
  } = useSelector((state) => state);

  const onVehicleModelChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleModel(evt?.target?.value));
  };

  const onVehicleTypeChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseVehicleType', evt?.target?.value);
    setSelectedVehicleType(value);
    dispatch(updateChooseModelVehicleType(evt?.target?.value));
  };

  const onVehicleModelCompanyChange = (evt) => {
    formik.setFieldValue('chooseVehicleCompanyName', evt?.target?.value);
    dispatch(updateModelVehicleCompany(evt?.target?.value));
  };

  const filteredCompanies = listVehicleCompany.filter((item) => {
    return item?.vehicletypesid === selectedVehicleType;
  });

  const onSaveVehicleModelHandler = () => {
    let payload = {
      vehicleModel: add?.value,
      vehicleType: add?.chooseVehicleType,
      vehicleCompanyName: add?.chooseVehicleCompanyName
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleModel(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Model');
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
        setMessage('Vehicle Model Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleModel());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleModel());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleModel());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Model  Deleted');
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
    dispatch(requestToGetAllVehicleModel());
  }, [apiStatus?.isSaved]);
  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleModel(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },

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
        field: 'vehicleCompanyName',
        headerName: 'Vehicle Company',
        width: 150,
        editable: false,
        renderCell: (data) => {
          const { vehicleCompanyName } = data?.row;
          const idtoVehicleCompany = listVehicleCompany.filter((item) => {
            if (item?._id === vehicleCompanyName) {
              return item;
            }
          });
          return idtoVehicleCompany[0]?.vehicleCompanyName;
        }
      },
      {
        field: 'vehicleModel',
        headerName: 'Vehicle Model',
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
            <GenericDropdown
              onChange={onVehicleTypeChange}
              label={'Vehicle Type Name'}
              onKeyUp={formik?.handleChange}
              onFocus={formik.handleChange}
              value={formik?.values.chooseVehicleType}
              data={listVehicleType?.map((item) => ({
                label: item?.vehicleType,
                value: item?._id
              }))}
              onBlur={formik?.handleBlur}
              error={
                Boolean(formik?.errors?.chooseVehicleType) && formik?.touched?.chooseVehicleType
              }
            />
            <FormHelperText error>
              {formik?.errors?.chooseVehicleType &&
                formik?.touched?.chooseVehicleType &&
                formik?.errors?.chooseVehicleType}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericDropdown
              label={'Vehicle Company Name'}
              data={filteredCompanies.map((item) => ({
                label: item?.vehicleCompanyName,
                value: item?._id
              }))}
              onChange={onVehicleModelCompanyChange}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              onFocus={formik.handleChange}
              value={formik?.values.chooseVehicleCompanyName}
              error={
                Boolean(formik?.errors?.chooseVehicleCompanyName) &&
                formik?.touched?.chooseVehicleCompanyName
              }
            />
            <FormHelperText error>
              {formik?.errors?.chooseVehicleCompanyName &&
                formik?.touched?.chooseVehicleCompanyName &&
                formik?.errors?.chooseVehicleCompanyName}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput
              label={'Enter Vehicle Model'}
              onChange={onVehicleModelChange}
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
          <Grid item xs={12} md={12}>
            <GenericLoadingButton
              onClick={onSaveVehicleModelHandler}
              sx={{ float: 'right' }}
              type="submit"
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleModel
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
export default VehicleModel;
