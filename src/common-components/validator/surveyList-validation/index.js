import * as Yup from 'yup';
export const surveyListInitialValues = {
  add: {
    autoNumber: false,
    surveyListNo:'',
    surveyDate: '',
    itemName: '',
    quantity: '',
    valueOfGoods: '',
    remark: ''
  }
};

export const surveyListValidationSchema = Yup.object().shape({
  add: Yup.object().shape({
    surveyListNo: Yup.string('Enter Survey No.'),
    surveyDate: Yup.string('Select Survey Date & Time').matches(),
    itemName: Yup.string('Enter Item/Particular Name').matches(),
    quantity: Yup.string('Mention Quantity Of Items').matches(),
    valueOfGoods: Yup.string('Enter Value Of Goods').matches(),
    // remark: Yup.string('Enter Remark').matches()
  })
});
