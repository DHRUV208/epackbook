import { createSlice } from '@reduxjs/toolkit';
import { addInvoiceInitialValues } from '../../common-components/validator/invoice-validation';

const initialState = {
  addInvoice: { ...addInvoiceInitialValues?.addInvoice },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  invoiceList: []
};

export const InvoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    // Invoice Details
    updateInvoiceAuto: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            invoiceAuto: action?.payload
          }
        }
      };
    },
    updateInvoiceNo: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            invoiceNo: action?.payload
          }
        }
      };
    },
    updateShiftingLuggage: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            shiftingLuggage: action?.payload
          }
        }
      };
    },
    updateTemplate: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            template: action?.payload
          }
        }
      };
    },
    updateDateOfInvoice: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            dateOfInvoice: action?.payload
          }
        }
      };
    },
    updateTruckNo: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            truckNo: action?.payload
          }
        }
      };
    },
    updateConsignmentNo: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            consignmentNo: action?.payload
          }
        }
      };
    },
    updateModeOfMoving: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            modeOfMoving: action?.payload
          }
        }
      };
    },
    updateDeliveryDate: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            deliveryDate: action?.payload
          }
        }
      };
    },
    updateInvoiceVehicleType: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            vehicleType: action?.payload
          }
        }
      };
    },
    updateInvoiceManufacturer: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            manufacturer: action?.payload
          }
        }
      };
    },
    updateInvoiceModel: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          invoiceDetails: {
            ...state.addInvoice.invoiceDetails,
            model: action?.payload
          }
        }
      };
    },

    // Billing Details
    updateBillingCompanyName: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            companyName: action?.payload
          }
        }
      };
    },
    updateApprovalAuthority: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            approvalAuthority: action?.payload
          }
        }
      };
    },
    updateAuthorityPersonName: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            authorityPersonName: action?.payload
          }
        }
      };
    },
    updateAuthorityMobileNumber: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            authorityMobileNumber: action?.payload
          }
        }
      };
    },
    updateCompanyAddress: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            companyAddress: action?.payload
          }
        }
      };
    },
    updateCompanyGST: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            companyGST: action?.payload
          }
        }
      };
    },
    updateEmployeeName: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            employeeName: action?.payload
          }
        }
      };
    },
    updateEmployeeDesignation: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            employeeDesignation: action?.payload
          }
        }
      };
    },
    updateEmployeeMobile: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          details: {
            ...state.addInvoice.billingDetails,
            employeeMobile: action?.payload
          }
        }
      };
    },

    // Billing Address
    updateBillingAddressCheck: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            billingAddressCheck: action?.payload
          }
        }
      };
    },
    updateCheckClientDetails: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            checkClientDetails: action?.payload
          }
        }
      };
    },
    updatePartyName: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            partyName: action?.payload
          }
        }
      };
    },
    updatePartyGST: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            partyGST: action?.payload
          }
        }
      };
    },
    updatePartyMobileNo: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            partyMobileNo: action?.payload
          }
        }
      };
    },
    updateAddress: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            address: action?.payload
          }
        }
      };
    },
    updateLandmark: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            landmark: action?.payload
          }
        }
      };
    },
    updatePincode: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            pincode: action?.payload
          }
        }
      };
    },
    updateState: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            state: action?.payload
          }
        }
      };
    },
    updateCity: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            city: action?.payload
          }
        }
      };
    },
    updateLocality: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          billingAddress: {
            ...state.addInvoice.billingAddress,
            locality: action?.payload
          }
        }
      };
    },
    updateInvoiceNumber: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          partyInvoiceDetails: {
            ...state.addInvoice.partyInvoiceDetails,
            invoiceNumber: action?.payload
          }
        }
      };
    },
    updateInvoiceDate: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          partyInvoiceDetails: {
            ...state.addInvoice.partyInvoiceDetails,
            invoiceDate: action?.payload
          }
        }
      };
    },
    updateSACCode: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          partyInvoiceDetails: {
            ...state.addInvoice.partyInvoiceDetails,
            SACCode: action?.payload
          }
        }
      };
    },
    updateCheck: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            surcharge: {
              ...state.addInvoice.charges.surcharge,
              check: action?.payload
            }
          }
        }
      };
    },
    updateValue: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            surcharge: {
              ...state.addInvoice.charges.surcharge,
              value: action?.payload
            }
          }
        }
      };
    },
    updateGstCheck: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            gst: {
              ...state.addInvoice.charges.gst,
              gstCheck: action?.payload
            }
          }
        }
      };
    },
    updateGstPercent: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            gst: {
              ...state.addInvoice.charges.gst,
              gstPercent: action?.payload
            }
          }
        }
      };
    },
    updateGstType: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            gst: {
              ...state.addInvoice.charges.gst,
              gstType: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceCheck: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              checkRequired: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceRequired: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              required: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceShiftingLuggage: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              shiftingLuggage: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceIns: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              insurance: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceGST: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              gst: action?.payload
            }
          }
        }
      };
    },
    updateTransitInsuranceValue: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            transitInsurance: {
              ...state.addInvoice.charges.transitInsurance,
              value: action?.payload
            }
          }
        }
      };
    },
    updateStorageCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            storeCharges: {
              ...state.addInvoice.charges.storeCharges,
              required: action?.payload
            }
          }
        }
      };
    },
    updateStorageOptionsCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            storeCharges: {
              ...state.addInvoice.charges.storeCharges,
              options: action?.payload
            }
          }
        }
      };
    },
    updateStorageFromCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            storeCharges: {
              ...state.addInvoice.charges.storeCharges,
              from: action?.payload
            }
          }
        }
      };
    },
    updateStorageToCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            storeCharges: {
              ...state.addInvoice.charges.storeCharges,
              to: action?.payload
            }
          }
        }
      };
    },
    updateStorageAmountCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            storeCharges: {
              ...state.addInvoice.charges.storeCharges,
              amount: action?.payload
            }
          }
        }
      };
    },
    updateOtherCharge: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            otherCharges: {
              ...state.addInvoice.charges.otherCharges,
              required: action?.payload
            }
          }
        }
      };
    },
    updateJobType: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            otherCharges: {
              ...state.addInvoice.charges.otherCharges,
              jobType: action?.payload
            }
          }
        }
      };
    },
    updateJobTypeValue: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            otherCharges: {
              ...state.addInvoice.charges.otherCharges,
              value: action?.payload
            }
          }
        }
      };
    },
    updateDiscount: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            discount: {
              ...state.addInvoice.charges.discount,
              required: action?.payload
            }
          }
        }
      };
    },
    updateDiscountRequired: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            discount: {
              ...state.addInvoice.charges.discount,
              discountRequired: action?.payload
            }
          }
        }
      };
    },
    updateDiscountValue: (state, action) => {
      const { type, value } = action?.payload;
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          charges: {
            ...state.addInvoice.charges,
            discount: {
              ...state.addInvoice.charges.discount,
              type,
              value
            }
          }
        }
      };
    },
    updateRemark: (state, action) => {
      return {
        ...state,
        addInvoice: {
          ...state.addInvoice,
          remark: action?.payload
        }
      };
    },
    requestToSaveInvoice: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveInvoice: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveInvoice: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllInvoice: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllInvoice: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        invoiceList: action?.payload
      };
    },
    failedToGetAllInvoice: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    }
  }
});

