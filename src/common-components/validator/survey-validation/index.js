import * as Yup from 'yup';
export const surveyInitialValues = {
  add: {
    dateAndTime: '',
    comment: ''
  }
};

export const surveyValidationSchema = Yup.object().shape({
  add: Yup.object().shape({
    dateAndTime: Yup.string('Select Your Survey Date')
    .required('Survey Date Is Required')
    .matches(/^\d+$/, 'Please Enter Valid Survey Date'),
    comment: Yup.string('Enter Comment')
  })
});
