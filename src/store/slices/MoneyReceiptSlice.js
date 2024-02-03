import { createSlice } from '@reduxjs/toolkit';
import { addMoneyReceiptInitialValues } from '../../common-components/validator/moneyReceipt-validation';

const initialState = {
  moneyReceipt: addMoneyReceiptInitialValues,
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  moneyReceiptList: []
};

export const MoneyRecieptSlice = createSlice({
  name: 'moneyReceipt',
  initialState,
  reducers: {
    updateReceiptAuto: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          receiptAuto: action?.payload
        }
      };
    },
    updateReceiptNumber: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          receiptNumber: action?.payload
        }
      };
    },
    updateChooseTemplate: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          chooseTemplate: action?.payload
        }
      };
    },
    updateDateOfReceipt: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          dateOfReceipt: action?.payload
        }
      };
    },
    updatePaymentType: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          paymentType: action?.payload
        }
      };
    },
    updateReceiptAgainst: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          receiptAgainst: action?.payload
        }
      };
    },
    updateReceiptAgainstValue: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          receiptAgainstValue: action?.payload
        }
      };
    },
    updateModeOfPayment: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          modeOfPayment: action?.payload
        }
      };
    },
    updateReferenceNumber: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          referenceNumber: action?.payload
        }
      };
    },
    updateRsField: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          rsField: action?.payload
        }
      };
    },
    updateConsignmentNumber: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          consignmentNumber: action?.payload
        }
      };
    },
    updateNumberOfArticles: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          numberOfArticles: action?.payload
        }
      };
    },
    updateDateOfArrival: (state, action) => {
      return {
        ...state,
        moneyReceipt: {
          ...state.moneyReceipt,
          dateOfArrival: action?.payload
        }
      };
    },
    requestToSaveMoneyReceipt: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveMoneyReceipt: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveMoneyReceipt: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllMoneyReceipt: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllMoneyReceipt: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        moneyReceiptList: action?.payload
      };
    },
    failedToGetAllMoneyReceipt: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    resetMoneyReceipt: (state, action) => {
      return {
        ...state,
        moneyReceipt: addMoneyReceiptInitialValues,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    resetMoneyReceiptApiStatus: (state, action) => {
      return {
        ...state,
        moneyReceipt: addMoneyReceiptInitialValues,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    }
  }
});
export default MoneyRecieptSlice.reducer;
export const {
  updateReceiptAuto,
  updateReceiptNumber,
  updateChooseTemplate,
  updateDateOfReceipt,
  updatePaymentType,
  updateReceiptAgainst,
  updateModeOfPayment,
  updateReferenceNumber,
  updateRsField,
  updateConsignmentNumber,
  updateNumberOfArticles,
  updateDateOfArrival,
  requestToSaveMoneyReceipt,
  responseToSaveMoneyReceipt,
  failedToSaveMoneyReceipt,
  requestToGetAllMoneyReceipt,
  responseToGetAllMoneyReceipt,
  failedToGetAllMoneyReceipt,
  updateReceiptAgainstValue,
  resetMoneyReceipt,
resetMoneyReceiptApiStatus
} = MoneyRecieptSlice.actions;
