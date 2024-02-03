import * as Yup from 'yup';
export const addFollowUpsInitialValues = {
  addFollowUps: {
    dateAndTime: '',
    comment: ''
  }
};

export const addFollowUpsValidationSchema = Yup.object().shape({
  addFollowUps: Yup.object().shape({
    dateAndTime: Yup.string('Enter Date & Time').required('Date & Time Is Required'),
  })
});
