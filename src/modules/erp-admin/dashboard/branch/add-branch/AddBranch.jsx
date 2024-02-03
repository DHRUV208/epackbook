import { Fragment, useState, useEffect, useCallback } from 'react';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { FormHelperText, Grid, Paper } from '@mui/material';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  requestToSaveBranch,
  reset,
  updateAddress,
  updateBranchName,
  updateBranchRegMobileNumber,
  updateCity,
  updateEmail,
  updateLandmark,
  updateLocality,
  updatePincode,
  updateState,
  resetApiStatus
} from '../../../../../store/slices/BranchSlice';
import {
  addBranchInitialValues,
  addBranchValidationSchema
} from '../../../../../common-components/validator/branch-validation';
import { requestToGetPickLocation, utilsReset } from '../../../../../store/slices/UtilsSlice';
import Toasty from '../../../../../common-components/form-elements/toasty';

const AddBranch = () => {
  const {
    branch: {
      addBranch: { details }
    },
    branch: { isSaved, isFailedToSave },
    company: { companyDetails },
    auth: { loginSuccess },
    utils: { pickup }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: addBranchInitialValues,
    validationSchema: addBranchValidationSchema
  });

  // const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const dispatch = useDispatch();
  const onBranchNameChange = (evt) => {
    formik.setFieldValue('branchName', evt?.target?.value);
    dispatch(updateBranchName(evt?.target?.value));
  };
  const onBranchRegMobileNumberChange = (evt) => {
    formik.setFieldValue('branchRegMobileNumber', evt?.target?.value);
    dispatch(updateBranchRegMobileNumber(evt?.target?.value));
  };
  const onPincodeChange = (evt) => {
    formik.setFieldValue('pinCode', evt?.target?.value);
    dispatch(updatePincode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
  };
  const onStateChange = (evt) => {
    formik.setFieldValue('state', evt?.target?.value);
    dispatch(updateState(evt?.target?.value));
  };
  const onCityChange = (evt) => {
    formik.setFieldValue('city', evt?.target?.value);
    dispatch(updateCity(evt?.target?.value));
  };
  const onLocalityChange = (evt) => {
    formik.setFieldValue('locality', evt?.target?.value);
    dispatch(updateLocality(evt?.target?.value));
  };
  const onAddressChange = (evt) => {
    formik.setFieldValue('address', evt?.target?.value);
    dispatch(updateAddress(evt?.target?.value));
  };
  const onLandmarkChange = (evt) => {
    formik.setFieldValue('landmark', evt?.target?.value);
    dispatch(updateLandmark(evt?.target?.value));
  };
  const onEmailChange = (evt) => {
    formik.setFieldValue('email', evt?.target?.value);
    dispatch(updateEmail(evt?.target?.value));
  };

  const onSaveBranchHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      branchName: details?.branchName,
      registeredMobile: details?.branchRegMobileNumber,
      pincode: details?.pinCode,
      state: details?.state,
      city: details?.city,
      locality: details?.locality,
      landmark: details?.landmark,
      email: details?.email,
      address: details?.address,
      createdBy: loginSuccess?.id
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveBranch(payload));
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
      setMessage('Congragulations Branch added');
      setTimeout(() => {
        formik.handleReset();
        dispatch(reset());
        dispatch(utilsReset());
        setIsMessageDisplay(false);
      }, 3000);
    } else if (isFailedToSave) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Check Your Branch Name Or Invalid Token');
      setTimeout(() => {
        setIsMessageDisplay(false);
        dispatch(resetApiStatus());
      }, 3000);
    }
  }, [isSaved, isFailedToSave]);

  return (
    <Fragment>
      <SubHeader title={'Add Branch'} />
      <Paper sx={{ padding: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <GenericInput
                error={formik.errors.branchName && formik.touched.branchName}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik.values.branchName}
                helperText={
                  formik.errors.branchName && formik.touched.branchName && formik.errors.branchName
                }
                onChange={onBranchNameChange}
                label={'Branch Name *'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                error={formik.errors.branchRegMobileNumber && formik.touched.branchRegMobileNumber}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik.values.branchRegMobileNumber}
                onChange={onBranchRegMobileNumberChange}
                helperText={
                  formik.errors.branchRegMobileNumber &&
                  formik.touched.branchRegMobileNumber &&
                  formik.errors.branchRegMobileNumber
                }
                label={'Branch Registered Mobile'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                error={formik.errors.pinCode && formik.touched.pinCode}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                onChange={onPincodeChange}
                value={formik.values.pinCode}
                helperText={
                  formik.errors.pinCode && formik.touched.pinCode && formik.errors.pinCode
                }
                label={'Pincode *'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.state}
                error={formik.errors.state && formik.touched.state}
                onChange={onStateChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                label={'State'}
                value={formik?.values?.state}
              />
              <FormHelperText error>
                {formik.errors.state && formik.touched.state && formik.errors.state}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.city}
                onChange={onCityChange}
                label={'City'}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.city}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.locality}
                onChange={onLocalityChange}
                label={'Locality'}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.locality}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onAddressChange}
                error={formik.errors.address && formik.touched.address}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik.values.address}
                helperText={
                  formik.errors.address && formik.touched.address && formik.errors.address
                }
                label={'Address *'}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <GenericInput
                    onChange={onLandmarkChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    value={formik.values.landmark}
                    label={'Landmark'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <GenericInput
                    onChange={onEmailChange}
                    error={formik.errors.email && formik.touched.email}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    value={formik.values.email}
                    helperText={formik.errors.email && formik.touched.email && formik.errors.email}
                    label={'Email *'}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ float: 'right' }}
                type="submit"
                onClick={onSaveBranchHandler}
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            {isMessageDisplay && (
              <Toasty show={isMessageDisplay} message={message} type={messageType} />
            )}
          </Grid>
        </form>
      </Paper>
    </Fragment>
  );
};

export default AddBranch;
