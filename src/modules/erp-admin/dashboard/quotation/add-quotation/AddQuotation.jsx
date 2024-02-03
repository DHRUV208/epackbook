import { Box, FormHelperText, Grid, InputBase, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import { useState, useEffect, Fragment } from 'react';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericSwitch from '../../../../../common-components/form-elements/genericSwitch';
import GenericFreightForm from '../../../../../common-components/page-elements/genericFreightForm';
import Toasty from '../../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestToSaveQuotation,
  updateDropAddress,
  updateDropCity,
  updateDropLocality,
  updateDropPinCode,
  updateDropState,
  updateEnquirySource,
  updateFreightCharges,
  updateGST,
  updateGSTPercentage,
  updateGSTType,
  updateJobType,
  updateJobTypeValue,
  updateLoadType,
  updateLoadingCharge,
  updateLoadingFloor,
  updateLoadingLiftStatus,
  updateLoadingLoaddedBy,
  updateLoadingType,
  updateLorryType,
  updateMobileNumber,
  updateOtherCharge,
  updatePackingCharge,
  updatePackingChargeType,
  updateUnpackingChargeType,
  updateUnpackingCharge,
  updatePackingMaterialType,
  updatePackingMaterialCharge,
  updateUnloadingType,
  updateUnloadingCharge,
  updateUnloadingLoaddedBy,
  updateUnloadingFloor,
  updateUnloadingLiftStatus,
  updateSurcharge,
  updateSurchargeValue,
  updateTransit,
  updateTransitOptions,
  updateTransitShiftingLuggage,
  updateTransitInsurancePercentage,
  updateTransitInsuranceGST,
  updateTransitInsuranceValue,
  updateStorageCharge,
  updateStorageFromCharge,
  updateStorageToCharge,
  updateStorageAmountCharge,
  updateShiftingType,
  updateTemplateName,
  updateQuotationAuto,
  updateQuotationAutoValue,
  updateShiftingLuggage,
  updateDateOfMoving,
  updatePartyName,
  updatePickUpPinCode,
  updatePickUpCity,
  updatePickUpState,
  updatePickUpLocality,
  updatePickUpAddress,
  updateDiscount,
  updateDiscountValue,
  updateOtherDetailsQ1Reply,
  updateOtherDetailsQ2Reply,
  updateOtherDetailsQ1Description,
  updateOtherDetailsQ2Description,
  updateBillingBy,
  updateStorageOptionsCharge,
  updateCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updatePickUpCurrentFloor,
  updatePickUpLiftStatus,
  updateDropCurrentFloor,
  updateDropLiftStatus,
  updateAdvanceAmount,
  updateQuotationDate,
  updateQuotationVehicleType,
  updateQuotationManufacturer,
  updateQuotationModel,
  resetQuotation,
  resetQuotationApiStatus,
  updateExtraJobType,
  updateExtraJobTypeQuantity,
  updateExtraJobCharge,
  updateExtraJobRate,
  jobTypeListUpdate,
  pickUpAddressAutoFetch,
  pickUpAddressAutoFetchDiscard,
  updatePickUpAutoFetch,
  updateDropAddressAutoFetch,
  deliveryAddressAutoFetch,
  deliveryAddressAutoFetchDiscard,
  updateDiscountType,
  updateQuotationDataFromEnquiry,
  resetJobTypeCharges,
  updateTransitChargeList,
  resetTransitChargeList
} from '../../../../../store/slices/QuotationSlice';
import GenericChargesForm from '../../../../../common-components/page-elements/genericChargesForm';
import GenericDatePicker from '../../../../../common-components/form-elements/genericDatePicker';
import { useFormik } from 'formik';
import {
  addQuotationInitialValues,
  addQuotationValidationSchema
} from '../../../../../common-components/validator/quotation-validation';
import { APPROVAL_AUTHORTY, BILLING_BY } from '../../../../../common-components/constants';

import {
  requestToGetDropLocation,
  requestToGetPickLocation,
  utilsDropReset,
  utilsPickUpReset,
  utilsReset
} from '../../../../../store/slices/UtilsSlice';
import { getEnquiryId } from '../../../../../services/quotation';
import { requestToGetAllApprovalAuthority, requestToGetAllEnquirySource } from '../../../../../store/slices/ContentManagementSlice';
import {
  requestToGetAllShiftingLuggage,
  requestToGetAllFloor,
  requestToGetAllInsurancePercentage
} from '../../../../../store/slices/ShiftingManagementSlice';
import shiftingManagement from './../../../../website/features/tabs/shiftingManagement';
import GenericCheckbox from '../../../../../common-components/form-elements/genericCheckbox';
import { requestToGetAllVehicleCompany, requestToGetAllVehicleModel, requestToGetAllVehicleType } from '../../../../../store/slices/VehicleManagementSlice';
const style = {
  display: 'flex',
  width: 'calc(100% - 20px)',
  mr: 1,
  border: '1px solid #C4C4C4',
  borderRadius: '4.5px',
  padding: '0px 8px'
};

const SACD = [
  {
    value: 'SameasClientDetails',
    label: 'Same as Client Details'
  }
];

