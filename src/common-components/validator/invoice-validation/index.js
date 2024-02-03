import * as Yup from 'yup';
import {
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  AMOUNTS_REGEX,
  ADDRESS_REGEX,
  PINCODE_REGEX
} from '../../../utils/regular-expressions';

export const addInvoiceInitialValues = {
  addInvoice: {
    invoiceDetails: {
      invoiceAuto: false,
      shiftingLuggage: '',
      template: '',
      dateOfInvoice: '',
      truckNo: '',
      consignmentNo: '',
      modeOfMoving: '',
      deliveryDate: '',
      vehicleType: '',
      manufacturer: '',
      model: ''
    },
    billingAddress: {
      billingAddressCheck: '',
      checkClientDetails: false,
      partyName: '',
      partyGST: '',
      partyMobileNo: '',
      address: '',
      landmark: '',
      pincode: '',
      state: '',
      city: '',
      locality: ''
    },
    partyInvoiceDetails: {
      invoiceNumber: '',
      invoiceDate: '',
      SACCode: ''
    },
    billingDetails: {
      companyName: '',
      approvalAuthority: '',
      authorityPersonName: '',
      authorityMobileNumber: '',
      companyAddress: '',
      companyGST: '',
      employeeName: '',
      employeeDesignation: '',
      employeeMobile: ''
    },
    charges: {
      surcharge: {
        check: '',
        value: ''
      },
      discount: {
        required: 'false',
        discountRequired: 'false',
        value: 0,
        type: 'flat'
      },
      gst: {
        gstCheck: '',
        gstPercent: '',
        gstType: ''
      },
      transitInsurance: {
        checkRequired: '',
        required: '',
        shiftingLuggage: '',
        insurance: '',
        gst: '',
        value: ''
      },
      storeCharges: {
        required: '',
        options: '',
        from: '',
        to: '',
        amount: 0
      },
      otherCharges: {
        required: 'false',
        jobType: '',
        value: 0
      }
    },

    remark: ''
  }
};

export const addInvoiceValidationSchema = Yup.object().shape({
  addInvoice: Yup.object({
    invoiceDetails: Yup.object({
      shiftingLuggage: Yup.string('Select Shifting Luggage').required(
        'Shifting Luggage Is Required'
      ),
      template: Yup.string('Select Template').required('Template Is Required'),
      dateOfInvoice: Yup.string('Select Your Bilty Date')
        .required('Bilty date Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Bilty Date'),
      truckNo: Yup.string('Enter Truck No.').required('Truck No. Is Required'),
      consignmentNo: Yup.string('Enter Consignment No.').required('Consignment No. Is Required')
    }),
    billingAddress: Yup.object({
      partyName: Yup.string('Enter Party name')
        .required('Party name Is Required')
        .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
      partyMobileNo: Yup.string('Enter Party Mobile No.')
        .required('Party Mobile No. Is Required')
        .matches(MOBILE_REGEX, 'Please Enter Valid Number'),
      address: Yup.string('Enter Address')
        .required('Address Is Required')
        .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
      pincode: Yup.string('Enter Pincode')
        .required('Pincode Is Required')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pincode')
    }),
    partyInvoiceDetails: Yup.object({
      invoiceNumber: Yup.string('Enter Invoice Number').required('Invoice Number Is Required'),
      invoiceDate: Yup.string('Enter Invoice Date').required('Invoice Date Is Required'),
      SACCode: Yup.string('Enter SAC Code').required('SAC Code Is Required')
    })
  })
});
