import { createSlice } from '@reduxjs/toolkit';
import { addBiltyInitialValues } from '../../common-components/validator/bilty-validation';

const initialState = {
  addBilty: { ...addBiltyInitialValues?.addBilty },
  isSaved: false,
  isRequestToSave: false,
  isFailedToSave: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  biltyList: []
};

export const BiltySlice = createSlice({
  name: 'bilty',
  initialState,
  reducers: {
    // basic details
    updateBiltyAuto: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          basicDetails: {
            ...state.addBilty.basicDetails,
            biltyAuto: action?.payload
          }
        }
      };
    },
    updateBiltyNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          basicDetails: {
            ...state.addBilty.basicDetails,
            biltyNo: action?.payload
          }
        }
      };
    },
    updateTemplate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          basicDetails: {
            ...state.addBilty.basicDetails,
            template: action?.payload
          }
        }
      };
    },
    updateDateOfBilty: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          basicDetails: {
            ...state.addBilty.basicDetails,
            dateOfBilty: action?.payload
          }
        }
      };
    },

    // Consigner Details
    updateCheckClientDetails: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            checkClientDetails: action?.payload
          }
        }
      };
    },
    updateConsignerName: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            consignerName: action?.payload
          }
        }
      };
    },
    updateConsignerGST: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            consignerGST: action?.payload
          }
        }
      };
    },
    updateConsignerMobile: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            consignerMobile: action?.payload
          }
        }
      };
    },
    updateConsignerAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            address: action?.payload
          }
        }
      };
    },
    updateConsignerLandmark: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            landmark: action?.payload
          }
        }
      };
    },
    updateConsignerPinCode: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            pinCode: action?.payload
          }
        }
      };
    },
    updateConsignerState: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            state: action?.payload
          }
        }
      };
    },
    updateConsignerCity: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            city: action?.payload
          }
        }
      };
    },
    updateConsignerLocality: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consignerDetails: {
            ...state.addBilty.consignerDetails,
            locality: action?.payload
          }
        }
      };
    },

    // Loading Address
    updateCheckLoadingAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            checkLoadingAddress: action?.payload
          }
        }
      };
    },
    updateLoadingAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            address: action?.payload
          }
        }
      };
    },
    updateLoadingLandmark: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            landmark: action?.payload
          }
        }
      };
    },
    updateLoadingPinCode: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            pinCode: action?.payload
          }
        }
      };
    },
    updateLoadingState: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            state: action?.payload
          }
        }
      };
    },
    updateLoadingCity: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            city: action?.payload
          }
        }
      };
    },
    updateLoadingLocality: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          loadingAddress: {
            ...state.addBilty.loadingAddress,
            locality: action?.payload
          }
        }
      };
    },

    // Consignee Details
    updateCheckClientDeliveryDetails: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            checkClientDetails: action?.payload
          }
        }
      };
    },
    updateConsigneeName: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            consignerName: action?.payload
          }
        }
      };
    },
    updateConsigneeGST: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            consignerGST: action?.payload
          }
        }
      };
    },
    updateConsigneeMobile: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            consignerMobile: action?.payload
          }
        }
      };
    },
    updateConsigneeAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            address: action?.payload
          }
        }
      };
    },
    updateConsigneeLandmark: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            landmark: action?.payload
          }
        }
      };
    },
    updateConsigneePinCode: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            pinCode: action?.payload
          }
        }
      };
    },
    updateConsigneeState: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            state: action?.payload
          }
        }
      };
    },
    updateConsigneeCity: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            city: action?.payload
          }
        }
      };
    },
    updateConsigneeLocality: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          consigneeDetails: {
            ...state.addBilty.consigneeDetails,
            locality: action?.payload
          }
        }
      };
    },

    // Delivery Address
    updateCheckUnloadingAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            checkUnloadingAddress: action?.payload
          }
        }
      };
    },
    updateUnloadingAddress: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            address: action?.payload
          }
        }
      };
    },
    updateUnloadingLandmark: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            landmark: action?.payload
          }
        }
      };
    },
    updateUnloadingPinCode: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            pinCode: action?.payload
          }
        }
      };
    },
    updateUnloadingState: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            state: action?.payload
          }
        }
      };
    },
    updateUnloadingCity: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            city: action?.payload
          }
        }
      };
    },
    updateUnloadingLocality: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          unloadingAddress: {
            ...state.addBilty.unloadingAddress,
            locality: action?.payload
          }
        }
      };
    },

    // Vehicle Details
    updateVehicleInvoiceNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            invoiceNo: action?.payload
          }
        }
      };
    },
    updateVehicleType: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            vehicleType: action?.payload
          }
        }
      };
    },
    updateVehicleNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            vehicleNo: action?.payload
          }
        }
      };
    },
    updateVehicleFromLocation: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            fromLocation: action?.payload
          }
        }
      };
    },
    updateVehicleToLocation: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            toLocation: action?.payload
          }
        }
      };
    },
    updateVehicleDriverName: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            driverName: action?.payload
          }
        }
      };
    },
    updateVehicleDriverMobile: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            driverMobile: action?.payload
          }
        }
      };
    },
    updateVehicleDriverLicence: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            driverLicence: action?.payload
          }
        }
      };
    },
    updateVehicleSealNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            sealNo: action?.payload
          }
        }
      };
    },
    updateVehicleInDate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            inDate: action?.payload
          }
        }
      };
    },
    updateVehicleOutDate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          vehicleDetails: {
            ...state.addBilty.vehicleDetails,
            outDate: action?.payload
          }
        }
      };
    },

    // E-WayBillDetails
    updateE_wayBillNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          e_WayBillDetails: {
            ...state.addBilty.e_WayBillDetails,
            e_wayBillNo: action?.payload
          }
        }
      };
    },
    updateE_wayGeneratedOn: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          e_WayBillDetails: {
            ...state.addBilty.e_WayBillDetails,
            generatedOn: action?.payload
          }
        }
      };
    },
    updateE_wayExpiryDate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          e_WayBillDetails: {
            ...state.addBilty.e_WayBillDetails,
            expiryDate: action?.payload
          }
        }
      };
    },

    // Material Details
    updateTypeOfMoving: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            typeOfMoving: action?.payload
          }
        }
      };
    },
    updateCheckMaterialDetails: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            checkMaterialDetails: action?.payload
          }
        }
      };
    },
    updateMaterialName: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            materialName: action?.payload
          }
        }
      };
    },
    updateNoOfArticles: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            noOfArticles: action?.payload
          }
        }
      };
    },
    updatePackingType: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            packingType: action?.payload
          }
        }
      };
    },
    updateHsnCode: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            hsnCode: action?.payload
          }
        }
      };
    },
    updateBillOrInvoiceNo: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            billOrInvoiceNo: action?.payload
          }
        }
      };
    },
    updateActualWeight: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            actualWeight: action?.payload
          }
        }
      };
    },
    updateMaterialunits: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            units: action?.payload
          }
        }
      };
    },
    updateMaterialType: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            materialType: action?.payload
          }
        }
      };
    },
    updateValueOfGoods: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          materialDetails: {
            ...state.addBilty.materialDetails,
            valueOfGoods: action?.payload
          }
        }
      };
    },

    // Total Amount
    updateAdvanceAmount: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          totalAmount: {
            ...state.addBilty.totalAmount,
            advanceAmount: action?.payload
          }
        }
      };
    },

    updateBalanceAmount: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          totalAmount: {
            ...state.addBilty.totalAmount,
            balanceAmount: action?.payload
          }
        }
      };
    },

    // Insurance Details
    updateIsInsured: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          insuranceDetails: {
            ...state.addBilty.insuranceDetails,
            isInsured: action?.payload
          }
        }
      };
    },
    updateInsuranceCompanyName: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          insuranceDetails: {
            ...state.addBilty.insuranceDetails,
            insuranceCompany: action?.payload
          }
        }
      };
    },
    updatePolicyNumber: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          insuranceDetails: {
            ...state.addBilty.insuranceDetails,
            policyNumber: action?.payload
          }
        }
      };
    },
    updateInsuranceDate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          insuranceDetails: {
            ...state.addBilty.insuranceDetails,
            insuranceDate: action?.payload
          }
        }
      };
    },
    updateInsuranceAmount: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          insuranceDetails: {
            ...state.addBilty.insuranceDetails,
            insuranceAmount: action?.payload
          }
        }
      };
    },

    // Liability of Tax
    updateLiabilityOfTax: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          liabilityOfTax: action?.payload
        }
      };
    },

    // Demurrage Details
    updateDemurrageCharge: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          demurrageDetails: {
            ...state.addBilty.demurrageDetails,
            demurrageCharge: action?.payload
          }
        }
      };
    },
    updateChargeRate: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          demurrageDetails: {
            ...state.addBilty.demurrageDetails,
            chargeRate: action?.payload
          }
        }
      };
    },
    updateApplicableAfter: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          demurrageDetails: {
            ...state.addBilty.demurrageDetails,
            applicableAfter: action?.payload
          }
        }
      };
    },

    // Risk Type
    updateRiskType: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          riskType: action?.payload
        }
      };
    },

    // Other Details
    updateOtherDetails: (state, action) => {
      return {
        ...state,
        addBilty: {
          ...state.addBilty,
          otherDetails: action?.payload
        }
      };
    },
    requestToSaveBilty: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isFailedToSave: false,
        isSaved: false
      };
    },
    responseToSaveBilty: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveBilty: (state, action) => {
      return {
        ...state,
        isFailedToSave: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllBilty: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllBilty: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        biltyList: action?.payload
      };
    },
    failedToGetAllBilty: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },

    resetBilty:(state, action)=>{
      return {
        ...state,
        addBilty:{...addBiltyInitialValues?.addBilty},
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false,

        isGetAll: false,
        isRequestToGetAll: false,
        isFailedToGetAll: false,
      };
    },

    resetBiltyApiStatus:(state,action)=>{
      return {

        ...state,
        addBilty:{...addBiltyInitialValues?.addBilty},
        isSaved: false,
        isRequestToSave: false,
        isFailedToSave: false,

        isGetAll: false,
        isRequestToGetAll: false,
        isFailedToGetAll: false,
      }
    }
  }
});

