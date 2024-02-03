import { Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import {
  updateVehicleInsuranceCompany,
  requestToGetAllVehicleInsuranceCompany,
  requestToSaveVehicleInsuranceCompany,
  resetVehicleInsuranceCompany,
  requestDeleteVehicleInsuranceCompany,
  resetVehicleDeleteStatus
} from '../../../../store/slices/VehicleManagementSlice';
import Toasty from '../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  vehicleInsuranceCompanyInitialValues,
  addvehicleCompanyInsuranceValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';
import GenericAction from '../../../../common-components/form-elements/genericAction';

const VehicleInsurcanceCompany = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const {
    vehicleManagement: {
      vehicleInsuranceCompany: { add, listVehicleInsuranceCompany, apiStatus }
    }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: vehicleInsuranceCompanyInitialValues,
    validationSchema: addvehicleCompanyInsuranceValidationSchema
  });

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleInsuranceCompany(data?._id));
  };
  const onVehicleInsuranceCompanyChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateVehicleInsuranceCompany(evt.target.value));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },

      {
        field: 'vehicleInsuranceCompanyName',
        headerName: 'Vehicle Insurance Company Name',
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

  const onSaveVehicleInsuranceCompanyHandler = () => {
    let payload = {
      vehicleInsuranceCompanyName: add?.value,
      vehicleType: add?.vehicleType
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleInsuranceCompany(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Insurance Company');
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
        setMessage('Vehicle Insurance Company Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleInsuranceCompany());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetVehicleInsuranceCompany());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleInsuranceCompany());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle Insurance Company  Deleted');
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
    dispatch(requestToGetAllVehicleInsuranceCompany());
  }, [apiStatus?.isSaved]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onVehicleInsuranceCompanyChange}
              label={'Enter Vehicle Insurance Company Name'}
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
            <GenericLoadingButton onClick={onSaveVehicleInsuranceCompanyHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listVehicleInsuranceCompany
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
export default VehicleInsurcanceCompany;
