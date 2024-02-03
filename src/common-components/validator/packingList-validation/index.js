import * as Yup from 'yup';
export const packingInitialValues = {
  addPackingList: {
    numberInitilizeCheck: false,
    numberInitializeValue: "",
    packingListDate: '',
    itemName: '',
    quantity: '',
    packingType: '',
    valueOfGoods: '',
    productCode: '',
    remark: ''
  }
};

export const packingValidationSchema = Yup.object().shape({
  addPackingList: Yup.object().shape({
    numberInitializeValue: Yup.string('Enter Serial No.').matches(),
    packingListDate: Yup.string('Select Packing Date & Time')
    // .required('Packing Date & Time Is Required')
    .matches(/^\d+$/, 'Please Enter Valid Packing Date & Time'),
    itemName: Yup.string('Enter Item/Particular Name').required('Required').matches(),
    quantity: Yup.string('Mention Quantity Of Items').required('Required').matches(),
    packingType: Yup.string('Select Packing Type').required('Required').matches(),
    valueOfGoods: Yup.string('Enter Value Of Goods').required('Required').matches(),

  })
});
