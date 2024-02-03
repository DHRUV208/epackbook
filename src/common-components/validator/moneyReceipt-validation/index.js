import * as Yup from 'yup';
export const addMoneyReceiptInitialValues = {
  recieptAuto: false,
  receiptNumber: '',
  chooseTemplate: '',
  dateOfReceipt: '',
  paymentType: '',
  receiptAgainst: '',
  receiptAgainstValue:'',
  modeOfPayment: '',
  referenceNumber: '',
  rsField: '',
  consignmentNumber: '',
  numberOfArticles: '',
  dateOfArrival: ''
  // moneyReceipt: {

  // }
};

export const addMoneyReceiptValidationSchema = Yup.object().shape({
  chooseTemplate: Yup.string('Select Design Name').required('Design Name Is Required'),
  dateOfReceipt: Yup.string('Select Your Money Reciept Date')
    .required('Money Reciept date Is Required')
    .matches(/^\d+$/, 'Please Enter Valid Money Reciept Date'),
  paymentType: Yup.string('Select Payment Type').required('Payment Type Is Required'),
  receiptAgainst: Yup.string('Select Receipt Against').required('Receipt Against Is Required'),
  modeOfPayment: Yup.string('Select Mode Of Payment').required('Mode Of Payment Is Required'),
  rsField: Yup.string('Enter Amount')
    .required('Amount Is Required')
    .matches(/^[0-9]+$/, 'Please Enter Valid Amount'),
  numberOfArticles: Yup.string().matches(/^\d+$/, 'Numeric field must contain only numbers')
});
