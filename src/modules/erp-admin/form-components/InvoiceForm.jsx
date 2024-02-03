/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react';
import { Box, FormHelperText, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import GenericSwitch from '../../../common-components/form-elements/genericSwitch';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericCheckbox from '../../../common-components/form-elements/genericCheckbox';
import GenericRadio from '../../../common-components/form-elements/genericRadio';
import GenericTextEditor from '../../../common-components/form-elements/genericTextEditor';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateConsignmentNo,
  updateTemplate,
  updateCheckClientDetails,
  updateDateOfInvoice,
  updateInvoiceAuto,
  updateInvoiceNo,
  updateTruckNo,
  updatePartyName,
  updateShiftingLuggage,
  updatePartyGST,
  updatePartyMobileNo,
  updateAddress,
  updateLandmark,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateInvoiceNumber,
  updateInvoiceDate,
  updateSACCode,
  updateRemark,
  updateBillingAddressCheck,
  updateBillingCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateModeOfMoving,
  updateDeliveryDate,
  updateCheck,
  updateValue,
  updateGstCheck,
  updateGstPercent,
  updateGstType,
  updateTransitInsuranceCheck,
  updateTransitInsuranceRequired,
  updateTransitInsuranceShiftingLuggage,
  updateTransitInsuranceIns,
  updateTransitInsuranceGST,
  updateTransitInsuranceValue,
  updateStorageCharge,
  updateStorageFromCharge,
  updateStorageToCharge,
  updateStorageAmountCharge,
  updateStorageOptionsCharge,
  updateOtherCharge,
  updateJobType,
  updateJobTypeValue,
  updateDiscount,
  updateDiscountValue,
  updateInvoiceVehicleType,
  updateInvoiceManufacturer,
  updateInvoiceModel,
  updateDiscountRequired
} from '../../../store/slices/InvoiceSlice';

import { useFormik } from 'formik';
import {
  addInvoiceInitialValues,
  addInvoiceValidationSchema
} from '../../../common-components/validator/invoice-validation';
import GenericAutocomplete from '../../../common-components/form-elements/genericAutocomplete';
import GenericDataGrid from '../../../common-components/form-elements/genericDataGrid';

const style = {
  display: 'flex',
  width: 'calc(100% - 20px)',
  mr: 1,
  border: '1px solid #C4C4C4',
  borderRadius: '4.5px',
  padding: '0px  8px'
};

const freightDetails = [
  {
    value: 'PartLoad',
    label: 'Part Load'
  },
  {
    value: 'FullLoad',
    label: 'Full Load'
  }
];
const freightDetailsVehicle = [
  {
    value: 'openBody',
    label: 'Open Body'
  },
  {
    value: 'closeBody',
    label: 'Close Body'
  }
];
const freightDetailsSeptSharing = [
  {
    value: 'separate',
    label: 'Separate'
  },
  {
    value: 'inSharing',
    label: 'In Sharing'
  }
];
const billingDetails1 = [
  {
    value: 'individual',
    label: 'Individual'
  },
  {
    value: 'byCompany',
    label: 'By Company'
  }
];

const RequiredNotRequired = [
  {
    value: 'Required',
    label: 'Required'
  },
  {
    value: 'NotRequired',
    label: 'Not Required'
  }
];

const modeOfMoving = [
  {
    value: 'bySurface',
    label: 'By Surface'
  },
  {
    value: 'byAir',
    label: ' By Air'
  },
  {
    value: 'bySea',
    label: ' By Sea'
  }
];

const GST = [
  {
    value: 'WithGST',
    label: 'With GST'
  },
  {
    value: 'WithoutGST',
    label: 'Without GST'
  },
  {
    value: 'GSTExempted',
    label: 'GST Exempted'
  },
  {
    value: 'reverseChargeMachanism',
    label: 'Reverse Charge Machanism'
  }
];

const shiftingLuggagType = [
  {
    label: 'Household',
    value: 'household'
  },
  {
    label: 'Commercial',
    value: 'commercial'
  },
  {
    label: 'Vehicle',
    value: 'vehicle'
  },
  {
    label: 'Industrial',
    value: 'industrial'
  },
  {
    label: 'Pet',
    value: 'pet'
  }
];

