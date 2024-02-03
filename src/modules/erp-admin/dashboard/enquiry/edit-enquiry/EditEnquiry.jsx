import React, { Fragment, useState } from 'react';
import {
  Box,
  FormHelperText,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
  item
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
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
import GenericRequired from '../../../../../common-components/form-elements/genericRequired';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  updatePickUpPincode,
  updateDeliveryPincode,
  requestToGetEnquiry,
  requestToUpdateEnquiry
} from '../../../../../store/slices/EnquirySlice';
import {
  requestToGetAllApprovalAuthority,
  requestToGetAllEnquirySource
} from '../../../../../store/slices/ContentManagementSlice';
import {
  enquiryInitialValues,
  addEnquiryValidationSchema
} from '../../../../../common-components/validator/enquiry-validation';

import { requestToGetAllShiftingLuggage } from '../../../../../store/slices/ShiftingManagementSlice';
import {
  requestToGetDropLocation,
  requestToGetPickLocation
} from '../../../../../store/slices/UtilsSlice';
import { requestToGetAllFloor } from '../../../../../store/slices/ShiftingManagementSlice';

import { MdEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import GenericDatePicker from '../../../../../common-components/form-elements/genericDatePicker';
import GenericDivider from '../../../../../common-components/form-elements/genericDivider';
import ContentManagement from './../../../../shared/content-management/ContentManagement';
import { number } from 'yup';

const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'spaceBetween',
  width: 'calc(100%-100)',
  border: '1px solid #C4C4C4',
  borderRadius: '4px',
  padding: '0 14px'
};

const Data = [
  {
    value: 'household',
    label: 'Household'
  },
  {
    value: 'commercial',
    label: 'Commercial'
  }
];