export default BiltySlice.reducer;
export const {
  updateBiltyAuto,
  updateBiltyNo,
  updateTemplate,
  updateDateOfBilty,
  updateCheckClientDetails,
  updateConsignerName,
  updateConsignerGST,
  updateConsignerMobile,
  updateConsignerAddress,
  updateConsignerLandmark,
  updateConsignerPinCode,
  updateConsignerState,
  updateConsignerCity,
  updateConsignerLocality,
  updateLoadingAddress,
  updateLoadingLandmark,
  updateLoadingPinCode,
  updateLoadingState,
  updateLoadingCity,
  updateLoadingLocality,
  updateCheckClientDeliveryDetails,
  updateConsigneeName,
  updateConsigneeGST,
  updateConsigneeMobile,
  updateConsigneeAddress,
  updateConsigneeLandmark,
  updateConsigneePinCode,
  updateConsigneeState,
  updateConsigneeCity,
  updateConsigneeLocality,
  updateUnloadingAddress,
  updateUnloadingLandmark,
  updateUnloadingPinCode,
  updateUnloadingState,
  updateUnloadingCity,
  updateUnloadingLocality,
  updateVehicleInvoiceNo,
  updateVehicleType,
  updateVehicleNo,
  updateVehicleFromLocation,
  updateVehicleToLocation,
  updateVehicleDriverName,
  updateVehicleDriverMobile,
  updateVehicleDriverLicence,
  updateVehicleSealNo,
  updateVehicleInDate,
  updateVehicleOutDate,
  updateE_wayBillNo,
  updateE_wayGeneratedOn,
  updateE_wayExpiryDate,
  updateMaterialName,
  updateNoOfArticles,
  updatePackingType,
  updateHsnCode,
  updateBillOrInvoiceNo,
  updateActualWeight,
  updateMaterialunits,
  updateMaterialType,
  updateValueOfGoods,
  updateRiskType,
  updateOtherDetails,
  updateCheckLoadingAddress,
  updateCheckDeliveryAddress,
  updateIsInsured,
  updateInsuranceCompanyName,
  updatePolicyNumber,
  updateInsuranceDate,
  updateInsuranceAmount,
  updateDemurrageCharge,
  updateChargeRate,
  updateApplicableAfter,
  updateAdvanceAmount,
  updateBalanceAmount,
  updateLiabilityOfTax,
  updateTypeOfMoving,
  updateCheckMaterialDetails,
  requestToSaveBilty,
  responseToSaveBilty,
  failedToSaveBilty,
  requestToGetAllBilty,
  responseToGetAllBilty,
  failedToGetAllBilty,
  resetBilty,
  resetBiltyApiStatus
} = BiltySlice.actions;
