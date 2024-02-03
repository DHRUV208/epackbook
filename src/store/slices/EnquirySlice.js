import { createSlice } from '@reduxjs/toolkit';
import { enquiryInitialValues } from '../../common-components/validator/enquiry-validation';
const initialState = {
  addEnquiry: { ...enquiryInitialValues?.addEnquiry },
  enquiryStatus: '',
  isSaved: false,
  isRequestToSave: false,
  isFailedToSave: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  enquiryList: [],

  isEnquiryGetById: false,
  isEnquiryRequestToGetById: false,
  isEnquiryFailedToGetById: false,
  enquiryById: [],

  isEnquiryUpdate: false,
  isEnquiryRequestToUpdate: false,
  isEnquiryFailedToUpdate: false,

  isDeleted: false,
  isRequestToDelete: true,
  isDeleteResponseToFailed: false,
  apiMessage: ''

};
export const EnquirySlice = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    resetAddEnquiry: (state, action) => {
      return {
        ...state,
        addEnquiry: { ...initialState.addEnquiry },
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    updateShiftingType: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          shiftingType: action?.payload
        }
      };
    },
    updatePartyName: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          partyName: action?.payload
        }
      };
    },
    updateEnquiryManager: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          enquiryManager: action?.payload
        }
      };
    },
    updateMobileNumber: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          mobileNumber: action?.payload
        }
      };
    },
    updateShiftingLuggage: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          shiftingLuggage: action?.payload
        }
      };
    },

    //  Billing Details
    updateCompanyName: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            companyName: action?.payload
          }
        }
      };
    },
    updateApprovalAuthority: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            approvalAuthority: action?.payload
          }
        }
      };
    },
    updateAuthorityPersonName: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            authorityPersonName: action?.payload
          }
        }
      };
    },
    updateAuthorityMobileNumber: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            authorityMobileNumber: action?.payload
          }
        }
      };
    },
    updateCompanyAddress: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            companyAddress: action?.payload
          }
        }
      };
    },
    updateCompanyGST: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            companyGST: action?.payload
          }
        }
      };
    },
    updateEmployeeName: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            employeeName: action?.payload
          }
        }
      };
    },
    updateEmployeeDesignation: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            employeeDesignation: action?.payload
          }
        }
      };
    },
    updateEmployeeMobile: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          billingDetails: {
            ...state.addEnquiry.billingDetails,
            employeeMobile: action?.payload
          }
        }
      };
    },

    updatePickUpPincode: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            pinCode: action?.payload
          }
        }
      };
    },
    updatePickUpState: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            state: action?.payload
          }
        }
      };
    },
    updatePickUpCity: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            city: action?.payload
          }
        }
      };
    },
    updatePickUpLocality: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            locality: action?.payload
          }
        }
      };
    },

    updatePickUpAddress: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,

          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            address: action?.payload
          }
        }
      };
    },
    updatePickUpLandmark: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            landmark: action?.payload
          }
        }
      };
    },
    updatePickUpCurrentFloor: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            currentFloor: action?.payload
          }
        }
      };
    },
    updatePickUpLiftStatus: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          pickUpAddress: {
            ...state.addEnquiry.pickUpAddress,
            liftStatus: action?.payload
          }
        }
      };
    },
    updateDeliveryPincode: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            pinCode: action?.payload
          }
        }
      };
    },
    updateDeliveryState: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            state: action?.payload
          }
        }
      };
    },
    updateDeliveryCity: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            city: action?.payload
          }
        }
      };
    },
    updateDeliveryLocality: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            locality: action?.payload
          }
        }
      };
    },

    updateDeliveryAddress: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            address: action?.payload
          }
        }
      };
    },
    updateDeliveryLandmark: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            landmark: action?.payload
          }
        }
      };
    },
    updateDeliveryCurrentFloor: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            currentFloor: action?.payload
          }
        }
      };
    },



    updateDeliveryLiftStatus: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          deliveryAddress: {
            ...state.addEnquiry.deliveryAddress,
            liftStatus: action?.payload
          }
        }
      };
    },



    updateBillingBy: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          billingBy: action?.payload
        }
      };
    },
    updateEnquiryStatus: (state, action) => {
      return {
        ...state,
        enquiryStatus: action?.payload
      };
    },



    requestToSaveEnquiry: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isFailedToSave: false,
        isSaved: false
      };
    },

    responseToSaveEnquiry: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveEnquiry: (state, action) => {
      return {
        ...state,
        isFailedToSave: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllEnquiry: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllEnquiry: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        enquiryList: action?.payload
      };
    },
    failedToGetAllEnquiry: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    requestToUpdateEnquiry: (state, action) => {
      return {
        ...state,
        isEnquiryRequestToUpdate: true,
        isEnquiryFailedToUpdate: false,
        isEnquiryUpdate: false
      };
    },

    responseToUpdateEnquiry: (state, action) => {
      return {
        ...state,
        isEnquiryUpdate: true,
        isEnquiryFailedToUpdate: false,
        isEnquiryRequestToUpdate: true,
      };
    },



    reset: (state, action) => {
      return {
        ...state,
        addEnquiry: { ...enquiryInitialValues?.addEnquiry },
        enquiryStatus: '',
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false
      };
    },
    resetApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false,

      }
    },

    apiMessageUpdate: (state, action) => {
      return {
        ...state,
        apiMessage: action?.payload
      };
    },
    requestToGetEnquiry: (state, action) => {
      return {
        ...state,
        isEnquiryRequestToGetById: true,
        isEnquiryFailedToGetById: false,
        isEnquiryGetById: false
      };
    },
    responseToGetEnquiryById: (state, action) => {
      return {
        ...state,
        enquiryById: action?.payload,
        isEnquiryFailedToGetById: false,
        isEnquiryRequestToGetById: true,
        isEnquiryGetById: true
      };
    },
    failedToGetEnquiryById: (state, action) => {
      return {
        ...state,
        isEnquiryFailedToGetById: true,
        isEnquiryRequestToGetById: true,
        enquiryById: false
      };
    },


    failedToUpdateEnquiry: (state, action) => {
      return {
        ...state,
        isEnquiryFailedToUpdate: true,
        isEnquiryRequestToUpdate: true,
        isEnquiryUpdate: false
      };
    },
    resetEnquiryById: (state, action) => {
      return {
        ...state,
        enquiryById: {}
      };
    },

    resetEnquiryDeleteStatus: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    requestDeleteEnquiry: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          apiStatus: {
            ...state.addEnquiry.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteEnquiry: (state, action) => {
      return {
        ...state,

        addEnquiry: {
          ...state.addEnquiry,
          apiStatus: {
            ...state.addEnquiry.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteEnquiry: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          apiStatus: {
            ...state.addEnquiry.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      }
    },
    resetEnquiryByIdApiStatus: (state, action) => {
      return {
        ...state,
        isEnquiryGetById: false,
        isEnquiryRequestToGetById: false,
        isEnquiryFailedToGetById: false,
      };
    },

    resetDeleteApiStatus: (state, action) => {
      return {
        ...state,
        addEnquiry: {
          ...state.addEnquiry,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },








  }
});
export default EnquirySlice.reducer;
export const {
  updateShiftingType,
  updateCompanyPartyName,
  updatePartyName,
  updateMobileNumber,
  updateShiftingLuggage,
  updatePickUpPincode,
  updatePickUpState,
  updatePickUpCity,
  updatePickUpLocality,
  updatePickUpAddress,
  updatePickUpLandmark,
  updatePickUpCurrentFloor,
  updatePickUpLiftStatus,
  updateDeliveryPincode,
  updateDeliveryState,
  updateDeliveryCity,
  updateDeliveryLocality,
  updateDeliveryAddress,
  updateDeliveryLandmark,
  updateDeliveryCurrentFloor,
  updateDeliveryLiftStatus,
  updateBillingBy,
  updateCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateEnquiryManager,
  updateEnquiryStatus,
  requestToSaveEnquiry,
  responseToSaveEnquiry,
  failedToSaveEnquiry,
  requestToGetAllEnquiry,
  responseToGetAllEnquiry,
  failedToGetAllEnquiry,

  requestToUpdateEnquiry,
  responseToUpdateEnquiry,
  failedToUpdateEnquiry,

  requestToGetEnquiry,
  responseToGetEnquiryById,
  failedToGetEnquiryById,
  resetEnquiryById,
  requestDeleteEnquiry,
  responseToDeleteEnquiry,
  failedToDeleteEnquiry,
  resetEnquiryDeleteStatus,
  resetDeleteApiStatus,

  reset,
  apiMessageUpdate,
  resetApiStatus,
  requestToGetEnquiryDetails,
  responseToGetEnquiryDetails,
  failedToGetEnquiryDetails,
  resetEnquiryByIdApiStatus
} = EnquirySlice.actions;
