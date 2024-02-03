import React, { Fragment, useEffect, useState } from 'react';

import { Box, FormHelperText, Grid, 
  IconButton, Paper, Tooltip, Typography,
   Stack, List, ListItem } from '@mui/material';
import { APPROVAL_AUTHORTY, SHIFTING_TYPES_CONSTANTS } from '../../../common-components/constants';
import { BILLING_BY } from '../../../common-components/constants';
import GenericCheckbox from '../../../common-components/form-elements/genericCheckbox';
import GenericAutocomplete from '../../../common-components/form-elements/genericAutocomplete';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  requestToUpdateEnquiry,
  requestToGetEnquiry
} from '../../../store/slices/EnquirySlice';
import {
  enquiryInitialValues,
  addEnquiryValidationSchema
} from '../../../common-components/validator/enquiry-validation';
import {
  requestToGetDropLocation,
  requestToGetPickLocation
} from '../../../store/slices/UtilsSlice';
import { MdEdit } from 'react-icons/md';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericDivider from '../../../common-components/form-elements/genericDivider';
import { AiOutlineDelete } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { requestToGetAllApprovalAuthority, requestToGetAllEnquirySource } from '../../../store/slices/ContentManagementSlice';
import { requestToGetAllFloor } from '../../../store/slices/ShiftingManagementSlice';
import { requestToGetOrder, requestToUpdateOrder } from '../../../store/slices/OrderSlice';

const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'spaceBetween',
  width: 'calc(100%-100)',
  border: '1px solid #C4C4C4',
  borderRadius: '4px',
  padding: '0 14px'
};

