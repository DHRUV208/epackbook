import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Box, FormHelperText, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import GenericSwitch from '../../../common-components/form-elements/genericSwitch';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericCheckbox from '../../../common-components/form-elements/genericCheckbox';
import GenericRadio from '../../../common-components/form-elements/genericRadio';
import GenericTextEditor from '../../../common-components/form-elements/genericTextEditor';
import InputBase from '@mui/material/InputBase';
import {
  requestToGetDropLocation,
  requestToGetPickLocation,
  utilsReset
} from '../../../store/slices/UtilsSlice';
import {
  requestToSaveBilty,
  updateBiltyAuto,
  updateBiltyNo,
  updateTemplate,
  updateDateOfBilty,
  updateCheckClientDetails,
  updateConsignerName,
  updateConsignerGST,
  updateConsignerMobile,
  updateConsignerAddress,
  updateConsignerLandmark,
  updateConsignerPinCode,
  updateConsignerState,
  updateConsignerCity,
  updateConsignerLocality,
  updateLoadingAddress,
  updateLoadingLandmark,
  updateLoadingPinCode,
  updateLoadingState,
  updateLoadingCity,
  updateLoadingLocality,
  updateCheckClientDeliveryDetails,
  updateConsigneeName,
  updateConsigneeGST,
  updateConsigneeMobile,
  updateConsigneeAddress,
  updateConsigneeLandmark,
  updateConsigneePinCode,
  updateConsigneeState,
  updateConsigneeCity,
  updateConsigneeLocality,
  updateUnloadingAddress,
  updateUnloadingLandmark,
  updateUnloadingPinCode,
  updateUnloadingState,
  updateUnloadingCity,
  updateUnloadingLocality,
  updateVehicleInvoiceNo,
  updateVehicleType,
  updateVehicleNo,
  updateVehicleFromLocation,
  updateVehicleToLocation,
  updateVehicleDriverName,
  updateVehicleDriverMobile,
  updateVehicleDriverLicence,
  updateVehicleSealNo,
  updateVehicleInDate,
  updateVehicleOutDate,
  updateE_wayBillNo,
  updateE_wayGeneratedOn,
  updateE_wayExpiryDate,
  updateMaterialName,
  updateNoOfArticles,
  updatePackingType,
  updateHsnCode,
  updateBillOrInvoiceNo,
  updateNetWeight,
  updateMaterialunits,
  updateMaterialType,
  updateValueOfGoods,
  updateRiskType,
  updateOtherDetails,
  updateCheckLoadingAddress,
  updateCheckDeliveryAddress,
  updateIsInsured,
  updateInsuranceCompanyName,
  updatePolicyNumber,
  updateInsuranceDate,
  updateInsuranceAmount,
  updateDemurrageCharge,
  updateChargeRate,
  updateApplicableAfter,
  updateAdvanceAmount,
  updateBalanceAmount,
  updateLiabilityOfTax,
  updateTypeOfMoving,
  updateCheckMaterialDetails,
  requestToGetAllBilty,
  resetBilty,
  updateActualWeight
} from '../../../../src/store/slices/BiltySlice';
import { useFormik } from 'formik';
import {
  addBiltyInitialValues,
  addBiltyValidationSchema
} from '../../../common-components/validator/bilty-validation';

import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
// import { utilsReset } from '../../../store/slices/UtilsSlice';
import GenericDataGrid from '../../../common-components/form-elements/genericDataGrid';
import { requestToGetAllVehicleType } from '../../../store/slices/VehicleManagementSlice';
import Toasty from '../../../common-components/form-elements/toasty';
import { requestToGetAllPackingType } from '../../../store/slices/ShiftingManagementSlice';
import shiftingManagement from './../../website/features/tabs/shiftingManagement';
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
const SACA = [
  {
    value: 'SameasConsignerAddress',
    label: 'Same as Consigner Address'
  }
];
const SACDA = [
  {
    value: 'SameasClientDeliveryAddress',
    label: 'Same as Client Delivery Address'
  }
];
const RiskType = [
  {
    value: 'Owner',
    label: 'Owner'
  },
  {
    value: 'Carrier',
    label: 'Carrier'
  }
];
const libility = [
  {
    value: 'consignor',
    label: 'Consignor'
  },
  {
    value: 'consignee',
    label: 'Consignee'
  },
  {
    value: 'carrier',
    label: 'Carrier'
  },
  {
    value: 'exempted',
    label: 'Exempted'
  }
];
const materialType = [
  {
    value: 'household',
    label: 'Household'
  },
  {
    value: 'vehicle',
    label: 'Vehicle'
  },
  {
    value: 'commercial',
    label: 'Commercial'
  },
  {
    value: 'threepl',
    label: '3PL'
  }
];
const FreightDetails = [
  {
    value: 'ToBeBilled',
    label: 'To be Billed'
  },
  {
    value: 'ToPay',
    label: 'To Pay'
  },
  {
    value: 'Paid',
    label: 'Paid'
  }
];
const addMaterialDetailCheckBox = [
  {
    value: 'wantToAddMaterialDetail',
    label: ' Want To Add Material Detail'
  }
];

const pickUpCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  }
];
const packingCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  }
];
const UnpackingCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  }
];
const unloadingCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  },
  {
    label: 'UnLoading By Party',
    value: 'unloading-by-party'
  }
];
const DoorDeliveryCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  }
];
const PackingMaterialCharges = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  }
];

const loadingCharge = [
  {
    label: 'Not Required',
    value: 'not-required'
  },
  {
    label: 'Included In Freight',
    value: 'included-in-freight'
  },
  {
    label: 'Additional From Freight',
    value: 'additional-from-freight'
  },
  {
    label: 'Loading By Party',
    value: 'loading-by-party'
  }
];
const MaterialInsurance = [
  {
    value: 'Insured',
    label: 'Insured'
  },
  {
    value: 'NotInsured',
    label: 'Not Insured'
  }
];

const rows = [
  { id: 1, customerId: 'Snow', contactPerson: 'Jon', age: 35 },
  { id: 2, customerId: 'Lannister', contactPerson: 'Cersei', age: 42 },
  { id: 3, customerId: 'Lannister', contactPerson: 'Jaime', age: 45 },
  { id: 4, customerId: 'Stark', contactPerson: 'Arya', age: 16 },
  { id: 5, customerId: 'Targaryen', contactPerson: 'Daenerys', age: null },
  { id: 6, customerId: 'Melisandre', contactPerson: null, age: 150 },
  { id: 7, customerId: 'Clifford', contactPerson: 'Ferrara', age: 44 },
  { id: 8, customerId: 'Frances', contactPerson: 'Rossini', age: 36 },
  { id: 9, customerId: 'Roxie', contactPerson: 'Harvey', age: 65 }
];

