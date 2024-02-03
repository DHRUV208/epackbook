import {
  EMAIL_REGEX,
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  PINCODE_REGEX,
  PAN_REGEX,
  ADDRESS_REGEX,
  COMPANY_NAME_REGEX,
  GST_REGEX,
  COMPANY_WEBSITE_REGEX
} from '../../../utils/regular-expressions';
import * as Yup from 'yup';
export const companyRegistrationInitialValues = {
  addCompanyDetail: {
    companyName: '',
    contactPerson: '',
    companyEmail: '',
    companyMobile: '',
    pincode: '',
    state: '',
    city: '',
    locality: '',
    address: '',
    companyType: 'proprietorship',
    gstNo: '',
    companyWebsite: '',
    ibaApprovalCode: '',
    ibaCodeValidTill: '',
    iba: 'not-approved',
    incNo: '',
    panNo: '',
    firmPanNo: '',
    cinNo: ''
  },
  companyDetails: {},
  companyList: []
};

export const companyRegistrationValidationSchema = Yup.object().shape({
  addCompanyDetail: Yup.object().shape({
    companyName: Yup.string('Enter Company Name')
      .required('Company Name Is Required')
      .matches(COMPANY_NAME_REGEX, 'Please Enter Valid Name '),
      contactPerson: Yup.string('Enter Contact Person')
      .required('Contact Person Is Required')
      .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Contact Person Name '),
    companyEmail: Yup.string('Please Enter Company Email')
      .required('Company Email Is Required')
      .matches(EMAIL_REGEX, 'Please Enter Valid Email'),
    pincode: Yup.string('Enter Pincode')
      .required(' Pincode Is Required')
      .max(6, 'Pickup Address Pincode Should Be 6 Digits Only')
      .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode'),
    address: Yup.string('Enter Address')
      .matches(ADDRESS_REGEX, 'Please Enter Valid Address')
      .required('Address is Required'),
    companyType: Yup.string()
      .typeError('You must select an Option')
      .required('Company Type is required'),
    panNo: Yup.string('Enter Party Name')
      .when('companyType', {
        is: 'proprietorship',
        then: (schema) =>
          schema
            .required('PAN Number Is Required')
            .matches(PAN_REGEX, 'Please Enter Valid PAN Number'),
        otherwise: null
      }),
    firmPanNo: Yup.string('Enter Firm PAN Number').when('companyType', {
      is: 'partnershipFirm',
      then: (schema) =>
        schema
          .required('Firm PAN Number Is Required')
          .matches(PAN_REGEX, 'Please Enter Valid PAN Number'),
      otherwise: null
    }),
    incNo: Yup.string('CIN Number').when('companyType', {
      is: 'pvtLtdCompany',
      then: (schema) =>
        schema
          // .required('required')
          .matches(
            /^(?:[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}|[0-9A-Z]{8})$/,
            'Please Enter Valid Number'
          ),
      otherwise: null
    }),
    cinNo: Yup.string('CIN Number').when('companyType', {
      is: 'llp',
      then: (schema) =>
        schema
          // .required('required')
          .matches(
            /^(?:[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}|[0-9A-Z]{8})$/,
            'Please Enter Valid Number'
          ),
      otherwise: null
    }),
    gstNo: Yup.string('Enter GST Number').required('GST Number Is Required'),
    // .matches(GST_REGEX, 'Please Enter Valid GST Number'),
    companyWebsite: Yup.string().matches(COMPANY_WEBSITE_REGEX, 'Please Enter Valid Website Name'),
    iba: Yup.string().required('IBA is required'),
    ibaApprovalCode: Yup.string('Enter IBA Approval code').when('iba', {
      is: 'approved',
      then: (schema) => schema.required('IBA Approval code is required'),
      otherwise: null
    }),
    ibaCodeValidTill: Yup.string('Enter IBA Valid Till').when('iba', {
      is: 'approved',
      then: (schema) => schema.required('IBA code valid till is required'),
      otherwise: null
    })
  })
});

// .required('IBA Approval code is required')
// .required('IBA code valid till is required')
