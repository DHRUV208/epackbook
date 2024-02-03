import * as Yup from 'yup';

export const appSettingInitialValues = {
  add: {
    quotation: '',
    moneyReceipt: '',
    carCondition: '',
    bilty: '',
    invoice: ''
  }
};
export const addAppSettingValidationSchema = Yup.object().shape({
  add: Yup.object().shape({
    quotation: Yup.string('Enter Quotation Number')
      .required('Quotation Number Is Required')
      .matches(/^[1-9]\d{3}$/, 'Please Enter Valid Quotation Number'),
    moneyReceipt: Yup.string('Enter Money Reciept Number')
      .required('Money Reciept Number Is Required')
      .matches(/^[1-9]\d{3}$/, 'Please Enter Valid Money Reciept Number'),
    carCondition: Yup.string('Enter Car Condition Number')
      .required('Car Condition Number Is Required')
      .matches(/^[1-9]\d{3}$/, 'Please Enter Valid Car Condition Number'),
    bilty: Yup.string('Enter Bilty Number')
      .required('Bilty Number Is Required')
      .matches(/^[1-9]\d{3}$/, 'Please Enter Valid Bilty Number'),
    invoice: Yup.string('Enter Invoice Number')
      .required('Invoice Number Is Required')
      .matches(/^[1-9]\d{3}$/, 'Please Enter Valid Invoice Number')
  })
});
