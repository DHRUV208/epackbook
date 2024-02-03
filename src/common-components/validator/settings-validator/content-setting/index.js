import * as Yup from 'yup';
export const contentManagementInitialValues = {
  add: {
    contactDetails: {
      contactType: '',
      otherNumber: '',
      number: '',
      contactCheckbox: []
    },
    registrationDetail: {
      chooseDocumentType: '',
      ISOCertificateType: ''
    },
    footerContent: {
      chooseAccountType: '',
      addTitle: '',
      inputField: ''
    }
  }
};

export const addContentManagementValidationSchema = Yup.object().shape({
  add: Yup.object().shape({
    contactDetails: Yup.object().shape({
      contactType: Yup.string('Select Contact Type').required('Contact Type Is Required'),
      otherNumber: Yup.string('Enter Title').required('Title Is Required'),
      number: Yup.string('Enter Number').required('Number Is Required'),
      contactCheckbox: Yup.lazy((val) =>
        Array.isArray(val)
          ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Option')
          : Yup.array().required('Please Select At Least One Option')
      )
    }),
    footerContent: Yup.object().shape({
      chooseAccountType: Yup.string('Select Contact Type').required('Contact Type Is Required'),
      addTitle: Yup.string('Select Contact Type').required('Contact Type Is Required')
    })
  })
});
