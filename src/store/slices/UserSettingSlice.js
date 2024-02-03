import { createSlice } from '@reduxjs/toolkit';
import { userManagementInitialValues } from '../../common-components/validator/settings-validator/user-settings';
const initialState = {
  addSignature: {
    ...userManagementInitialValues.addSignature,
    apiStatus: {
      isSaved: false,
      isRequestToSave: false,
      isResponseFailed: false,
      isGetAll: false,
      isRequestToGetAll: false,
      isFailedToGetAll: false
    }
  },
  module:{
    listModules: userManagementInitialValues.listModules,
    apiStatus:{
      isFailedToGet:false,
      isRequestToGet:false,
      isResponseToGet:false
    }
  }
};
export const UserManagementSlice = createSlice({
  name: 'user-management',
  initialState: {
    addSignature: initialState.addSignature,
    module:initialState.module
  },
  reducers: {
    updateSignatureType: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          signatureType: action?.payload
        }
      };
    },
    updateRoleType: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          roleType: action?.payload
        }
      };
    },
    updateNameOfEmployee: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          nameOfEmployee: action?.payload
        }
      };
    },

    requestToSaveUserSign: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          apiStatus: {
            ...state.addSignature.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveUserSign: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          apiStatus: {
            ...state.addSignature.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveUserSign: (state, action) => {
      return {
        ...state,
        addSignature: {
          ...state.addSignature,
          apiStatus: {
            ...state.addSignature.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetModule: (state,action) =>{
      return{
        ...state,
module:{
apiStatus:{
  ...state.module.apiStatus,
isRequestToGet:true,
isFailedToGet:false,
isResponseToGet:false
}
}
      }
    },
    responseToGetModule: (state,action) =>{
      return{
        ...state,
module:{
  listModules:action?.payload,
apiStatus:{
  ...state.module.apiStatus,
isRequestToGet:true,
isResponseToGet:true,
isFailedToGet:false
}
}
      }
    },
    failedToGetModule: (state,action) =>{
      return{
        ...state,
        module:{
          
        apiStatus:{
          ...state.module.apiStatus,
        isRequestToGet:true,
        isResponseToGet:false,
        isFailedToGet:true
        }
        }
      }
    }
  }
});
export default UserManagementSlice.reducer;
export const {
  failedToGetModule,
  requestToGetModule,
  responseToGetModule,
  updateSignatureType,
  updateRoleType,
  updateNameOfEmployee,
  requestToSaveUserSign,
  responseToSaveUserSign,
  failedToSaveUserSign,

} = UserManagementSlice.actions;
