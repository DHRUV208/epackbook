import React, { Fragment, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Box, FormHelperText, Grid, Paper, Typography } from '@mui/material';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericCheckbox from '../../../../../common-components/form-elements/genericCheckbox';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericDateTimePicker from '../../../../../common-components/form-elements/genericDateTimePicker';
import Toasty from '../../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestToSaveOrder,
  updateDeliveryLiftStatus,
  updateDeliveryCurrentFloor,
  updatePickUpCurrentFloor,
  updateDeliveryLandmark,
  updateDeliveryAddress,
  updatePickUpLiftStatus,
  updatePartyName,
  updatePartyMobileNumber,
  updateCompanyName,
  updateQuotationAmount,
  updateOrderAmount,
  updateTokenAmount,
  updateShiftingType,
  updateShiftingLuggage,
  updateShiftingDateAndTime,
  updatePickUpAddress,
  updatePickUpLandmark,
  updatePickUpPincode,
  updatePickUpLocality,
  updatePickUpCity,
  updatePickUpState,
  updateDeliveryLocality,
  updateDeliveryCity,
  updateDeliveryState,
  updateDeliveryPincode,
  updateBillingBy,
  updateBillingCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateOrderDateAndTime,
  resetOrder,
  resetOrderApiStatus,
  updateEnquiryManager
} from '../../../../../store/slices/OrderSlice';
import { requestToGetAllFloor } from '../../../../../store/slices/ShiftingManagementSlice';
import { requestToGetAllApprovalAuthority } from '../../../../../store/slices/ContentManagementSlice';
import {
  requestToGetDropLocation,
  requestToGetPickLocation,
  utilsReset
} from '../../../../../store/slices/UtilsSlice';

import {
  APPROVAL_AUTHORTY,
  BILLING_BY,
  SHIFTING_TYPES_CONSTANTS
} from '../../../../../common-components/constants';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { useFormik } from 'formik';
import {
  addOrderInitialValues,
  addOrderValidationSchema
} from '../../../../../common-components/validator/order-validation';
import GenericAutocomplete from '../../../../../common-components/form-elements/genericAutocomplete';
import shiftingManagement from './../../../../website/features/tabs/shiftingManagement';

const Data = [
  {
    value: 'household',
    label: 'Household'
  },
  {
    value: 'commercial',
    label: 'Commercial'
  },
  {
    value: 'vehicle',
    label: 'Vehicle'
  },
  {
    value: 'industrial',
    label: 'Industrial'
  },
  {
    value: 'pet',
    label: 'Pet'
  },
  {
    value: 'other',
    label: 'Other'
  }
];

