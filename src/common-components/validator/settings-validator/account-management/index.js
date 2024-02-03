import * as Yup from 'yup';
import {
  NAME_WITH_CHARACTERS_REGEX,
  IFSC_REGEX,
  UPIID_REGEX,
  ACCOUNTNUMBER_REGEX
} from '../../../../utils/regular-expressions';

export const accountManagementInitialValues = {
  addAccounts: {
    accountType: '',
    selectBank: '',
    accountHolderName: '',
    accountNumber: '',
    IFSC: '',
    UPI: '',
    upiName: '',
    upiId: '',
    qrCode:''
  },
  addBank: {
    bankName: ''
  }
};

export const addBankValidationSchema = Yup.object({
  addBank: Yup.object().shape({
    bankName: Yup.string('Enter Valid Bank Name')
      .required('Bank Name is Required')
      .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name')
  })
});

export const addAccountManagementValidationSchema = Yup.object({
  addAccounts: Yup.object().shape({
    accountType: Yup.string('Select Account Type')
      .typeError('You must select an Account Type')
      .required(),
    selectBank: Yup.string('Select Bank').when('accountType', {
      is: 'bankAccount',
      then: (schema) => schema.required('Bank Is Required'),
      otherwise: null
    }),
    accountHolderName: Yup.string('Enter Holder Name').when('accountType', {
      is: 'bankAccount',
      then: (schema) =>
        schema
          .required('Holder Name Is Required')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
      otherwise: null
    }),
    accountNumber: Yup.string('Enter Account Number').when('accountType', {
      is: 'bankAccount',
      then: (schema) =>
        schema
          .required('Account Number Is Required')
          .max(16, 'Account Number Should Be 16 Digits Only')
          .matches(ACCOUNTNUMBER_REGEX, 'Please Enter Valid Account Number'),
      otherwise: null
    }),
    IFSC: Yup.string('Enter IFSC Number').when('accountType', {
      is: 'bankAccount',
      then: (schema) =>
        schema
          .required('IFSC Number Is Required')
          .max(11, 'IFSC Should Be 11 Digits Only')
          .matches(IFSC_REGEX, 'Please Enter Valid IFSC Number'),
      otherwise: null
    }),
    UPI: Yup.string('Select UPI').when('accountType', {
      is: 'upi',
      then: (schema) => schema.required('UPI Is Required'),
      otherwise: null
    }),
    upiId: Yup.string('Enter UPI ID').when('accountType', {
      is: 'upi',
      then: (schema) =>
        schema.required('UPI ID Is Required').matches(UPIID_REGEX, 'Please Enter Valid UPI ID'),
      otherwise: null
    })
  })
});
