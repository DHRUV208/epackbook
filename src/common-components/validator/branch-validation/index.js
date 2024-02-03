import * as Yup from 'yup';
import {
  ADDRESS_REGEX,
  COMPANY_NAME_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  MOBILE_REGEX,
  PINCODE_REGEX,
  EMAIL_REGEX
} from '../../../utils/regular-expressions';

export const addBranchInitialValues = {
  branchName: '',
  branchRegMobileNumber: '',
  pinCode: '',
  state: '',
  city: '',
  locality: '',
  address: '',
  landmark: '',
  email: ''
};
export const addBranchValidationSchema = Yup.object().shape({
  branchName: Yup.string('Enter Branch Name')
    .required('Branch Name Is Required')
    .matches(COMPANY_NAME_REGEX, 'Please Enter Valid Name'),
  branchRegMobileNumber: Yup.string('Enter Mobile Number')
    .required('Mobile Number Is Required')
    .max(10, 'Mobile Number Should Be 10 Digits Only')
    .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
  pinCode: Yup.string('Enter Pincode')
    .required('Pincode Is Required')
    .max(6, 'Pincode Should Be 6 Digits Only')
    .matches(PINCODE_REGEX, 'Please Enter Valid Pincode'),
  address: Yup.string('Enter Address')
    .required('Address Is Required')
    .matches(ADDRESS_REGEX, 'Please Enter Valid Address'),
  email: Yup.string('Enter Email')
    .required('Email Is Required')
    .matches(EMAIL_REGEX, 'Please Enter Valid Email Id'),

});
