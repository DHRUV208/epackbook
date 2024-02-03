import React, { Fragment, useEffect, useState } from 'react';

import { Box, FormHelperText, Grid, Paper, Typography } from '@mui/material';

import {
  APPROVAL_AUTHORTY,
  SHIFTING_TYPES_CONSTANTS
} from '../../../../../common-components/constants';
import { BILLING_BY } from '../../../../../common-components/constants';
import GenericCheckbox from '../../../../../common-components/form-elements/genericCheckbox';
import GenericAutocomplete from '../../../../../common-components/form-elements/genericAutocomplete';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import Toasty from '../../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  updateShiftingType,
  updatePartyName,
  updateMobileNumber,
  updateShiftingLuggage,
  updatePickUpPincode,
  updatePickUpState,
  updatePickUpCity,
  updatePickUpLocality,
  updatePickUpAddress,
  updatePickUpLandmark,
  updatePickUpCurrentFloor,
  updatePickUpLiftStatus,
  updateDeliveryPincode,
  updateDeliveryState,
  updateDeliveryCity,
  updateDeliveryLocality,
  updateDeliveryAddress,
  updateDeliveryLandmark,
  updateDeliveryCurrentFloor,
  updateDeliveryLiftStatus,
  updateBillingBy,
  updateCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateEnquiryManager,
  requestToSaveEnquiry,
  reset,
  resetApiStatus
} from '../../../../../store/slices/EnquirySlice';
import { requestToGetAllApprovalAuthority } from '../../../../../store/slices/ContentManagementSlice';
import {
  enquiryInitialValues,
  addEnquiryValidationSchema
} from '../../../../../common-components/validator/enquiry-validation';
import { utilsReset } from '../../../../../store/slices/UtilsSlice';
import {
  requestToGetDropLocation,
  requestToGetPickLocation
} from '../../../../../store/slices/UtilsSlice';
import { requestToGetAllShiftingLuggage } from '../../../../../store/slices/ShiftingManagementSlice';
import { requestToGetAllFloor } from '../../../../../store/slices/ShiftingManagementSlice';

const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'spaceBetween',
  width: 'calc(100%-100)',
  border: '1px solid #C4C4C4',
  borderRadius: '4px',
  padding: '0 14px'
};