export default InvoiceSlice.reducer;
export const {
  updateInvoiceAuto,
  updateInvoiceNo,
  updateShiftingLuggage,
  updateTemplate,
  updateDateOfInvoice,
  updateTruckNo,
  updateConsignmentNo,
  updateModeOfMoving,
  updateDeliveryDate,
  updateCheckClientDetails,
  updatePartyName,
  updatePartyGST,
  updatePartyMobileNo,
  updateAddress,
  updateLandmark,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateInvoiceNumber,
  updateInvoiceDate,
  updateSACCode,
  updateRemark,
  updateBillingAddressCheck,
  updateBillingCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updateCheck,
  updateValue,
  updateGstCheck,
  updateGstPercent,
  updateGstType,
  updateTransitInsuranceCheck,
  updateTransitInsuranceRequired,
  updateTransitInsuranceShiftingLuggage,
  updateTransitInsuranceIns,
  updateTransitInsuranceGST,
  updateTransitInsuranceValue,
  updateStorageCharge,
  updateStorageFromCharge,
  updateStorageToCharge,
  updateStorageAmountCharge,
  updateStorageOptionsCharge,
  updateOtherCharge,
  updateJobType,
  updateJobTypeValue,
  updateDiscount,
  updateDiscountValue,
  updateInvoiceVehicleType,
  updateInvoiceManufacturer,
  updateInvoiceModel,
  updateDiscountRequired,
  requestToSaveInvoice,
  responseToSaveInvoice,
  failedToSaveInvoice,
  requestToGetAllInvoice,
  responseToGetAllInvoice,
  failedToGetAllInvoice
} = InvoiceSlice.actions;
