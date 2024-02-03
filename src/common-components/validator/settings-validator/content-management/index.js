import * as Yup from 'yup';
import { MOBILE_REGEX } from '../../../../utils/regular-expressions';
export const contactDetailInitialValues = {
  contactType: '',
  contactValue: '',
  otherContact: '',
  chooseModule: [],
}
export const govtRegistrationInitialValues = {
  chooseDocumentType: '',
  documentValue: '',
  otherTitle: '',
  chooseModule: [],
  ibaApprovaldate: ''
}
export const footerContentInitialValues = {
  chooseAccountType: '',
  title: '',
  content: '',
}
export const modulesInitialValues = {
  value: ''
}
export const subModulesInitialValues = {
  moduleId: "",
  value: ""
}
export const featureInitialValues = {
  module: "",
  subModuleId: '',
  value: ''
}
export const enquirySourceInitialValues = {
  value: ''
}
export const approvalAuthorityInitialValues = {
  value: ''
}


export const contactDetailsValidationSchema = Yup.object().shape({
  contactType: Yup.string('Select Contact Type').required('Contact Type is Required'),
  contactValue: Yup.string('Enter Contact Number')
    .required('Contact is Required')
    .matches(),
  otherContact: Yup.string('Enter Contact Type').when('contactType', {
    is: 'other',
    then: (schema) => schema.required('required').matches(),
    otherwise: null
  }),
  chooseModule: Yup.lazy((val) =>
    Array.isArray(val)
      ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Module')
      : Yup.array().required('Please Select Module')
  )
});
export const registrationDetailsValidationSchema = Yup.object().shape({
  chooseDocumentType: Yup.string('Select Document Type').required('Required').matches(),
  documentValue: Yup.string('').required('Required').matches(),
  otherTitle: Yup.string('Enter Title').when('chooseDocumentType', {
    is: 'Other',
    then: (schema) => schema.required('required').matches(),
    otherwise: null
  }),
  chooseModule: Yup.lazy((val) =>
    Array.isArray(val)
      ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Sub-Module')
      : Yup.array().required('Please Select Module')
  )
});
export const footerContentValidationSchema = Yup.object().shape({
  chooseAccountType: Yup.string('Select an Account Type').required('required').matches(),
  title: Yup.string(''),
});
export const modulesValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Module').required('Module is Required').matches()
});
export const subModulesValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Sub Module').required('Required').matches()
  // moduleId: Yup.string('Select Sub Module').required('Required') 

});
export const FeaturesValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Sub Module').required('Required').matches()
  // moduleId: Yup.string('Select Sub Module').required('Required') 

});
export const enquiryStatusValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Enquiry Status').required('Required').matches()
});
export const enquirySourceValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Enquiry Source').required('Required').matches()
});
export const approvalAuthorityValidationSchema = Yup.object().shape({
  value: Yup.string('Please Enter Approval Authority').required('Required').matches()
});