const BiltyForm = () => {
  const dispatch = useDispatch();
  const [serialNo, SerialNo] = useState();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { id: orderId } = useParams();
  // const { enquiryId } = props;
  // const {bilty:{addBilty:{basicDetails,materialDetails,consignerDetails,consigneeDetails,e_WayBillDetails,insuranceDetails,loadingAddress,unloadingAddress,vehicleDetails,otherDetails,demurrageDetails}},biltyList,isSaved,isFailedToSave,utils: { pickup, drop },company:{companyDetails},vehicleManagement:{vehicleType:{listVehicleType}}
  const {
    bilty: {
      addBilty: {
        basicDetails,
        materialDetails,
        consignerDetails,
        consigneeDetails,
        e_WayBillDetails,
        insuranceDetails,
        loadingAddress,
        unloadingAddress,
        vehicleDetails,
        otherDetails,
        demurrageDetails
      },
      addBilty,
      biltyList,
      isSaved,
      isFailedToSave
    },
    company: { companyDetails },
    vehicleManagement: {
      vehicleType: { listVehicleType }
    },
    utils: { pickup, drop },
    shiftingManagement: {
      packingType: { listPackingType }
    },
    appConfiguration: {
      unitTypes: { listUnitTypes }
    }
  } = useSelector((state) => state);

  const [isDisabled, setIsDisabled] = useState(false);

  const formik = useFormik({
    initialValues: addBiltyInitialValues,
    validationSchema: addBiltyValidationSchema
  });

  // Basic Details
  const onBiltyAutoChange = (evt) => {
    const { checked } = evt.target;
    if (checked === true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    dispatch(updateBiltyAuto(checked));
  };
  const onBiltyNoChange = (evt) => {
    formik.setFieldValue('addBilty.basicDetails.biltyNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateBiltyNo(value));
  };
  const onTemplateChange = (evt) => {
    formik.setFieldValue('addBilty.basicDetails.template', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateTemplate(value));
  };
  const onupdateDateOfBiltyChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addBilty.basicDetails.dateOfBilty', new Date($d).getTime());
    dispatch(updateDateOfBilty(new Date($d).getTime()));
  };

  //  Consigner Details
  const onCheckClientDetailsHandler = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckClientDetails({ type: value, value: checked }));
  };
  const onConsignerNameChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.consignerName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerName(value));
  };
  const onConsignerGSTChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.consignerGST', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerGST(value));
  };
  const onConsignerMobileChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.consignerMobile', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerMobile(value));
  };
  const onConsignerAddressChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.address', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerAddress(value));
  };
  const onConsignerLandmarkChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.landmark', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerLandmark(value));
  };
  const onConsignerPinCodeChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.pinCode', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerPinCode(value));
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(value));
    }
  };
  const onConsignerStateChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.state', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerState(value));
  };
  const onConsignerCityChange = (evt) => {
    // formik.setFieldValue('addBilty.consignerDetails.city', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerCity(value));
  };
  const onConsignerLocalityChange = (evt) => {
    formik.setFieldValue('addBilty.consignerDetails.locality', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsignerLocality(value));
  };

  // Loading Address
  const onCheckLoadingAddressHandler = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckLoadingAddress({ type: value, value: checked }));
  };
  const onLoadingAddressChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.address', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingAddress(value));
  };
  const onLoadingLandmarkChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.landmark', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingLandmark(value));
  };
  const onLoadingPinCodeChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.pinCode', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingPinCode(value));
    dispatch(requestToGetPickLocation());
  };
  const onLoadingStateChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.state', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingState(value));
  };
  const onLoadingCityChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.city', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingCity(value));
  };
  const onLoadingLocalityChange = (evt) => {
    formik.setFieldValue('addBilty.loadingAddress.locality', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLoadingLocality(value));
  };

  // Consignee Details
  const onCheckClientDeliveryDetailsHandler = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckClientDeliveryDetails({ type: value, value: checked }));
  };
  const onConsigneeNameChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.consigneeDetails.consignerName', evt?.target?.value);
    dispatch(updateConsigneeName(value));
  };
  const onConsigneeGSTChange = (evt) => {
    formik.setFieldValue('addBilty.consigneeDetails.consignerGST', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsigneeGST(value));
  };
  const onConsigneeMobileChange = (evt) => {
    formik.setFieldValue('addBilty.consigneeDetails.consignerMobile', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsigneeMobile(value));
  };
  const onConsigneeAddressChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.consigneeDetails.address', evt?.target?.value);
    dispatch(updateConsigneeAddress(value));
  };
  const onConsigneeLandmarkChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateConsigneeLandmark(value));
  };
  const onConsigneePinCodeChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.consigneeDetails.pinCode', evt?.target?.value);
    dispatch(updateConsigneePinCode(value));
    dispatch(requestToGetDropLocation(value));
  };
  const onConsigneeStateChange = (evt) => {
    formik.setFieldValue('addBilty.consigneeDetails.state', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsigneeState(value));
  };
  const onConsigneeCityChange = (evt) => {
    formik.setFieldValue('addBilty.consigneeDetails.city', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsigneeCity(value));
  };
  const onConsigneeLocalityChange = (evt) => {
    formik.setFieldValue('addBilty.consigneeDetails.locality', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateConsigneeLocality(value));
  };

  // unloadingAddress Address
  const onCheckDeliveryAddressHandler = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckDeliveryAddress({ type: value, value: checked }));
  };
  const onUnloadingAddressChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.address', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingAddress(value));
  };
  const onDeliveryLandmarkChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.landmark', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingLandmark(value));
  };
  const onUnloadingPinCodeChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.pinCode', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingPinCode(value));
    dispatch(requestToGetDropLocation(value));
  };
  const onDeliveryStateChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.state', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingState(value));
  };
  const onDeliveryCityChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.city', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingCity(value));
  };
  const onDeliveryLocalityChange = (evt) => {
    formik.setFieldValue('addBilty.unloadingAddress.locality', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUnloadingLocality(value));
  };

  // Vehicle Details
  const onVehicleInvoiceNoChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.invoiceNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleInvoiceNo(value));
  };
  const onVehicleTypeChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.vehicleType', evt?.target?.value);
    dispatch(updateVehicleType(evt?.target?.value));
  };
  const onVehicleNoChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.vehicleNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleNo(value));
  };
  const onVehicleFromLocationChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.fromLocation', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleFromLocation(value));
  };
  const onVehicleToLocationChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.toLocation', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleToLocation(value));
  };
  const onVehicleDriverNameChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.driverName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleDriverName(value));
  };
  const onVehicleDriverMobileChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.vehicleDetails.driverMobile', evt?.target?.value);
    dispatch(updateVehicleDriverMobile(value));
  };
  const onVehicleDriverLicenceChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.vehicleDetails.driverLicence', evt?.target?.value);
    dispatch(updateVehicleDriverLicence(value));
  };
  const onVehicleSealNoChange = (evt) => {
    formik.setFieldValue('addBilty.vehicleDetails.sealNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleSealNo(value));
  };
  const onVehicleInDateChange = (evt) => {
    const { $d } = evt;
    dispatch(updateVehicleInDate(new Date($d).getTime()));
  };
  const onVehicleOutDateChange = (evt) => {
    const { $d } = evt;
    dispatch(updateVehicleOutDate(new Date($d).getTime()));
  };

  // E-Way Bill Details
  const onE_wayBillNoChange = (evt) => {
    formik.setFieldValue('addBilty.e_WayBillDetails.e_wayBillNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateE_wayBillNo(value));
  };
  const onE_wayGeneratedOnChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addBilty.e_WayBillDetails.generatedOn', new Date($d).getTime());
    dispatch(updateE_wayGeneratedOn(new Date($d).getTime()));
  };
  const onE_wayExpiryDateChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addBilty.e_WayBillDetails.expiryDate', new Date($d).getTime());
    dispatch(updateE_wayExpiryDate(new Date($d).getTime()));
  };

  // Material Details
  const onMaterialNameChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.materialName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateMaterialName(value));
  };
  const onTypeOfMovingChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.typeOfMoving', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateTypeOfMoving(value));
  };
  const onCheckMaterialDetailsChange = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckMaterialDetails({ type: value, value: checked }));
  };
  const onNoOfArticlesChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.noOfArticles', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateNoOfArticles(value));
  };
  const onPackingTypeChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.packingType', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updatePackingType(value));
  };
  const onHsnCodeChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.hsnCode', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateHsnCode(value));
  };
  const onBillOrInvoiceNoChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.billOrInvoiceNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateBillOrInvoiceNo(value));
  };
  const onMaterialActualWeightChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.actualWeight', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateActualWeight(value));
  };
  const onMaterialunitsChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.units', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateMaterialunits(value));
  };

  const onMaterialApplicableWeightChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.applicableWeight', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateMaterialunits(value));
  };
  // eslint-disable-next-line no-unused-vars
  const onMaterialTypeChange = (evt) => {
    dispatch(updateMaterialType(evt?.target?.value));
  };
  const onValueOfGoodsChange = (evt) => {
    formik.setFieldValue('addBilty.materialDetails.valueOfGoods', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateValueOfGoods(value));
  };

  // Insurance Details
  const onIsInsuredChange = (evt) => {
    formik.setFieldValue('addBilty.insuranceDetails.insCompanyName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateIsInsured(value));
  };
  const onInsCompanyNameChange = (evt) => {
    formik.setFieldValue('addBilty.insuranceDetails.insCompanyName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateInsuranceCompanyName(value));
  };
  const onPolicyNumberChange = (evt) => {
    formik.setFieldValue('addBilty.insuranceDetails.policyNumber', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updatePolicyNumber(value));
  };
  const onInsuranceDateChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addBilty.insuranceDetails.insuranceDate', new Date($d).getTime());
    dispatch(updateInsuranceDate(new Date($d).getTime()));
  };
  const onInsuranceAmountChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addBilty.insuranceDetails.insuranceAmount', evt?.target?.value);
    dispatch(updateInsuranceAmount(value));
  };

  // Liability of Tax
  const onLiabilityOfTaxChange = (evt) => {
    // formik.setFieldValue('addBilty.insuranceDetails.insuranceAmount', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateLiabilityOfTax(value));
  };



  // Demurrage Details
  const onDemurrageChargeChange = (evt) => {
    formik.setFieldValue('addBilty.demurrageDetails.demurrageCharge', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateDemurrageCharge(value));
  };
  const onChargeRateChange = (evt) => {
    formik.setFieldValue('addBilty.demurrageDetails.chargeRate', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateChargeRate(value));
  };
  const onApplicableAfterChange = (evt) => {
    formik.setFieldValue('addBilty.demurrageDetails.applicableAfter', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateApplicableAfter(value));
  };

  // Risk Type
  const onRiskTypeChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateRiskType(value));
  };

  // Other Details

  const onEditorKeyboardPress = (evt) => {
    const { innerHTML } = evt.target;

    dispatch(updateOtherDetails(innerHTML));
  };

  const onSaveBiltyHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      enquiryId: orderId,
      templateId: '65114423ae290ca912ef48fb',
      biltyDate: basicDetails?.dateOfBilty.toString(),
      biltyNumber: basicDetails?.biltyNo,
      consigner: {
        name: consignerDetails?.consignerName,
        mobile: consignerDetails?.consignerMobile,
        gstin: consignerDetails?.consignerGST,
        state: consignerDetails?.state,
        landmark: consignerDetails?.landmark,
        city: consignerDetails?.city,
        postalCode: consignerDetails?.pinCode
      },
      consignee: {
        name: consigneeDetails?.consignerName,
        mobile: consigneeDetails?.consignerMobile,
        gstin: consigneeDetails?.consignerGST,
        state: consigneeDetails?.state,
        landmark: consigneeDetails?.landmark,
        city: consigneeDetails?.city,
        postalCode: consigneeDetails?.pinCode
      },

      loadingAddress: {
        address: loadingAddress?.address,
        state: loadingAddress?.state,
        landmark: loadingAddress?.landmark,
        city: loadingAddress?.city,
        postalCode: loadingAddress?.pinCode
      },
      unloadingAddress: {
        address: unloadingAddress?.address,
        state: unloadingAddress?.state,
        landmark: unloadingAddress?.landmark,
        city: unloadingAddress?.city,
        postalCode: unloadingAddress?.pinCode
      },

      vehicle: {
        invoiceNumber: vehicleDetails?.invoiceNo,
        vehicleType: vehicleDetails?.vehicleType,
        vehicleNumber: vehicleDetails?.vehicleNo,
        shiftingFrom: '', //vehicleDetails?.fromLocation
        shiftingTo: '', // vehicleDetails?.toLocation
        sealNumber: vehicleDetails?.sealNo,
        inDate: vehicleDetails?.inDate,
        outDate: vehicleDetails?.outDate
        // name: vehicleDetails?.driverName,
        // mobile: vehicleDetails?.driverMobile,
        // license: vehicleDetails?.driverLicence
        // transitDays:vehicleDetails?.,
        // expectedDateOfDelivery:vehicleDetails
      },
      driver: {
        name: vehicleDetails?.driverName,
        mobile: vehicleDetails?.driverMobile,
        license: vehicleDetails?.driverLicence
      },
      eWayBill: {
        number: e_WayBillDetails?.e_wayBillNo,
        generationDate: e_WayBillDetails?.generatedOn.toString(),
        expiryDate: e_WayBillDetails?.expiryDate.toString()
      },
      materialsType: '',
      addMaterialsStatus: '',
      materials: [
        {
          name: materialDetails?.materialName,
          noOfArticles: materialDetails?.noOfArticles,
          packingType: materialDetails?.packingType,
          HSNCode: materialDetails?.hsnCode,
          billNumber: materialDetails?.billOrInvoiceNo,
          actualWeight: materialDetails?.netWeight,
          applicableWeight: materialDetails?.applicableWeight,
          unit: materialDetails?.units,
          valueOfGoods: materialDetails?.valueOfGoods
        }
      ],
      riskType: addBilty?.riskType,
      liabilityOfTax: addBilty?.liabilityOfTax,
      insuranceStatus: addBilty?.insuranceStatus,
      insurance: {
        companyName: 'tatat',
        policyNumber: 'df3323',
        date: '2023-01-01',
        amount: '1200'
      },
      demurrage: {
        charge: demurrageDetails?.demurrageCharge,
        rate: demurrageDetails?.chargeRate,
        chargeAfterApplicable: demurrageDetails?.applicableAfter
      },

      freightDetails: {
        // "actualWeight": "",
        // "applicableWeight": "",
        // "units": "",
        // "rate": "",
        freightCharges: '',
        billingStatus: 'TO_PAY',
        //"isFixedFreight": "",
        totalAmount: '',
        advanceAmount: '',
        balanceAmount: ''
      },
      pickupCharges: {
        status: 'NORequired',
        charge: ''
      },
      packingCharges: {
        status: '',
        charge: ''
      },
      unPackingCharges: {
        status: '',
        charge: ''
      },
      unLoadingCharges: {
        status: '',
        charge: ''
      },
      doorDeliveryCharges: {
        status: '',
        charge: ''
      },
      packingMaterialCharges: {
        status: '',
        charge: ''
      },
      loadingCharges: {
        status: 'REQUIRED',
        charge: '1200'
      },
      remarks: 'sadfa',
      addedBy: '65114423ae290ca912ef48fb'
    };
    // if (formik.isValid && formik.dirty) {
    dispatch(requestToSaveBilty(payload));
    // } else {
    //   setIsMessageDisplay(true);
    //   setMessageType('warning');
    //   setMessage('Please fill form Correctly');
    //   setTimeout(() => {
    //     setIsMessageDisplay(false);
    //   }, 4000);
    // }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetBilty());
    dispatch(utilsReset());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Congragulations Bilty Form added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetBilty());
          dispatch(utilsReset());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          // dispatch(resetApiStatus())
        }, 3000);
      }
    }
  }, [isSaved, isFailedToSave]);

  useEffect(() => {
    dispatch(requestToGetAllBilty(orderId));
    dispatch(requestToGetAllPackingType());
    dispatch(requestToGetAllVehicleType());
  }, []);

  const columns = [
    { field: 'id', headerName: 'S.No.', width: 90 },
    {
      field: 'templateId',
      headerName: 'Template Id',
      width: 110,
      editable: false
    },
    {
      field: 'biltyNumber',
      headerName: 'Bilty Number',
      width: 110,
      editable: false
    },
    {
      field: 'name',
      headerName: ' Consigner  Name',
      type: 'number',
      width: 110,
      editable: false,
      renderCell: (data) => {
        return data.row.biltyconsigners[0].consigner?.name;
      }
    },
    {
      field: 'mobile',
      headerName: 'Consigner Mobile',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (data) => {
        return data.row.biltyconsigners[0].consigner?.mobile;
      }
    },
    {
      field: 'gstin',
      headerName: 'Consigner GSTIN',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (data) => {
        return data.row.biltyconsigners[0].consigner?.gstin;
      }
    },
    {
      field: 'state',
      headerName: 'Consigner State',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (data) => {
        return data.row.biltyconsigners[0].consigner?.state;
      }
    },
    {
      field: 'city',
      headerName: 'Consigner City',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (data) => {
        return data.row.biltyconsigners[0].consigner?.city;
      }
    }
  ];



    const [inputValues, setInputValues] = useState({
      freightCharges: 0,
      pickupAmount: 0,
      deliveryAmount: 0,
      packingAmount: 0,
      packingMaterialAmount: 0,
      unpackingAmount: 0,
      loadingAmount: 0,
      unLoadingAmount: 0, 
      advanceAmount: 0, 
    });
  

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues({
        ...inputValues,
        [name]: parseFloat(value) || 0, 
      });
    };
  
    const totalSum = Object.keys(inputValues).reduce((acc, key) => {
      if (key !== 'advanceAmount') {
        return acc + inputValues[key];
      }
      return acc;
    }, 0);


    const advanceAmount = inputValues.advanceAmount;

    // Total Amount
    const onAdvanceAmountChange = (evt) => {
      formik.setFieldValue('addBilty.totalAmount.advanceAmount', evt?.target?.value);
      const { value } = evt.target;
      dispatch(updateAdvanceAmount(value));

    };
    const onBalanceAmountChange = (evt) => {
      formik.setFieldValue('addBilty.totalAmount.balanceAmount', evt?.target?.value);
      const { value } = evt.target;
      dispatch(updateBalanceAmount(value));
    };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, background: '#fff ' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Basic Details
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={style}>
                <Stack direction="row" spacing={0} alignItems={'center'} width={'100%'}>
                  <GenericSwitch onChange={onBiltyAutoChange} start={'Auto'} end={'Manual'} />
                  <InputBase
                    onChange={onBiltyNoChange}
                    sx={{
                      ml: 1,
                      flex: 1,
                      backgroundColor: (theme) => theme.palette.primary.light,
                      padding: '3px 10px',
                      color: (theme) => theme.palette.primary.dark
                    }}
                    type="text"
                    placeholder="Bilty / LR No."
                    fullWidth
                    disabled={!basicDetails?.biltyAuto}
                    autoFocus

                    // value={}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDropdown
                onChange={onTemplateChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.addBilty?.basicDetails?.template}
                error={
                  formik?.errors?.addBilty?.basicDetails?.template &&
                  formik?.touched?.addBilty?.basicDetails?.template
                }
                data={[
                  { label: 'Template', value: 1 },
                  { label: 'Template01', value: 2 }
                ]}
                label="Choose Template"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.basicDetails?.template &&
                  formik.touched?.addBilty?.basicDetails?.template &&
                  formik.errors?.addBilty?.basicDetails?.template}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDatePicker
                onAccept={onupdateDateOfBiltyChange}
                disablePast
                closeOnSelect={true}
                error={
                  formik.errors.addBilty?.basicDetails?.dateOfBilty &&
                  formik.touched.addBilty?.basicDetails?.dateOfBilty
                }
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                //  onChange={onDateChange}
                label="Date of Bilty"
              />
              <FormHelperText error>
                {formik.errors.addBilty?.basicDetails?.dateOfBilty &&
                  formik.touched.addBilty?.basicDetails?.dateOfBilty &&
                  formik.errors.addBilty?.basicDetails?.dateOfBilty}
              </FormHelperText>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Consigner Details
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box>
                <GenericCheckbox onChange={onCheckClientDetailsHandler} list={SACD} />
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsignerNameChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.consignerName &&
                  formik?.touched?.addBilty?.consignerDetails?.consignerName
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consignerDetails?.consignerName}
                label="Consigner Name"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.consignerName &&
                  formik.touched?.addBilty?.consignerDetails?.consignerName &&
                  formik.errors?.addBilty?.consignerDetails?.consignerName}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsignerGSTChange}
                label="Consigner GST"
                error={
                  formik?.errors?.addBilty?.consignerDetails?.consignerGST &&
                  formik?.touched?.addBilty?.consignerDetails?.consignerGST
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consignerDetails?.consignerGST}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.consignerGST &&
                  formik.touched?.addBilty?.consignerDetails?.consignerGST &&
                  formik.errors?.addBilty?.consignerDetails?.consignerGST}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsignerMobileChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.consignerMobile &&
                  formik?.touched?.addBilty?.consignerDetails?.consignerMobile
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consignerDetails?.consignerMobile}
                label="Consigner Mobile No."
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.consignerMobile &&
                  formik.touched?.addBilty?.consignerDetails?.consignerMobile &&
                  formik.errors?.addBilty?.consignerDetails?.consignerMobile}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onConsignerAddressChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consignerDetails?.address}
                label="Address"
                error={
                  formik?.errors?.addBilty?.consignerDetails?.address &&
                  formik?.touched?.addBilty?.consignerDetails?.address
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.address &&
                  formik.touched?.addBilty?.consignerDetails?.address &&
                  formik.errors?.addBilty?.consignerDetails?.address}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput onChange={onConsignerLandmarkChange} label="Landmark" />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onConsignerPinCodeChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.pinCode &&
                  formik?.touched?.addBilty?.consignerDetails?.pinCode
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consignerDetails?.pinCode}
                label={'Pincode'}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.pinCode &&
                  formik.touched?.addBilty?.consignerDetails?.pinCode &&
                  formik.errors?.addBilty?.consignerDetails?.pinCode}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.state}
                onChange={onConsignerStateChange}
                label={'State'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.state &&
                  formik?.touched?.addBilty?.consignerDetails?.state
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.state &&
                  formik.touched?.addBilty?.consignerDetails?.state &&
                  formik.errors?.addBilty?.consignerDetails?.state}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.city}
                onChange={onConsignerCityChange}
                label={'City'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.city &&
                  formik?.touched?.addBilty?.consignerDetails?.city
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.city &&
                  formik.touched?.addBilty?.consignerDetails?.city &&
                  formik.errors?.addBilty?.consignerDetails?.city}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.locality}
                onChange={onConsignerLocalityChange}
                label={'Locality'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.consignerDetails?.locality &&
                  formik?.touched?.addBilty?.consignerDetails?.locality
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consignerDetails?.locality &&
                  formik.touched?.addBilty?.consignerDetails?.locality &&
                  formik.errors?.addBilty?.consignerDetails?.locality}
              </FormHelperText>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Loading Address
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box>
                <GenericCheckbox onChange={onCheckLoadingAddressHandler} list={SACA} />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onLoadingAddressChange}
                label="Address"
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.loadingAddress?.address}
                error={
                  formik?.errors?.addBilty?.loadingAddress?.address &&
                  formik?.touched?.addBilty?.loadingAddress?.address
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.loadingAddress?.address &&
                  formik.touched?.addBilty?.loadingAddress?.address &&
                  formik.errors?.addBilty?.loadingAddress?.address}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onLoadingLandmarkChange}
                label="Landmark"
                value={formik?.values?.addBilty?.loadingAddress?.landmark}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onLoadingPinCodeChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.loadingAddress?.pinCode}
                label={'Pincode'}
                error={
                  formik?.errors?.addBilty?.loadingAddress?.pinCode &&
                  formik?.touched?.addBilty?.loadingAddress?.pinCode
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.loadingAddress?.pinCode &&
                  formik.touched?.addBilty?.loadingAddress?.pinCode &&
                  formik.errors?.addBilty?.loadingAddress?.pinCode}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.state}
                onChange={onLoadingStateChange}
                label={'State'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.loadingAddress?.state &&
                  formik?.touched?.addBilty?.loadingAddress?.state
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.loadingAddress?.state &&
                  formik.touched?.addBilty?.loadingAddress?.state &&
                  formik.errors?.addBilty?.loadingAddress?.state}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                data={pickup?.city}
                onChange={onLoadingCityChange}
                label={'City'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.loadingAddress?.city &&
                  formik?.touched?.addBilty?.loadingAddress?.city
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.loadingAddress?.city &&
                  formik.touched?.addBilty?.loadingAddress?.city &&
                  formik.errors?.addBilty?.loadingAddress?.city}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onLoadingLocalityChange}
                label={'Locality'}
                data={pickup?.locality}
                value={formik?.values?.addBilty?.loadingAddress?.locality}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Consignee Details
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box>
                <GenericCheckbox onChange={onCheckClientDeliveryDetailsHandler} list={SACDA} />
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsigneeNameChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consigneeDetails?.consignerName}
                label="Consignee Name"
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.consignerName &&
                  formik?.touched?.addBilty?.consigneeDetails?.consignerName
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.consignerName &&
                  formik.touched?.addBilty?.consigneeDetails?.consignerName &&
                  formik.errors?.addBilty?.consigneeDetails?.consignerName}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsigneeGSTChange}
                label="Consignee GST"
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.consignerGST &&
                  formik?.touched?.addBilty?.consigneeDetails?.consignerGST
                }
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.consigneeDetails?.consignerGST}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.consignerGST &&
                  formik.touched?.addBilty?.consigneeDetails?.consignerGST &&
                  formik.errors?.addBilty?.consigneeDetails?.consignerGST}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsigneeMobileChange}
                label="Consignee Mobile No."
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.consignerMobile &&
                  formik?.touched?.addBilty?.consigneeDetails?.consignerMobile
                }
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.addBilty?.consigneeDetails?.consignerMobile}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.consignerMobile &&
                  formik.touched?.addBilty?.consigneeDetails?.consignerMobile &&
                  formik.errors?.addBilty?.consigneeDetails?.consignerMobile}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onConsigneeAddressChange}
                label="Address"
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.address &&
                  formik?.touched?.addBilty?.consigneeDetails?.address
                }
                value={formik?.values?.addBilty?.consigneeDetails?.address}
                onFocus={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.address &&
                  formik.touched?.addBilty?.consigneeDetails?.address &&
                  formik.errors?.addBilty?.consigneeDetails?.address}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput onChange={onConsigneeLandmarkChange} label="Landmark" />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onConsigneePinCodeChange}
                label={'Pincode'}
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.pinCode &&
                  formik?.touched?.addBilty?.consigneeDetails?.pinCode
                }
                value={formik?.values?.addBilty?.consigneeDetails?.pinCode}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.pinCode &&
                  formik.touched?.addBilty?.consigneeDetails?.pinCode &&
                  formik.errors?.addBilty?.consigneeDetails?.pinCode}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onConsigneeStateChange}
                label={'State'}
                data={pickup?.state}
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.state &&
                  formik?.touched?.addBilty?.consigneeDetails?.state
                }
                value={formik?.values?.addBilty?.consigneeDetails?.state}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.state &&
                  formik.touched?.addBilty?.consigneeDetails?.state &&
                  formik.errors?.addBilty?.consigneeDetails?.state}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onConsigneeCityChange}
                label={'City'}
                data={pickup?.city}
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.city &&
                  formik?.touched?.addBilty?.consigneeDetails?.city
                }
                value={formik?.values?.addBilty?.consigneeDetails?.city}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.city &&
                  formik.touched?.addBilty?.consigneeDetails?.city &&
                  formik.errors?.addBilty?.consigneeDetails?.city}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onConsigneeLocalityChange}
                label={'Locality'}
                data={pickup?.locality}
                error={
                  formik?.errors?.addBilty?.consigneeDetails?.locality &&
                  formik?.touched?.addBilty?.consigneeDetails?.locality
                }
                value={formik?.values?.addBilty?.consigneeDetails?.locality}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.consigneeDetails?.locality &&
                  formik.touched?.addBilty?.consigneeDetails?.locality &&
                  formik.errors?.addBilty?.consigneeDetails?.locality}
              </FormHelperText>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Unloading Address
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box>
                <GenericCheckbox
                  onChange={onCheckDeliveryAddressHandler}
                  list={SACA}
                  style={{ display: 'block' }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onUnloadingAddressChange}
                error={
                  formik?.errors?.addBilty?.unloadingAddress?.address &&
                  formik?.touched?.addBilty?.unloadingAddress?.address
                }
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.unloadingAddress?.address}
                label="Address"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.unloadingAddress?.address &&
                  formik.touched?.addBilty?.unloadingAddress?.address &&
                  formik.errors?.addBilty?.unloadingAddress?.address}
              </FormHelperText>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput onChange={onDeliveryLandmarkChange} label="Landmark" />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onUnloadingPinCodeChange}
                error={
                  formik?.errors?.addBilty?.unloadingAddress?.pinCode &&
                  formik?.touched?.addBilty?.unloadingAddress?.pinCode
                }
                label={'Pincode'}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.unloadingAddress?.pinCode}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.unloadingAddress?.pinCode &&
                  formik.touched?.addBilty?.unloadingAddress?.pinCode &&
                  formik.errors?.addBilty?.unloadingAddress?.pinCode}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onDeliveryStateChange}
                label={'State'}
                data={drop?.state}
                error={
                  formik?.errors?.addBilty?.unloadingAddress?.state &&
                  formik?.touched?.addBilty?.unloadingAddress?.state
                }
                value={formik?.values?.addBilty?.unloadingAddress?.state}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.unloadingAddress?.state &&
                  formik.touched?.addBilty?.unloadingAddress?.state &&
                  formik.errors?.addBilty?.unloadingAddress?.state}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onDeliveryCityChange}
                label={'City'}
                data={drop?.city}
                error={
                  formik?.errors?.addBilty?.unloadingAddress?.city &&
                  formik?.touched?.addBilty?.unloadingAddress?.city
                }
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.unloadingAddress?.city}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.unloadingAddress?.city &&
                  formik.touched?.addBilty?.unloadingAddress?.city &&
                  formik.errors?.addBilty?.unloadingAddress?.city}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onDeliveryLocalityChange}
                label={'Locality'}
                data={drop?.locality}
                error={
                  formik?.errors?.addBilty?.unloadingAddress?.locality &&
                  formik?.touched?.addBilty?.unloadingAddress?.locality
                }
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.unloadingAddress?.locality}
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.unloadingAddress?.locality &&
                  formik.touched?.addBilty?.unloadingAddress?.locality &&
                  formik.errors?.addBilty?.unloadingAddress?.locality}
              </FormHelperText>
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Vehicle Details
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <GenericInput
                onChange={onVehicleInvoiceNoChange}
                label="Invoice No."
                onKeyUp={formik.handleChange}
                value={formik?.values?.addBilty?.vehicleDetails?.invoiceNo}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.invoiceNo &&
                  formik?.touched?.addBilty?.vehicleDetails?.invoiceNo
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.invoiceNo &&
                  formik.touched?.addBilty?.vehicleDetails?.invoiceNo &&
                  formik.errors?.addBilty?.vehicleDetails?.invoiceNo}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDropdown
                onChange={onVehicleTypeChange}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.vehicleType &&
                  formik?.touched?.addBilty?.vehicleDetails?.vehicleType
                }
                value={formik?.values?.addBilty?.vehicleDetails?.vehicleType}
                data={listVehicleType?.map((item) => ({
                  label: item?.vehicleType,
                  value: item?._id
                }))}
                label="Vehicle Type"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.vehicleType &&
                  formik.touched?.addBilty?.vehicleDetails?.vehicleType &&
                  formik.errors?.addBilty?.vehicleDetails?.vehicleType}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput
                onChange={onVehicleNoChange}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.vehicleNo &&
                  formik?.touched?.addBilty?.vehicleDetails?.vehicleNo
                }
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.vehicleNo}
                label="Vehicle No."
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.vehicleNo &&
                  formik.touched?.addBilty?.vehicleDetails?.vehicleNo &&
                  formik.errors?.addBilty?.vehicleDetails?.vehicleNo}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDropdown
                onChange={onVehicleFromLocationChange}
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.fromLocation}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.fromLocation &&
                  formik?.touched?.addBilty?.vehicleDetails?.fromLocation
                }
                data={[
                  { label: 'Four Wheeler', value: 1 },
                  { label: 'Two Wheeler', value: 2 }
                ]}
                label="From Location"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.fromLocation &&
                  formik.touched?.addBilty?.vehicleDetails?.fromLocation &&
                  formik.errors?.addBilty?.vehicleDetails?.fromLocation}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDropdown
                onChange={onVehicleToLocationChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addBilty?.vehicleDetails?.toLocation}
                onBlur={formik.handleBlur}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.toLocation &&
                  formik?.touched?.addBilty?.vehicleDetails?.toLocation
                }
                data={[
                  { label: 'Four Wheeler', value: 1 },
                  { label: 'Two Wheeler', value: 2 }
                ]}
                label="To Location"
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.toLocation &&
                  formik.touched?.addBilty?.vehicleDetails?.toLocation &&
                  formik.errors?.addBilty?.vehicleDetails?.toLocation}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput
                onChange={onVehicleDriverNameChange}
                label="Driver Name"
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.driverName}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.driverName &&
                  formik?.touched?.addBilty?.vehicleDetails?.driverName
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.driverName &&
                  formik.touched?.addBilty?.vehicleDetails?.driverName &&
                  formik.errors?.addBilty?.vehicleDetails?.driverName}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput
                onChange={onVehicleDriverMobileChange}
                label="Driver Mobile No."
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.driverMobile}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.driverMobile &&
                  formik?.touched?.addBilty?.vehicleDetails?.driverMobile
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.driverMobile &&
                  formik.touched?.addBilty?.vehicleDetails?.driverMobile &&
                  formik.errors?.addBilty?.vehicleDetails?.driverMobile}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput
                onChange={onVehicleDriverLicenceChange}
                label="Driver Licence No."
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.driverLicence}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.driverLicence &&
                  formik?.touched?.addBilty?.vehicleDetails?.driverLicence
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.driverLicence &&
                  formik.touched?.addBilty?.vehicleDetails?.driverLicence &&
                  formik.errors?.addBilty?.vehicleDetails?.driverLicence}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput
                onChange={onVehicleSealNoChange}
                label="Seal No."
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.vehicleDetails?.sealNo}
                error={
                  formik?.errors?.addBilty?.vehicleDetails?.sealNo &&
                  formik?.touched?.addBilty?.vehicleDetails?.sealNo
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.vehicleDetails?.sealNo &&
                  formik.touched?.addBilty?.vehicleDetails?.sealNo &&
                  formik.errors?.addBilty?.vehicleDetails?.sealNo}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDatePicker onChange={onVehicleInDateChange} label="In Date" />
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDatePicker onChange={onVehicleOutDateChange} label="Out Date" />
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericInput label={'Transit Days'} />
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDatePicker label={'Expected Date of Delivery'} />
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                E-Way Bill Details
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onE_wayBillNoChange}
                label="E-Way Bill No."
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.e_WayBillDetails?.e_wayBillNo}
                error={
                  formik?.errors?.addBilty?.e_WayBillDetails?.e_wayBillNo &&
                  formik?.touched?.addBilty?.e_WayBillDetails?.e_wayBillNo
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.e_WayBillDetails?.e_wayBillNo &&
                  formik.touched?.addBilty?.e_WayBillDetails?.e_wayBillNo &&
                  formik.errors?.addBilty?.e_WayBillDetails?.e_wayBillNo}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericDatePicker
                onChange={onE_wayGeneratedOnChange}
                label="Generated On"
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.e_WayBillDetails?.generatedOn}
                error={
                  formik?.errors?.addBilty?.e_WayBillDetails?.generatedOn &&
                  formik?.touched?.addBilty?.e_WayBillDetails?.generatedOn
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.e_WayBillDetails?.generatedOn &&
                  formik.touched?.addBilty?.e_WayBillDetails?.generatedOn &&
                  formik.errors?.addBilty?.e_WayBillDetails?.generatedOn}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericDatePicker
                onChange={onE_wayExpiryDateChange}
                label="Expiry Date"
                // onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik?.values?.addBilty?.e_WayBillDetails?.expiryDate}
                error={
                  formik?.errors?.addBilty?.e_WayBillDetails?.expiryDate &&
                  formik?.touched?.addBilty?.e_WayBillDetails?.expiryDate
                }
              />
              <FormHelperText error>
                {formik.errors?.addBilty?.e_WayBillDetails?.expiryDate &&
                  formik.touched?.addBilty?.e_WayBillDetails?.expiryDate &&
                  formik.errors?.addBilty?.e_WayBillDetails?.expiryDate}
              </FormHelperText>
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Material Details
              </Typography>
              <Typography variant="body1" sx={{ my: 1 }}>
                Type Of Moving
              </Typography>
              <GenericRadio
                onChange={onTypeOfMovingChange}
                orientation={'row'}
                options={materialType}
              />
              {materialDetails?.typeOfMoving === 'household' && (
                <GenericCheckbox
                  onChange={onCheckMaterialDetailsChange}
                  list={addMaterialDetailCheckBox}
                  style={{ display: 'block' }}
                />
              )}
            </Grid>
            {(materialDetails?.typeOfMoving === 'commercial' ||
              materialDetails?.typeOfMoving === 'threepl' ||
              materialDetails?.checkMaterialDetails.value === true) && (
              <Fragment>
                <Grid item md={3} xs={12}>
                  <GenericInput onChange={onMaterialNameChange} label="Material Name" />
                </Grid>
                <Grid item md={3} xs={12}>
                  <GenericInput
                    onChange={onNoOfArticlesChange}
                    label="No. of Articles"
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.noOfArticles}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.noOfArticles &&
                      formik?.touched?.addBilty?.materialDetails?.noOfArticles
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.noOfArticles &&
                      formik.touched?.addBilty?.materialDetails?.noOfArticles &&
                      formik.errors?.addBilty?.materialDetails?.noOfArticles}
                  </FormHelperText>
                </Grid>
                <Grid item md={3} xs={12}>
                  <GenericDropdown
                    onChange={onPackingTypeChange}
                    label="Packing Type"
                    data={listPackingType?.map((item) => ({
                      label: item?.packingType,
                      value: item?._id
                    }))}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.packingType}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.packingType &&
                      formik?.touched?.addBilty?.materialDetails?.packingType
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.packingType &&
                      formik.touched?.addBilty?.materialDetails?.packingType &&
                      formik.errors?.addBilty?.materialDetails?.packingType}
                  </FormHelperText>
                </Grid>
                <Grid item md={3} xs={12}>
                  <GenericInput
                    onChange={onHsnCodeChange}
                    label="HSN Code"
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.hsnCode}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.hsnCode &&
                      formik?.touched?.addBilty?.materialDetails?.hsnCode
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.hsnCode &&
                      formik.touched?.addBilty?.materialDetails?.hsnCode &&
                      formik.errors?.addBilty?.materialDetails?.hsnCode}
                  </FormHelperText>
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <GenericInput
                    onChange={onBillOrInvoiceNoChange}
                    label="Bill / Invoice No."
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.billOrInvoiceNo}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.billOrInvoiceNo &&
                      formik?.touched?.addBilty?.materialDetails?.billOrInvoiceNo
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.billOrInvoiceNo &&
                      formik.touched?.addBilty?.materialDetails?.billOrInvoiceNo &&
                      formik.errors?.addBilty?.materialDetails?.billOrInvoiceNo}
                  </FormHelperText>
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <GenericInput
                    onChange={onMaterialActualWeightChange}
                    label="Actual Weight"
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.actualWeight}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.actualWeight &&
                      formik?.touched?.addBilty?.materialDetails?.actualWeight
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.actualWeight &&
                      formik.touched?.addBilty?.materialDetails?.actualWeight &&
                      formik.errors?.addBilty?.materialDetails?.actualWeight}
                  </FormHelperText>
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <GenericInput
                    onChange={onMaterialApplicableWeightChange}
                    label="Applicable Weight"
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.applicableWeight}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.applicableWeight &&
                      formik?.touched?.addBilty?.materialDetails?.applicableWeight
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.applicableWeight &&
                      formik.touched?.addBilty?.materialDetails?.applicableWeight &&
                      formik.errors?.addBilty?.materialDetails?.applicableWeight}
                  </FormHelperText>
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <GenericDropdown
                    onChange={onMaterialunitsChange}
                    label="Units"
                    data={listUnitTypes?.map((item) => ({
                      label: item?.unitType,
                      value: item?._id
                    }))}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.units}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.units &&
                      formik?.touched?.addBilty?.materialDetails?.units
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.units &&
                      formik.touched?.addBilty?.materialDetails?.units &&
                      formik.errors?.addBilty?.materialDetails?.units}
                  </FormHelperText>
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <GenericInput
                    onChange={onValueOfGoodsChange}
                    label="Value of Goods"
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addBilty?.materialDetails?.valueOfGoods}
                    error={
                      formik?.errors?.addBilty?.materialDetails?.valueOfGoods &&
                      formik?.touched?.addBilty?.materialDetails?.valueOfGoods
                    }
                  />
                  <FormHelperText error>
                    {formik.errors?.addBilty?.materialDetails?.valueOfGoods &&
                      formik.touched?.addBilty?.materialDetails?.valueOfGoods &&
                      formik.errors?.addBilty?.materialDetails?.valueOfGoods}
                  </FormHelperText>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Box fullWidth sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <GenericLoadingButton>
                      <span>Add</span>
                    </GenericLoadingButton>
                  </Box>
                </Grid>
              </Fragment>
            )}
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Risk Type*
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <GenericRadio
                onChange={onRiskTypeChange}
                name="RiskType"
                orientation={'row'}
                options={RiskType}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Liability of Tax
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <GenericRadio
                onChange={onLiabilityOfTaxChange}
                name=""
                orientation={'row'}
                options={libility}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Freight Details
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericRadio name="FreightDetails" orientation={'row'} options={FreightDetails} />
            </Grid>
            <Grid item md={12} xs={12}>
              <Grid item md={5.92} xs={12}>
                <GenericInput label="Freight Charges" onChange={handleInputChange} name={'freightCharges'} />
              </Grid>
            </Grid>

            <Grid item md={3} xs={6}>
              <GenericDropdown label="Pickup Charges" data={pickUpCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter pickup amount" onChange={handleInputChange} name={'pickupAmount'} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Door Delivery Charges" data={pickUpCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter delivery amount" onChange={handleInputChange} name={'deliveryAmount'} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Packing Charges" data={packingCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter packing amount" onChange={handleInputChange} name={'packingAmount'} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Packing Material Charges" data={packingCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter packing material amount" onChange={handleInputChange} name={'packingMaterialAmount'} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Unpacking Charges" data={packingCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter unpacking amount" onChange={handleInputChange} name={'unpackingAmount'} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Loading Charges" data={pickUpCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter loading amount" onChange={handleInputChange} name={'loadingAmount'}  />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericDropdown label="Unloading Charges" data={unloadingCharge} />
            </Grid>
            <Grid item md={3} xs={6}>
              <GenericInput label="Please enter unloading amount" onChange={handleInputChange} name={'unLoadingAmount'} />
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Total Amount = ₹ {totalSum}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput onChange={handleInputChange} label="Advance Amount" name={'advanceAmount'} />
            </Grid>
            <Grid item md={6} xs={12}>
              <GenericInput onChange={onBalanceAmountChange} label="Balance Amount" value={totalSum - advanceAmount} disabled />
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Insurance Details
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <GenericRadio
                onChange={onIsInsuredChange}
                name="MaterialInsurance"
                orientation={'row'}
                options={MaterialInsurance}
              />
            </Grid>
            {insuranceDetails?.isInsured === 'Insured' && (
              <Fragment>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onKeyUp={onInsCompanyNameChange}
                    error={
                      formik?.errors?.addBilty?.insuranceDetails?.insCompanyName &&
                      formik?.touched?.addBilty?.insuranceDetails?.insCompanyName
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    helperText={
                      formik?.errors?.addBilty?.insuranceDetails?.insCompanyName &&
                      formik?.touched?.addBilty?.insuranceDetails?.insCompanyName &&
                      formik?.errors?.addBilty?.insuranceDetails?.insCompanyName
                    }
                    label={'Insurance Company Name'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onKeyUp={onPolicyNumberChange}
                    error={
                      formik?.errors?.addBilty?.insuranceDetails?.policyNumber &&
                      formik?.touched?.addBilty?.insuranceDetails?.policyNumber
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    label={'Policy Number'}
                  />
                  <FormHelperText error>
                    {formik.errors.addBilty?.insuranceDetails?.policyNumber &&
                      formik.touched.addBilty?.insuranceDetails?.policyNumber &&
                      formik.errors.addBilty?.insuranceDetails?.policyNumber}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDatePicker
                    onAccept={onInsuranceDateChange}
                    disablePast
                    closeOnSelect={true}
                    error={
                      formik.errors.addBilty?.insuranceDetails?.insuranceDate &&
                      formik.touched.addBilty?.insuranceDetails?.insuranceDate
                    }
                    onKeyUp={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'Insurance Date'}
                  />
                  <FormHelperText error>
                    {formik.errors.addBilty?.insuranceDetails?.insuranceDate &&
                      formik.touched.addBilty?.insuranceDetails?.insuranceDate &&
                      formik.errors.addBilty?.insuranceDetails?.insuranceDate}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onInsuranceAmountChange}
                    error={
                      formik?.errors?.addBilty?.insuranceDetails?.insuranceAmount &&
                      formik?.touched?.addBilty?.insuranceDetails?.insuranceAmount
                    }
                    onBlur={formik.handleBlur}
                    label={'Insurance Amount'}
                  />
                  <FormHelperText error>
                    {formik.errors.addBilty?.insuranceDetails?.insuranceAmount &&
                      formik.touched.addBilty?.insuranceDetails?.insuranceAmount &&
                      formik.errors.addBilty?.insuranceDetails?.insuranceAmount}
                  </FormHelperText>
                </Grid>
              </Fragment>
            )}
            <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Demurrage Details
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput onChange={onDemurrageChargeChange} label="Demurrage Charge" />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericDropdown onChange={onChargeRateChange} label="Charge Rate" />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericDropdown
                onChange={onApplicableAfterChange}
                label=" Charge Applicable After"
              />
            </Grid>
            {/* <Grid item md={12} xs={12}>
              <Typography variant="h6" sx={{ my: 3 }}>
                Other Details
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                  <GenericTextEditor value={otherDetails} onKeyUp={onEditorKeyboardPress} />
                </Grid>
              </Grid>
            </Grid> */}
            <Grid item md={12} xs={12}>
              <GenericLoadingButton
                sx={{ float: 'right', my: 2 }}
                type="submit"
                onClick={onSaveBiltyHandler}
              >
                <span>Submit</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <GenericDataGrid
            rows={biltyList?.map((item, index) => ({
              ...item,
              id: index + 1
            }))}
            columns={columns}
          />
        </Grid>
      </Box>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default BiltyForm;
