import { createSlice } from '@reduxjs/toolkit';
// import { addAccountManagementInitialValues } from '../../common-components/validator/settings-validation';
import { accountManagementInitialValues } from '../../common-components/validator/settings-validator/account-management';

const initialState = {
  addAccounts: {
    ...accountManagementInitialValues.addAccounts,
    apiStatus: {
      isSaved: false,
      isRequestToSave: false,
      isResponseFailed: false,
      isGetAll: false,
      isRequestToGetAll: false,
      isFailedToGetAll: false
    }
  },
  listAccounts: [],

  addBank: {
    ...accountManagementInitialValues.addBank,
    apiStatus: {
      isSaved: false,
      isRequestToSave: false,
      isResponseFailed: false,
      isGetAll: false,
      isRequestToGetAll: false,
      isFailedToGetAll: false
    }
  },
  listBank: []
};

export const AccountManagementSlice = createSlice({
  name: 'Accounts',
  initialState: {
    addAccounts: initialState.addAccounts,
    listAccounts: initialState.listAccounts,
    addBank: initialState?.addBank,
    listBank: initialState.listBank
  },
  reducers: {
    updateAccountType: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          accountType: action?.payload
        }
      };
    },
    updateSelectBank: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          selectBank: action?.payload
        }
      };
    },
    updateAccountHolderName: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          accountHolderName: action?.payload
        }
      };
    },
    updateAccountNumber: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          accountNumber: action?.payload
        }
      };
    },
    updateIFSC: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          IFSC: action?.payload
        }
      };
    },
    updateUPI: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          UPI: action?.payload
        }
      };
    },
    updateQRCode: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          qrCode: action?.payload
        }
      };
    },
    updateUpiName: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          upiName: action?.payload
        }
      };
    },
    updateUpiId: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          upiId: action?.payload
        }
      };
    },
    requestToSaveAccounts: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveAccounts: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveAccounts: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllAccounts: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllAccounts: (state, action) => {
      return {
        ...state,
        listAccounts: action?.payload,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllAccounts: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {
            ...state.addAccounts.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    updateBankName: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addbank,
          bankName: action?.payload
        }
      };
    },
    requestToSaveBank: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveBank: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveBank: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllBank: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllBank: (state, action) => {
      return {
        ...state,
        listBank: action?.payload,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllBank: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {
            ...state.addBank.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetBank: (state, action) => {
      return {
        ...state,
        addBank: { ...initialState.addBank },
      };
    },
    resetAccount: (state, action) => {
      return {
        ...state,
        addAccounts: { ...initialState.addAccounts },
      };
    },
    resetBankApiStatus: (state, action) => {
      return {
        ...state,
        addBank: {
          ...state.addBank,
          apiStatus: {...initialState.addBank.apiStatus}
        },
      };
    },
    resetAccountApiStatus: (state, action) => {
      return {
        ...state,
        addAccounts: {
          ...state.addAccounts,
          apiStatus: {...initialState.addAccounts.apiStatus}
        },
      };
    }
  }
});



export default AccountManagementSlice.reducer;
export const {
  updateAccountType,
  updateSelectBank,
  updateAccountHolderName,
  updateAccountNumber,
  updateIFSC,
  updateUPI,

  updateUpiName,
  updateUpiId,
  updateQRCode,
  requestToSaveAccounts,
  responseToSaveAccounts,
  failedToSaveAccounts,
  requestToGetAllAccounts,
  responseToGetAllAccounts,
  failedToGetAllAccounts,
  updateBankName,
  requestToSaveBank,
  responseToSaveBank,
  failedToSaveBank,
  requestToGetAllBank,
  responseToGetAllBank,
  failedToGetAllBank,
  resetBank,
resetAccount,
resetBankApiStatus,
resetAccountApiStatus
} = AccountManagementSlice.actions;
