import * as Yup from 'yup';
import {
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  AMOUNTS_REGEX,
  ADDRESS_REGEX,
  PINCODE_REGEX
} from '../../../utils/regular-expressions';

export const addBiltyInitialValues = {
  addBilty: {
    basicDetails: {
      biltyAuto: false,
      biltyNo: '',
      template: '',
      dateOfBilty: ''
    },
    consignerDetails: {
      checkClientDetails: false,
      consignerName: '',
      consignerGST: '',
      consignerMobile: '',
      address: '',
      landmark: '',
      pinCode: '',
      state: '',
      city: '',
      locality: ''
    },
    loadingAddress: {
      checkLoadingAddress: false,
      address: '',
      landmark: '',
      pinCode: '',
      state: '',
      city: '',
      locality: ''
    },
    consigneeDetails: {
      checkClientDetails: false,
      consignerName: '',
      consignerGST: '',
      consignerMobile: '',
      address: '',
      landmark: '',
      pinCode: '',
      state: '',
      city: '',
      locality: ''
    },
    unloadingAddress: {
      checkUnloadingAddress: false,
      address: '',
      landmark: '',
      pinCode: '',
      state: '',
      city: '',
      locality: ''
    },
    vehicleDetails: {
      invoiceNo: '',
      vehicleType: '',
      vehicleNo: '',
      fromLocation: '',
      toLocation: '',
      driverName: '',
      driverMobile: '',
      driverLicence: '',
      sealNo: '',
      inDate: '',
      outDate: ''
    },
    e_WayBillDetails: {
      e_wayBillNo: '',
      generatedOn: '',
      expiryDate: ''
    },
    materialDetails: {
      checkMaterialDetails: '',
      materialName: '',
      typeOfMoving: '',
      noOfArticles: '',
      packingType: '',
      hsnCode: '',
      billOrInvoiceNo: '',
      actualWeight: '',
      applicableWeight: '',
      units: '',
      valueOfGoods: ''
    },
    riskType: false,
    liabilityOfTax: '',
    insuranceStatus:'',
    totalAmount: {
      advanceAmount: '',
      balanceAmount: ''
    },
    insuranceDetails: {
      isInsured: 'false',
      insuranceCompany: '',
      policyNumber: '',
      insuranceDate: '',
      insuranceAmount: ''
    },
    demurrageDetails: {
      demurrageCharge: '',
      chargeRate: '',
      applicableAfter: ''
    },
    otherDetails: ''
  }
};

export const addBiltyValidationSchema = Yup.object().shape({
  addBilty: Yup.object().shape({
    basicDetails: Yup.object().shape({
      template: Yup.string('Select Template Name').required('Template Name Is Required'),
      dateOfBilty: Yup.string('Select Your Bilty Date')
        .required('Bilty date Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Bilty Date')
    }),
    consignerDetails: Yup.object().shape({
      consignerName: Yup.string('Enter Consigner Name').required('Consigner Name Is Required'),
      consignerMobile: Yup.string('Enter Consigner Mobile').required(
        'Consigner Mobile Is Required'
      ),
      consignerGST: Yup.string('Enter Consigner GST').required('Consigner GST Is Required'),
      address: Yup.string('Enter Address')
        .required('Address Is Required')
        .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
      pinCode: Yup.string('Enter PinCode')
        .required('PinCode Is Required')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pincode')
    }),
    loadingAddress: Yup.object().shape({
      address: Yup.string('Enter Loading Address')
        .required('Loading Address Is Required')
        .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
      pinCode: Yup.string('Enter Loading PinCode')
        .required('Loading PinCode Is Required')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pincode')
    }),
    consigneeDetails: Yup.object().shape({
      consignerName: Yup.string('Enter Consignee Name')
        .required('Consignee Name Is Required')
        .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name '),
      consignerMobile: Yup.string('Enter Consignee Mobile').required(
        'Consignee Mobile Is Required'
      ),
      consignerGST: Yup.string('Enter Consigner GST').required('Consigner GST Is Required'),
      address: Yup.string('Enter Address')
        .required('Address Is Required')
        .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
      pinCode: Yup.string('Enter PinCode')
        .required('PinCode Is Required')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pincode')
    }),
    unloadingAddress: Yup.object().shape({
      address: Yup.string('Enter Delivery Address')
        .required('Unloading Address Is Required')
        .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
      pinCode: Yup.string('Enter Delivery PinCode')
        .required('Unloading PinCode Is Required')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pincode')
    }),
    vehicleDetails: Yup.object().shape({
      invoiceNo: Yup.string('Select Invoice No').required('Invoice No Is Required'),
      vehicleType: Yup.string('Select Vehicle Type').required('Vehicle Type Is Required'),
      vehicleNo: Yup.string('Enter Vehicle Number').required('Vehicle Number Is Required'),
      fromLocation: Yup.string('Select From Location').required('From Location Is Required'),
      toLocation: Yup.string('Select To Location').required('To Location Is Required'),
      driverName: Yup.string('Enter Driver Name').required('Driver Name Is Required'),
      driverMobile: Yup.string('Enter Driver Mobile').required('Driver Mobile Is Required'),
      driverLicence: Yup.string('Enter Driver Licence').required('Driver Licence Is Required'),
      sealNo: Yup.string('Enter Seal No Licence').required('Seal No  Is Required'),
      driverName: Yup.string('Enter Driver Name').required('Driver Name Is Required'),

    }),
    e_WayBillDetails: Yup.object().shape({
      e_wayBillNo: Yup.string('Select E_wayBill No').required('E_wayBill No Is Required'),
      generatedOn: Yup.string('Select generatedOn No').required('generatedOn No Is Required'),
      expiryDate: Yup.string('Select expiryDate No').required('expiryDate No Is Required'),
    }),

    materialDetails: Yup.object().when('typeOfMoving',{
      is: (type) => ['household', 'commercial', '3pl'].includes(type),
      then:(schema) =>
        schema.shape({
      materialName: Yup.string('Enter materialName ').required('Material Name No Is Required'),
      noOfArticles: Yup.string('Enter materialName ').required('Material Name No Is Required'),
      packingType: Yup.string('Select packingType ').required('Packing Type Name No Is Required'),
      hsnCode: Yup.string('Select hsnCode ').required('HSNCode Is Required'),
      actualWeight: Yup.string('Enter actualWeight ').required('Actual Weight Is Required'),
      applicableWeight: Yup.string('Enter applicableWeight ').required('Applicable Weight Is Required'),
      units: Yup.string('Enter units ').required('Units Is Required'),
      valueOfGoods: Yup.string('Enter valueOfGoods ').required('Value Of Goods Is Required')
      
        })
    }),
    insuranceDetails: Yup.object().shape({
      insCompanyName: Yup.string('Enter Insurance Company Name')
        .required('Insurance Company Name Is Required')
        .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Company Name'),
      policyNumber: Yup.string('Enter Policy Number').required('Policy Number Is Required'),
      insuranceDate: Yup.string('Select Your Insurance Date')
        .required('Insurance date Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Insurance Date'),
      insuranceAmount: Yup.string('Enter Insurance Amount')
        .required('Insurance Amount Is Required')
        .matches(AMOUNTS_REGEX, 'Please Enter Amount In Numbers')
    })
  })
});