const AddQuotation = (props) => {
  const [quantity, setQuantity] = useState('');
  const [partrate, setPartRate] = useState('');
  const [partAmount, setPartAmount] = useState('');
  const [fullAmount, setFullAmount] = useState('');
  const [fullRate, setFullRate] = useState('');
  const [jobType, setJobType] = useState('')
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [shiftingLuggageValue, setShiftingLuggageValue] = useState('')

  const [transitshiftingLuggage, setTransitshiftingLuggage] = useState('')
  const [transitpercentage, setTransitpercentage] = useState('3 %')
  const [transitGST, setTransitGST] = useState('0%')
  const [transitvalue, setTransitvalue] = useState('')

  const { enquiryId } = props;
  const dispatch = useDispatch();
  const {
    quotation: {
      addQuotation: { details, freight, charges, billingDetails },
      isSaved,
      isResponseFailed
    },

    appConfiguration: {
      configuration: { listConfiguration }
    },
    vehicleManagement: {
      vehicleModel: { listVehicleModel },
      vehicleType: { listVehicleType },
      vehicleCompany: { listVehicleCompany },
    },
    enquiry: { enquiryById, isEnquiryGetById },
    company: { companyDetails },
    auth: { loginSuccess },
    contentManagement: {
      enquirySource: { listEnquirySource },
      approvalAuthority: { listApprovalAuthority }
    },
    shiftingManagement: {
      shiftingLuggage: { listShiftingLuggage },
      floor: { listFloor }
    },
    enquiry: { },
    utils: { pickup, drop }
  } = useSelector((state) => state);



  const shiftingData = listShiftingLuggage?.filter(item => enquiryById[0]?.shiftingLuggage?.includes(item._id))
  const prefix = listConfiguration[0]?.prefix
  const suffix = listConfiguration[0]?.initialValue



  const actValue = ((prefix)?.toUpperCase() + suffix)


  const formik = useFormik({
    initialValues: addQuotationInitialValues,
    validationSchema: addQuotationValidationSchema
  });
  const onShiftingTypeChange = (evt) => {
    formik.setFieldValue('addQuotation.details.shiftingType', evt?.target?.value);
    dispatch(updateShiftingType(evt?.target?.value));
  };
  const onShiftingLuggageChange = (evt) => {
    setShiftingLuggageValue(evt?.target?.value)
    formik.setFieldValue('addQuotation.details.shiftingLuggage', evt?.target?.value);
    dispatch(updateShiftingLuggage(evt?.target?.value));
  };
  const onTemplateNameChange = (evt) => {
    formik.setFieldValue('addQuotation.details.templateName', evt?.target?.value);
    dispatch(updateTemplateName(evt?.target?.value));
  };
  const onQuotationAutoChange = (evt) => {
    const { checked } = evt.target;
    dispatch(updateQuotationAuto(checked));
  };
  const onQuotationAutoValueChange = (evt) => {

    dispatch(updateQuotationAutoValue(evt?.target?.value));
  };
  // const onBillingByChange = (evt) => {
  //   formik.setFieldValue('addQuotation.details.billingBy', evt?.target?.value);
  //   dispatch(updateBillingBy(evt?.target?.value));
  // };
  const onEnquirySourceChange = (evt) => {
    formik.setFieldValue('addQuotation.details.enquirySource', evt?.target?.value);
    dispatch(updateEnquirySource(evt?.target?.value));
  };
  const onQuotationDateChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addQuotation.details.quotationDate', new Date($d).getTime());
    dispatch(updateQuotationDate(new Date($d).getTime()));
  };
  const onDateOfMovingChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addQuotation.details.dateOfMoving', new Date($d).getTime());
    dispatch(updateDateOfMoving(new Date($d).getTime()));
  };
  const onQuotationVehicleTypeChange = (evt) => {
    formik.setFieldValue('addQuotation.details.vehicleType', evt?.target?.value);
    dispatch(updateQuotationVehicleType(evt?.target?.value));
  };
  const onQuotationManufacturerChange = (evt) => {
    formik.setFieldValue('addQuotation.details.manufacturer', evt?.target?.value);
    dispatch(updateQuotationManufacturer(evt?.target?.value));
  };
  const onQuotationModelChange = (evt) => {
    formik.setFieldValue('addQuotation.details.model', evt?.target?.value);
    dispatch(updateQuotationModel(evt?.target?.value));
  };
  const onPartyNameChange = (evt) => {
    formik.setFieldValue('addQuotation.details.partyName', evt?.target?.value);
    dispatch(updatePartyName(evt?.target?.value));
  };
  const onMobileNumber = (evt) => {
    formik.setFieldValue('addQuotation.details.mobileNumber', evt?.target?.value);
    dispatch(updateMobileNumber(evt?.target?.value));
  };
  const onPickUpPinCodeChange = (evt) => {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    formik.setFieldValue('addQuotation.details.pickUpAddress.pincode', evt?.target?.value);
    if (evt?.target?.value.length === 6) {
      dispatch(updatePickUpPinCode(evt?.target?.value));
    }
  };
  const onPickUpCityChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.city', evt?.target?.value);
    dispatch(updatePickUpCity(evt?.target?.value));
  };
  const onPickUpStateChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.state', evt?.target?.value);
    dispatch(updatePickUpState(evt?.target?.value));
  };
  const onPickUpLocalityChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.locality', evt?.target?.value);
    dispatch(updatePickUpLocality(evt?.target?.value));
  };
  const onPickUpCurrentFloorChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.currentFloor', evt?.target?.value);
    dispatch(updatePickUpCurrentFloor(evt?.target?.value));
  };
  const onPickUpLiftStatusChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.liftStatus', evt?.target?.value);
    dispatch(updatePickUpLiftStatus(evt?.target?.value));
  };
  const onPickUpAddressChange = (evt) => {
    formik.setFieldValue('addQuotation.details.pickUpAddress.address', evt?.target?.value);
    dispatch(updatePickUpAddress(evt?.target?.value));
  };
  const onDropPinCodeChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.pincode', evt?.target?.value);
    dispatch(updateDropPinCode(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
      dispatch(requestToGetDropLocation(evt?.target?.value));
    }
  };
  const onDropCityChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.city', evt?.target?.value);
    dispatch(updateDropCity(evt?.target?.value));
  };
  const onDropStateChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.state', evt?.target?.value);
    dispatch(updateDropState(evt?.target?.value));
  };
  const onDropLocalityChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.locality', evt?.target?.value);
    dispatch(updateDropLocality(evt?.target?.value));
  };
  const onDropCurrentFloorChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.currentFloor', evt?.target?.value);
    dispatch(updateDropCurrentFloor(evt?.target?.value));
  };
  const onDropLiftStatusChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.liftStatus', evt?.target?.value);
    dispatch(updateDropLiftStatus(evt?.target?.value));
  };
  const onDropAddressChange = (evt) => {
    formik.setFieldValue('addQuotation.details.dropAddress.address', evt?.target?.value);
    dispatch(updateDropAddress(evt?.target?.value));
  };

  // <Billing Details>
  const onCompanyNameChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.companyName', evt?.target?.value);
    dispatch(updateCompanyName(evt?.target?.value));
  };
  const onApprovalAuthorityChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.approvalAuthority', evt?.target?.value);
    dispatch(updateApprovalAuthority(evt?.target?.value));
  };
  const onAuthorityPersonNameChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.authorityPersonName', evt?.target?.value);
    dispatch(updateAuthorityPersonName(evt?.target?.value));
  };
  const onAuthorityMobileNumberChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.authorityMobileNumber', evt?.target?.value);
    dispatch(updateAuthorityMobileNumber(evt?.target?.value));
  };
  const onCompanyAddressChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.companyAddress', evt?.target?.value);
    dispatch(updateCompanyAddress(evt?.target?.value));
  };
  const onCompanyGSTChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.companyGST', evt?.target?.value);
    dispatch(updateCompanyGST(evt?.target?.value));
  };
  const onEmployeeNameChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.employeeName', evt?.target?.value);
    dispatch(updateEmployeeName(evt?.target?.value));
  };
  const onEmployeeDesignationChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.employeeDesignation', evt?.target?.value);
    dispatch(updateEmployeeDesignation(evt?.target?.value));
  };
  const onEmployeeMobileChange = (evt) => {
    formik.setFieldValue('addQuotation.billingDetails.employeeMobile', evt?.target?.value);
    dispatch(updateEmployeeMobile(evt?.target?.value));
  };
  // </Billing Details>

  // Freight//////////////
  const onLoadChangeHandler = (evt) => {
    const { value, checked, name, type } = evt.target;
    if (name === 'loadType') {
      dispatch(updateLoadType({ type: value, value: checked }));
    }
  };
  const onLorryTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updateLorryType(value));
  };
  const onFreightChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updateFreightCharges({ type, value }));
  };
  const onPackingChargeTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updatePackingChargeType(value));
  };
  const onPackingChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updatePackingCharge({ type, value }));
  };
  const onUnPackingChargeTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updateUnpackingChargeType(value));
  };
  const onUnpackingChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updateUnpackingCharge({ type, value }));
  };
  const onPackingMaterialTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updatePackingMaterialType(value));
  };
  const onPackingMaterialChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updatePackingMaterialCharge({ type, value }));
  };
  const onLoadingTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updateLoadingType(value));
  };
  const onLoadingChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updateLoadingCharge({ type, value }));
  };
  const onUnloadingTypeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(updateUnloadingType(value));
  };
  const onUnloadingChargeChangeHandler = (evt, type) => {
    const { value } = evt.target;
    dispatch(updateUnloadingCharge({ type, value }));
  };
  const onLoadingLoadedBy = (evt) => {
    const { value } = evt.target;
    dispatch(updateLoadingLoaddedBy(value));
  };
  const onLoadingFloor = (evt) => {
    const { value } = evt.target;
    dispatch(updateLoadingFloor(value));
  };
  const onLoadingLiftStatus = (evt) => {
    const { value } = evt.target;
    dispatch(updateLoadingLiftStatus(value));
  };
  const onUnloadingLoadedBy = (evt) => {
    const { value } = evt.target;
    dispatch(updateUnloadingLoaddedBy(value));
  };
  const onUnloadingFloor = (evt) => {
    const { value } = evt.target;
    dispatch(updateUnloadingFloor(value));
  };
  const onUnloadingLiftStatus = (evt) => {
    const { value } = evt.target;
    dispatch(updateUnloadingLiftStatus(value));
  };
  const onExtraJobTypeChange = (evt) => {
    const { value } = evt.target;
    setJobType(value)
    dispatch(updateExtraJobType(value));
  };
  const onExtraJobTypeQuantityChange = (evt) => {
    const { value } = evt.target;
    setQuantity(value);
    dispatch(updateExtraJobTypeQuantity(value));
  };
  const onExtraJobChargeChange = (evt, type) => {
    const { value } = evt.target;
    if (type === 'fullLoad') {
      setFullAmount(value);
    } else {
      setPartAmount(value);
    }
    dispatch(updateExtraJobCharge({ type, value }));
  };
  const onExtraJobRateChange = (evt, type) => {
    const { value } = evt.target;
    dispatch(updateExtraJobRate({ type, value }));
    if (type === 'fullLoad') {
      setFullRate(value);
      setFullAmount(Number(value) * Number(quantity))
      dispatch(updateExtraJobCharge({ type: 'fullLoad', value: Number(value) * Number(quantity) }));

    } else {
      setPartRate(value);
      setPartAmount(Number(value) * Number(quantity))
      dispatch(updateExtraJobCharge({ type: 'partLoad', value: Number(value) * Number(quantity) }));
    }
  };
  // </Freight> /////////////

  // Charges ///////////////////////////////////
  const onAdvanceAmountChange = (evt) => {
    dispatch(updateAdvanceAmount(evt?.target?.value));
  };
  const onJobTypeValueChange = (evt) => {
    dispatch(updateJobTypeValue(evt?.target?.value));
  };
  const onJobTypeChange = (evt, option) => {
    dispatch(updateJobType(option?.value));
  };
  const onOtherChargeChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherCharge(value));
  };
  const onStorageAmountChange = (evt) => {
    dispatch(updateStorageAmountCharge(evt?.target?.value));
  };
  const onStorageToChange = (evt) => {
    const { $d } = evt;
    dispatch(updateStorageToCharge(new Date($d).getTime()));
  };
  const onStorageFromChange = (evt) => {
    const { $d } = evt;
    dispatch(updateStorageFromCharge(new Date($d).getTime()));
  };
  const onStorageChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateStorageCharge(value));
  };
  const onTransitInsuranceGSTChange = (evt) => {
    setTransitGST(evt?.target?.value)
    dispatch(updateTransitInsuranceGST(evt?.target?.value));
  };
  const onTransitInsuranceValueChange = (evt) => {
    setTransitvalue(evt?.target?.value)
    dispatch(updateTransitInsuranceValue(evt?.target?.value));
  };
  const onTransitInsurancePercentageChange = (evt) => {
    setTransitpercentage(evt?.target?.value)
    dispatch(updateTransitInsurancePercentage(evt?.target?.value));
  };
  const onTransitShiftingLuggageChange = (evt) => {
    setTransitshiftingLuggage(evt?.target?.value)
    dispatch(updateTransitShiftingLuggage(evt?.target?.value));
  };
  const onTransitOptionsChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateTransitOptions(value));
  };
  const onTransitChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateTransit(value));
  };
  const onGSTTypeChange = (evt) => {
    dispatch(updateGSTType(evt?.target?.value));
  };
  const onGSTPercentageChange = (evt) => {
    dispatch(updateGSTPercentage(evt?.target?.value));
  };
  const onGSTChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateGST(value));
  };
  const onSurchargeValueChange = (evt) => {
    dispatch(updateSurchargeValue(evt?.target?.value));
  };
  const onSurchargeChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateSurcharge(value));
  };
  const onQuotationDiscount = (evt) => {
    dispatch(updateDiscount(evt?.target?.value));
  };
  const onQuotationDiscountType = (evt) => {
    dispatch(updateDiscountType(evt?.target?.value));
  };
  const onQuotationDiscountValue = (evt) => {
    dispatch(updateDiscountValue(evt?.target?.value));
  };

  // const onQuotationFlatDiscountValue = (evt) => {
  //     dispatch(updateDiscountValue(evt?.target?.value));
  // };

  const onOtherDetailsQ1ReplyChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherDetailsQ1Reply(value));
  };
  const onOtherDetailsQ2ReplyChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherDetailsQ2Reply(value));
  };
  const onOtherDetailsQ1DescriptionChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherDetailsQ1Description(value));
  };
  const onOtherDetailsQ2DescriptionChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherDetailsQ2Description(value));
  };
  const onStorageOptionsChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateStorageOptionsCharge(value));
  };

  const addTransitCharges = () => {
    if (transitshiftingLuggage !== '' && transitpercentage !== '') {
      const listCharge = [...charges?.transitInsurance?.listTransitCharges]
      listCharge.push(charges?.transitInsurance?.charges)
      dispatch(updateTransitChargeList(listCharge))
      setTransitshiftingLuggage('')
      setTransitpercentage('')
      setTransitGST('')
      setTransitvalue('')
      dispatch(resetTransitChargeList())
    }
  }

  const removeTransitItem = (e) => {
    const deleteData = charges?.transitInsurance?.listTransitCharges?.filter((d, index) => e !== d);
    dispatch(updateTransitChargeList(deleteData))
  }



  function fillQuotationForm() {
    if (enquiryById && Array.isArray(enquiryById) && enquiryById.length > 0) {
      const { pickupAddress, dropAddress, billingBy, enquirySource, mobile, partyName, shiftingType, billingDetails: enquiryBillingDetails } = enquiryById[0]
      formik.setFieldValue('addQuotation.details.shiftingType', shiftingType);
      formik.setFieldValue('addQuotation.details.billingBy', billingBy);
      formik.setFieldValue('addQuotation.details.enquirySource', enquirySource);
      formik.setFieldValue('addQuotation.details.partyName', partyName);
      formik.setFieldValue('addQuotation.details.mobileNumber', mobile);
      formik.setFieldValue('addQuotation.billingDetails.companyName', enquiryBillingDetails?.companyName);
      formik.setFieldValue('addQuotation.billingDetails.approvalAuthority', enquiryBillingDetails?.approvalAuthority);
      formik.setFieldValue('addQuotation.billingDetails.authorityPersonName', enquiryBillingDetails?.authorityPersonName);
      formik.setFieldValue('addQuotation.billingDetails.authorityMobileNumber', enquiryBillingDetails?.authorityPersonMobile);
      formik.setFieldValue('addQuotation.billingDetails.companyAddress', enquiryBillingDetails?.companyAddress);
      formik.setFieldValue('addQuotation.billingDetails.companyGST', enquiryBillingDetails?.companyGST);
      formik.setFieldValue('addQuotation.billingDetails.employeeName', enquiryBillingDetails?.employeeName);
      formik.setFieldValue('addQuotation.billingDetails.employeeDesignation', enquiryBillingDetails?.employeeDesignation);
      formik.setFieldValue('addQuotation.billingDetails.employeeMobile', enquiryBillingDetails?.employeeMobile);
      // if (details?.pickUpAddress?.autoFetch === true) {
      dispatch(deliveryAddressAutoFetch(dropAddress))
      dispatch(requestToGetDropLocation(dropAddress?.pincode))
      formik.setFieldValue('addQuotation.details.dropAddress.pincode', dropAddress?.pincode);
      formik.setFieldValue('addQuotation.details.dropAddress.state', dropAddress?.state);
      formik.setFieldValue('addQuotation.details.dropAddress.city', dropAddress?.city);
      formik.setFieldValue('addQuotation.details.dropAddress.currentFloor', dropAddress?.floor);
      formik.setFieldValue('addQuotation.details.dropAddress.liftStatus', dropAddress?.isLiftAvailable);
      formik.setFieldValue('addQuotation.details.dropAddress.address', dropAddress?.address);
      // }
      dispatch(requestToGetPickLocation(pickupAddress?.pincode))
      formik.setFieldValue('addQuotation.details.pickUpAddress.pincode', pickupAddress?.pincode);
      formik.setFieldValue('addQuotation.details.pickUpAddress.state', pickupAddress?.state);
      formik.setFieldValue('addQuotation.details.pickUpAddress.city', pickupAddress?.city);
      formik.setFieldValue('addQuotation.details.pickUpAddress.currentFloor', pickupAddress?.floor);
      formik.setFieldValue('addQuotation.details.pickUpAddress.liftStatus', pickupAddress?.isLiftAvailable);
      formik.setFieldValue('addQuotation.details.pickUpAddress.address', pickupAddress?.address);
      setShiftingLuggageValue(shiftingData[0]?._id)
      dispatch(updateBillingBy(billingBy))
      dispatch(updateShiftingLuggage(shiftingLuggageValue))
      dispatch(updateQuotationDataFromEnquiry({ billingBy, enquirySource, mobile, partyName, shiftingType }))
      formik.setFieldValue('addQuotation.details.enquirySource', details?.enquirySource);
      dispatch(updateTransitInsuranceGST(transitGST));
      dispatch(updateTransitInsurancePercentage(transitpercentage));
    }
  }


  const OnPickUpAddressAutoFetch = (evt) => {
    if (enquiryById && Array.isArray(enquiryById) && enquiryById.length > 0) {
      const { pickupAddress } = enquiryById[0]
      const { checked } = evt.target;
      dispatch(updatePickUpAutoFetch(checked))
      if (checked) {
        dispatch(pickUpAddressAutoFetch(pickupAddress))
        dispatch(requestToGetPickLocation(pickupAddress?.pincode))
        formik.setFieldValue('addQuotation.details.pickUpAddress.pincode', pickupAddress?.pincode);
        formik.setFieldValue('addQuotation.details.pickUpAddress.state', pickupAddress?.state);
        formik.setFieldValue('addQuotation.details.pickUpAddress.city', pickupAddress?.city);
        formik.setFieldValue('addQuotation.details.pickUpAddress.currentFloor', pickupAddress?.floor);
        formik.setFieldValue(
          'addQuotation.details.pickUpAddress.liftStatus',
          pickupAddress?.isLiftAvailable
        );
        formik.setFieldValue('addQuotation.details.pickUpAddress.address', pickupAddress?.address);
      } else {
        dispatch(pickUpAddressAutoFetchDiscard());
        formik.setFieldValue('addQuotation.details.pickUpAddress.pincode', '');
        formik.setFieldValue('addQuotation.details.pickUpAddress.state', '');
        formik.setFieldValue('addQuotation.details.pickUpAddress.city', '');
        formik.setFieldValue('addQuotation.details.pickUpAddress.currentFloor', '');
        formik.setFieldValue('addQuotation.details.pickUpAddress.liftStatus', '');
        formik.setFieldValue('addQuotation.details.pickUpAddress.address', '');
        dispatch(utilsPickUpReset());
      }
    }
  };


  const OnDropAddressAutoFetch = (evt) => {
    if (enquiryById && Array.isArray(enquiryById) && enquiryById.length > 0) {
      const { dropAddress } = enquiryById[0]
      const { checked } = evt.target;
      dispatch(updateDropAddressAutoFetch(checked));
      if (checked) {
        dispatch(deliveryAddressAutoFetch(dropAddress));
        dispatch(requestToGetDropLocation(dropAddress?.pincode));
        formik.setFieldValue('addQuotation.details.dropAddress.pincode', dropAddress?.pincode);
        formik.setFieldValue('addQuotation.details.dropAddress.state', dropAddress?.state);
        formik.setFieldValue('addQuotation.details.dropAddress.city', dropAddress?.city);
        formik.setFieldValue('addQuotation.details.dropAddress.currentFloor', dropAddress?.floor);
        formik.setFieldValue(
          'addQuotation.details.dropAddress.liftStatus',
          dropAddress?.isLiftAvailable
        );
        formik.setFieldValue('addQuotation.details.dropAddress.address', dropAddress?.address);
      } else {
        dispatch(deliveryAddressAutoFetchDiscard());
        formik.setFieldValue('addQuotation.details.dropAddress.pincode', '');
        formik.setFieldValue('addQuotation.details.dropAddress.state', '');
        formik.setFieldValue('addQuotation.details.dropAddress.city', '');
        formik.setFieldValue('addQuotation.details.dropAddress.currentFloor', '');
        formik.setFieldValue('addQuotation.details.dropAddress.liftStatus', '');
        formik.setFieldValue('addQuotation.details.dropAddress.address', '');
        dispatch(utilsDropReset());
      }
    }
  };

  const submitJobType = () => {
    if (jobType !== '' && !freight?.jobTypeList.some(item => item.jobType === jobType)) {
      const jobListt = [...freight?.jobTypeList];
      jobListt.push(freight?.jobTypeCharges);
      dispatch(jobTypeListUpdate(jobListt));
      setFullRate('');
      setPartRate('');
      setFullAmount('');
      setPartAmount('');
      setJobType("")
      setQuantity('');
      dispatch(resetJobTypeCharges())
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      if (freight?.jobTypeList.some(item => item.jobType === jobType)) {
        setMessage('Job Type already exist')
      } else {
        setMessage('Please add one Job, Quantity and atleast one rate or select different Job Type')
      }
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3500);
    }
  };

  const onSaveQuotationHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      enquiryId: enquiryId,
      authId: loginSuccess?.id,
      shiftingType: details?.shiftingType,
      shiftingLuggage: details?.shiftingLuggage,
      vehicleType: details?.vehicleType, // ""
      manufacture: details?.manufacturer, // ""
      model: details?.model, // ""
      templateId: details?.templateName,
      quotationDate: details?.quotationDate,
      quotationNumber: actValue,
      enquirySource: details?.enquirySource,
      partyCompanyName: details?.partyName,
      partyName: details?.partyName,
      email: '',
      mobile: details?.mobileNumber,
      shiftingDate: details?.dateOfMoving,
      pickupAddress: {
        shiftingFrom: details?.pickup?.address,
        state: details?.pickUpAddress?.state,
        city: details?.pickUpAddress?.city,
        pincode: details?.pickUpAddress?.pincode,
        locality: details?.pickUpAddress?.locality,
        landmark: '',
        floor: details?.pickUpAddress?.currentFloor,
        isLiftAvailable: details?.pickUpAddress?.liftStatus
      },
      dropAddress: {
        shiftingTo: details?.dropAddress?.address,
        state: details?.dropAddress?.state,
        city: details?.dropAddress?.city,
        pincode: details?.dropAddress?.pincode,
        locality: details?.dropAddress?.locality,
        landmark: '',
        floor: details?.dropAddress?.currentFloor,
        isLiftAvailable: details?.dropAddress?.liftStatus
      },
      partLoad: freight?.partLoad,
      fullLoad: freight?.fullLoad,
      openBody: freight?.partLoad,
      closeBody: freight?.fullLoad,
      lorryType: freight?.lorryType,
      freightChargesStatus: 'NOT_REQUIRED',
      partLoadCharge: freight?.freightCharges?.partLoadCharge,
      fullLoadCharge: freight?.freightCharges?.fullLoadCharge,
      packagingChargesStatus: freight?.packingCharge?.type,
      packagingPartLoadCharges: freight?.packingCharge?.charges?.partLoadCharge,
      packagingFullLoadCharges: freight?.packingCharge?.charges?.fullLoadCharge,
      unPackagingChargesStatus: freight?.unpackingCharge?.type,
      unPackagingPartLoadCharges: freight?.unpackingCharge?.charges?.partLoadCharge,
      unPackagingFullLoadCharges: freight?.unpackingCharge?.charges?.fullLoadCharge,
      unLoadingChargesStatus: freight?.unloadingCharge?.type,
      unLoadingPartLoadCharges: freight?.unloadingCharge?.charges?.partLoadCharge,
      unLoadingFullLoadCharges: freight?.unloadingCharge?.charges?.fullLoadCharge,
      packingMaterialChargesStatus: freight?.packingMaterialCharge?.type,
      packingMaterialPartLoadCharges: freight?.packingMaterialCharge?.charges?.partLoadCharge,
      packingMaterialFullLoadCharges: freight?.packingMaterialCharge?.charges?.fullLoadCharge,
      loadingChargesStatus: freight?.loadingCharge?.type,
      loadingPartLoadCharges: freight?.loadingCharge?.charges?.partLoadCharge,
      loadingFullLoadCharges: freight?.loadingCharge?.charges?.fullLoadCharge,
      gstStatus: charges?.gst?.mode,
      gstType: charges?.gst?.type,
      gstPercentage: charges?.gst?.percentage,
      surchargeIsRequired: charges?.surcharge?.required,
      surchargeCharges: charges?.surcharge?.value,
      discountType: charges?.discount?.type,
      discountAmount: charges?.discount?.value,
      transitInsurance: {
        isRequired: charges?.transitInsurance?.required,
        transitType: charges?.transitInsurance?.options,
        charges: charges?.transitInsurance?.listTransitCharges
      },
      storageCharges: {
        isRequired: charges?.storeCharges?.required,
        storageChargesType: charges?.storeCharges?.options,
        fromDate: charges?.storeCharges?.from,
        toDate: charges?.storeCharges?.to,
        amount: charges?.storeCharges?.value
      },
      otherCharges: freight?.jobTypeList,
      quotationAmount: '0',
      advanceAmount: charges?.advanceAmount,
      billingBy: details?.billingBy,
      billingDetails: {
        companyName: billingDetails?.companyName,
        approvalAuthority: billingDetails?.approvalAuthority,
        authorityPersonName: billingDetails?.authorityPersonName,
        authorityPersonMobile: billingDetails?.authorityMobileNumber,
        companyAddress: billingDetails?.companyAddress,
        companyGST: billingDetails?.companyGST,
        employeeName: billingDetails?.employeeName,
        employeeDesignation: billingDetails?.employeeDesignation,
        employeeMobile: billingDetails?.employeeMobile
      },
      otherDetail1: charges?.otherDetails?.q1Description,
      otherDetail2: charges?.otherDetails?.q2Description,
      createdBy: loginSuccess?.id //login user authId
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveQuotation(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };




  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(utilsReset());
    dispatch(resetQuotation());
    dispatch(requestToGetAllShiftingLuggage());
    dispatch(requestToGetAllFloor());
    dispatch(requestToGetAllEnquirySource());
    dispatch(requestToGetAllApprovalAuthority());
    dispatch(requestToGetAllVehicleType());
    dispatch(requestToGetAllVehicleCompany());
    dispatch(requestToGetAllVehicleModel());
    dispatch(requestToGetAllInsurancePercentage())
  }, []);


  useEffect(() => {
    if (isEnquiryGetById) {
      fillQuotationForm()
    }

  }, [isEnquiryGetById]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Congratulations Quotation Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetQuotation());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetQuotationApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);

  const gridDistributionValue = details?.billingBy === 'byIndividual' ? 6 : 4;

  return (
    <Fragment>
      <Paper sx={{ padding: '30px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onKeyUp={formik.handleChange}
                    // error={
                    //   formik?.errors?.addQuotation?.details?.shiftingType &&
                    //   formik?.touched?.addQuotation?.details?.shiftingType
                    // }
                    value={formik?.values?.addQuotation?.details?.shiftingType}
                    onFocus={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onChange={onShiftingTypeChange}
                    data={[
                      { label: 'Local', value: 'LOCAL' },
                      { label: 'Domestic', value: 'DOMESTIC' }
                    ]}
                    label={'Shifting Type'}
                    selected={'Local'}
                  />
                  {/* <FormHelperText error>
                    {formik.errors.addQuotation?.details?.shiftingType &&
                      formik.touched.addQuotation?.details?.shiftingType &&
                      formik.errors.addQuotation?.details?.shiftingType}
                  </FormHelperText> */}
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onChange={onShiftingLuggageChange}
                    // error={
                    //   formik?.errors?.addQuotation?.details?.shiftingLuggage &&
                    //   formik?.touched?.addQuotation?.details?.shiftingLuggage
                    // }
                    onKeyUp={formik.handleChange}
                    onFocus={formik?.handleChange}
                    onBlur={formik.handleBlur}
                    value={shiftingLuggageValue}
                    data={shiftingData.map((item) => ({
                      label: item?.shiftingLuggage,
                      value: item?._id
                    }))}
                    label={'Shifting Luggage'}
                  />
                  {/* <FormHelperText error>
                    {formik.errors.addQuotation?.details?.shiftingLuggage &&
                      formik.touched.addQuotation?.details?.shiftingLuggage &&
                      formik.errors.addQuotation?.details?.shiftingLuggage}
                  </FormHelperText> */}
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onChange={onTemplateNameChange}
                    onKeyUp={formik.handleChange}
                    onFocus={formik?.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addQuotation?.details?.templateName}
                    error={
                      formik?.errors?.addQuotation?.details?.templateName &&
                      formik?.touched?.addQuotation?.details?.templateName
                    }
                    data={[
                      { label: 'Quotation New Template', value: 1 },
                      { label: 'Quotation New Template2', value: 2 }
                    ]}
                    label={'Template'}
                  />
                  <FormHelperText error>
                    {formik.errors.addQuotation?.details?.templateName &&
                      formik.touched.addQuotation?.details?.templateName &&
                      formik.errors.addQuotation?.details?.templateName}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={style}>
                    <Stack direction="row" spacing={0} alignItems={'center'}>
                      <GenericSwitch
                        onChange={onQuotationAutoChange}
                        checked={details?.quotationAuto}
                        start={'Auto'}
                        end={'Manual'}
                      />
                      <InputBase
                        onChange={onQuotationAutoValueChange}
                        disabled={!details?.quotationAuto}
                        sx={{ ml: 1, flex: 1 }}
                        type="text"
                        value={actValue}
                        fullWidth
                        autoFocus
                        style={{
                          backgroundColor: '#eee',
                          padding: '0 10px'
                        }}
                      />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    label={'Billing By'}
                    value={enquiryById[0]?.billingBy === 'by Individual' ? 'By Individual' : 'By Company'}
                  // disabled={true}
                  />
                  {/* <GenericDropdown
                    label={'Billing By'}
                    data={[
                      {
                        label: enquiryById[0]?.billingBy === 'by Individual' ? 'By Individual' : 'By Company',
                        value: enquiryById[0]?.billingBy === 'by Individual' ? 'by Individual' : 'by Company'
                      }
                    ]}
                    // onChange={onBillingByChange}
                    onFocus={formik?.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    value={formik?.values?.addQuotation?.details?.billingBy}
                    error={
                      formik?.errors?.addQuotation?.details?.billingBy &&
                      formik?.touched?.addQuotation?.details?.billingBy
                    }
                  />
                  <FormHelperText error>
                    {formik.errors.addQuotation?.details?.billingBy &&
                      formik.touched.addQuotation?.details?.billingBy &&
                      formik.errors.addQuotation?.details?.billingBy}
                  </FormHelperText> */}
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown
                    onChange={onEnquirySourceChange}
                    value={formik?.values?.addQuotation?.details?.enquirySource}
                    onFocus={formik?.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    data={listEnquirySource?.map((item) => ({
                      label: item?.enquirySource,
                      value: item?.enquirySource
                    }))}
                    label={'Enquiry Source'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDatePicker
                    onAccept={onQuotationDateChange}
                    disablePast
                    closeOnSelect={true}
                    error={
                      formik.errors.addQuotation?.details?.quotationDate &&
                      formik.touched.addQuotation?.details?.quotationDate
                    }
                    onKeyUp={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // onChange={onDateOfMovingChange}
                    label={'Quotation Date'}
                    defaultValue={dayjs(new Date())}
                  />
                  <FormHelperText error>
                    {formik.errors.addQuotation?.details?.quotationDate &&
                      formik.touched.addQuotation?.details?.quotationDate &&
                      formik.errors.addQuotation?.details?.quotationDate}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDatePicker
                    onChange={onDateOfMovingChange}
                    disablePast
                    closeOnSelect={true}
                    defaultValue={dayjs(new Date())}
                    error={
                      formik.errors.addQuotation?.details?.dateOfMoving &&
                      formik.touched.addQuotation?.details?.dateOfMoving
                    }
                    onKeyUp={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'Date of Moving'}
                  />
                  <FormHelperText error>
                    {formik.errors.addQuotation?.details?.dateOfMoving &&
                      formik.touched.addQuotation?.details?.dateOfMoving &&
                      formik.errors.addQuotation?.details?.dateOfMoving}
                  </FormHelperText>
                </Grid>
                {details?.shiftingLuggage === '65745a4a13a0110ec4fde369' && (
                  <Fragment>
                    <Grid item xs={12} md={4}>
                      <GenericDropdown
                        onChange={onQuotationVehicleTypeChange}
                        onFocus={formik?.handleChange}
                        data={listVehicleType?.map((item) => ({
                          label: item?.vehicleType,
                          value: item?._id
                        }))}
                        onBlur={formik.handleBlur}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addQuotation?.details?.vehicleType}
                        label={'Vehicle Type'}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <GenericDropdown
                        onChange={onQuotationManufacturerChange}
                        onFocus={formik?.handleChange}
                        data={listVehicleCompany?.map((item) => ({
                          label: item?.vehicleCompanyName,
                          value: item?._id
                        }))}
                        onBlur={formik.handleBlur}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addQuotation?.details?.manufacturer}
                        label={'Manufacturer'}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <GenericDropdown
                        onChange={onQuotationModelChange}
                        onFocus={formik?.handleChange}
                        onBlur={formik.handleBlur}
                        data={listVehicleModel?.map((item) => ({
                          label: item?.vehicleModel,
                          value: item?._id
                        }))}
                        onKeyUp={formik.handleChange}
                        value={formik?.values?.addQuotation?.details?.model}
                        label={'Model'}
                      />
                    </Grid>
                  </Fragment>
                )}

                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
                    Billing Details
                  </Typography>
                </Grid>
                {details?.billingBy === 'by Company' && (
                  <Fragment>
                    <Grid item xs={12} md={3}>
                      <GenericInput
                        onChange={onCompanyNameChange}
                        error={
                          formik?.errors?.addQuotation?.billingDetails?.companyName &&
                          formik?.touched?.addQuotation?.billingDetails?.companyName
                        }
                        value={formik?.values?.addQuotation?.billingDetails?.companyName}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.billingDetails?.companyName &&
                          formik?.touched?.addQuotation?.billingDetails?.companyName &&
                          formik?.errors?.addQuotation?.billingDetails?.companyName
                        }
                        label={'Company Name *'}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <GenericDropdown
                        onChange={onApprovalAuthorityChange}
                        value={formik?.values?.addQuotation?.billingDetails?.approvalAuthority}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        error={
                          formik?.errors?.addQuotation?.billingDetails?.approvalAuthority &&
                          formik?.touched?.addQuotation?.billingDetails?.approvalAuthority
                        }
                        label={'Approval Authority'}
                        data={listApprovalAuthority?.map((item) => ({
                          label: item?.approvalAuthority,
                          value: item?._id
                        }))}
                      />
                      <FormHelperText error>
                        {formik.errors.addQuotation?.billingDetails?.approvalAuthority &&
                          formik.touched.addQuotation?.billingDetails?.approvalAuthority &&
                          formik.errors.addQuotation?.billingDetails?.approvalAuthority}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <GenericInput
                        onChange={onAuthorityPersonNameChange}
                        error={
                          formik?.errors?.addQuotation?.billingDetails?.authorityPersonName &&
                          formik?.touched?.addQuotation?.billingDetails?.authorityPersonName
                        }
                        value={formik?.values?.addQuotation?.billingDetails?.authorityPersonName}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.billingDetails?.authorityPersonName &&
                          formik?.touched?.addQuotation?.billingDetails?.authorityPersonName &&
                          formik?.errors?.addQuotation?.billingDetails?.authorityPersonName
                        }
                        label={'Authority Person Name'}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <GenericInput
                        onChange={onAuthorityMobileNumberChange}
                        error={
                          formik?.errors?.addQuotation?.billingDetails?.authorityMobileNumber &&
                          formik?.touched?.addQuotation?.billingDetails?.authorityMobileNumber
                        }
                        value={formik?.values?.addQuotation?.billingDetails?.authorityMobileNumber}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.billingDetails?.authorityMobileNumber &&
                          formik?.touched?.addQuotation?.billingDetails?.authorityMobileNumber &&
                          formik?.errors?.addQuotation?.billingDetails?.authorityMobileNumber
                        }
                        label={'Authority Mobile Number'}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onCompanyAddressChange}
                        error={
                          formik?.errors?.addQuotation?.billingDetails?.companyAddress &&
                          formik?.touched?.addQuotation?.billingDetails?.companyAddress
                        }
                        value={formik?.values?.addQuotation?.billingDetails?.companyAddress}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.billingDetails?.companyAddress &&
                          formik?.touched?.addQuotation?.billingDetails?.companyAddress &&
                          formik?.errors?.addQuotation?.billingDetails?.companyAddress
                        }
                        label={'Company Address *'}
                        multiline
                        rows={3}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                          <GenericInput
                            onChange={onCompanyGSTChange}
                            value={formik?.values?.addQuotation?.billingDetails?.companyGST}
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleChange}
                            onKeyUp={formik.handleChange}
                            label={'Company GST'}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <GenericInput
                            onChange={onEmployeeNameChange}
                            value={formik?.values?.addQuotation?.billingDetails?.employeeName}
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleChange}
                            onKeyUp={formik.handleChange}
                            label={'Employee Name'}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <GenericInput
                            onChange={onEmployeeDesignationChange}
                            value={
                              formik?.values?.addQuotation?.billingDetails?.employeeDesignation
                            }
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleChange}
                            onKeyUp={formik.handleChange}
                            label={'Employee Designation'}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <GenericInput
                            onChange={onEmployeeMobileChange}
                            value={formik?.values?.addQuotation?.billingDetails?.employeeMobile}
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleChange}
                            onKeyUp={formik.handleChange}
                            label={'Employee Mobile Number'}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Fragment>
                )}
                {details?.billingBy === 'by Individual' && (
                  <Fragment>
                    <Grid item xs={12} md={gridDistributionValue}>
                      <GenericInput
                        onChange={onPartyNameChange}
                        error={
                          formik?.errors?.addQuotation?.details?.partyName &&
                          formik?.touched?.addQuotation?.details?.partyName
                        }
                        value={formik?.values?.addQuotation?.details?.partyName}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.details?.partyName &&
                          formik?.touched?.addQuotation?.details?.partyName &&
                          formik?.errors?.addQuotation?.details?.partyName
                        }
                        label={'Party Name *'}
                      />
                    </Grid>
                    <Grid item xs={12} md={gridDistributionValue}>
                      <GenericInput
                        onChange={onMobileNumber}
                        error={
                          formik?.errors?.addQuotation?.details?.mobileNumber &&
                          formik?.touched?.addQuotation?.details?.mobileNumber
                        }
                        value={formik?.values?.addQuotation?.details?.mobileNumber}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.details?.mobileNumber &&
                          formik?.touched?.addQuotation?.details?.mobileNumber &&
                          formik?.errors?.addQuotation?.details?.mobileNumber
                        }
                        label={'Mobile *'}
                      />
                    </Grid>
                  </Fragment>
                )}

                <Grid item xs={12}>
                  <Typography variant={'h6'} fontWeight={600}>
                    Pick-Up Address
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Grid item md={4} xs={12}>
                    <Box>
                      <GenericCheckbox
                        onChange={OnPickUpAddressAutoFetch}
                        list={[
                          {
                            value: 'SameasClientDetails',
                            label: "Same as Client's Pick Up Address",
                            checked: true
                          }
                        ]}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onPickUpPinCodeChange}
                        error={
                          formik?.errors?.addQuotation?.details?.pickUpAddress?.pincode &&
                          formik?.touched?.addQuotation?.details?.pickUpAddress?.pincode
                        }
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.pincode}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.details?.pickUpAddress?.pincode &&
                          formik?.touched?.addQuotation?.details?.pickUpAddress?.pincode &&
                          formik?.errors?.addQuotation?.details?.pickUpAddress?.pincode
                        }
                        label={'Pincode *'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onPickUpStateChange}
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.state}
                        data={pickup?.state}
                        label={'State'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onPickUpCityChange}
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.city}
                        data={pickup?.city}
                        label={'City'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onPickUpLocalityChange}
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.locality}
                        data={pickup?.locality}
                        label={'Locality'}
                      />
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                      <GenericDropdown label={'Select Floor'} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown label={'Lify Status'} />
                    </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <GenericDropdown
                        onChange={onPickUpCurrentFloorChange}
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.currentFloor}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        data={listFloor?.map((item) => ({
                          label: item?.floor,
                          value: item?.floor
                        }))}
                        label={'Currunt Floor'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <GenericDropdown
                        onChange={onPickUpLiftStatusChange}
                        value={formik?.values?.addQuotation?.details?.pickUpAddress?.liftStatus}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        data={[
                          { label: 'YES', value: 'YES' },
                          { label: 'NO', value: 'NO' }
                        ]}
                        label={'Lift Status'}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onPickUpAddressChange}
                    label={'Address'}
                    // error={
                    //   formik?.errors?.addQuotation?.details?.pickUpAddress?.address &&
                    //   formik?.touched?.addQuotation?.details?.pickUpAddress?.address
                    // }
                    value={formik?.values?.addQuotation?.details?.pickUpAddress?.address}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    // helperText={
                    //   formik?.errors?.addQuotation?.details?.pickUpAddress?.address &&
                    //   formik?.touched?.addQuotation?.details?.pickUpAddress?.address &&
                    //   formik?.errors?.addQuotation?.details?.pickUpAddress?.address
                    // }
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'h6'} fontWeight={600}>
                    Delivery Address
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Grid item md={4} xs={12}>
                    <Box>
                      <GenericCheckbox
                        onChange={OnDropAddressAutoFetch}
                        list={[
                          {
                            value: 'SameasClientDetails',
                            label: "Same as Client's Drop Address",
                            checked: true
                          }
                        ]}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <GenericInput
                        onChange={onDropPinCodeChange}
                        error={
                          formik?.errors?.addQuotation?.details?.dropAddress?.pincode &&
                          formik?.touched?.addQuotation?.details?.dropAddress?.pincode
                        }
                        value={formik?.values?.addQuotation?.details?.dropAddress?.pincode}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        helperText={
                          formik?.errors?.addQuotation?.details?.dropAddress?.pincode &&
                          formik?.touched?.addQuotation?.details?.dropAddress?.pincode &&
                          formik?.errors?.addQuotation?.details?.dropAddress?.pincode
                        }
                        label={'Pincode *'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onDropStateChange}
                        value={formik?.values?.addQuotation?.details?.dropAddress?.state}
                        data={drop?.state}
                        label={'State'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onDropCityChange}
                        value={formik?.values?.addQuotation?.details?.dropAddress?.city}
                        data={drop?.city}
                        label={'City'}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GenericDropdown
                        onChange={onDropLocalityChange}
                        value={formik?.values?.addQuotation?.details?.dropAddress?.locality}
                        data={drop?.locality}
                        label={'Locality'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <GenericDropdown
                        onChange={onDropCurrentFloorChange}
                        value={formik?.values?.addQuotation?.details?.dropAddress?.currentFloor}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        data={listFloor?.map((item) => ({
                          label: item?.floor,
                          value: item?.floor
                        }))}
                        label={'Currunt Floor'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <GenericDropdown
                        onChange={onDropLiftStatusChange}
                        value={formik?.values?.addQuotation?.details?.dropAddress?.liftStatus}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleChange}
                        onKeyUp={formik.handleChange}
                        defaultValue={'NO'}
                        data={[
                          { label: 'YES', value: 'YES' },
                          { label: 'NO', value: 'NO' }
                        ]}
                        label={'Lift Status'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onDropAddressChange}
                    label={'Address'}
                    value={formik?.values?.addQuotation?.details?.dropAddress?.address}
                    onBlur={formik.handleBlur}
                    onFocus={formik.handleChange}
                    onKeyUp={formik.handleChange}
                    // error={
                    //   formik?.errors?.addQuotation?.details?.dropAddress?.address &&
                    //   formik?.touched?.addQuotation?.details?.dropAddress?.address
                    // }
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // helperText={
                    //   formik?.errors?.addQuotation?.details?.dropAddress?.address &&
                    //   formik?.touched?.addQuotation?.details?.dropAddress?.address &&
                    //   formik?.errors?.addQuotation?.details?.dropAddress?.address
                    // }
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <GenericFreightForm
                onLoadChangeHandler={onLoadChangeHandler}
                onLorryTypeChangeHandler={onLorryTypeChangeHandler}
                onFreightChargeChangeHandler={onFreightChargeChangeHandler}
                onPackingChargeTypeChangeHandler={onPackingChargeTypeChangeHandler}
                onPackingChargeChangeHandler={onPackingChargeChangeHandler}
                onUnPackingChargeTypeChangeHandler={onUnPackingChargeTypeChangeHandler}
                onUnpackingChargeChangeHandler={onUnpackingChargeChangeHandler}
                onPackingMaterialTypeChangeHandler={onPackingMaterialTypeChangeHandler}
                onPackingMaterialChargeChangeHandler={onPackingMaterialChargeChangeHandler}
                onLoadingTypeChangeHandler={onLoadingTypeChangeHandler}
                onLoadingChargeChangeHandler={onLoadingChargeChangeHandler}
                onUnloadingTypeChangeHandler={onUnloadingTypeChangeHandler}
                onUnloadingChargeChangeHandler={onUnloadingChargeChangeHandler}
                onLoadingLoadedBy={onLoadingLoadedBy}
                onUnloadingLoadedBy={onUnloadingLoadedBy}
                onLoadingFloor={onLoadingFloor}
                onLoadingLiftStatus={onLoadingLiftStatus}
                onUnloadingFloor={onUnloadingFloor}
                onUnloadingLiftStatus={onUnloadingLiftStatus}
                onExtraJobRateChange={onExtraJobRateChange}
                onExtraJobChargeChange={onExtraJobChargeChange}
                onExtraJobTypeQuantityChange={onExtraJobTypeQuantityChange}
                onExtraJobTypeChange={onExtraJobTypeChange}
                submitJobType={submitJobType}
                fullRate={fullRate}
                fullAmount={fullAmount}
                partAmount={partAmount}
                partrate={partrate}
                quantity={quantity}
                jobType={jobType}
              />
            </Grid>

            <Grid item xs={12}>
              <GenericChargesForm
                onAdvanceAmountChange={onAdvanceAmountChange}
                onStorageOptionsChange={onStorageOptionsChange}
                onJobTypeValueChange={onJobTypeValueChange}
                onJobTypeChange={onJobTypeChange}
                onOtherChargeChange={onOtherChargeChange}
                onTransitInsuranceGSTChange={onTransitInsuranceGSTChange}
                onTransitInsuranceValueChange={onTransitInsuranceValueChange}
                onTransitInsurancePercentageChange={onTransitInsurancePercentageChange}
                onTransitShiftingLuggageChange={onTransitShiftingLuggageChange}
                onStorageChange={onStorageChange}
                onStorageFromChange={onStorageFromChange}
                onStorageToChange={onStorageToChange}
                onStorageAmountChange={onStorageAmountChange}
                onTransitOptionsChange={onTransitOptionsChange}
                onTransitChange={onTransitChange}
                onGSTTypeChange={onGSTTypeChange}
                onGSTPercentageChange={onGSTPercentageChange}
                onGSTChange={onGSTChange}
                onQuotationDiscount={onQuotationDiscount}
                onQuotationDiscountValue={onQuotationDiscountValue}
                onSurchargeValueChange={onSurchargeValueChange}
                onSurchargeChange={onSurchargeChange}
                onOtherDetailsQ1ReplyChange={onOtherDetailsQ1ReplyChange}
                onOtherDetailsQ2ReplyChange={onOtherDetailsQ2ReplyChange}
                onOtherDetailsQ1DescriptionChange={onOtherDetailsQ1DescriptionChange}
                onOtherDetailsQ2DescriptionChange={onOtherDetailsQ2DescriptionChange}
                onQuotationDiscountType={onQuotationDiscountType}
                transitvalue={transitvalue}
                transitGST={transitGST}
                transitpercentage={transitpercentage}
                transitshiftingLuggage={transitshiftingLuggage}
                addTransitCharges={addTransitCharges}
                removeTransitItem={removeTransitItem}
              // onQuotationFlatDiscountValue={onQuotationFlatDiscountValue}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ my: 3, float: 'right' }}
                onClick={onSaveQuotationHandler}
                type="submit"
              >
                <span>Preview</span>
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
export default AddQuotation;