const EditOrderDetail = () => {

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(requestToGetOrder(id))
    dispatch(requestToGetAllEnquirySource())
    dispatch(requestToGetAllFloor())
    dispatch(requestToGetAllApprovalAuthority())

  },[])

  const {
    enquiry: { addEnquiry,isEnquiryGetById },
    order: {isOrderGetById, orderById},
    utils: { pickup, drop },
    contentManagement: {enquirySource:{listEnquirySource},  approvalAuthority :{listApprovalAuthority} },
    shiftingManagement: {
      floor: { listFloor },
      shiftingLuggage: { listShiftingLuggage }
    }
  } = useSelector((state) => state);



  
  const [shiftingType,setShiftingType] = useState('');
  const [billingBy,setBillingBy] = useState('');
  const [partyName,setPartyName] = useState('');
  const [partyMobile,setPartyMobile] = useState('');
  const [orderAmount,setOrderAmount] = useState('');
  const [tokenAmount,setTokenAmount] = useState('');
  const [orderDate,setOrderDate] = useState('');
  const [shiftingDate,setShiftingDate] = useState('');
  const [shiftingLuggage,setShiftingLuggage] = useState('');
  const [enquiryManager,setEnquiryManager] = useState('');
  const [enquirySource,setEnquirySource] = useState('');
  const [email,setEmail] = useState('');
  const [movingDate,setMovingDate] = useState('');
  const [redgDate,setRegdDate] = useState('');
  const [deliveryDate,setDeliveryDate] = useState('');
  const [deliveredDate,setDeliveredDate] = useState('');

  // billing By //
  const [companyName,setCompanyName] = useState('');
  const [approvalAuthority,setApprovalAuthority] = useState('');
  const [authorityPersonName,setAuthorityPersonName] = useState('');
  const [authorityMobile,setAuthorityMobile] = useState('');
  const [companyAddress,setCompanyAddress] = useState('');
  const [companyGST,setCompanyGST] = useState('');
  const [employeeName,setEmployeeName] = useState('');
  const [employeeDesignation,setEmployeeDesignation] = useState('');
  const [employeeMobile,setEmployeeMobile] = useState('');
  const [altNumbers,setAltNumber] = useState([]);


  const [pickUpPincde,setPickUpPincode] = useState('');
  const [pickUpState,setPickUpState] = useState('');
  const [pickUpCity,setPickUpCity] = useState('');
  const [pickUpLocality,setPickUpLocality] = useState('');
  const [pickUpAddress,setPickUpAddress] = useState('');
  const [pickUpLandmark,setPickUpLandmark] = useState('');
  const [pickUpFloor,setPickUpFloor] = useState('');
  const [pickUpLiftStatus,setPickUpLiftStatus] = useState('');

  const [deliveryPincode,setDeliveryPincode] = useState('');
  const [deliveryState,setDeliveryState] = useState('');
  const [deliveryCity,setDeliveryCity] = useState('');
  const [deliveryLocality,setDeliveryLocality] = useState('');
  const [deliveryAddress,setDeliveryAddress] = useState('');
  const [deliveryLandmark,setDeliveryLandmark] = useState('');
  const [deliveryFloor,setDeliveryFloor] = useState('');
  const [deliveryLiftStatus,setDeliveryLiftStatus] = useState('');

  const [shiftingLuggageArray, setShiftingLuggageArray] = useState([]);

  const [luggage, setLuggage] = useState([]);
  const [checkedLuggage, setCheckedLuggage] = useState([]);






  useEffect(() => {
    setShiftingType(orderById[0]?.shiftingType);
    setBillingBy(orderById[0]?.billingBy);
    setEnquiryManager(orderById[0]?.enquiryManager);
    setPartyName(orderById[0]?.partyName);
    setPartyMobile(orderById[0]?.mobile);
    setEnquirySource(orderById[0]?.enquirySource);
    setEmail(orderById[0]?.email);
    setMovingDate(orderById[0]?.shiftingType);
    setRegdDate(new Date(orderById[0]?.createdAt).toDateString());
    setShiftingLuggage(orderById[0]?.shiftingLuggage);
    setCompanyName(orderById[0]?.billingDetails?.companyName);
    setApprovalAuthority(orderById[0]?.billingDetails?.approvalAuthority);
    setAuthorityPersonName(orderById[0]?.billingDetails?.authorityPersonName);
    setAuthorityMobile(orderById[0]?.billingDetails?.authorityPersonMobile);
    setCompanyAddress(orderById[0]?.billingDetails?.companyAddress);
    setCompanyGST(orderById[0]?.billingDetails?.companyGST);
    setEmployeeName(orderById[0]?.billingDetails?.employeeName);
    setEmployeeDesignation(orderById[0]?.billingDetails?.employeeDesignation);
    setEmployeeMobile(orderById[0]?.billingDetails?.employeeMobile);
    setAltNumber(orderById[0]?.alternateNumbers);
    setOrderAmount(orderById[0]?.orderAmount)
    setTokenAmount(orderById[0]?.tokenAmount)
    

    setPickUpPincode(orderById[0]?.pickupAddress?.pincode);
    setPickUpState(orderById[0]?.pickupAddress?.state);
    setPickUpCity(orderById[0]?.pickupAddress?.city);
    setPickUpLocality(orderById[0]?.pickupAddress?.locality);
    setPickUpLandmark(orderById[0]?.pickupAddress?.landmark);
    setPickUpFloor(orderById[0]?.pickupAddress?.floor);
    setPickUpLiftStatus(orderById[0]?.pickupAddress?.isLiftAvailable);
    setPickUpAddress(orderById[0]?.pickupAddress?.address);

    setDeliveryPincode(orderById[0]?.dropAddress?.pincode);
    setDeliveryState(orderById[0]?.dropAddress?.state);
    setDeliveryCity(orderById[0]?.dropAddress?.city);
    setDeliveryLocality(orderById[0]?.dropAddress?.locality);
    setDeliveryLandmark(orderById[0]?.dropAddress?.landmark);
    setDeliveryFloor(orderById[0]?.dropAddress?.floor);
    setDeliveryLiftStatus(orderById[0]?.dropAddress?.isLiftAvailable);
    setDeliveryAddress(orderById[0]?.dropAddress?.address);
    dispatch(requestToGetDropLocation(orderById[0]?.dropAddress?.pincode));
    dispatch(requestToGetPickLocation(orderById[0]?.pickupAddress?.pincode));
  }, [isOrderGetById]);



  


  const formik = useFormik({
    initialValues: enquiryInitialValues,
    validationSchema: addEnquiryValidationSchema
  });


  const onShiftingTypeChange = (evt) => {
    setShiftingType(evt.target.value);
  };
  const onPartyNameChange = (evt) => {
    setPartyName(evt.target.value);
  };
  const onBillingByChange = (evt) => {
    setBillingBy(evt.target.value);
  };
  const onEnquiryManagerChange = (evt) => {
    setEnquiryManager(evt?.target?.value);
  };
  const onEnquirySorceChange = (evt) => {
    setEnquirySource(evt?.target?.value);
  };
  const onEmailChange = (evt) => {
    setEmail(evt?.target?.value);
  };

  const onMobileNumberChange = (evt) => {
    setPartyMobile(evt?.target?.value);
  };

 
  const onShiftingLuggageChange = (evt) => {
    // let array = []
    const { value, checked } = evt.target;
    // const { shiftingLuggage } = addEnquiry;
    let luggage = [...shiftingLuggageArray];

    if (checked) {
      luggage.push(value);
    } else {
      luggage = luggage.filter((item) => item !== value);
    }
    formik.setFieldValue('addEnquiry.shiftingLuggage', luggage);
    setShiftingLuggageArray(luggage);
  };


  const onPickUpPincodeChange = (evt) => {
    setPickUpPincode(evt.target.value)
    dispatch(requestToGetPickLocation(evt?.target?.value));
  };
  const onPickUpStateChange = (evt) => {
    setPickUpState(evt.target.value);
  };
  const onPickUpCityChange = (evt) => {
    setPickUpCity(evt.target.value);
  };
  const onPickUpLocalityChange = (evt) => {
    setPickUpLocality(evt.target.value);
  };
  const onPickUpAddressChange = (evt) => {
    setPickUpAddress(evt.target.value);
  };
  const onPickUpLandmarkChange = (evt) => {
    setPickUpLandmark(evt.target.value);
  };
  const onPickUpCurrentFloorChange = (evt) => {
    setPickUpFloor(evt.target.value);
  };
  const onPickUpLiftStatusChange = (evt) => {
    setPickUpLiftStatus(evt.target.value);
  };

  const onDeliveryPincodeChange = (evt) => {
    setDeliveryPincode(evt.target.value);
    dispatch(requestToGetDropLocation(evt?.target?.value));
  };
  const onDeliveryStateChange = (evt) => {
    setDeliveryState(evt.target.value);
  };
  const onDeliveryCityChange = (evt) => {
    setDeliveryCity(evt.target.value);
  };
  const onDeliveryLocalityChange = (evt) => {
    setDeliveryLocality(evt.target.value);
  };
  const onDeliveryAddressChange = (evt) => {
    setDeliveryAddress(evt.target.value);
  };
  const onDeliveryLandmarkChange = (evt) => {
    setDeliveryLandmark(evt.target.value);
  };
  const onDeliveryCurrentFloorChange = (evt) => {
    setDeliveryFloor(evt.target.value);
  };
  const onDeliveryLiftStatusChange = (evt) => {
    setDeliveryLiftStatus(evt.target.value);
  };

  const onCompanyNameChange = (evt) => {
    setCompanyName(evt.target.value);
  };
  const onApprovalAuthorityChange = (evt) => {
    setApprovalAuthority(evt.target.value);
  };
  const onAuthorityPersonNameChange = (evt) => {
    setAuthorityPersonName(evt.target.value);
  };
  const onAuthorityMobileNumberChange = (evt) => {
    setAuthorityMobile(evt.target.value);
  };
  const onCompanyAddressChange = (evt) => {
    setCompanyAddress(evt.target.value);
  };
  const onCompanyGSTChange = (evt) => {
    setCompanyGST(evt.target.value);
  };
  const onEmployeeNameChange = (evt) => {
    setEmployeeName(evt.target.value);
  };
  const onEmployeeDesignationChange = (evt) => {
    setEmployeeDesignation(evt.target.value);
  };
  const onEmployeeMobileChange = (evt) => {
    setEmployeeMobile(evt.target.value);
  };
  const onOrderAmountChange = (evt) => {
    setOrderAmount(evt.target.value);
  };
  const onTokenAmountChange = (evt) => {
    setTokenAmount(evt.target.value);
  };
  const onLandlineNumberChange = (evt) => {
    setTokenAmount(evt.target.value);
  };
 

  const onSaveEnquiryHandler = (e) => {
    e.preventDefault();
    let payload = {
      orderId: id,
      enquiryManager: enquiryManager,          
      shiftingType: shiftingType,
      partyCompanyName: companyName,
      partyName: partyName,
      email: email,
      mobile: partyMobile,
      phone: partyMobile,
      shiftingLuggage: shiftingLuggageArray.length === 0 ? shiftingLuggage : shiftingLuggageArray,
      enquirySource: enquirySource,
      gstNumber: companyGST,
      alternateNumbers: '',
      shiftingDate: movingDate,
      pickupAddress: {
        shiftingFrom: 'lorem',
        state: pickUpState,
        city: pickUpCity,
        address: pickUpAddress,
        pincode: pickUpPincde,
        locality: pickUpLocality,
        landmark: pickUpLandmark,
        floor: pickUpFloor,
        isLiftAvailable: pickUpLiftStatus
      },
      dropAddress: {
        shiftingTo: 'lorem',
        state: deliveryState,
        city: deliveryCity,
        address: deliveryAddress,
        pincode: deliveryPincode,
        locality: deliveryLocality,
        landmark: deliveryLandmark,
        floor: deliveryFloor,
        isLiftAvailable: deliveryLiftStatus
      },
      billingBy: billingBy,
      billingDetails: {
        companyName: companyName,
        approvalAuthority: approvalAuthority,
        authorityPersonName: authorityPersonName,
        authorityPersonMobile: authorityMobile,
        companyAddress: companyAddress,
        companyGST: companyGST,
        employeeName: employeeName,
        employeeDesignation: employeeDesignation,
        employeeMobile: employeeMobile
      }
    };
    dispatch(requestToUpdateOrder(payload));
  };

  
  useEffect(() => {
    let checked = listShiftingLuggage.map((item) => {
      if (orderById[0]?.shiftingLuggage.includes(item?._id)) {
        return {
          ...item,
          checked: true
        };
      } else {
        return {
          ...item,
          checked: false
        };
      }
    });

    setCheckedLuggage(checked);
  }, [listShiftingLuggage]);

  // *******form edit functionality*******

  const [editCustDetail, seteditCustDetail] = useState(true);
  const [editBillingDetail, seteditBillingDetail] = useState(true);
  const [editPikupAdd, setediteditPikupAdd] = useState(true);
  const [editDiliveryAdd, setediteditDiliveryAdd] = useState(true);
  const [isEditShifting, setIsEditShifting] = useState(false);
  const [isShowDetailUpdateBtn, setIsShowDetailUpdateBtn] = useState(false);
  const [isShowPickupUpdateBtn, setIsShowPickupUpdateBtn] = useState(false);
  const [isShowDelivaryUpdateBtn, setIsShowDelivaryUpdateBtn] = useState(false);

  const onClickHandlerCustDetail = () => {
    setIsShowDetailUpdateBtn((prevIsEditing) => !prevIsEditing);
    seteditCustDetail(!editCustDetail);
    setIsEditShifting(!isEditShifting);
  };
  const onClickHandlerBillingDetail = () => {
    seteditBillingDetail(!editBillingDetail);
  };
  const onClickHandlerPikupAdd = () => {
    setIsShowPickupUpdateBtn((prevIsEditing) => !prevIsEditing);
    setediteditPikupAdd(!editPikupAdd);
  };
  const onClickHandlerDiliveryAdd = () => {
    setIsShowDelivaryUpdateBtn((prevIsEditing) => !prevIsEditing);

    setediteditDiliveryAdd(!editDiliveryAdd);
  };
  // *******Add Alternate Number functionality*******
  const [addAltnumber, setAddAltNumber] = useState('');
  const [numberList, setNumberList] = useState(altNumbers);

  function addnumberHandler() {
    const mobileNumberRegex = /^[6-9]\d{9}$/;
    if (mobileNumberRegex.test(addAltnumber)) {
      const clone = [...numberList];
      clone.push(addAltnumber);
      setNumberList(clone);
      setAddAltNumber('');
    }
  }

  function removeItem(e) {
    const deleteData = numberList?.filter((d, index) => e !== d);
    setNumberList(deleteData);
  }

  const addnumStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: (theme) => theme.palette.primary.light,
    padding: '4px  12px',
    borderRadius: 1,
    marginY: 1
  };

  useEffect(() => {
    let checked = listShiftingLuggage.map((item) => {
      if (orderById[0]?.shiftingLuggage.includes(item?._id)) {
        return {
          ...item,
          checked: true
        };
      } else {
        return {
          ...item,
          checked: false
        };
      }
    });

    setCheckedLuggage(checked);
  }, [listShiftingLuggage]);


  return (
    <Fragment>
     <form onSubmit={onSaveEnquiryHandler}>
      <Paper sx={{ padding: '30px' }}>
       
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Customer Details
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerCustDetail}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Shifting Type
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                value={shiftingType}
                onChange={onShiftingTypeChange}
                error={
                  formik?.errors?.addEnquiry?.shiftingType &&
                  formik?.touched?.addEnquiry?.shiftingType
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                data={SHIFTING_TYPES_CONSTANTS}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
              <FormHelperText error>
                {formik?.errors?.addEnquiry?.shiftingType &&
                  formik?.touched?.addEnquiry?.shiftingType &&
                  formik?.errors?.addEnquiry?.shiftingType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Billing By
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                data={BILLING_BY}
                onChange={onBillingByChange}
                error={
                  formik?.errors?.addEnquiry?.billingBy && formik?.touched?.addEnquiry?.billingBy
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                className={editCustDetail ? 'editable-input' : ''}
                value={billingBy}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
              <FormHelperText error>
                {formik?.errors?.addEnquiry?.billingBy &&
                  formik?.touched?.addEnquiry?.billingBy &&
                  formik?.errors?.addEnquiry?.billingBy}
              </FormHelperText>
            </Grid>

            {orderById[0]?.billingBy === 'by Company' && (
              <Fragment>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Enquiry Manager
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericDropdown
                    onChange={onEnquiryManagerChange}
                    data={APPROVAL_AUTHORTY}
                    value={enquiryManager}
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
              </Fragment>
            )}
            {orderById[0]?.billingBy === 'by Individual' && (
              <Fragment>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Party Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onPartyNameChange}
                    error={
                      formik?.errors?.addEnquiry?.partyName &&
                      formik?.touched?.addEnquiry?.partyName
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.partyName &&
                      formik?.touched?.addEnquiry?.partyName &&
                      formik?.errors?.addEnquiry?.partyName
                    }
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Mobile
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onMobileNumberChange}
                    value={partyMobile}
                    type={'text'}
                    error={
                      formik?.errors?.addEnquiry?.mobileNumber &&
                      formik?.touched?.addEnquiry?.mobileNumber
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.mobileNumber &&
                      formik?.touched?.addEnquiry?.mobileNumber &&
                      formik?.errors?.addEnquiry?.mobileNumber
                    }
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
              </Fragment>
            )}
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Enquiry Source
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onEnquirySorceChange}
                value={enquirySource}
                className={editCustDetail ? 'editable-input' : ''}
                label={enquirySource}
                inputProps={{
                  disabled: editCustDetail
                }}
                data={listEnquirySource?.map((item) => ({
                  label: item?.enquirySource,
                  value: item?.enquirySource
                }))}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
              value={email}
              onChange={onEmailChange}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Order Amount
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={orderAmount}
                onChange={onOrderAmountChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Token Amount
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={tokenAmount}
                onChange={onTokenAmountChange}
              />
              
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Landline Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={altNumbers}
                onChange={onLandlineNumberChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Moving Date
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDatePicker
                disabled={editCustDetail}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                label={movingDate}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Regd. Date and Time
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDatePicker
                disabled={editCustDetail}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Delivery Date
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDatePicker
                disabled={editCustDetail}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                label={deliveredDate}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Delivered Date
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDatePicker
                disabled={editCustDetail}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                label={deliveredDate}
              />
            </Grid>

            {isEditShifting === true ? (
              <Fragment>
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
                      onChange={onShiftingLuggageChange}
                      list={
                        checkedLuggage?.map((item) => ({
                          label: item?.shiftingLuggage,
                          value: item?._id,
                          checked: item?.checked
                        })) || []
                      }
                      style={{ display: 'block' }}
                      error={
                        formik?.errors?.addEnquiry?.shiftingLuggage &&
                        formik?.touched?.addEnquiry?.shiftingLuggage
                      }
                      onBlur={formik.handleBlur}
                      onKeyUp={formik.handleChange}
                      disabled={true}
                      className="checkbox-disabled"
                      inputProps={{
                        disabled: editCustDetail
                      }}
                    />
                  </Box>
                  <FormHelperText error>
                    {formik?.errors?.addEnquiry?.shiftingLuggage &&
                      formik?.touched?.addEnquiry?.shiftingLuggage &&
                      formik?.errors?.addEnquiry?.shiftingLuggage}
                  </FormHelperText>
                </Grid>
              </Fragment>
            ) : (
              <Fragment>
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
                    <List dense spacing={2} component={Stack} direction="row">
                      {checkedLuggage?.map((ele, index) => {
                        if (ele?.checked) {
                          return (
                            <ListItem key={index} disablePadding>
                              {ele?.shiftingLuggage}
                            </ListItem>
                          );
                        }
                      })}
                    </List>
                  </Box>
                  <FormHelperText error>
                    {formik?.errors?.addEnquiry?.shiftingLuggage &&
                      formik?.touched?.addEnquiry?.shiftingLuggage &&
                      formik?.errors?.addEnquiry?.shiftingLuggage}
                  </FormHelperText>
                </Grid>
              </Fragment>
            )}
            
            {billingBy === 'by Company' && (
              <Fragment>
                <Grid item xs={12}>
                  <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight={600}>
                      Billing Details
                    </Typography>
                    <Tooltip title={'Update Details'}>
                      <IconButton onClick={onClickHandlerBillingDetail}>
                        <MdEdit size={20} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <GenericDivider />
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Company Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onCompanyNameChange}
                    value={companyName}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.companyName &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyName
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.companyName &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyName &&
                      formik?.errors?.addEnquiry?.billingDetails?.companyName
                    }
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Approval Authority
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericDropdown
                    onChange={onApprovalAuthorityChange}
                    onKeyUp={formik.handleChange}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.touched?.addEnquiry?.billingDetails?.approvalAuthority
                    }
                    data={listApprovalAuthority?.map((item) => ({
                      label: item?.approvalAuthority,
                      value: item?.approvalAuthority
                    }))}
                    value={approvalAuthority}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                  <FormHelperText error>
                    {formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.touched?.addEnquiry?.billingDetails?.approvalAuthority &&
                      formik?.errors?.addEnquiry?.billingDetails?.approvalAuthority}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Authority Person Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onAuthorityPersonNameChange}
                    value={authorityPersonName}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityPersonName
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityPersonName &&
                      formik?.errors?.addEnquiry?.billingDetails?.authorityPersonName
                    }
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Authority Person Mobile
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onAuthorityMobileNumberChange}
                    value={authorityMobile}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityMobileNumber
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.touched?.addEnquiry?.billingDetails?.authorityMobileNumber &&
                      formik?.errors?.addEnquiry?.billingDetails?.authorityMobileNumber
                    }
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Company Address
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onCompanyAddressChange}
                    value={companyAddress}
                    error={
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyAddress
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    helperText={
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.touched?.addEnquiry?.billingDetails?.companyAddress &&
                      formik?.errors?.addEnquiry?.billingDetails?.companyAddress
                    }
                    multiline
                    // rows={3.5}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Company GST
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onCompanyGSTChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    value={companyGST}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Employee Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                  value={employeeName}
                    onChange={onEmployeeNameChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Employee Designation
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                  value={employeeDesignation}
                    onChange={onEmployeeDesignationChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                    Employee Mobile No.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                  value={employeeMobile}
                    onChange={onEmployeeMobileChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
              </Fragment>
            )}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight={600}>
                Alternate Phone Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'xxxxx xxxxx'}
                value={addAltnumber}
                onChange={(e) => setAddAltNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericLoadingButton onClick={addnumberHandler}>
                <span>add more</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12} md={6}>
              {numberList?.map((e) => (
                <Box sx={addnumStyle}>
                  <Typography>{e}</Typography>
                  <IconButton onClick={() => removeItem(e)}>
                    <AiOutlineDelete color="#d32f2f" />
                  </IconButton>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12}>
            {isShowDetailUpdateBtn && (
              <GenericLoadingButton sx={{ my: 3, float: 'right' }} type={'submit'} onClick={onClickHandlerCustDetail}>
                <span>update</span>
              </GenericLoadingButton>
            )}
            </Grid>
          </Grid>
        
      </Paper>

      <Paper sx={{ padding: '30px', my: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Pick-up Address
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerPikupAdd}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onPickUpPincodeChange}
                value={pickUpPincde}
                error={
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.pickUpAddress?.pinCode
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                helperText={
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.pickUpAddress?.pinCode &&
                  formik?.errors?.addEnquiry?.pickUpAddress?.pinCode
                }
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={pickUpState}
                onChange={onPickUpStateChange}
                data={pickup?.state}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={pickUpCity}
                onChange={onPickUpCityChange}
                data={pickup?.city}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={pickUpLocality}
                onChange={onPickUpLocalityChange}
                data={pickup?.locality}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Landmark
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onPickUpLandmarkChange}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
                value={pickUpLandmark}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Current Floor
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpCurrentFloorChange}
                data={listFloor?.map((item) => ({
                  label: item?.floor,
                  value: item?.floor
                }))}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
                value={pickUpFloor}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Lift Status
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpLiftStatusChange}
                data={[
                  { label: 'YES', value: 'YES' },
                  { label: 'NO', value: 'NO' }
                ]}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
                value={pickUpLiftStatus}
              />
            </Grid>
            <Grid item md={8}></Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <GenericInput
                onChange={onPickUpAddressChange}
                multiline
                rows={3}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
                value={pickUpAddress}
              />
            </Grid>

            <Grid item xs={12}>
            {isShowPickupUpdateBtn && (
              <GenericLoadingButton sx={{ my: 3, float: 'right' }} type='submit'>
                <span>update</span>
              </GenericLoadingButton>
            )}
            </Grid>
          </Grid>
        
      </Paper>
      <Paper sx={{ padding: '30px' }}>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Delivery Address
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerDiliveryAdd}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                error={
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.deliveryAddress?.pinCode
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={deliveryPincode}
                helperText={
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.touched?.addEnquiry?.deliveryAddress?.pinCode &&
                  formik?.errors?.addEnquiry?.deliveryAddress?.pinCode
                }
                onChange={onDeliveryPincodeChange}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={deliveryState}
                onChange={onDeliveryStateChange}
                data={drop?.state}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={deliveryCity}
                onChange={onDeliveryCityChange}
                data={drop?.city}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
              value={deliveryLocality}
                onChange={onDeliveryLocalityChange}
                data={drop?.locality}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Landmark
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onDeliveryLandmarkChange}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
                value={pickUpLandmark}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Current Floor
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryCurrentFloorChange}
                data={listFloor?.map((item) => ({
                  label: item?.floor,
                  value: item?.floor
                }))}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
                value={deliveryFloor}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Lift Status
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onDeliveryLiftStatusChange}
                data={[
                  { label: 'YES', value: 'YES' },
                  { label: 'NO', value: 'NO' }
                ]}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
                value={deliveryLiftStatus}
              />
            </Grid>
            <Grid item md={8}></Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <GenericInput
                onChange={onDeliveryAddressChange}
                value={deliveryAddress}
                multiline
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
            {isShowDelivaryUpdateBtn && (
              <GenericLoadingButton
                onClick={onSaveEnquiryHandler}
                size="medium"
                sx={{ my: 3, float: 'right' }}
                type="submit"
              >
                <span>update</span>
              </GenericLoadingButton>
              )}
            </Grid>
          </Grid>
      </Paper>
        </form>
    </Fragment>
  );
};
export default EditOrderDetail;
