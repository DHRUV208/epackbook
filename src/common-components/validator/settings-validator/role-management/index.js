import * as Yup from 'yup';
import {
  EMAIL_REGEX,
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX
} from '../../../../utils/regular-expressions';
export const employeeEnrollmentInitialValues = {
  chooseEntity: 'head-office',
  entityValue: {
    entityId: ''
  },
  name: '',
  mobileNumber: '',
  email: '',
  userName:'',
  createPassword: '',
  roleType: [],
  permissions: ''
}

export const addRoleManagementSchema = Yup.object().shape({
  name: Yup.string('Enter Name')
    .required('Name Is Required')
    .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
  mobileNumber: Yup.string('Enter Mobile Number')
    .required('Mobile Number Is Required')
    .max(10, 'Mobile Number Should Be 10 Digits Only')
    .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
  email: Yup.string('Enter Email')
    .email('Invalid email format')
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Please Enter Valid Email Id'),
  userName: Yup.string('Enter User Name').required('User Name Is Required'),
  createPassword: Yup.string('Enter Password').required('Password Is Required'),
  roleType: Yup.lazy((val) =>
    Array.isArray(val)
      ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Role Type')
      : Yup.array().required('Please Select Role Type')
  )
});