const AddEnquiry = (props) => {
  const { enquiryId } = props;

  const dispatch = useDispatch();
  const {
    enquiry: { addEnquiry, isEnquiryGetById, enquiryById },
    utils: { pickup, drop },
    contentManagement: {
      enquirySource: { listEnquirySource },
      approvalAuthority: { listApprovalAuthority }
    },
    shiftingManagement: {
      floor: { listFloor },
      shiftingLuggage: { listShiftingLuggage }
    }
  } = useSelector((state) => state);

  


  const formik = useFormik({
    initialValues: enquiryInitialValues,
    validationSchema: addEnquiryValidationSchema
  });

  useEffect(() => {
    dispatch(requestToGetEnquiry(enquiryId));
    dispatch(requestToGetAllEnquirySource());
    dispatch(requestToGetAllApprovalAuthority());
    dispatch(requestToGetAllShiftingLuggage());
  }, []);
  const [luggage, setLuggage] = useState([]);
  const [checkedLuggage, setCheckedLuggage] = useState([]);

  const [shiftingType, setShiftingType] = useState('');
  const [billingBy, setBillingBy] = useState('');
  const [enquiryManager, setEnquiryManager] = useState('');
  const [partyName, setPartyName] = useState('');
  const [mobile, setMobile] = useState('');
  const [enquirySource, setEnquirySource] = useState('');
  const [email, setEmail] = useState('');
  const [landline, setLandline] = useState('');
  const [movingDate, setMovingDate] = useState('');
  const [redgDate, setRedgDate] = useState('');
  const [shiftingLuggage, setShiftingLuggage] = useState(Data);
  const [companyName, setCompanyName] = useState('');
  const [approvalAuthority, setApprovalAuthority] = useState('');
  const [authorityPersonName, setAuthorityPersonName] = useState('');
  const [authorityMobileNumber, setAuthorityMobileNumber] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyGST, setCompanyGST] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');
  const [employeeMobile, setEmployeeMobile] = useState('');
  const [altNumber, setAltNumber] = useState([]);

  const [pickupPincode, setPickupPincode] = useState('');
  const [pickupState, setPickupState] = useState('');
  const [pickupCity, setPickupCity] = useState('');
  const [pickupLocality, setPickupLocality] = useState('');
  const [pickupLandmark, setPickupLandmark] = useState('');
  const [pickupCurrentFloor, setPickupCurrentFloor] = useState('');
  const [pickupLiftStatus, setPickupLiftStatus] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');

  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryLocality, setDeliveryLocality] = useState('');
  const [deliveryLandmark, setDeliveryLandmark] = useState('');
  const [deliveryCurrentFloor, setDeliveryCurrentFloor] = useState('');
  const [deliveryLiftStatus, setDeliveryLiftStatus] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const [shiftingLuggageArray, setShiftingLuggageArray] = useState([]);

  // const shiftingLuggageArray = []

  useEffect(() => {
    setShiftingType(enquiryById[0]?.shiftingType);
    setBillingBy(enquiryById[0]?.billingBy);
    setEnquiryManager(enquiryById[0]?.enquiryManager);
    setPartyName(enquiryById[0]?.partyName);
    setMobile(enquiryById[0]?.mobile);
    setEnquirySource(enquiryById[0]?.enquirySource);
    setEmail(enquiryById[0]?.email);
    setLandline(enquiryById[0]?.landline);
    setMovingDate(enquiryById[0]?.shiftingType);
    setRedgDate(new Date(enquiryById[0]?.createdAt).toDateString());
    setShiftingLuggage(enquiryById[0]?.shiftingLuggage);
    setCompanyName(enquiryById[0]?.billingDetails?.companyName);
    setApprovalAuthority(enquiryById[0]?.billingDetails?.approvalAuthority);
    setAuthorityPersonName(enquiryById[0]?.billingDetails?.authorityPersonName);
    setAuthorityMobileNumber(enquiryById[0]?.billingDetails?.authorityPersonMobile);
    setCompanyAddress(enquiryById[0]?.billingDetails?.companyAddress);
    setCompanyGST(enquiryById[0]?.billingDetails?.companyGST);
    setEmployeeName(enquiryById[0]?.billingDetails?.employeeName);
    setEmployeeDesignation(enquiryById[0]?.billingDetails?.employeeDesignation);
    setEmployeeMobile(enquiryById[0]?.billingDetails?.employeeMobile);
    setAltNumber(enquiryById[0]?.alternateNumbers);

    setPickupPincode(enquiryById[0]?.pickupAddress?.pincode);
    setPickupState(enquiryById[0]?.pickupAddress?.state);
    setPickupCity(enquiryById[0]?.pickupAddress?.city);
    setPickupLocality(enquiryById[0]?.pickupAddress?.locality);
    setPickupLandmark(enquiryById[0]?.pickupAddress?.landmark);
    setPickupCurrentFloor(enquiryById[0]?.pickupAddress?.floor);
    setPickupLiftStatus(enquiryById[0]?.pickupAddress?.isLiftAvailable);
    setPickupAddress(enquiryById[0]?.pickupAddress?.shiftingFrom);

    setDeliveryPincode(enquiryById[0]?.dropAddress?.pincode);
    setDeliveryState(enquiryById[0]?.dropAddress?.state);
    setDeliveryCity(enquiryById[0]?.dropAddress?.city);
    setDeliveryLocality(enquiryById[0]?.dropAddress?.locality);
    setDeliveryLandmark(enquiryById[0]?.dropAddress?.landmark);
    setDeliveryCurrentFloor(enquiryById[0]?.dropAddress?.floor);
    setDeliveryLiftStatus(enquiryById[0]?.dropAddress?.isLiftAvailable);
    setDeliveryAddress(enquiryById[0]?.dropAddress?.shiftingTo);
    dispatch(requestToGetDropLocation(enquiryById[0]?.dropAddress?.pincode));
    dispatch(requestToGetPickLocation(enquiryById[0]?.pickupAddress?.pincode));
  }, [isEnquiryGetById]);

  const onShiftingTypeChange = (evt) => {
    setShiftingType(evt?.target?.value);
  };

  const onPartyNameChange = (evt) => {
    setPartyName(evt?.target?.value);
  };

  const onBillingByChange = (evt) => {
    setBillingBy(evt?.target?.value);
  };

  const onEnquiryManagerChange = (evt) => {
    setEnquiryManager(evt?.target?.value);
   
  };

  const onMobileNumberChange = (evt) => {
    setMobile(evt?.target?.value);
  };
  const onEnquirySourceChange = (evt) => {
    setEnquirySource(evt?.target?.value);
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
    setPickupPincode(evt?.target?.value);
    if (evt.target.value.length === 6) {
      dispatch(requestToGetPickLocation(evt?.target?.value));
    }
    dispatch(updatePickUpPincode(evt?.target?.value));
  };
  const onPickUpStateChange = (evt) => {
    setPickupState(evt?.target?.value);
  };
  const onPickUpCityChange = (evt) => {
    setPickupCity(evt?.target?.value);
  };
  const onPickUpLocalityChange = (evt) => {
    setPickupLocality(evt?.target?.value);
  };
  const onPickUpAddressChange = (evt) => {
    setPickupAddress(evt?.target?.value);
  };
  const onPickUpLandmarkChange = (evt) => {
    setPickupLandmark(evt?.target?.value);
  };
  const onPickUpCurrentFloorChange = (evt) => {
    setPickupCurrentFloor(evt?.target?.value);
  };
  const onPickUpLiftStatusChange = (evt) => {
    setPickupLiftStatus(evt?.target?.value);
  };

  const onDeliveryPincodeChange = (evt) => {
    setDeliveryPincode(evt?.target?.value);
    if (evt.target.value.length === 6) {
      dispatch(requestToGetDropLocation(evt?.target?.value));
    }
    dispatch(updateDeliveryPincode(evt?.target?.value));
  };
  const onDeliveryStateChange = (evt) => {
    setDeliveryState(evt?.target?.value);
  };
  const onDeliveryCityChange = (evt) => {
    setDeliveryCity(evt?.target?.value);
  };
  const onDeliveryLocalityChange = (evt) => {
    setDeliveryLocality(evt?.target?.value);
  };

  const onDeliveryAddressChange = (evt) => {
    setDeliveryAddress(evt?.target?.value);
  };

  const onDeliveryLandmarkChange = (evt) => {
    setDeliveryLandmark(evt?.target?.value);
  };

  const onDeliveryCurrentFloorChange = (evt) => {
    setDeliveryCurrentFloor(evt?.target?.value);
  };

  const onDeliveryLiftStatusChange = (evt) => {
    setDeliveryLiftStatus(evt?.target?.value);
  };

  const onCompanyNameChange = (evt) => {
    setCompanyName(evt?.target?.value);
  };

  const onApprovalAuthorityChange = (evt) => {
    setApprovalAuthority(evt?.target?.value);
  };

  const onAuthorityPersonNameChange = (evt) => {
    setAuthorityPersonName(evt?.target?.value);
  };

  const onAuthorityMobileNumberChange = (evt) => {
    setAuthorityMobileNumber(evt?.target?.value);
  };

  const onCompanyAddressChange = (evt) => {
    setCompanyAddress(evt?.target?.value);
  };

  const onCompanyGSTChange = (evt) => {
    setCompanyGST(evt?.target?.value);
  };

  const onEmployeeNameChange = (evt) => {
    setEmployeeName(evt?.target?.value);
  };

  const onEmployeeDesignationChange = (evt) => {
    setEmployeeDesignation(evt?.target?.value);
  };

  const onEmployeeMobileChange = (evt) => {
    setEmployeeMobile(evt?.target?.value);
  };


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
  const [numberList, setNumberList] = useState(altNumber);
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



  const onUpdateEnquiryHandler = (evt) => {
    evt.preventDefault();

    let payload = {
      enquiryId: enquiryId,
      enquiryManager: enquiryManager,
      shiftingType: shiftingType,
      partyCompanyName: companyName,
      partyName: partyName,
      email: email,
      mobile: mobile,
      phone: mobile,
      shiftingLuggage: shiftingLuggageArray.length === 0 ? shiftingLuggage : shiftingLuggageArray,
      enquirySource: enquirySource,
      gstNumber: companyGST,
      alternateNumbers: altNumber,
      shiftingDate: movingDate,
      pickupAddress: {
        shiftingFrom: 'lorem',
        state: pickupState,
        city: pickupCity,
        address: pickupAddress,
        pincode: pickupPincode,
        locality: pickupLocality,
        landmark: pickupLandmark,
        floor: pickupCurrentFloor,
        isLiftAvailable: pickupLiftStatus
      },
      dropAddress: {
        shiftingTo: 'lorem',
        state: deliveryState,
        city: deliveryCity,
        address: deliveryAddress,
        pincode: deliveryPincode,
        locality: deliveryLocality,
        landmark: deliveryLandmark,
        floor: deliveryCurrentFloor,
        isLiftAvailable: deliveryLiftStatus
      },
      billingBy: billingBy,
      billingDetails: {
        companyName: companyName,
        approvalAuthority: approvalAuthority,
        authorityPersonName: authorityPersonName,
        authorityPersonMobile: authorityMobileNumber,
        companyAddress: companyAddress,
        companyGST: companyGST,
        employeeName: employeeName,
        employeeDesignation: employeeDesignation,
        employeeMobile: employeeMobile
      }
    };
    dispatch(requestToUpdateEnquiry(payload));
    console.log(payload, "payload");
  };

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
      if (enquiryById[0]?.shiftingLuggage.includes(item?._id)) {
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
      <Paper sx={{ padding: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Enquiry Details
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
              <Typography variant="body1" sx={{ mt: 0.7}}  fontWeight={600}  >
                Shifting Type
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onShiftingTypeChange}
                error={
                  formik?.errors?.addEnquiry?.shiftingType &&
                  formik?.touched?.addEnquiry?.shiftingType
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={shiftingType}
                data={SHIFTING_TYPES_CONSTANTS}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Billing By
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                data={BILLING_BY}
                value={billingBy}
                onChange={onBillingByChange}
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
              />
            </Grid>

            {billingBy === 'by Company' && (
              <Fragment>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Enquiry Manager
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericDropdown
                    value={enquiryManager}
                    onChange={onEnquiryManagerChange}
                    data={APPROVAL_AUTHORTY}
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
              </Fragment>
            )}
            {billingBy !== 'by Company' && (
              <Fragment>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                    value={partyName}
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                    Mobile
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onMobileNumberChange}
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
                    value={mobile}
                    className={editCustDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editCustDetail
                    }}
                  />
                </Grid>
              </Fragment>
            )}
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                Enquiry Source
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={enquirySource}
                label={'Select Enquiry Source'}
                data={listEnquirySource?.map((item) => ({
                  label: item?.enquirySource,
                  value: item?.enquirySource
                }))}
                onChange={onEnquirySourceChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                Email
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={email}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                Landline Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editCustDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editCustDetail
                }}
                value={landline}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={movingDate}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                Regd. Date and Time
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              {redgDate}
              {/* <GenericInput
                disabled={true}
                value={redgDate}
              /> */}
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

            {billingBy === 'by Company' ? (
              <Fragment>
                <Grid item xs={12}>
                  <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight={600}>
                      Billing Details
                    </Typography>
                    <Tooltip title={'Update Det ails'}>
                      <IconButton onClick={onClickHandlerBillingDetail}>
                        <MdEdit size={20} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <GenericDivider />
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                    Company Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onCompanyNameChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    value={companyName}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                    Approval Authority
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericDropdown
                    onChange={onApprovalAuthorityChange}
                    value={approvalAuthority}
                    data={listApprovalAuthority?.map((item) => ({
                      label: item?.approvalAuthority,
                      value: item?._id
                    }))}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    // label={'Select Approval Authority'}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600} >
                    Authority Person Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onAuthorityPersonNameChange}
                    value={authorityPersonName}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Authority Mobile Number
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onAuthorityMobileNumberChange}
                    value={authorityMobileNumber}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Company Address
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onCompanyAddressChange}
                    value={companyAddress}
                    multiline
                    // rows={3.5}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Employee Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onEmployeeNameChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    value={employeeName}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Employee Designation
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onEmployeeDesignationChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    value={employeeDesignation}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                    Employee Mobile No.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput
                    onChange={onEmployeeMobileChange}
                    className={editBillingDetail ? 'editable-input' : ''}
                    inputProps={{
                      disabled: editBillingDetail
                    }}
                    value={employeeMobile}
                  />
                </Grid>
              </Fragment>
            ) : null}
            {!editCustDetail && (
              <Fragment>
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
              </Fragment>
            )}
            <Grid item xs={12}>
            {isShowDetailUpdateBtn && (
              <GenericLoadingButton sx={{ my: 3, float: 'right' }} onClick={onUpdateEnquiryHandler}>
                <span>update</span>
              </GenericLoadingButton>
            )}
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Paper sx={{ padding: '30px', my: 3 }}>
        <form>
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
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onPickUpPincodeChange}
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
                value={pickupPincode}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpStateChange}
                data={pickup?.state}
                value={pickupState}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpCityChange}
                data={pickup?.city}
                value={pickupCity}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpLocalityChange}
                data={pickup?.locality}
                value={pickupLocality}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={pickupLandmark}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Current Floor
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onPickUpCurrentFloorChange}
                data={listFloor.map((item) => ({
                  label: item?.floor,
                  value: item?.floor
                }))}
                value={pickupCurrentFloor}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={pickupLiftStatus}
                className={editPikupAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editPikupAdd
                }}
              />
            </Grid>
            <Grid item md={8}></Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={pickupAddress}
              />
            </Grid>

            <Grid item xs={12}>
              {isShowPickupUpdateBtn &&(
              <GenericLoadingButton sx={{ my: 3, float: 'right' }} onClick={onUpdateEnquiryHandler}>
                <span>update</span>
              </GenericLoadingButton>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Paper sx={{ padding: '30px' }}>
        <form>
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
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={deliveryPincode}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryStateChange}
                data={drop?.state}
                value={deliveryState}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryCityChange}
                value={deliveryCity}
                data={drop?.city}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryLocalityChange}
                value={deliveryLocality}
                data={drop?.locality}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
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
                value={deliveryLandmark}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Current Floor
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryCurrentFloorChange}
                data={listFloor.map((item) => ({
                  label: item?.floor,
                  value: item?.floor
                }))}
                value={deliveryCurrentFloor}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Lift Status
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                onChange={onDeliveryLiftStatusChange}
                data={[
                  { label: 'YES', value: 'YES' },
                  { label: 'NO', value: 'NO' }
                ]}
                value={deliveryLiftStatus}
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
              />
            </Grid>
            <Grid item md={8}></Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1"  sx={{ mt: 0.7}}  fontWeight={600}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <GenericInput
                onChange={onDeliveryAddressChange}
                multiline
                className={editDiliveryAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editDiliveryAdd
                }}
                rows={3}
                value={deliveryAddress}
              />
            </Grid>
            <Grid item xs={12}>
              {isShowDelivaryUpdateBtn && (
              <GenericLoadingButton
                onClick={onUpdateEnquiryHandler}
                size="medium"
                sx={{ my: 3, float: 'right' }}
                type="submit"
              >
                <span>update</span>
              </GenericLoadingButton>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Fragment>
  );
};
export default AddEnquiry;
