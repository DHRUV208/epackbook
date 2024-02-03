import * as Yup from 'yup';
export const userManagementInitialValues = {
  addSignature: {
    signatureType: '',
    roleType: '',
    nameOfEmployee: ''
  },
  addPermission: {},
  listModules: []
};



export const addUserManagementValidationSchema = Yup.object().shape({
  addSignature: Yup.object().shape({
    signatureType: Yup.string('Select Signature Type').required('Signature Type Is Required'),
    roleType: Yup.string('Select Role Type').required('Role Type Is Required'),
    nameOfEmployee: Yup.string('Select Name of Employe').required('Employe Name Is Required')
  })
});
