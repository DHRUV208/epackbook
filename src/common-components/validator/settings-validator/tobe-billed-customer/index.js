import * as Yup from 'yup';
export const tobeBilledInitialValues = {
  add: {
    companyName: '',
    approvalAuthority: '',
    authorityName: '',
    authorityMobileNo: '',
    pincode: '',
    state: '',
    city: '',
    locality: '',
    address: '',
    companyGst: '',
    companyEmail: '',
    otherContactNo: '',
    authorityPersonEmail: '',
    chooseEntity: '',
    branchName: '',
    prefix: '',
    suffix: ''
  }
};

export const surveyValidationSchema = Yup.object().shape({
  add: Yup.object().shape({
    companyName: Yup.string('').required('').matches(),
    approvalAuthority: Yup.string('').required('').matches(),
    authorityName: Yup.string('').required('').matches(),
    authorityMobileNo: Yup.string('').required('').matches(),
    pincode: Yup.string('').required('').matches(),
    state: Yup.string('').required('').matches(),
    city: Yup.string('').required('').matches(),
    locality: Yup.string('').required('').matches(),
    address: Yup.string('').required('').matches(),
    companyGst: Yup.string('').required('').matches(),
    companyEmail: Yup.string('').required('').matches(),
    otherContactNo: Yup.string('').required('').matches(),
    authorityPersonEmail: Yup.string('').required('').matches(),
    chooseEntity: Yup.string('').required('').matches(),
    branchName: Yup.string('').required('').matches(),
    prefix: Yup.string('').required('').matches(),
    suffix: Yup.string('').required('').matches()
  })
});
