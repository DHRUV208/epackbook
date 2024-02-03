import * as Yup from 'yup';
import {
  ADDRESS_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  MOBILE_REGEX,
  PINCODE_REGEX,
  AMOUNTS_REGEX
} from '../../../utils/regular-expressions';

export const addOrderInitialValues = {
  shiftingType: 'LOCAL',
  billingBy: 'by Individual',
  partyName: '',
  partyMobileNumber: '',
  orderAmount: "",
  tokenAmount: "",
  orderDateAndTime: "",
  shiftingDateAndTime: '',
  shiftingLuggage: [],
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
  pickUpAddress: {
    address: '',
    landmark: '',
    currentFloor: '',
    liftStatus: '',
    pinCode: '',
    state: '',
    city: '',
    locality: ''
  },
  deliveryAddress: {
    address: '',
    landmark: '',
    currentFloor: '',
    liftStatus: '',
    pinCode: '',
    state: '',
    city: '',
    locality: ''
  }
};

export const addOrderValidationSchema = Yup.object().shape({
  shiftingType: Yup.string('Select Any Shifting Type')
    .required('Shifting Type Is Required'),
  billingBy: Yup.string().typeError('You must select an Option')
    .required(),
  partyName: Yup.string('Enter Party Name').when('billingBy', {
    is: 'by Individual',
    then: (schema) =>
      schema
        .required('Party Name Is Required')
        .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
    otherwise: null
  }),
  partyMobileNumber: Yup.string('Enter Mobile Number').when('billingBy', {
    is: 'by Individual',
    then: (schema) =>
      schema
        .required('Mobile Number Is Required')
        .max(10, 'Mobile Number Should Be 10 Digits Only')
        .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
    otherwise: null
  }),
  orderAmount: Yup.string('Enter Order Amount').matches(
    AMOUNTS_REGEX,
    'Please Enter Valid Order Amount'
  ),
  tokenAmount: Yup.string('Enter Token Amount').matches(
    AMOUNTS_REGEX,
    'Please Enter Valid Token Amount'
  ),
  shiftingDateAndTime: Yup.string('Select Your Shifting Date & Time')
    .required('Shifting Date & Time Is Required')
    .matches(/^\d+$/, 'Please Enter Valid Shifting Date & Time'),
  shiftingLuggage: Yup.lazy((val) =>
    Array.isArray(val)
      ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Type Of Luggage')
      : Yup.array().required('Please Select Shifting Luggage')
  ),


  billingDetails: Yup.object().when('billingBy', {
    is: 'by Company',
    then: (schema) =>
      schema.shape({
        companyName: Yup.string('Enter Company Name')
          // .required('Company Name Is Required')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),

        approvalAuthority: Yup.string('Select Approval Authority'),

        authorityPersonName: Yup.string('Enter Authority Person Name')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),

        authorityMobileNumber: Yup.string('Enter Authority Mobile Number')
          .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),

        companyAddress: Yup.string('Enter Company Address')
          .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),

        employeeName: Yup.string('Enter Employee Name')
          // .required('Employee Name Is Required')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
      }),
    otherwise: null
  }),

  pickUpAddress: Yup.object().shape({
    pinCode: Yup.string('Enter Pickup Address Pincode')
      .required('Pickup Address Pincode Is Required')
      .max(6, 'Pickup Address Pincode Should Be 6 Digits Only')
      .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode')
  }),

  deliveryAddress: Yup.object().shape({
    pinCode: Yup.string('Enter Delivery Address Pincode')
      .required('Delivery Address Pincode Is Required')
      .max(6, 'Delivery Address Pincode Should Be 6 Digits Only')
      .matches(PINCODE_REGEX, 'Please Enter Valid Delivery Address Pincode')
  }),
  // billingDetails: Yup.object().shape({
  //   companyName: Yup.string('Enter Company Name')
  //     .required('Company Name Is Required')
  //     .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
  //   approvalAuthority: Yup.string('Select Approval Authority').required(
  //     'Approval Authority Is Required'
  //   ),
  //   authorityPersonName: Yup.string('Enter Authority Person Name')
  //     .required('Authority Person Name Is Required')
  //     .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
  //   authorityMobileNumber: Yup.string('Enter Authority Mobile Number')
  //     .required('Authority Mobile Number Is Required')
  //     .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
  //   companyAddress: Yup.string('Enter Company Address')
  //     .required('Company Address Is Required')
  //     .matches(ADDRESS_REGEX, 'Please Enter Valid Address')
  // })
});
