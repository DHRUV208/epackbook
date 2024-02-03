import { createSlice } from '@reduxjs/toolkit';
import { addOrderInitialValues } from '../../common-components/validator/order-validation';

const initialState = {
  addOrder: {
    details: addOrderInitialValues
  },

  listOrder:[],
  isRequestToList:false,
  isResponseToList:false,
  isFailedToList:false,

  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
  
  isUpdate: false,
  isRequestToUpdate: false,
  isFailedToUpdate: false,

  isOrderUpdate: false,
  isOrderRequestToUpdate: false,
  isOrderFailedToUpdate: false,


  isOrderGetById: false,
  isOrderRequestToGetById: false,
  isOrderFailedToGetById: false,
  orderById: [],
};

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateShiftingType: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            shiftingType: action?.payload
          }
        }
      };
    },
    updateBillingBy: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingBy: action?.payload
          }
        }
      };
    },
    updatePartyName: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            partyName: action?.payload
          }
        }
      };
    },
    updatePartyMobileNumber: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            partyMobileNumber: action?.payload
          }
        }
      };
    },
    // updateCompanyName: (state,action) =>{
    //     return{
    //         ...state,
    //         addOrder: {
    //             ...state.addOrder,
    //             details:{
    //                 ...state.addOrder.details,
    //                 companyName: action?.payload
    //             }
    //         }
    //     }
    // },
    // updateQuotationAmount: (state,action) =>{
    //     return{
    //         ...state,
    //         addOrder: {
    //             ...state.addOrder,
    //             details:{
    //                 ...state.addOrder.details,
    //                 quotationAmount: action?.payload
    //             }
    //         }
    //     }
    // },
    updateOrderAmount: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            orderAmount: action?.payload
          }
        }
      };
    },
    updateTokenAmount: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            tokenAmount: action?.payload
          }
        }
      };
    },

    updateOrderDateAndTime: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            orderDateAndTime: action?.payload
          }
        }
      };
    },
    updateShiftingDateAndTime: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            shiftingDateAndTime: action?.payload
          }
        }
      };
    },
    updateShiftingLuggage: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            shiftingLuggage: action?.payload
          }
        }
      };
    },

    // Billing Details
    updateBillingCompanyName: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              companyName: action?.payload
            }
          }
        }
      };
    },
    updateApprovalAuthority: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              approvalAuthority: action?.payload
            }
          }
        }
      };
    },
    updateAuthorityPersonName: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              authorityPersonName: action?.payload
            }
          }
        }
      };
    },
    updateAuthorityMobileNumber: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              authorityMobileNumber: action?.payload
            }
          }
        }
      };
    },
    updateCompanyAddress: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              companyAddress: action?.payload
            }
          }
        }
      };
    },
    updateCompanyGST: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              companyGST: action?.payload
            }
          }
        }
      };
    },
    updateEmployeeName: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              employeeName: action?.payload
            }
          }
        }
      };
    },
    updateEmployeeDesignation: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              employeeDesignation: action?.payload
            }
          }
        }
      };
    },
    updateEmployeeMobile: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            billingDetails: {
              ...state.addOrder.details.billingDetails,
              employeeMobile: action?.payload
            }
          }
        }
      };
    },
    updatePickUpAddress: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              address: action?.payload
            }
          }
        }
      };
    },
    updatePickUpLandmark: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              landmark: action?.payload
            }
          }
        }
      };
    },
    updatePickUpCurrentFloor: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              currentFloor: action?.payload
            }
          }
        }
      };
    },
    updatePickUpLiftStatus: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              liftStatus: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryAddress: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              address: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryLandmark: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              landmark: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryCurrentFloor: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              currentFloor: action?.payload
            }
          }
        }
      };
    },
    updatePickUpPincode: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              pinCode: action?.payload
            }
          }
        }
      };
    },
    updatePickUpState: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updatePickUpCity: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updatePickUpLocality: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            pickUpAddress: {
              ...state.addOrder.details.pickUpAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryPincode: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              pinCode: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryState: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryCity: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryLocality: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updateDeliveryLiftStatus: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: {
            ...state.addOrder.details,
            deliveryAddress: {
              ...state.addOrder.details.deliveryAddress,
              liftStatus: action?.payload
            }
          }
        }
      };
    },
    requestToSaveOrder: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveOrder: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveOrder: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToListOrder: (state, action) => {
      return {
        ...state,
        isRequestToList: true,
        isResponseToList: false,
        isFailedToList: false
      };
    },
    responseToListOrder: (state, action) => {
      
      return {
        ...state,
        listOrder:action?.payload,
        isRequestToList: true,
        isResponseToList: true,
        isFailedToList: false
      };
    },
    failedToListOrder: (state, action) => {
      return {
        ...state,
        isRequestToList: true,
        isResponseToList: false,
        isFailedToList: true
      };
    },
    requestToUpdateOrder: (state, action) => {
      return {
        ...state,
        isOrderRequestToUpdate: true,
        isOrderFailedToUpdate: false,
        isOrderUpdate: false
      };
    },
    responseToUpdateOrder: (state, action) => {
      return {
        ...state,
        isOrderRequestToUpdate: true,
        isOrderFailedToUpdate: false,
        isOrderUpdate: true
      };
    },
    failedToUpdateOrder: (state, action) => {
      return {
        ...state,
        isOrderRequestToUpdate: true,
        isOrderFailedToUpdate: true,
        isOrderUpdate: false
      };
    },
    requestToGetOrder: (state, action) => {
      return {
        ...state,
        isOrderRequestToGetById: true,
        isOrderFailedToGetById: false,
        isOrderGetById: false
      };
    },
    responseToGetOrder: (state, action) => {
      return {
        ...state,
        orderById: action?.payload,
        isOrderFailedToGetById: false,
        isOrderRequestToGetById: true,
        isOrderGetById: true
      };
    },
    failedToGetOrder: (state, action) => {
      return {
        ...state,
        isOrderFailedToGetById: true,
        isOrderRequestToGetById: true,
        orderById: false
      };
    },
    resetOrderById: (state, action) => {
      return {
        ...state,
        orderById: {}
      };
    },
    resetOrderByIdApiStatus: (state, action) => {
      return {
        ...state,
        isOrderGetById: false,
        isOrderRequestToGetById: false,
        isOrderFailedToGetById: false,
      };
    },
    resetOrder: (state, action) => {
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          details: addOrderInitialValues
        },
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    resetOrderApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
      };
    },
  }
});
export default OrderSlice.reducer;
export const {
updateDeliveryLiftStatus,
  updateDeliveryCurrentFloor,
  updatePickUpCurrentFloor,
  updateDeliveryLandmark,
  updateDeliveryAddress,
  updatePickUpLiftStatus,
  updatePartyName,
  updatePartyMobileNumber,
  updateCompanyName,
  updateQuotationAmount,
  updateOrderAmount,
  updateTokenAmount,
  updateBillingBy,
  updateShiftingType,
  updateShiftingLuggage,
  updateOrderDateAndTime,
  updateShiftingDateAndTime,
  updatePickUpAddress,
  updatePickUpLandmark,
  updatePickUpPincode,
  updatePickUpLocality,
  updatePickUpCity,
  updatePickUpState,
  updateDeliveryLocality,
  updateDeliveryCity,
  updateDeliveryState,
  updateDeliveryPincode,
  updateBillingCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateEnquiryManager,
  requestToSaveOrder,
  responseToSaveOrder,
  failedToSaveOrder,
  failedToListOrder,
  responseToListOrder,
  requestToListOrder,
  requestToUpdateOrder,
  responseToUpdateOrder,
  failedToUpdateOrder,

  resetOrderByIdApiStatus,
  requestToGetOrder,
  responseToGetOrder,
  failedToGetOrder,
  resetOrderById,
  resetOrder,
resetOrderApiStatus
  
} = OrderSlice.actions;
