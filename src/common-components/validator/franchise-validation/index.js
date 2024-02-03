import * as Yup from 'yup';
import {
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  ADDRESS_REGEX,
  PINCODE_REGEX,
  EMAIL_REGEX,
  GST_REGEX,
  COMPANY_WEBSITE_REGEX
} from '../../../utils/regular-expressions';

export const addFranchiseInitialValues = {
  addFranchise: {
    franchiseName: '',
    ownerName: '',
    registeredmobile: '',
    pincode: '',
    state: '',
    city: '',
    locality: '',
    franchiseAddress: '',
    landmark: '',
    email: ''
  }
};

export const updateFranchiseInitialValues = {
  updateFranchise: {
    franchiseName: '',
    ownerName: '',
    registeredmobile: '',
    pincode: '',
    state: '',
    city: '',
    locality: '',
    franchiseAddress: '',
    gstNo: '',
    website: '',
    landmark: '',
    email: ''
  }
}

export const addFranchiseValidationSchema = Yup.object().shape({
  addFranchise: Yup.object().shape({
    franchiseName: Yup.string('Enter Franchise Name')
      .required('Franchise name is required')
      .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
    ownerName: Yup.string('Enter Owner Name')
      .required('Franchise name is required')
      .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
    registeredmobile: Yup.string('Enter Registered Mobile No')
      .required('Registered Mobile is required')
      .matches(MOBILE_REGEX, 'Please Enter Valid Number'),
    pincode: Yup.string('Enter Pincode')
      .required('Pincode is required')
      .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode'),
    state: Yup.string('Enter State'),
    city: Yup.string('Enter City'),
    locality: Yup.string('Enter Locality').matches(),
    franchiseAddress: Yup.string('Enter Franchise Address').matches(
      ADDRESS_REGEX,
      'Please Enter Valid Address'
    ),
    landmark: Yup.string('Enter Landmark').matches(ADDRESS_REGEX, 'Please Enter Valid Landmark'),
    email: Yup.string('Enter Email').matches(EMAIL_REGEX, 'Please Enter Valid Email Address')
  })
});

export const updateBasicDetailValidationSchema = Yup.object().shape({
  franchiseName: Yup.string("Required").required('Mobile Number Is Required').max(10, 'Mobile Number Should Be 10 Digits Only').matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number')
  // franchiseOwnerName: Yup.string('Select Any').required('Required'),
  // phone: Yup.string('Select Any').required('Required'),
  // email: Yup.string('Select Any').required('Required'),
  // website: Yup.string('Select Any').required('Required'),
  // GST: Yup.string('Select Any').required('Required')
  // address: Yup.string('Select Any').required('Required'),
  // landmark: Yup.string('Select Any').required('Required'),
  // state: Yup.string('Select Any').required('Required'),
  // city: Yup.string('Select Any').required('Required'),
  // locality: Yup.string('Select Any').required('Required'),
  // pincode: Yup.string('Select Any').required('Required')
});
export const updateFranchiseAddressValidationSchema = Yup.object().shape({
  pincode: Yup.string('Select Any').required('Required')
});
