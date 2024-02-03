import { createSlice } from '@reduxjs/toolkit';
import { companyRegistrationInitialValues } from '../../common-components/validator/companyRegistration-validation';

const initialState = {
  companyDetails: { ...companyRegistrationInitialValues?.companyDetails },
  companyList: { ...companyRegistrationInitialValues?.companyList },
  addCompanyDetail: { ...companyRegistrationInitialValues.addCompanyDetail },
  isRequestedToNewCompany: false,
  isFailedToNewCompany: false,
  isResponseToNewCompany: false,
  isRequestedToGetCompanyDetail: false,
  isFailedToGetCompanyDetail: false,
  isResponseToGetCompanyDetail: false,

  isUpdateCompany: false,
  isRequestToUpdateCompany: false,
  isFailedToUpdateCompany: false,
};

const CompanySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    updateCompanyDetails: (state, action) => {
      return {
        ...state,
        companyDetails: action?.payload,
        isRequestedToGetCompanyDetail: false,
        isFailedToGetCompanyDetail: false,
        isResponseToGetCompanyDetail: true
      };
    },
    updateCompanyList: (state, action) => {
      return {
        ...state,
        companyList: action?.payload
      };
    },

    updateCompanyName: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          companyName: action?.payload
        }
      };
    },
    updateContactPerson: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          contactPerson: action?.payload
        }
      };
    },
    updateCompanyEmail: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          companyEmail: action?.payload
        }
      };
    },
    updateCompanyMobile: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          companyMobile: action?.payload
        }
      };
    },
    updatePincode: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          pincode: action?.payload
        }
      };
    },
    updateState: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          state: action?.payload
        }
      };
    },
    updateCity: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          city: action?.payload
        }
      };
    },
    updateLocality: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          locality: action?.payload
        }
      };
    },
    updateLandmark: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          landmark: action?.payload
        }
      };
    },
    updateAddress: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          address: action?.payload
        }
      };
    },
    updateCompanyType: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          companyType: action?.payload
        }
      };
    },
    updateGST: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          gst: action?.payload
        }
      };
    },
    updateCompanyWebsite: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          companyWebsite: action?.payload
        }
      };
    },
    updateIBA: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          iba: action?.payload
        }
      };
    },
    updateIBAApprovalCode: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,

          ibaApprovalCode: action?.payload
        }
      };
    },
    updateIBACodeValidTill: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          ibaCodeValidTill:action?.payload
          
        }
      };
    },
    updatePanNo: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          panNo: action?.payload
        }
      };
    },
    updateFirmPanNo: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          firmPanNo: action?.payload
        }
      };
    },
    updateCINNo: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          cinNo: action?.payload
        }
      };
    },
    updateIncNo: (state, action) => {
      return {
        ...state,
        addCompanyDetail: {
          ...state.addCompanyDetail,
          incNo: action?.payload
        }
      };
    },
    requestToAddNewCompany: (state, action) => {
      return {
        ...state,
        isRequestedToNewCompany: true,
        isFailedToNewCompany: false,
        isResponseToNewCompany: false
      };
    },
    requestToGetCompanyDetails: (state, action) => {
      return {
        ...state,
        isRequestedToNewCompany: true,
        isFailedToNewCompany: false,
        isResponseToNewCompany: false
      };
    },
    responseToAddNewCompany: (state, action) => {
      return {
        ...state,
        isRequestedToNewCompany: true,
        isFailedToNewCompany: false,
        isResponseToNewCompany: true
      };
    },
    responseToGetCompanyDetail: (state, action) => {
      return {
        ...state,
        isRequestedToGetCompanyDetail: true,
        isFailedToGetCompanyDetail: false,
        isResponseToGetCompanyDetail: true
      };
    },
    failedToAddNewCompany: (state, action) => {
      return {
        ...state,
        isRequestedToNewCompany: true,
        isFailedToNewCompany: true,
        isResponseToNewCompany: false
      };
    },
    failedToGetCompanyDetails: (state, action) => {
      return {
        ...state,
        isRequestedToGetCompanyDetail: true,
        isFailedToGetCompanyDetail: true,
        isResponseToGetCompanyDetail: false
      };
    },
    resetAddCompanyDetails: (state, action) => {
      return {
        ...state,
        addCompanyDetail: { ...initialState.addCompanyDetail }
      };
    },
    resetGetCompanyDetail: (state, action) => {
      return {
        ...state,
        companyDetails: { ...initialState.companyDetails },
        isRequestedToGetCompanyDetail: false,
        isFailedToGetCompanyDetail: false,
        isResponseToGetCompanyDetail: false
      };
    },

    requestToUpdateCompany: (state, action) => {
      return {
        ...state,
        isRequestToUpdateCompany: true,
        isFailedToUpdateCompany: false,
        isUpdateCompany: false
      };
    },
    responseToUpdateCompany: (state, action) => {
      return {
        ...state,
        isUpdateCompany: true,
        isFailedToUpdateCompany: false,
        isRequestToUpdateCompany: true,
      };
    },
    failedToUpdateCompany: (state, action) => {
      return {
        ...state,
        isFailedToUpdateCompany: true,
        isRequestToUpdateCompany: true,
        isUpdateCompany: false
      };
    },

    resetCompanyRedux: (state, action) => {
      return {
        ...initialState
      };
    }
  }
});

export default CompanySlice.reducer;
export const {
  updateCompanyName,
  updateContactPerson,
  updateCompanyEmail,
  updateCompanyMobile,
  updatePanNo,
  updateFirmPanNo,
  updateCINNo,
  updateIncNo,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateAddress,
  updateLandmark,
  updateCompanyType,
  updateGST,
  updateCompanyWebsite,
  updateIBA,
  updateIBAApprovalCode,
  updateIBACodeValidTill,

  updateCompanyList,
  requestToAddNewCompany,
  responseToAddNewCompany,
  failedToAddNewCompany,
  resetAddCompanyDetails,
  requestToGetCompanyDetails,
  updateCompanyDetails,
  failedToGetCompanyDetails,

  requestToUpdateCompany,
  responseToUpdateCompany,
  failedToUpdateCompany,

  resetGetCompanyDetail,
  resetCompanyRedux
} = CompanySlice.actions;