const AddEnquiry = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const[defaultCheck,setDefaultCheck] = useState("Household")
  const {
    enquiry: { addEnquiry, isSaved, isFailedToSave, apiMessage },
    company: { companyDetails },
    auth: { loginSuccess },
    utils: { pickup, drop },
    branch: { },
    contentManagement: {
      approvalAuthority: { listApprovalAuthority }
    },
    shiftingManagement: {
      floor: { listFloor },
      shiftingLuggage: { listShiftingLuggage }
    }
  } = useSelector((state) => state);

  // const listApproval

  const available = listApprovalAuthority?.filter((item) => {
    if (addEnquiry?.billingDetails?.approvalAuthority === item._id) {
      return item.approvalAuthority

    }
  })
  const approvalAuthorities = available?.map(object => object.approvalAuthority);





  const formik = useFormik({
    initialValues: enquiryInitialValues,
    validationSchema: addEnquiryValidationSchema
  });

  const onShiftingTypeChange = (evt) => {
    formik.setFieldValue('addEnquiry.shiftingType', evt?.target?.value);
    dispatch(updateShiftingType(evt?.target?.value));
  };
  const onPartyNameChange = (evt) => {
    formik.setFieldValue('addEnquiry.partyName', evt?.target?.value);
    dispatch(updatePartyName(evt?.target?.value));
  };
  const onBillingByChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingBy', evt?.target?.value);
    dispatch(updateBillingBy(evt?.target?.value));
  };
  const onEnquiryManagerChange = (evt) => {
    formik.setFieldValue('addEnquiry.enquiryManager', 'Admin');
    dispatch(updateEnquiryManager('Admin'));
  };
  const onMobileNumberChange = (evt) => {
    formik.setFieldValue('addEnquiry.mobileNumber', evt?.target?.value);
    dispatch(updateMobileNumber(evt?.target?.value));
  };
  const onShiftingLuggageChange = (evt) => {
    const { value, checked } = evt.target;
    const { shiftingLuggage } = addEnquiry;
    let luggage = [...shiftingLuggage];
    if (checked) {
      luggage.push(value);
    } else {
      luggage = luggage.filter((item) => item !== value);
    }
    formik.setFieldValue('addEnquiry.shiftingLuggage', luggage);
    dispatch(updateShiftingLuggage(luggage));
    setDefaultCheck(defaultCheck)
  };
  const onPickUpPincodeChange = (evt) => {
    formik.setFieldValue('addEnquiry.pickUpAddress.pinCode', evt?.target?.value);

    dispatch(updatePickUpPincode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
  };
  const onPickUpStateChange = (evt) => {
    dispatch(updatePickUpState(evt?.target?.value));
  };
  const onPickUpCityChange = (evt) => {
    dispatch(updatePickUpCity(evt?.target?.value));
  };
  const onPickUpLocalityChange = (evt) => {
    dispatch(updatePickUpLocality(evt?.target?.value));
  };
  const onPickUpAddressChange = (evt) => {
    formik.setFieldValue('addEnquiry.pickUpAddress.address', evt?.target?.value);
    dispatch(updatePickUpAddress(evt?.target?.value));
  };
  const onPickUpLandmarkChange = (evt) => {
    formik.setFieldValue('addEnquiry.pickUpAddress.landmark', evt?.target?.value);
    dispatch(updatePickUpLandmark(evt?.target?.value));
  };
  const onPickUpCurrentFloorChange = (evt) => {
    formik.setFieldValue('addEnquiry.pickUpAddress.currentFloor', evt?.target?.value);
    dispatch(updatePickUpCurrentFloor(evt?.target?.value));
  };
  const onPickUpLiftStatusChange = (evt) => {
    formik.setFieldValue('addEnquiry.pickUpAddress.liftStatus', evt?.target?.value);
    dispatch(updatePickUpLiftStatus(evt?.target?.value));
  };
  const onDeliveryPincodeChange = (evt) => {
    formik.setFieldValue('addEnquiry.deliveryAddress.pinCode', evt?.target?.value);
    dispatch(updateDeliveryPincode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetDropLocation(evt?.target?.value));
    }
  };
  const onDeliveryStateChange = (evt) => {
    dispatch(updateDeliveryState(evt?.target?.value));
  };
  const onDeliveryCityChange = (evt) => {
    dispatch(updateDeliveryCity(evt?.target?.value));
  };
  const onDeliveryLocalityChange = (evt) => {
    dispatch(updateDeliveryLocality(evt?.target?.value));
  };
  const onDeliveryAddressChange = (evt) => {
    formik.setFieldValue('addEnquiry.deliveryAddress.address', evt?.target?.value);
    dispatch(updateDeliveryAddress(evt?.target?.value));
  };
  const onDeliveryLandmarkChange = (evt) => {
    formik.setFieldValue('addEnquiry.deliveryAddress.landmark', evt?.target?.value);
    dispatch(updateDeliveryLandmark(evt?.target?.value));
  };
  const onDeliveryCurrentFloorChange = (evt) => {
    // formik.setFieldValue('addEnquiry.deliveryAddress.currentFloor', evt?.target?.value);
    dispatch(updateDeliveryCurrentFloor(evt?.target?.value));
  };
  const onDeliveryLiftStatusChange = (evt) => {
    formik.setFieldValue('addEnquiry.deliveryAddress.liftStatus', evt?.target?.value);
    dispatch(updateDeliveryLiftStatus(evt?.target?.value));
  };

  const onCompanyNameChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.companyName', evt?.target?.value);
    dispatch(updateCompanyName(evt?.target?.value));
  };
  const onApprovalAuthorityChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.approvalAuthority', evt?.target?.value);
    dispatch(updateApprovalAuthority(evt?.target?.value));
  };
  const onAuthorityPersonNameChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.authorityPersonName', evt?.target?.value);
    dispatch(updateAuthorityPersonName(evt?.target?.value));
  };
  const onEmployeeNameChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.employeeName', evt?.target?.value);
    dispatch(updateEmployeeName(evt?.target?.value));
  };
  const onAuthorityMobileNumberChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.authorityMobileNumber', evt?.target?.value);
    dispatch(updateAuthorityMobileNumber(evt?.target?.value));
  };
  const onCompanyAddressChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.companyAddress', evt?.target?.value);
    dispatch(updateCompanyAddress(evt?.target?.value));
  };
  const onCompanyGSTChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.companyGST', evt?.target?.value);
    dispatch(updateCompanyGST(evt?.target?.value));
  };

  const onEmployeeDesignationChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.employeeDesignation', evt?.target?.value);
    dispatch(updateEmployeeDesignation(evt?.target?.value));
  };
  const onEmployeeMobileChange = (evt) => {
    formik.setFieldValue('addEnquiry.billingDetails.employeeMobile', evt?.target?.value);
    dispatch(updateEmployeeMobile(evt?.target?.value));
  };

  const onSaveEnquiryHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      authId: loginSuccess?.id,
      enquiryManager: 'Admin',
      shiftingType: addEnquiry?.shiftingType,
      partyCompanyName: '',
      partyName: addEnquiry?.partyName,
      email: addEnquiry?.email,
      mobile: addEnquiry?.mobileNumber,
      phone: '',
      shiftingLuggage: addEnquiry?.shiftingLuggage,
      enquirySource: 'Website',
      alternateNumbers: '',
      shiftingDate: '',
      pickupAddress: {
        shiftingFrom: '',
        state: addEnquiry?.pickUpAddress?.state,
        city: addEnquiry?.pickUpAddress?.city,
        address: addEnquiry?.pickUpAddress?.address,
        pincode: addEnquiry?.pickUpAddress?.pinCode,
        locality: addEnquiry?.pickUpAddress?.locality,
        landmark: addEnquiry?.pickUpAddress?.landmark,
        floor: addEnquiry?.pickUpAddress?.currentFloor,
        isLiftAvailable: addEnquiry?.pickUpAddress?.liftStatus
      },
      dropAddress: {
        shiftingTo: 'afasfsas',
        state: addEnquiry?.deliveryAddress?.state,
        city: addEnquiry?.deliveryAddress?.city,
        address: addEnquiry?.deliveryAddress?.address,
        pincode: addEnquiry?.deliveryAddress?.pinCode,
        locality: addEnquiry?.deliveryAddress?.locality,

        landmark: addEnquiry?.deliveryAddress?.landmark,
        locality: addEnquiry?.deliveryAddress?.locality,
        floor: addEnquiry?.deliveryAddress?.currentFloor,
        isLiftAvailable: addEnquiry?.deliveryAddress?.liftStatus
      },
      billingBy: addEnquiry?.billingBy,
      billingDetails: {
        companyName: addEnquiry?.billingDetails?.companyName,
        approvalAuthority: approvalAuthorities[0],
        authorityPersonName: addEnquiry?.billingDetails?.authorityPersonName,
        authorityPersonMobile: addEnquiry?.billingDetails?.authorityMobileNumber,
        companyAddress: addEnquiry?.billingDetails?.companyAddress,
        companyGST: addEnquiry?.billingDetails?.companyGST,
        employeeName: addEnquiry?.billingDetails?.employeeName,
        employeeDesignation: addEnquiry?.billingDetails?.employeeDesignation,
        employeeMobile: addEnquiry?.billingDetails?.employeeMobile,
      },
      orderAmount: '',
      tokenAmount: '',
      status: 'NEW'
    };

    if (formik.isValid && formik.dirty) {
      console.log(formik.isValid)
      dispatch(requestToSaveEnquiry(payload));
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
    setFirstRenderDone(true);
    dispatch(reset());
    dispatch(utilsReset());
    dispatch(requestToGetAllFloor());
    dispatch(requestToGetAllApprovalAuthority());
    dispatch(requestToGetAllShiftingLuggage());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Congragulations enquiry added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(reset());
          dispatch(utilsReset());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isFailedToSave]);

  
 
    return (
    <Fragment>
      <SubHeader title={'Add Enquiry'} />
      <Paper sx={{ padding: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onShiftingTypeChange}
                error={
                  formik?.errors?.addEnquiry?.shiftingType &&
                  formik?.touched?.addEnquiry?.shiftingType
                }
                value={formik?.values?.addEnquiry?.shiftingType}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                label={'Shifting Type'}
                data={SHIFTING_TYPES_CONSTANTS}
              />
              <FormHelperText error>
                {formik?.errors?.addEnquiry?.shiftingType &&
                  formik?.touched?.addEnquiry?.shiftingType &&
                  formik?.errors?.addEnquiry?.shiftingType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                label={'Billing By'}
                data={BILLING_BY}
                selected={'by Individual'}
                onChange={onBillingByChange}
                value={formik?.values?.addEnquiry?.billingBy}
                error={
                  formik?.errors?.addEnquiry?.billingBy && formik?.touched?.addEnquiry?.billingBy
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addEnquiry?.billingBy &&
                  formik?.touched?.addEnquiry?.billingBy &&
                  formik?.errors?.addEnquiry?.billingBy}
              </FormHelperText>
            </Grid>

            {addEnquiry?.billingBy === 'by Company' && (
              <Grid item xs={12} md={6}>
                <GenericInput
                  onChange={onEnquiryManagerChange}
                  onBlur={formik.handleBlur}
                  onFocus={formik.handleChange}
                  onKeyUp={formik.handleChange}
                  defaultValue={'Admin'}
                  label={'Enquiry Manager'}
                  selected={'HR Manager'}
                  data={APPROVAL_AUTHORTY}
                />
              </Grid>
            )}
            {addEnquiry?.billingBy === 'by Individual' && (
              <Fragment>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onPartyNameChange}
                    error={
                      formik?.errors?.addEnquiry?.partyName &&
                      formik?.touched?.addEnquiry?.partyName
                    }
                    value={formik?.values?.addEnquiry?.partyName}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.partyName &&
                      formik?.touched?.addEnquiry?.partyName &&
                      formik?.errors?.addEnquiry?.partyName
                    }
                    label={'Party Name *'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onMobileNumberChange}
                    label={'Mobile *'}
                    type={'text'}
                    error={
                      formik?.errors?.addEnquiry?.mobileNumber &&
                      formik?.touched?.addEnquiry?.mobileNumber
                    }
                    value={formik?.values?.addEnquiry?.mobileNumber}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.mobileNumber &&
                      formik?.touched?.addEnquiry?.mobileNumber &&
                      formik?.errors?.addEnquiry?.mobileNumber
                    }
                  />
                </Grid>
              </Fragment>
            )}

            <Grid item xs={12}>
              <Box
                sx={{
                  ...style,
                  color:
                    formik?.errors?.addEnquiry?.shiftingLuggage &&
                    formik?.touched?.addEnquiry?.shiftingLuggage &&
                    '#d32f2f'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666666',
                    marginRight: '20px',
                    marginTop: '10px'
                  }}
                >
                  Shifting Luggage *
                </Typography>
                <GenericCheckbox
                  // checked={listShiftingLuggage}
                  onChange={onShiftingLuggageChange}
                  list={listShiftingLuggage?.map((item) => ({
                    label: item?.shiftingLuggage,
                    value: item?._id,
                    checked: item?.shiftingLuggage === 'Household' ? true : false
                  }))}
                  value={formik?.values?.addEnquiry?.shiftingLuggage}
                  style={{ display: 'block' }}
                  error={
                    formik?.errors?.addEnquiry?.shiftingLuggage &&
                    formik?.touched?.addEnquiry?.shiftingLuggage
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                />
              </Box>
              <FormHelperText error>
                {formik?.errors?.addEnquiry?.shiftingLuggage &&
                  formik?.touched?.addEnquiry?.shiftingLuggage &&
                  formik?.errors?.addEnquiry?.shiftingLuggage}
              </FormHelperText>
            </Grid>
            {addEnquiry?.billingBy === 'by Company' && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
                    Billing Details
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onCompanyNameChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.billingDetails?.companyName}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.companyName &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyName
                    }
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.companyName &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyName &&
                      formik?.errors?.addEnquiry?.billingDetails?.companyName
                    }
                    label={'Company Name *'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onChange={onApprovalAuthorityChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.billingDetails?.approvalAuthority}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.touched?.addEnquiry?.billingDetails?.approvalAuthority
                    }
                    label={'Approval Authority'}
                    data={listApprovalAuthority?.map((item) => ({
                      label: item?.approvalAuthority,
                      value: item?._id
                    }))}
                  />
                  <FormHelperText error>
                    {formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.touched?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onAuthorityPersonNameChange}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityPersonName
                    }
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.billingDetails?.authorityPersonName}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName
                    }
                    label={'Authority Person Name'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onAuthorityMobileNumberChange}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityMobileNumber
                    }
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.billingDetails?.authorityMobileNumber}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber
                    }
                    label={'Authority Mobile Number'}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onCompanyAddressChange}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyAddress
                    }
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.billingDetails?.companyAddress}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress
                    }
                    label={'Company Address'}
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onCompanyGSTChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addEnquiry?.billingDetails?.companyGST}
                        label={'Company GST'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeNameChange}
                        error={
                          formik?.errors?.addEnquiry?.billingDetails?.employeeName &&
                          formik?.touched?.addEnquiry?.billingDetails?.employeeName
                        }
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addEnquiry?.billingDetails?.employeeName}
                        helperText={
                          formik?.errors?.addEnquiry?.billingDetails?.employeeName &&
                          formik?.touched?.addEnquiry?.billingDetails?.employeeName &&
                          formik?.errors?.addEnquiry?.billingDetails?.employeeName
                        }
                        label={'Employee Name *'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeDesignationChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addEnquiry?.billingDetails?.employeeDesignation}
                        label={'Employee Designation'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeMobileChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addEnquiry?.billingDetails?.employeeMobile}
                        label={'Employee Mobile Number'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>
            )}

            <Grid item xs={12}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  Pick-up Address
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onPickUpPincodeChange}
                error={
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.pickUpAddress?.pinCode
                }
                value={formik?.values?.addEnquiry?.pickUpAddress?.pinCode}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode
                }
                label={'Pincode *'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onPickUpStateChange}
                data={pickup?.state}
                label={'State'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown onChange={onPickUpCityChange} data={pickup?.city} label={'City'} />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onPickUpLocalityChange}
                data={pickup?.locality}
                label={'Locality'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onPickUpAddressChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addEnquiry?.pickUpAddress?.address}
                label={'Address'}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <GenericInput
                    onChange={onPickUpLandmarkChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.pickUpAddress?.landmark}
                    label={'Landmark'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onPickUpCurrentFloorChange}
                    data={listFloor.map((item) => ({
                      label: item?.floor,
                      value: item?._id
                    }))}
                    label={'Current Floor'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onPickUpLiftStatusChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.pickUpAddress?.liftStatus}
                    data={[
                      { label: 'YES', value: 'YES' },
                      { label: 'NO', value: 'NO' }
                    ]}
                    label={'Lift Status'}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
                Delivery Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                error={
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.deliveryAddress?.pinCode
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addEnquiry?.deliveryAddress?.pinCode}
                helperText={
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode
                }
                onChange={onDeliveryPincodeChange}
                label={'Pincode *'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onDeliveryStateChange}
                data={drop?.state}
                label={'State'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown onChange={onDeliveryCityChange} data={drop?.city} label={'City'} />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onDeliveryLocalityChange}
                data={drop?.locality}
                label={'Locality'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onDeliveryAddressChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addEnquiry?.deliveryAddress?.address}
                label={'Address'}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <GenericInput
                    onChange={onDeliveryLandmarkChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.deliveryAddress?.landmark}
                    label={'Landmark'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onDeliveryCurrentFloorChange}
                    data={listFloor.map((item) => ({
                      label: item?.floor,
                      value: item?._id
                    }))}
                    label={'Current Floor'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onDeliveryLiftStatusChange}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addEnquiry?.deliveryAddress?.liftStatus}
                    data={[
                      { label: 'YES', value: 'YES' },
                      { label: 'NO', value: 'NO' }
                    ]}
                    label={'Lift Status'}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <GenericLoadingButton
                // disabled={!formik.isValid}
                onClick={onSaveEnquiryHandler}
                size="medium"
                sx={{ my: 3, float: 'right' }}
                type="submit"
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            {/* <Grid item xs={12}>
              <GenericLoadingButton
                
                onClick={onSaveEnquiryHandler2}
                size="medium"
                sx={{ my: 3, float: 'right' }}
              
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid> */}
          </Grid>
        </form>
      </Paper>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default AddEnquiry;