const AddOrder = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const dispatch = useDispatch();

  const {
    order: {
      addOrder: { details },
      isSaved,
      isResponseFailed
    },
    utils: { pickup, drop },
    shiftingManagement: {
      floor: { listFloor },
      shiftingLuggage: { listShiftingLuggage }
    },
    contentManagement: {
      approvalAuthority: { listApprovalAuthority }
    },
    company: { companyDetails }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: addOrderInitialValues,
    validationSchema: addOrderValidationSchema
  });
  const onShiftingTypeChange = (evt) => {
    formik.setFieldValue('shiftingType', evt?.target?.value);
    dispatch(updateShiftingType(evt?.target?.value));
  };
  const onPartyNameChange = (evt) => {
    formik.setFieldValue('partyName', evt?.target?.value);
    dispatch(updatePartyName(evt?.target?.value));
  };
  const onPartyMobileNumberChange = (evt) => {
    formik.setFieldValue('partyMobileNumber', evt?.target?.value);
    dispatch(updatePartyMobileNumber(evt?.target?.value));
  };

  const onQuotationAmountChange = (evt) => {
    formik.setFieldValue('quotationAmount', evt?.target?.value);
    dispatch(updateQuotationAmount(evt?.target?.value));
  };
  const onOrderAmountChange = (evt) => {
    formik.setFieldValue('orderAmount', evt?.target?.value);
    dispatch(updateOrderAmount(evt?.target?.value));
  };
  const onTokenAmountChange = (evt) => {
    formik.setFieldValue('tokenAmount', evt?.target?.value);
    dispatch(updateTokenAmount(evt?.target?.value));
  };
  const onShiftingDateAndTimeChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('shiftingDateAndTime', new Date($d).getTime());
    dispatch(updateShiftingDateAndTime(new Date($d).getTime()));
  };

  const onOrderDateAndTimeChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('OrderDateAndTime', dayjs(new Date()));
    dispatch(updateOrderDateAndTime(dayjs(new Date())));
  };

  const onPickUpAddressChange = (evt) => {
    formik.setFieldValue('pickUpAddress.address', evt?.target?.value);
    dispatch(updatePickUpAddress(evt?.target?.value));
  };
  const onPickUpLandmarkChange = (evt) => {
    formik.setFieldValue('pickUpAddress.landmark', evt?.target?.value);
    dispatch(updatePickUpLandmark(evt?.target?.value));
  };
  const onPickUpCurrentFloorChange = (evt) => {
    formik.setFieldValue('pickUpAddress.currentFloor', evt?.target?.value);
    dispatch(updatePickUpCurrentFloor(evt?.target?.value));
  };
  const onPickUpLiftStatusChange = (evt) => {
    formik.setFieldValue('pickUpAddress.liftStatus', evt?.target?.value);
    dispatch(updatePickUpLiftStatus(evt?.target?.value));
  };
  const onDeliveryAddressChange = (evt) => {
    formik.setFieldValue('deliveryAddress.address', evt?.target?.value);
    dispatch(updateDeliveryAddress(evt?.target?.value));
  };
  const onDeliveryLandmarkChange = (evt) => {
    formik.setFieldValue('deliveryAddress.landmark', evt?.target?.value);
    dispatch(updateDeliveryLandmark(evt?.target?.value));
  };
  const onDeliveryCurrentFloorChange = (evt) => {
    formik.setFieldValue('deliveryAddress.currentFloor', evt?.target?.value);
    dispatch(updateDeliveryCurrentFloor(evt?.target?.value));
  };
  const onDeliveryLiftStatusChange = (evt) => {
    dispatch(updateDeliveryLiftStatus(evt?.target?.value));
  };

  const onShiftingLuggageChange = (evt) => {
    const { value, checked } = evt.target;
    // const { shiftingLuggage } = details;
    let luggage = [...details?.shiftingLuggage];

    if (checked) {
      luggage.push(value);
    } else {
      luggage = luggage.filter((item) => item !== value);
    }
    formik.setFieldValue('shiftingLuggage', luggage);
    dispatch(updateShiftingLuggage(luggage));
  };

  const onDeliveryPincodeChange = (evt) => {
    formik.setFieldValue('deliveryAddress.pinCode', evt?.target?.value);
    dispatch(updateDeliveryPincode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetDropLocation(evt?.target?.value));
    }
  };
  const onDeliveryStateChange = (evt) => {
    formik.setFieldValue('deliveryAddress.state', evt?.target?.value);
    dispatch(updateDeliveryState(evt?.target?.value));
  };
  const onDeliveryCityChange = (evt) => {
    formik.setFieldValue('deliveryAddress.city', evt?.target?.value);
    dispatch(updateDeliveryCity(evt?.target?.value));
  };
  const onDeliveryLocalityChange = (evt) => {
    formik.setFieldValue('deliveryAddress.locality', evt?.target?.value);
    dispatch(updateDeliveryLocality(evt?.target?.value));
  };
  const onPickUpPincodeChange = (evt) => {
    formik.setFieldValue('pickUpAddress.pinCode', evt?.target?.value);
    dispatch(updateDeliveryPincode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
  };
  const onPickUpStateChange = (evt) => {
    formik.setFieldValue('pickUpAddress.state', evt?.target?.value);
    dispatch(updatePickUpState(evt?.target?.value));
  };
  const onPickUpCityChange = (evt) => {
    formik.setFieldValue('pickUpAddress.city', evt?.target?.value);
    dispatch(updatePickUpCity(evt?.target?.value));
  };
  const onPickUpLocalityChange = (evt) => {
    formik.setFieldValue('pickUpAddress.locality', evt?.target?.value);
    dispatch(updatePickUpLocality(evt?.target?.value));
  };
  const onBillingByChange = (evt) => {
    formik.setFieldValue('billingBy', evt?.target?.value);
    dispatch(updateBillingBy(evt?.target?.value));
  };

  const onBillingCompanyNameChange = (evt) => {
    formik.setFieldValue('billingDetails.companyName', evt?.target?.value);
    dispatch(updateBillingCompanyName(evt?.target?.value));
  };
  const onApprovalAuthorityChange = (evt) => {
    formik.setFieldValue('billingDetails.approvalAuthority', evt?.target?.value);
    dispatch(updateApprovalAuthority(evt?.target?.value));
  };
  const onAuthorityPersonNameChange = (evt) => {
    formik.setFieldValue('billingDetails.authorityPersonName', evt?.target?.value);
    dispatch(updateAuthorityPersonName(evt?.target?.value));
  };
  const onAuthorityMobileNumberChange = (evt) => {
    formik.setFieldValue('billingDetails.authorityMobileNumber', evt?.target?.value);
    dispatch(updateAuthorityMobileNumber(evt?.target?.value));
  };
  const onCompanyAddressChange = (evt) => {
    formik.setFieldValue('billingDetails.companyAddress', evt?.target?.value);
    dispatch(updateCompanyAddress(evt?.target?.value));
  };
  const onCompanyGSTChange = (evt) => {
    formik.setFieldValue('billingDetails.companyGST', evt?.target?.value);
    dispatch(updateCompanyGST(evt?.target?.value));
  };
  const onEmployeeNameChange = (evt) => {
    formik.setFieldValue('billingDetails.employeeName', evt?.target?.value);
    dispatch(updateEmployeeName(evt?.target?.value));
  };
  const onEmployeeDesignationChange = (evt) => {
    formik.setFieldValue('billingDetails.employeeDesignation', evt?.target?.value);
    dispatch(updateEmployeeDesignation(evt?.target?.value));
  };
  const onEmployeeMobileChange = (evt) => {
    formik.setFieldValue('billingDetails.employeeMobile', evt?.target?.value);
    dispatch(updateEmployeeMobile(evt?.target?.value));
  };

  const onSaveOrderHandler = () => {
    // const formatDate = (date) => {
    //   const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    //   return new Date(date).toLocaleDateString('en-IN', options);
    // };
    let payload = {
      companyId: companyDetails._id,
      authId: companyDetails?.authId,
      enquiryManager: details?.enquiryManager,
      shiftingType: details?.shiftingType,
      partyCompanyName: details?.partyCompanyName,
      partyName: details?.partyName,
      orderAmount: details?.orderAmount,
      tokenAmount: details?.tokenAmount,
      // orderDateAndTime: formatDate(details?.orderDateAndTime),
      shiftingDate: '',
      email: details?.email,
      mobile: details?.partyMobileNumber,
      // phone: '',
      shiftingLuggage: details?.shiftingLuggage,
      enquirySource: '',
      gstNumber: details?.billingDetails?.companyGST,
      alternateNumbers: [''],
      pickupAddress: {
        shiftingFrom: 'lorem',
        state: details?.pickUpAddress?.state,
        city: details?.pickUpAddress?.city,
        address: details?.pickUpAddress?.address,
        pincode: details?.pickUpAddress?.pinCode,
        landmark: details?.pickUpAddress?.landmark,
        locality: details?.pickUpAddress?.locality,
        floor: details?.pickUpAddress?.currentFloor,
        isLiftAvailable: details?.pickUpAddress?.liftStatus
      },
      dropAddress: {
        shiftingTo: 'lorem',
        state: details?.deliveryAddress?.state,
        city: details?.deliveryAddress?.city,
        address: details?.deliveryAddress?.address,
        pincode: details?.deliveryAddress?.pinCode,
        landmark: details?.deliveryAddress?.landmark,
        locality: details?.deliveryAddress?.locality,
        floor: details?.deliveryAddress?.currentFloor,
        isLiftAvailable: details?.deliveryAddress?.liftStatus
      },
      billingBy: details?.billingBy,
      billingDetails: {
        companyName: details?.billingDetails?.companyName,
        approvalAuthority: details?.billingDetails?.approvalAuthority,
        authorityPersonName: details?.billingDetails?.authorityPersonName,
        authorityPersonMobile: details?.billingDetails?.authorityMobileNumber,
        companyAddress: details?.billingDetails?.companyAddress,
        companyGST: details?.billingDetails?.companyGST,
        employeeName: details?.billingDetails?.employeeName,
        employeeDesignation: details?.billingDetails?.employeeDesignation,
        employeeMobile: details?.billingDetails?.employeeMobile
      },
      status: 'NEW ORDER'
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveOrder(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Order Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetOrder());
    dispatch(requestToGetAllFloor());
    dispatch(requestToGetAllApprovalAuthority());
    dispatch(utilsReset());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Congragulations New Order added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetOrder());
          dispatch(utilsReset());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Check Your Order Name Or Invalid Token');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetOrderApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);

  return (
    <Fragment>
      <SubHeader title={'Add Order'} />
      <Paper sx={{ padding: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericDropdown
                onKeyUp={formik.handleChange}
                error={formik.errors.shiftingType && formik.touched.shiftingType}
                onBlur={formik.handleBlur}
                onChange={onShiftingTypeChange}
                label={'Shifting Type'}
                value={formik?.values?.shiftingType}
                data={SHIFTING_TYPES_CONSTANTS}
              />
              <FormHelperText error>
                {formik.errors.shiftingType &&
                  formik.touched.shiftingType &&
                  formik.errors.shiftingType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericDropdown
                onChange={onBillingByChange}
                label={'Billing By'}
                data={BILLING_BY}
                error={formik?.errors?.billingBy && formik?.touched?.billingBy}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik.values.billingBy}
                helperText={
                  formik?.errors?.billingBy &&
                  formik?.touched?.billingBy &&
                  formik?.errors?.billingBy
                }
              />
            </Grid>

            {details?.billingBy === 'by Individual' && (
              <Fragment>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onPartyNameChange}
                    error={formik?.errors?.partyName && formik?.touched?.partyName}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    value={formik?.values?.partyName}
                    helperText={
                      formik?.errors?.partyName &&
                      formik?.touched?.partyName &&
                      formik?.errors?.partyName
                    }
                    label={'Party Name'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onPartyMobileNumberChange}
                    type={'text'}
                    error={formik.errors.partyMobileNumber && formik.touched.partyMobileNumber}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.partyMobileNumber}
                    helperText={
                      formik.errors.partyMobileNumber &&
                      formik.touched.partyMobileNumber &&
                      formik.errors.partyMobileNumber
                    }
                    label={'Party Mobile Number'}
                  />
                </Grid>
              </Fragment>
            )}
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericInput
                onChange={onOrderAmountChange}
                error={formik.errors.orderAmount && formik.touched.orderAmount}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik.values.orderAmount}
                helperText={
                  formik.errors.orderAmount &&
                  formik.touched.orderAmount &&
                  formik.errors.orderAmount
                }
                label={'Order Amount'}
                type={'text'}
              />
            </Grid>
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericInput
                onChange={onTokenAmountChange}
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                label={'Token Amount'}
                type={'text'}
                value={formik.values.tokenAmount}
                helperText={
                  formik.errors.tokenAmount &&
                  formik.touched.tokenAmount &&
                  formik.errors.tokenAmount
                }
                error={formik.errors.tokenAmount && formik.touched.tokenAmount}
              />
            </Grid>
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericDateTimePicker
                disablePast
                closeOnSelect={true}
                label={'Order Date'}
                onAccept={onOrderDateAndTimeChange}
              />
            </Grid>
            <Grid item xs={12} md={details?.billingBy !== 'by Company' ? 3 : 4}>
              <GenericDateTimePicker
                disablePast
                closeOnSelect={true}
                onAccept={onShiftingDateAndTimeChange}
                error={formik.errors.shiftingDateAndTime && formik.touched.shiftingDateAndTime}
                onKeyUp={formik.handleChange}
                // value={formik.values.shiftingDateAndTime}
                onBlur={formik.handleBlur}
                label={'Shifting Date and Time'}
              />
              <FormHelperText error>
                {formik.errors.shiftingDateAndTime &&
                  formik.touched.shiftingDateAndTime &&
                  formik.errors.shiftingDateAndTime}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  alignItem: 'center',
                  justifyContent: 'spaceBetween',
                  width: 'calc(100% - 100)',
                  border: '1px solid #C4C4C4',
                  borderRadius: '4px',
                  padding: '0 14px',
                  color:
                    formik.errors.shiftingLuggage && formik.touched.shiftingLuggage && '#d32f2f'
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
                {formik.errors.shiftingLuggage &&
                  formik.touched.shiftingLuggage &&
                  formik.errors.shiftingLuggage}
              </FormHelperText>
            </Grid>
            {details?.billingBy === 'by Company' && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
                    Billing Details
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onBillingCompanyNameChange}
                    error={
                      formik?.errors?.billingDetails?.companyName &&
                      formik?.touched?.billingDetails?.companyName
                    }
                    onBlur={formik.handleBlur}
                    value={formik?.values?.billingDetails?.companyName}
                    helperText={
                      formik?.errors?.billingDetails?.companyName &&
                      formik?.touched?.billingDetails?.companyName &&
                      formik?.errors?.billingDetails?.companyName
                    }
                    label={'Company Name'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onChange={onApprovalAuthorityChange}
                    value={formik?.values?.billingDetails?.approvalAuthority}
                    onKeyUp={formik.handleChange}
                    onBlur={formik?.handleBlur}
                    error={
                      formik?.errors?.billingDetails?.approvalAuthority &&
                      formik?.touched?.billingDetails?.approvalAuthority
                    }
                    label={'Approval Authority'}
                    data={listApprovalAuthority?.map((item) => ({
                      label: item?.approvalAuthority,
                      value: item?.approvalAuthority
                    }))}
                  />
                  <FormHelperText error>
                    {formik.errors.billingDetails?.approvalAuthority &&
                      formik.touched.billingDetails?.approvalAuthority &&
                      formik.errors.billingDetails?.approvalAuthority}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onAuthorityPersonNameChange}
                    error={
                      formik?.errors?.billingDetails?.authorityPersonName &&
                      formik?.touched?.billingDetails?.authorityPersonName
                    }
                    value={formik?.values?.billingDetails?.authorityPersonName}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.billingDetails?.authorityPersonName &&
                      formik?.touched?.billingDetails?.authorityPersonName &&
                      formik?.errors?.billingDetails?.authorityPersonName
                    }
                    label={'Authority Person Name'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onAuthorityMobileNumberChange}
                    error={
                      formik?.errors?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.billingDetails?.authorityMobileNumber
                    }
                    value={formik?.values?.billingDetails?.authorityMobileNumber}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.billingDetails?.authorityMobileNumber &&
                      formik?.errors?.billingDetails?.authorityMobileNumber
                    }
                    label={'Authority Mobile Number'}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onCompanyAddressChange}
                    error={
                      formik?.errors?.billingDetails?.companyAddress &&
                      formik?.touched?.billingDetails?.companyAddress
                    }
                    onBlur={formik.handleBlur}
                    value={formik?.values?.billingDetails?.companyAddress}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.billingDetails?.companyAddress &&
                      formik?.touched?.billingDetails?.companyAddress &&
                      formik?.errors?.billingDetails?.companyAddress
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
                        value={formik?.values?.billingDetails?.companyGST}
                        onKeyUp={formik.handleChange}
                        label={'Company GST'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeNameChange}
                        onBlur={formik.handleBlur}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.billingDetails?.employeeName}
                        label={'Employee Name'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeDesignationChange}
                        onBlur={formik.handleBlur}
                        value={formik?.values?.billingDetails?.employeeDesignation}
                        onKeyUp={formik.handleChange}
                        label={'Employee Designation'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onEmployeeMobileChange}
                        onBlur={formik.handleBlur}
                        value={formik?.values?.billingDetails?.employeeMobile}
                        onKeyUp={formik.handleChange}
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
                  formik?.errors?.pickUpAddress?.pinCode && formik?.touched?.pickUpAddress?.pinCode
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.pickUpAddress?.pinCode}
                helperText={
                  formik?.errors?.pickUpAddress?.pinCode &&
                  formik?.touched?.pickUpAddress?.pinCode &&
                  formik?.errors?.pickUpAddress?.pinCode
                }
                label={'Pincode'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onPickUpStateChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.pickUpAddress?.state}
                options={pickup?.state || []}
                label={'State'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onPickUpCityChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.pickUpAddress?.city}
                options={pickup?.city || []}
                label={'City'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onPickUpLocalityChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.pickUpAddress?.locality}
                options={pickup?.locality || []}
                label={'Locality'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onPickUpAddressChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.pickUpAddress?.address}
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
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.pickUpAddress?.landmark}
                    label={'Landmark'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onPickUpCurrentFloorChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.pickUpAddress?.currentFloor}
                    data={listFloor?.map((item) => ({
                      label: item?.floor,
                      value: item?.floor
                    }))}
                    label={'Current Floor'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onPickUpLiftStatusChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.pickUpAddress?.liftStatus}
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
              <Box sx={{ my: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  Delivery Address
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                error={
                  formik?.errors?.deliveryAddress?.pinCode &&
                  formik?.touched?.deliveryAddress?.pinCode
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.deliveryAddress?.pinCode}
                helperText={
                  formik?.errors?.deliveryAddress?.pinCode &&
                  formik?.touched?.deliveryAddress?.pinCode &&
                  formik?.errors?.deliveryAddress?.pinCode
                }
                onChange={onDeliveryPincodeChange}
                label={'Pincode'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onDeliveryStateChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.deliveryAddress?.state}
                options={drop?.state || []}
                label={'State'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onDeliveryCityChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.deliveryAddress?.city}
                options={drop?.city || []}
                label={'City'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericAutocomplete
                onSelect={onDeliveryLocalityChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                // value={formik?.values?.deliveryAddress?.locality}
                options={drop?.locality || []}
                label={'Locality'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onDeliveryAddressChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.deliveryAddress?.address}
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
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.deliveryAddress?.landmark}
                    label={'Landmark'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onDeliveryCurrentFloorChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.deliveryAddress?.currentFloor}
                    data={listFloor?.map((item) => ({
                      label: item?.floor,
                      value: item?.floor
                    }))}
                    label={'Current Floor'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    onChange={onDeliveryLiftStatusChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.deliveryAddress?.liftStatus}
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
                type="submit"
                sx={{ my: 3, float: 'right' }}
                onClick={onSaveOrderHandler}
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </form>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Paper>
    </Fragment>
  );
};
export default AddOrder;
