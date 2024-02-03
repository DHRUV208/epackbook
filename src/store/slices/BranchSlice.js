import { createSlice } from '@reduxjs/toolkit';
import { addBranchInitialValues } from '../../common-components/validator/branch-validation';
const initialState = {
  addBranch: {
    details: addBranchInitialValues
  },
  isSaved: false,
  isRequestToSave: false,
  isFailedToSave: false,

  isUpdate: false,
  isRequestToUpdate: false,
  isFailedToUpdate: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  branchList: [],

  branchById: {},
  isGetById: false,
  isRequestToGetById: false,
  isFailedToGetById: false, 


};
const BranchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    updateBranchName: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            branchName: action?.payload
          }
        }
      };
    },
    updateBranchRegMobileNumber: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            branchRegMobileNumber: action?.payload
          }
        }
      };
    },

    updatePincode: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            pinCode: action?.payload
          }
        }
      };
    },
    updateState: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            state: action?.payload
          }
        }
      };
    },
    updateCity: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            city: action?.payload
          }
        }
      };
    },
    updateLocality: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            locality: action?.payload
          }
        }
      };
    },
    updateAddress: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            address: action?.payload
          }
        }
      };
    },
    updateLandmark: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            landmark: action?.payload
          }
        }
      };
    },
    updateEmail: (state, action) => {
      return {
        ...state,
        addBranch: {
          ...state.addBranch,
          details: {
            ...state.addBranch.details,
            email: action?.payload
          }
        }
      };
    },
    requestToSaveBranch: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isFailedToSave: false,
        isSaved: false
      };
    },
    responseToSaveBranch: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isFailedToSave: false,
        isRequestToSave: true
      };
    },
    failedToSaveBranch: (state, action) => {
      return {
        ...state,
        isFailedToSave: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllBranch: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllBranch: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        branchList: action?.payload
      };
    },
    failedToGetAllBranch: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    reset: (state) => {
      return {
        ...state,
        addBranch: { ...initialState.addBranch },
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    resetApiStatus: (state) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    requestToGetBranchById: (state, action) => {
      return {
        ...state,
        isRequestToGetById: true,
        isFailedToGetById: false,
        isGetById: false
      };
    },
    responseToGetBranchById: (state, action) => {
      return {
        ...state,
        isGetById: true,
        isFailedToGetById: false,
        isRequestToGetById: true,
        branchById: action?.payload
      };
    },
    failedToGetBranchById: (state, action) => {
      return {
        ...state,
        isFailedToGetById: true,
        isRequestToGetById: true,
        isGetById: false
      };
    },
    requestToUpdateBranch: (state, action) => {
      return {
        ...state,
        isRequestToUpdate: true,
        isFailedToUpdate: false,
        isUpdate: false
      };
    },
    responseToUpdateBranch: (state, action) => {
      return {
        ...state,
        isUpdate: true,
        isFailedToUpdate: false,
        isRequestToUpdate: true,
      };
    },
    failedToUpdateBranch: (state, action) => {
      return {
        ...state,
        isFailedToUpdate: true,
        isRequestToUpdate: true,
        isUpdate: false
      };
    },
    resetBranchByIdList: (state, action) => {
      return {
        ...state,
        branchById:{}
      }
    }
  }
});
export default BranchSlice.reducer;
export const {
  updateAddress,
  updateBranchName,
  updateBranchRegMobileNumber,
  updateCity,
  updateEmail,
  updateLandmark,
  updateLocality,
  updatePincode,
  updateState,
  requestToSaveBranch,
  responseToSaveBranch,
  failedToSaveBranch,
  requestToGetAllBranch,
  responseToGetAllBranch,
  failedToGetAllBranch,
  reset,
  failedToGetBranchById,
  responseToGetBranchById,
  requestToGetBranchById,
  resetApiStatus,

  requestToUpdateBranch,
  responseToUpdateBranch,
  failedToUpdateBranch,
  
  resetBranchByIdList

} = BranchSlice.actions;