const SACD = [
  {
    value: 'SameasClientDetails',
    label: 'Same as Client Pickup Address'
  }
];

const columns = [
  { field: 'id', headerName: 'S.No.', width: 90 },
  {
    field: 'customerId',
    headerName: 'Customer Id ',
    width: 150,
    editable: false
  },
  {
    field: 'contactPerson',
    headerName: 'Contact Person',
    width: 150,
    editable: false
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'roleType',
    headerName: 'Role Type',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'registeredDate',
    headerName: 'Registered Date',
    type: 'number',
    width: 150,
    editable: false
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
const InvoiceForm = () => {
  const dispatch = useDispatch();
  const {
    addInvoice: { invoiceDetails, billingAddress, charges }
  } = useSelector((state) => state?.invoice);

  const formik = useFormik({
    initialValues: addInvoiceInitialValues,
    validationSchema: addInvoiceValidationSchema
  });

  const [isDisabled, setIsDisabled] = useState(false);

  // Invoice Details
  const onInvoiceAutoChange = (evt) => {
    const { checked } = evt.target;
    if (checked === true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    dispatch(updateInvoiceAuto(checked));
  };
  const onInvoiceNoChange = (evt) => {
    dispatch(updateInvoiceNo(evt?.target?.value));
  };
  const onShiftingLuggageChange = (evt) => {
    formik.setFieldValue('addInvoice.invoiceDetails.shiftingLuggage', evt?.target?.value);
    dispatch(updateShiftingLuggage(evt?.target?.value));
  };
  const onTemplateChange = (evt) => {
    formik.setFieldValue('addInvoice.invoiceDetails.template', evt?.target?.value);
    dispatch(updateTemplate(evt?.target?.value));
  };
  const onDateOfInvoiceChange = (evt) => {
    const { $d } = evt;
    dispatch(updateDateOfInvoice(new Date($d).getTime()));
  };
  const onTruckNoChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateTruckNo(value));
  };
  const onConsignmentNoChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateConsignmentNo(value));
  };
  const onModeOfMovingChange = (evt) => {
    dispatch(updateModeOfMoving(evt?.target?.value));
  };
  const onDeliveryDateChange = (evt) => {
    const { $d } = evt;
    dispatch(updateDeliveryDate(new Date($d).getTime()));
  };
  const onInvoiceVehicleTypeChange = (evt) => {
    dispatch(updateInvoiceVehicleType(evt?.target?.value));
  };
  const onInvoiceManufacturerChange = (evt) => {
    dispatch(updateInvoiceManufacturer(evt?.target?.value));
  };
  const onInvoiceModelChange = (evt) => {
    dispatch(updateInvoiceModel(evt?.target?.value));
  };

  // Billing Address
  const onBillingAddressCheckChange = (evt) => {
    dispatch(updateBillingAddressCheck(evt?.target?.value));
  };
  const onCheckClientDetailsHandler = (evt) => {
    const { value, checked } = evt.target;
    dispatch(updateCheckClientDetails({ type: value, value: checked }));
  };
  const onPartyNameChange = (evt) => {
    formik.setFieldValue('addInvoice.billingAddress.partyName', evt?.target?.value);
    dispatch(updatePartyName(evt?.target?.value));
  };
  const onPartyGSTChange = (evt) => {
    const { value } = evt.target;
    dispatch(updatePartyGST(value));
  };
  const onPartyMobileNoChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addInvoice.billingAddress.partyMobileNo', evt?.target?.value);
    dispatch(updatePartyMobileNo(value));
  };
  const onAddressChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addInvoice.billingAddress.address', evt?.target?.value);
    dispatch(updateAddress(value));
  };
  const onLandmarkChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateLandmark(value));
  };
  const onPincodeChange = (evt) => {
    formik.setFieldValue('addInvoice.billingAddress.pincode', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updatePincode(value));
  };
  const onStateChange = (evt) => {
    dispatch(updateState(evt?.target?.value));
  };
  const onCityChange = (evt) => {
    dispatch(updateCity(evt?.target?.value));
  };
  const onLocalityChange = (evt) => {
    dispatch(updateLocality(evt?.target?.value));
  };

  // PartyInvoice Details
  const onInvoiceNumberChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateInvoiceNumber(value));
  };
  const onInvoiceDateChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateInvoiceDate(value));
  };
  const onSACCodeChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateSACCode(value));
  };

  const onBillingCompanyNameChange = (evt) => {
    formik.setFieldValue('addInvoice.billingDetails.companyName', evt?.target?.value);
    dispatch(updateBillingCompanyName(evt?.target?.value));
  };
  const onApprovalAuthorityChange = (evt) => {
    formik.setFieldValue('addInvoice.billingDetails.approvalAuthority', evt?.target?.value);
    dispatch(updateApprovalAuthority(evt?.target?.value));
  };
  const onAuthorityPersonNameChange = (evt) => {
    formik.setFieldValue('addInvoice.billingDetails.authorityPersonName', evt?.target?.value);
    dispatch(updateAuthorityPersonName(evt?.target?.value));
  };
  const onAuthorityMobileNumberChange = (evt) => {
    formik.setFieldValue('addInvoice.billingDetails.authorityMobileNumber', evt?.target?.value);
    dispatch(updateAuthorityMobileNumber(evt?.target?.value));
  };
  const onCompanyAddressChange = (evt) => {
    formik.setFieldValue('addInvoice.billingDetails.companyAddress', evt?.target?.value);
    dispatch(updateCompanyAddress(evt?.target?.value));
  };
  const onCompanyGSTChange = (evt) => {
    dispatch(updateCompanyGST(evt?.target?.value));
  };
  const onEmployeeNameChange = (evt) => {
    dispatch(updateEmployeeName(evt?.target?.value));
  };
  const onEmployeeDesignationChange = (evt) => {
    dispatch(updateEmployeeDesignation(evt?.target?.value));
  };
  const onEmployeeMobileChange = (evt) => {
    dispatch(updateEmployeeMobile(evt?.target?.value));
  };

  // Remark
  const onRemarkChange = (evt) => {
    dispatch(updateRemark(evt));
  };
  const onCheckChange = (evt) => {
    dispatch(updateCheck(evt?.target?.value));
  };
  const onValueChange = (evt) => {
    dispatch(updateValue(evt?.target?.value));
  };
  const onGstCheckChange = (evt) => {
    dispatch(updateGstCheck(evt?.target?.value));
  };
  const onGstPercentChange = (evt) => {
    dispatch(updateGstPercent(evt?.target?.value));
  };
  const onGstTypeChange = (evt) => {
    dispatch(updateGstType(evt?.target?.value));
  };
  const onTransitInsuranceCheckChange = (evt) => {
    dispatch(updateTransitInsuranceCheck(evt?.target?.value));
  };
  const onTransitInsuranceRequiredChange = (evt) => {
    dispatch(updateTransitInsuranceRequired(evt?.target?.value));
  };
  const onTransitInsuranceShiftingLuggageChange = (evt) => {
    dispatch(updateTransitInsuranceShiftingLuggage(evt?.target?.value));
  };
  const onTransitInsuranceInsChange = (evt) => {
    dispatch(updateTransitInsuranceIns(evt?.target?.value));
  };

  const onTransitInsuranceGSTChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateTransitInsuranceGST(value));
  };
  const onTransitInsuranceValueChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateTransitInsuranceValue(value));
  };

  const onStorageOptionsChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateStorageOptionsCharge(value));
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
  const onQuotationDiscount = (evt) => {
    dispatch(updateDiscount(evt?.target?.value));
  };
  const onQuotationDiscountRequired = (evt) => {
    dispatch(updateDiscountRequired(evt?.target?.value));
  };
  const onQuotationDiscountValue = (evt, option, type) => {
    if (type === 'flat') {
      dispatch(updateDiscountValue({ type, value: evt?.target?.value }));
    } else {
      dispatch(updateDiscountValue({ type, value: option?.value }));
    }
  };
  const onEditorKeyboardPress = (evt) => {
    console.log(evt.target.innerHTML);
  };

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Invoice
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            {/* <Box sx={style}>
            <Stack direction="row" spacing={1} alignItems={'center'} sx={{ width: '100%' }}>
              <GenericSwitch onChange={onInvoiceAutoChange} start={'Auto'} end={'Manual'} />
              <InputBase
                onChange={onInvoiceNoChange}
                sx={{ ml: 1, flex: 1 }}
                type="text"
                placeholder="Invoice / Bill No"
                fullWidth
                disabled={isDisabled}
                autoFocus
                style={{
                  backgroundColor: '#eee',
                  padding: '3px  10px'
                }}
              />
            </Stack>
          </Box> */}
            <GenericInput label={'Enter Serial No.'} />
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericDropdown
              onChange={onShiftingLuggageChange}
              value={invoiceDetails?.shiftingLuggage}
              onKeyUp={formik.handleChange}
              error={
                formik?.errors?.addInvoice?.invoiceDetails?.shiftingLuggage &&
                formik?.touched?.addInvoice?.invoiceDetails?.shiftingLuggage
              }
              data={shiftingLuggagType}
              label="Shifting Luggage"
            />
            <FormHelperText error>
              {formik.errors?.addInvoice?.invoiceDetails?.shiftingLuggage &&
                formik.touched?.addInvoice?.invoiceDetails?.shiftingLuggage &&
                formik.errors?.addInvoice?.invoiceDetails?.shiftingLuggage}
            </FormHelperText>
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericDropdown
              onChange={onTemplateChange}
              value={invoiceDetails?.template}
              onKeyUp={formik.handleChange}
              error={
                formik?.errors?.addInvoice?.invoiceDetails?.template &&
                formik?.touched?.addInvoice?.invoiceDetails?.template
              }
              data={[
                { label: 'Invoice New Template', value: 1 },
                { label: 'Invoice Template2', value: 2 }
              ]}
              label="Template"
            />
            <FormHelperText error>
              {formik.errors?.addInvoice?.invoiceDetails?.template &&
                formik.touched?.addInvoice?.invoiceDetails?.template &&
                formik.errors?.addInvoice?.invoiceDetails?.template}
            </FormHelperText>
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericDatePicker onAccept={onDateOfInvoiceChange} label="Date of Invoice / Bill" />
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericInput onChange={onTruckNoChange} label="Lorry No." />
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericInput onChange={onConsignmentNoChange} label="Consignment No." />
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericDropdown
              onChange={onModeOfMovingChange}
              label="Mode of Moving"
              data={modeOfMoving}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <GenericDatePicker onAccept={onDeliveryDateChange} label="Delivery Date" />
          </Grid>
          {invoiceDetails?.shiftingLuggage === 'vehicle' && (
            <Fragment>
              <Grid item xs={12} md={4}>
                <GenericDropdown onChange={onInvoiceVehicleTypeChange} label={'Vehicle Type'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericDropdown onChange={onInvoiceManufacturerChange} label={'Manufacturer'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericDropdown onChange={onInvoiceModelChange} label={'Model'} />
              </Grid>
            </Fragment>
          )}
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Billing Address
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GenericRadio
              onChange={onBillingAddressCheckChange}
              sx={{ fontWeight: '500' }}
              orientation="row"
              name="FreightDetails"
              options={billingDetails1}
            />
          </Grid>
          {/* Anurag  please Uncomment and resolve the error */}
          {billingAddress?.billingAddressCheck === 'byCompany' && (
            <Fragment>
              <Grid item xs={12} md={3}>
                <GenericInput label={'Work Order No./PO No.'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericDatePicker label={'Work Order Date/PO Date'} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight={600} sx={{ my: 1 }}>
                  Billing Details
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onKeyUp={onBillingCompanyNameChange}
                  error={
                    formik?.errors?.addInvoice?.billingDetails?.companyName &&
                    formik?.touched?.addInvoice?.billingDetails?.companyName
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingDetails?.companyName &&
                    formik?.touched?.addInvoice?.billingDetails?.companyName &&
                    formik?.errors?.addInvoice?.billingDetails?.companyName
                  }
                  label={'Company Name'}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericDropdown
                  onChange={onApprovalAuthorityChange}
                  // value={details?.templateName}
                  onKeyUp={formik.handleChange}
                  error={
                    formik?.errors?.addInvoice?.billingDetails?.approvalAuthority &&
                    formik?.touched?.addInvoice?.billingDetails?.approvalAuthority
                  }
                  label={'Approval Authority'}
                  // data={APPROVAL_AUTHORTY}
                />
                <FormHelperText error>
                  {formik.errors.addInvoice?.billingDetails?.approvalAuthority &&
                    formik.touched.addInvoice?.billingDetails?.approvalAuthority &&
                    formik.errors.addInvoice?.billingDetails?.approvalAuthority}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onKeyUp={onAuthorityPersonNameChange}
                  error={
                    formik?.errors?.addInvoice?.billingDetails?.authorityPersonName &&
                    formik?.touched?.addInvoice?.billingDetails?.authorityPersonName
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingDetails?.authorityPersonName &&
                    formik?.touched?.addInvoice?.billingDetails?.authorityPersonName &&
                    formik?.errors?.addInvoice?.billingDetails?.authorityPersonName
                  }
                  label={'Authority Person Name'}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onKeyUp={onAuthorityMobileNumberChange}
                  error={
                    formik?.errors?.addInvoice?.billingDetails?.authorityMobileNumber &&
                    formik?.touched?.addInvoice?.billingDetails?.authorityMobileNumber
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingDetails?.authorityMobileNumber &&
                    formik?.touched?.addInvoice?.billingDetails?.authorityMobileNumber &&
                    formik?.errors?.addInvoice?.billingDetails?.authorityMobileNumber
                  }
                  label={'Authority Mobile Number'}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <GenericInput
                  onKeyUp={onCompanyAddressChange}
                  error={
                    formik?.errors?.addInvoice?.billingDetails?.companyAddress &&
                    formik?.touched?.addInvoice?.billingDetails?.companyAddress
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingDetails?.companyAddress &&
                    formik?.touched?.addInvoice?.billingDetails?.companyAddress &&
                    formik?.errors?.addInvoice?.billingDetails?.companyAddress
                  }
                  label={'Company Address'}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <GenericInput onChange={onCompanyGSTChange} label={'Company GST'} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <GenericInput onChange={onEmployeeNameChange} label={'Employee Name'} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <GenericInput
                      onChange={onEmployeeDesignationChange}
                      label={'Employee Designation'}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <GenericInput
                      onChange={onEmployeeMobileChange}
                      label={'Employee Mobile Number'}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          )}
          {billingAddress?.billingAddressCheck === 'individual' && (
            <Fragment>
              <Grid item md={12}>
                <Box>
                  <GenericCheckbox onChange={onCheckClientDetailsHandler} list={SACD} />
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <GenericDropdown
                  onKeyUp={onPartyNameChange}
                  error={
                    formik?.errors?.addInvoice?.billingAddress?.partyName &&
                    formik?.touched?.addInvoice?.billingAddress?.partyName
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingAddress?.partyName &&
                    formik?.touched?.addInvoice?.billingAddress?.partyName &&
                    formik?.errors?.addInvoice?.billingAddress?.partyName
                  }
                  label="Party Name"
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <GenericInput onChange={onPartyGSTChange} label="Party GST" />
              </Grid>
              <Grid item md={4} xs={12}>
                <GenericInput
                  onKeyUp={onPartyMobileNoChange}
                  error={
                    formik?.errors?.addInvoice?.billingAddress?.partyMobileNo &&
                    formik?.touched?.addInvoice?.billingAddress?.partyMobileNo
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingAddress?.partyMobileNo &&
                    formik?.touched?.addInvoice?.billingAddress?.partyMobileNo &&
                    formik?.errors?.addInvoice?.billingAddress?.partyMobileNo
                  }
                  label="Party Mobile No."
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <GenericInput
                  onKeyUp={onAddressChange}
                  error={
                    formik?.errors?.addInvoice?.billingAddress?.address &&
                    formik?.touched?.addInvoice?.billingAddress?.address
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingAddress?.address &&
                    formik?.touched?.addInvoice?.billingAddress?.address &&
                    formik?.errors?.addInvoice?.billingAddress?.address
                  }
                  label="Address"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <GenericInput onChange={onLandmarkChange} label="Landmark" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onKeyUp={onPincodeChange}
                  error={
                    formik?.errors?.addInvoice?.billingAddress?.pincode &&
                    formik?.touched?.addInvoice?.billingAddress?.pincode
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={
                    formik?.errors?.addInvoice?.billingAddress?.pincode &&
                    formik?.touched?.addInvoice?.billingAddress?.pincode &&
                    formik?.errors?.addInvoice?.billingAddress?.pincode
                  }
                  label={'Pincode'}
                  required
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericDropdown onChange={onStateChange} label={'State'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericDropdown onChange={onCityChange} label={'City'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericDropdown onChange={onLocalityChange} label={'Locality'} />
              </Grid>
            </Fragment>
          )}
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Freight Details
            </Typography>
          </Grid>
          {invoiceDetails.shiftingLuggage === 'vehicle' ? (
            <Fragment>
              <Grid item md={12} xs={12} sx={{ mb: 1 }}>
                <GenericRadio
                  sx={{ fontWeight: '500' }}
                  orientation="row"
                  name="FreightDetails"
                  options={freightDetailsVehicle}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <GenericRadio
                  sx={{ fontWeight: '500' }}
                  orientation="row"
                  // name="FreightDetails"
                  options={freightDetailsSeptSharing}
                />
              </Grid>
            </Fragment>
          ) : (
            <Grid item md={12} xs={12} sx={{ mb: 4 }}>
              <GenericRadio
                sx={{ fontWeight: '500' }}
                orientation="row"
                name="FreightDetails"
                options={freightDetails}
              />
            </Grid>
          )}
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Typography variant="h6">Freight Charges*</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <GenericDropdown label={'Packing Charges'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <GenericDropdown label={'Packing Material Charges'} />
              </Grid>
              <Grid xs={12} item md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <GenericDropdown label={'Loading Charges'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <GenericDropdown label={'Unloading Charges'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <GenericDropdown label={'Unpacking Charges'} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="0" />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput placeholder="HSN Code" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Other Charges
            </Typography>
          </Grid>
          <Grid item md={12} xs={12} sx={{ mb: 1 }}>
            <GenericRadio
              onChange={onOtherChargeChange}
              sx={{ fontWeight: '500' }}
              orientation="row"
              name="RequiredNotRequired"
              options={RequiredNotRequired}
            />
          </Grid>
          <Grid item md={12}>
            {charges?.otherCharges?.required === 'Required' && (
              <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                  <GenericDropdown onChange={onJobTypeChange} label="Item/Particular" />
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput label={'HSN Code'} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput label={'Qt.'} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <GenericInput label={'Rate/Item'} />
                </Grid>
                <Grid item md={2} xs={12}>
                  <GenericInput onChange={onJobTypeValueChange} placeholder="Amount" />
                </Grid>
                <Grid item md={1} xs={12}>
                  <GenericLoadingButton>
                    <span>Add</span>
                  </GenericLoadingButton>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Surcharge
            </Typography>
          </Grid>
          <Grid item md={12} xs={12} sx={{ mb: 1 }}>
            <GenericRadio
              onChange={onCheckChange}
              sx={{ fontWeight: '500' }}
              orientation="row"
              name="RequiredNotRequired"
              options={RequiredNotRequired}
            />
          </Grid>
          {charges?.surcharge.check === 'Required' && (
            <Grid item md={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <GenericDropdown onChange={onValueChange} />
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
              Discount
            </Typography>
            <Grid item xs={12}>
              <GenericRadio
                orientation="row"
                onChange={onQuotationDiscount}
                options={[
                  { value: 'true', label: 'Required' },
                  { value: 'false', label: 'Not Required' }
                ]}
              />
            </Grid>
          </Grid>
          {charges?.discount?.required === 'true' && (
            <Fragment>
              <Grid item xs={12}>
                <GenericRadio
                  orientation="row"
                  onChange={onQuotationDiscountRequired}
                  options={[
                    { value: 'true', label: 'Discount @%' },
                    { value: 'false', label: 'Flat Discount' }
                  ]}
                />
              </Grid>
              {charges?.discount?.discountRequired === 'true' ? (
                <Grid item xs={12} md={3} sx={{ my: 2 }}>
                  <GenericAutocomplete
                    onChange={(evt, option) => onQuotationDiscountValue(evt, option, 'percent')}
                    options={[{ label: '5%', value: 5 }]}
                    label={'Choose %'}
                  />
                </Grid>
              ) : (
                <Grid item xs={12} md={3} sx={{ my: 2 }}>
                  <GenericInput
                    onChange={(evt, option) => onQuotationDiscountValue(evt, option, 'flat')}
                    label={'Enter discount amount'}
                  />
                </Grid>
              )}
            </Fragment>
          )}
          <Grid item md={12} xs={12}>
            <Typography variant="h6" sx={{ my: 2 }}>
              GST
            </Typography>
          </Grid>
          <Grid item md={12} xs={12} sx={{ mb: 1 }}>
            <GenericRadio
              onChange={onGstCheckChange}
              sx={{ fontWeight: '500' }}
              orientation="row"
              name="RequiredNotRequired"
              options={GST}
            />
          </Grid>
          {charges?.gst.gstCheck === 'WithGST' && (
            <Grid item md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <GenericDropdown onChange={onGstPercentChange} label="GST Percent" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericDropdown onChange={onGstTypeChange} label="GST Type" />
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
              Transit Insurance
            </Typography>
            <GenericRadio
              onChange={onTransitInsuranceCheckChange}
              orientation="row"
              options={[
                { value: 'required', label: 'Required' },
                { value: 'not-required', label: 'Not Required' }
              ]}
            />
          </Grid>
          {charges?.transitInsurance?.checkRequired === 'required' && (
            <Grid item xs={12}>
              <GenericRadio
                onChange={onTransitInsuranceRequiredChange}
                orientation="row"
                options={[
                  { value: 'optional', label: 'Optional' },
                  { value: 'additional-freight', label: 'Additional From Freight' },
                  { value: 'included-freight', label: 'Included In Freight' },
                  { value: 'extra', label: 'Extra' }
                ]}
              />
              <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={12} md={3}>
                  <GenericAutocomplete
                    onChange={onTransitInsuranceShiftingLuggageChange}
                    options={[{ label: 'Home', value: 'home' }]}
                    label={'Shifting Luggage'}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <GenericAutocomplete
                    options={[{ label: '5%', value: 5 }]}
                    label={'Insurance %*'}
                    onChange={onTransitInsuranceInsChange}
                  />
                </Grid>
                {
                  <Grid item xs={12} md={3}>
                    <GenericInput onChange={onTransitInsuranceGSTChange} label={'GST %*'} />
                  </Grid>
                }
                {
                  <Grid item xs={12} md={3}>
                    <GenericInput onChange={onTransitInsuranceValueChange} label={'Amount'} />
                  </Grid>
                }

                <Grid item xs={12} md={3}>
                  <GenericLoadingButton>
                    <span>Save</span>
                  </GenericLoadingButton>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ my: 2 }} fontWeight={600}>
              Storage Charges
            </Typography>
            <GenericRadio
              orientation="row"
              onChange={onStorageChange}
              options={[
                { value: 'required', label: 'Required' },
                { value: 'not-required', label: 'Not Required' }
              ]}
            />
            {charges?.storeCharges?.required === 'required' && (
              <Grid item xs={12}>
                <GenericRadio
                  orientation="row"
                  onChange={onStorageOptionsChange}
                  options={[
                    { value: 'per-day', label: 'Per Day Charges' },
                    { value: 'min-fixed', label: 'Minimum Fixed Charges' },
                    { value: 'period', label: 'Charges During Period' }
                  ]}
                />
              </Grid>
            )}

            <Grid container spacing={2} sx={{ my: 1 }}>
              {charges?.storeCharges?.required === 'required' &&
                charges?.storeCharges?.options === 'period' && (
                  <>
                    <Grid item xs={12} md={3}>
                      <GenericDatePicker onChange={onStorageFromChange} label={'From'} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <GenericDatePicker onChange={onStorageToChange} label={'To'} />
                    </Grid>
                  </>
                )}

              {charges?.storeCharges?.required === 'required' && (
                <Grid item xs={12} md={3}>
                  <GenericInput onChange={onStorageAmountChange} label={'Amount'} />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography onChange={onRemarkChange} variant="h6" sx={{ my: 2 }}>
              Remark
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <GenericTextEditor onKeyDown={onEditorKeyboardPress} />
          </Grid>
          <Grid item md={12}>
            <GenericLoadingButton sx={{ float: 'right', my: 2 }} type="submit">
              <span>Preview</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};
export default InvoiceForm;
