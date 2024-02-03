import { Fragment, useCallback, useEffect, useState } from 'react';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { Grid, Paper, Typography } from '@mui/material';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  addFranchiseInitialValues,
  addFranchiseValidationSchema
} from '../../../../../common-components/validator/franchise-validation/index';
import {
  resetApiStatus,
  reset,
  requestToSaveFranchise,
  updateFranchiseName,
  updateOwnerName,
  updateRegisteredmobile,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateFranchiseAddress,
  updateLandmark,
  updateEmail
} from '../../../../../store/slices/FranchiseSlice';
import { requestToGetPickLocation, utilsReset } from '../../../../../store/slices/UtilsSlice';
import Toasty from '../../../../../common-components/form-elements/toasty';

const AddFranchise = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: addFranchiseInitialValues,
    validationSchema: addFranchiseValidationSchema
  });

  const {
    franchise: { addFranchise },
    franchise: { isSaved, isFailedToSave },
    utils: { pickup, drop },
    company: { companyDetails },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const onFranchiseNameChange = (evt) => {
    formik.setFieldValue('addFranchise.franchiseName', evt?.target?.value);
    dispatch(updateFranchiseName(evt.target.value));
  };
  const onOwnerNameChange = (evt) => {
    formik.setFieldValue('addFranchise.ownerName', evt?.target?.value);
    dispatch(updateOwnerName(evt.target.value));
  };
  const onRegisteredmobileChange = (evt) => {
    formik.setFieldValue('addFranchise.registeredmobile', evt?.target?.value);
    dispatch(updateRegisteredmobile(evt.target.value));
  };
  const onPincodeChange = (evt) => {
    formik.setFieldValue('addFranchise.pincode', evt?.target?.value);
    dispatch(updatePincode(evt.target.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
  };
  const onStateChange = (evt) => {
    formik.setFieldValue('addFranchise.state', evt?.target?.value);
    dispatch(updateState(evt.target.value));
  };
  const onCityChange = (evt) => {
    formik.setFieldValue('addFranchise.city', evt?.target?.value);
    dispatch(updateCity(evt.target.value));
  };
  const onLocalityChange = (evt) => {
    formik.setFieldValue('addFranchise.locality', evt?.target?.value);
    dispatch(updateLocality(evt.target.value));
  };
  const onFranchiseAddressChange = (evt) => {
    formik.setFieldValue('addFranchise.franchiseAddress', evt?.target?.value);
    dispatch(updateFranchiseAddress(evt.target.value));
  };
  const onLandmarkChange = (evt) => {
    formik.setFieldValue('addFranchise.landmark', evt?.target?.value);
    dispatch(updateLandmark(evt.target.value));
  };
  const onEmailChange = (evt) => {
    formik.setFieldValue('addFranchise.email', evt?.target?.value);
    dispatch(updateEmail(evt.target.value));
  };

  const onSaveFranchiseHandler = () => {
    let payload = {
      companyId: companyDetails._id,
      franchiseName: addFranchise?.franchiseName,
      franchiseOwnerName: addFranchise?.ownerName,
      registeredMobile: addFranchise?.registeredmobile,
      pincode: addFranchise?.pincode,
      state: addFranchise?.state,
      city: addFranchise?.city,
      locality: addFranchise?.locality,
      landmark: addFranchise?.landmark,
      email: addFranchise?.email,
      address: addFranchise?.franchiseAddress,
      createdBy: loginSuccess.id
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveFranchise(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Please fill form Correctly');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 4000);
    }
  };
  
  useEffect(() => {
    dispatch(reset());
  }, []);

  useEffect(() => {
    if (isSaved) {
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Congragulations Franchise added');
      formik.handleReset();
      setTimeout(() => {
        dispatch(reset());
        dispatch(utilsReset());
        setIsMessageDisplay(false);
      }, 3000);
    } else if (isFailedToSave) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Check Your Franchise Name Or Invalid Token');
      setTimeout(() => {
        setIsMessageDisplay(false);
        dispatch(resetApiStatus());
      }, 3000);
    }
  }, [isSaved, isFailedToSave]);

  // addFranchise
  return (
    <Fragment>
      <SubHeader title={'Add Franchise'} />
      <form onSubmit={formik.handleSubmit}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
            Enter Your Franchise Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <GenericInput
                error={
                  formik?.errors?.addFranchise?.franchiseName &&
                  formik?.touched?.addFranchise?.franchiseName
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addFranchise?.franchiseName &&
                  formik?.touched?.addFranchise?.franchiseName &&
                  formik?.errors?.addFranchise?.franchiseName
                }
                onChange={onFranchiseNameChange}
                label={'Franchise Name'}
                value={formik.values.addFranchise.franchiseName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                error={
                  formik?.errors?.addFranchise?.ownerName &&
                  formik?.touched?.addFranchise?.ownerName
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addFranchise?.ownerName &&
                  formik?.touched?.addFranchise?.ownerName &&
                  formik?.errors?.addFranchise?.ownerName
                }
                onChange={onOwnerNameChange}
                label={'Franchise Owner Name'}
                value={formik.values.addFranchise.ownerName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                error={
                  formik?.errors?.addFranchise?.registeredmobile &&
                  formik?.touched?.addFranchise?.registeredmobile
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addFranchise?.registeredmobile &&
                  formik?.touched?.addFranchise?.registeredmobile &&
                  formik?.errors?.addFranchise?.registeredmobile
                }
                onChange={onRegisteredmobileChange}
                label={'Franchise Registered Mobile *'}
                value={formik.values.addFranchise.registeredmobile}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                error={
                  formik?.errors?.addFranchise?.pincode && formik?.touched?.addFranchise?.pincode
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addFranchise?.pincode &&
                  formik?.touched?.addFranchise?.pincode &&
                  formik?.errors?.addFranchise?.pincode
                }
                onChange={onPincodeChange}
                label={'Pincode'}
                value={formik?.values?.addFranchise?.pincode}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onStateChange}
                value={formik?.values?.addFranchise?.state}
                label={'State'}
                data={pickup?.state}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onCityChange}
                value={formik?.values?.addFranchise?.city}
                label={'City'}
                data={pickup?.city}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onLocalityChange}
                label={'Locality'}
                value={formik?.values?.addFranchise?.locality}
                data={pickup?.locality}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onFranchiseAddressChange}
                label={'Franchise Address *'}
                multiline
                rows={3}
                error={
                  formik?.errors?.addFranchise?.franchiseAddress &&
                  formik?.touched?.addFranchise?.franchiseAddress
                }
                onBlur={formik?.handleBlur}
                onFocus={formik?.handleChange}
                onKeyUp={formik?.handleChange}
                helperText={
                  formik?.errors?.franchiseAddress &&
                  formik?.touched?.franchiseAddress &&
                  formik?.errors?.franchiseAddress
                }
                value={formik.values.addFranchise.franchiseAddress}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <GenericInput
                    error={
                      formik?.errors?.addFranchise?.landmark &&
                      formik?.touched?.addFranchise?.landmark
                    }
                    onBlur={formik?.handleBlur}
                    onFocus={formik?.handleChange}
                    onKeyUp={formik?.handleChange}
                    helperText={
                      formik?.errors?.addFranchise?.landmark &&
                      formik?.touched?.addFranchise?.landmark &&
                      formik?.errors?.addFranchise?.landmark
                    }
                    onChange={onLandmarkChange}
                    label={'Landmark'}
                    value={formik.values.addFranchise.landmark}
                  />
                </Grid>
                <Grid item xs={12}>
                  <GenericInput
                    error={
                      formik?.errors?.addFranchise?.email && formik?.touched?.addFranchise?.email
                    }
                    onBlur={formik?.handleBlur}
                    onFocus={formik?.handleChange}
                    onKeyUp={formik?.handleChange}
                    helperText={
                      formik?.errors?.addFranchise?.email &&
                      formik?.touched?.addFranchise?.email &&
                      formik?.errors?.addFranchise?.email
                    }
                    onChange={onEmailChange}
                    label={'Email'}
                    value={formik.values.addFranchise.email}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                type="submit"
                sx={{ float: 'right', my: 2 }}
                onClick={onSaveFranchiseHandler}
              >
                <span>save</span>
              </GenericLoadingButton>
            </Grid>
            {isMessageDisplay && (
              <Toasty show={isMessageDisplay} message={message} type={messageType} />
            )}
          </Grid>
        </Paper>
      </form>
    </Fragment>
  );
};
export default AddFranchise;
