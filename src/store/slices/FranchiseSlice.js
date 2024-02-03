import { createSlice } from '@reduxjs/toolkit';
import { addFranchiseInitialValues } from '../../common-components/validator/franchise-validation';
const initialState = {
  addFranchise: { ...addFranchiseInitialValues?.addFranchise },
  isSaved: false,
  isRequestToSave: false,
  isFailedToSave: false,

  isUpdate: false,
  isRequestToUpdate: false,
  isFailedToUpdate: false,

  franchiseList: [],
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,

  franchiseById:{},
  isGetById: false,
  isRequestToGetById: false,
  isFailedToGetById: false, 

};
const FranchiseSlice = createSlice({
  name: 'franchise',
  initialState,
  reducers: {
    updateFranchiseName: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          franchiseName: action?.payload
        }
      };
    },
    updateOwnerName: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          ownerName: action?.payload
        }
      };
    },
    updateRegisteredmobile: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          registeredmobile: action?.payload
        }
      };
    },
    updatePincode: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          pincode: action?.payload
        }
      };
    },
    updateState: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          state: action?.payload
        }
      };
    },
    updateCity: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          city: action?.payload
        }
      };
    },
    updateLocality: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          locality: action?.payload
        }
      };
    },
    updateFranchiseAddress: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          franchiseAddress: action?.payload
        }
      };
    },
    updateLandmark: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          landmark: action?.payload
        }
      };
    },
    updateEmail: (state, action) => {
      return {
        ...state,
        addFranchise: {
          ...state.addFranchise,
          email: action?.payload
        }
      };
    },
    requestToSaveFranchise: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isFailedToSave: false,
        isSaved: false
      };
    },
    responseToSaveFranchise: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isFailedToSave: false,
        isRequestToSave: true
      };
    },
    failedToSaveFranchise: (state, action) => {
      return {
        ...state,
        isFailedToSave: true,
        isRequestToSave: true,
        isSaved: false
      };
    },

    requestToGetAllFranchise: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllFranchise: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        franchiseList: action?.payload
      };
    },

    failedToGetAllFranchise: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },

    requestToGetByIdFranchise: (state, action) => {
      return {
        ...state,
        isRequestToGetById: true,
        isFailedToGetById: false,
        isGetById: false
      };
    },
    responseToGetByIdFranchise: (state, action) => {
      return {
        ...state,
        isGetById: true,
        isFailedToGetById: false,
        isRequestToGetById: true,
        franchiseById: action?.payload
      };
    },
    failedToGetByIdFranchise: (state, action) => {
      return {
        ...state,
        isFailedToGetById: true,
        isRequestToGetById: true,
        isGetById: false
      };
    },

    requestToUpdate: (state, action) => {
      return {
        ...state,
        isRequestToUpdate: true,
        isFailedToUpdate: false,
        isUpdate: false
      };
    },
    responseToUpdate: (state, action) => {
      return {
        ...state,
        isUpdate: true,
        isFailedToUpdate: false,
        isRequestToUpdate: true,
      };
    },
    failedToUpdate: (state, action) => {
      return {
        ...state,
        isFailedToUpdate: true,
        isRequestToUpdate: true,
        isUpdate: false
      };
    },
    reset: (state) => {
      return {
        ...state,
        addFranchise: { ...initialState.addFranchise },
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    resetApiStatus: (state) => {
      return {
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    resetFranchisebyId:(state,action) => {
      return{
        ...state,
        franchiseById:{}
      }
    }
  }
});

export default FranchiseSlice.reducer;
export const {
  updateFranchiseName,
  updateOwnerName,
  updateRegisteredmobile,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateFranchiseAddress,
  updateLandmark,
  updateEmail,
  failedToSaveFranchise,
  requestToSaveFranchise,
  responseToSaveFranchise,
  requestToGetAllFranchise,
  responseToGetAllFranchise,
  failedToGetAllFranchise,
  reset,
  resetApiStatus,
  requestToGetByIdFranchise,
  responseToGetByIdFranchise,
  failedToGetByIdFranchise,
  requestToUpdate,
  responseToUpdate,
  failedToUpdate,
  resetFranchisebyId
} = FranchiseSlice.actions;
