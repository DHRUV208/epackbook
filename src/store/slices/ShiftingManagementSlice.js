import { createSlice } from '@reduxjs/toolkit';
import {
  
  floorInitialValues, 
  insurancePercentageInitialValues, 
  materialInitialValues,
  movingModeInitialValues,
  movingTypeInitialValues,
  packingTypeInitialValues,
  shiftingLuggageInitialValues,
  transitInsuranceInitialValues
} from '../../common-components/validator/settings-validator/shifting-management';

const floorInitialState = {
  add: floorInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listFloor: [],
}

const insurancePercentageInitialState = {
  add: insurancePercentageInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listInsurancePercentage: [],
}

const materialInitialState = {
  add: materialInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listMaterial: [],
}

const movingModeInitialState = {
  add: movingModeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listMovingMode: [],
}

const movingTypeInitialState = {
  add: movingTypeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listMovingType: [],
}

const packingTypeInitialState = {
  add: packingTypeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listPackingType: [],
}

const shiftingLuggageInitialState = {
  add: shiftingLuggageInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listShiftingLuggage: [],
}

const transitInsuranceInitialState = {
  add: transitInsuranceInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isRequestFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listTransitInsurance: [],
}



export const ShiftingManagementSlice = createSlice({
  name: 'Shifting-Management',
  initialState: {
    floor: floorInitialState,
    insurancePercentage: insurancePercentageInitialState,
    material: materialInitialState,
    movingMode: movingModeInitialState,
    movingType: movingTypeInitialState,
    shiftingLuggage: shiftingLuggageInitialState,
    transitInsurance: transitInsuranceInitialState,
    packingType: packingTypeInitialState,
  },
  reducers: {
    updateFloorValue: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          add:{
            ...state.floor.add,
            value: action?.payload
          }
        }
      };
    },
    requestToSaveFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isSaved: false,
            isRequestToSave: true,
            isResponseFailed: false
          }
        }
      };
    },
    responseToSaveFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          listFloor: action?.payload,
          apiStatus: {
            ...state.floor.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetFloor:(state)=>{
      return {
        ...state,
        floor:{
          ...state.floor,
          add: floorInitialValues,
          apiStatus:{
            ...state.floor.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetFloorApiStatus:(state)=>{
      return {
        ...state,
        floor:{
          ...state.floor,
          apiStatus:{
            ...state.floor.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteFloor: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetFloorDeleteStatus: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            ...state.floor.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteApiStatus: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
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
    resetVehicleDeleteStatus: (state, action) => {
      return {
        ...state,
        floor: {
          ...state.floor,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },



    //////////////////////////////////////////
    updateInsurancePercentageValue: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          add:{
            ...state.insurancePercentage.add,
            value: action?.payload
          }
          
        }
      };
    },
    requestToSaveInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllInsurancePercentage: (state, action) => {
      return {
       ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          listInsurancePercentage: action?.payload,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetInsurancePercentage:(state)=>{
      return {
        ...state,
        insurancePercentage:{
          ...state.insurancePercentage,
          add: insurancePercentageInitialValues,
          apiStatus:{
            ...state.insurancePercentage.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetInsurancePercentageApiStatus:(state)=>{
      return {
        ...state,
        insurancePercentage:{
          ...state.insurancePercentage,
          apiStatus:{
            ...state.insurancePercentage.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteInsurancePercentage: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetInsurancePercentageDeleteStatus: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
          apiStatus: {
            ...state.insurancePercentage.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteInsurancePercentageApiStatus: (state, action) => {
      return {
        ...state,
        insurancePercentage: {
          ...state.insurancePercentage,
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


    //////////////////////////////////////////
    updateMaterialValue: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          add:{
            ...state.material.add,
            value: action?.payload
          }          
        }
      };
    },
    requestToSaveMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          listMaterial: action?.payload,
          apiStatus: {
            ...state.material.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetMaterial:(state)=>{
      return {
        ...state,
        material:{
          ...state.material,
          add: materialInitialValues,
          apiStatus:{
            ...state.material.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetMaterialApiStatus:(state)=>{
      return {
        ...state,
        material:{
          ...state.material,
          apiStatus:{
            ...state.material.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteMaterial: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetMaterialDeleteStatus: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
          apiStatus: {
            ...state.material.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteMaterialApiStatus: (state, action) => {
      return {
        ...state,
        material: {
          ...state.material,
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

    

    ////////////////////////////////////////
    updateMovingModeValue: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          add:{
            ...state.movingMode.add,
            value: action?.payload
          }          
        }
      };
    },
    requestToSaveMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          listMovingMode: action?.payload,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetMovingMode:(state)=>{
      return {
        ...state,
        movingMode:{
          ...state.movingMode,
          add: movingModeInitialValues,
          apiStatus:{
            ...state.movingMode.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetMovingModeApiStatus:(state)=>{
      return {
        ...state,
        movingMode:{
          ...state.movingMode,
          apiStatus:{
            ...state.movingMode.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteMovingMode: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetMovingModeDeleteStatus: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
          apiStatus: {
            ...state.movingMode.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteMovingModeApiStatus: (state, action) => {
      return {
        ...state,
        movingMode: {
          ...state.movingMode,
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

    

    
    ////////////////////////////////////////////
    updateMovingTypeValue: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          add:{
            ...state.movingType.add,
            value: action?.payload
          }          
        }
      };
    },
    requestToSaveMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          listMovingType: action?.payload,
          apiStatus: {
            ...state.movingType.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetMovingType:(state)=>{
      return {
        ...state,
        movingType:{
          ...state.movingType,
          add: movingTypeInitialValues,
          apiStatus:{
            ...state.movingType.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetMovingTypeApiStatus:(state)=>{
      return {
        ...state,
        movingType:{
          ...state.movingType,
          apiStatus:{
            ...state.movingType.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteMovingType: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetMovingTypeDeleteStatus: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
          apiStatus: {
            ...state.movingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteMovingTypeApiStatus: (state, action) => {
      return {
        ...state,
        movingType: {
          ...state.movingType,
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

    /////////////////////////////////
    updatePackingTypeValue: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          add:{
            ...state.packingType.add,
            value: action?.payload
          }          
        }
      };
    },

    requestToSavePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSavePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSavePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllPackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllPackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          listPackingType: action?.payload,
          apiStatus: {
            ...state.packingType.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllPackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetPackingType:(state)=>{
      return {
        ...state,
        packingType:{
          ...state.packingType,
          add: packingTypeInitialValues,
          apiStatus:{
            ...state.packingType.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetPackingTypeApiStatus:(state)=>{
      return {
        ...state,
        packingType:{
          ...state.packingType,
          apiStatus:{
            ...state.packingType.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeletePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeletePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeletePackingType: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetPackingTypeDeleteStatus: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
          apiStatus: {
            ...state.packingType.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeletePackingTypeApiStatus: (state, action) => {
      return {
        ...state,
        packingType: {
          ...state.packingType,
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
    
    

    /////////////////////////////////////
    updateShiftingLuggageValue: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          add:{
            ...state.shiftingLuggage.add,
            value: action?.payload
          }          
        }
      };
    },

    requestToSaveShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          listShiftingLuggage: action?.payload,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetShiftingLuggage:(state)=>{
      return {
        ...state,
        shiftingLuggage:{
          ...state.shiftingLuggage,
          add: shiftingLuggageInitialValues,
          apiStatus:{
            ...state.shiftingLuggage.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetShiftingLuggageApiStatus:(state)=>{
      return {
        ...state,
        shiftingLuggage:{
          ...state.shiftingLuggage,
          apiStatus:{
            ...state.shiftingLuggage.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteShiftingLuggage: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetShiftingLuggageDeleteStatus: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
          apiStatus: {
            ...state.shiftingLuggage.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteShiftingLuggageApiStatus: (state, action) => {
      return {
        ...state,
        shiftingLuggage: {
          ...state.shiftingLuggage,
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
    
    //////////////////////////////////
    updateTransitInsuranceValue: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          add:{
            ...state.transitInsurance.add,
            value: action?.payload
          }          
        }
      };
    },
    requestToSaveTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isRequestToSave: true,
            isRequestFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isSaved: true,
            isRequestFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          listTransitInsurance: action?.payload,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetTransitInsurance:(state)=>{
      return {
        ...state,
        transitInsurance:{
          ...state.transitInsurance,
          add: transitInsuranceInitialValues,
          apiStatus:{
            ...state.transitInsurance.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    resetTransitInsuranceApiStatus:(state)=>{
      return {
        ...state,
        transitInsurance:{
          ...state.transitInsurance,
          apiStatus:{
            ...state.transitInsurance.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
          }
        },
      }
    },
    requestToDeleteTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteTransitInsurance: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetTransitInsuranceDeleteStatus: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
          apiStatus: {
            ...state.transitInsurance.apiStatus,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetDeleteTransitInsuranceApiStatus: (state, action) => {
      return {
        ...state,
        transitInsurance: {
          ...state.transitInsurance,
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

export default ShiftingManagementSlice.reducer;
export const {
  reset,
  updateFloorValue,
  requestToSaveFloor,
  responseToSaveFloor,
  failedToSaveFloor,
  requestToGetAllFloor,
  responseToGetAllFloor,
  failedToGetAllFloor,
  resetFloor,
  resetFloorApiStatus,
  requestToDeleteFloor,
  responseToDeleteFloor,
  failedToDeleteFloor,
  resetFloorDeleteStatus,
  resetDeleteApiStatus,
  

  updateInsurancePercentageValue,
  requestToSaveInsurancePercentage,
  responseToSaveInsurancePercentage,
  failedToSaveInsurancePercentage,
  requestToGetAllInsurancePercentage,
  responseToGetAllInsurancePercentage,
  failedToGetAllInsurancePercentage,
  resetInsurancePercentage,
  resetInsurancePercentageApiStatus,
  requestToDeleteInsurancePercentage,
  responseToDeleteInsurancePercentage,
  failedToDeleteInsurancePercentage,
  resetInsurancePercentageDeleteStatus,
  resetDeleteInsurancePercentageApiStatus,


  updateMaterialValue,
  requestToSaveMaterial,
  responseToSaveMaterial,
  failedToSaveMaterial,
  requestToGetAllMaterial,
  responseToGetAllMaterial,
  failedToGetAllMaterial,
  resetMaterial,
  resetMaterialApiStatus,
  requestToDeleteMaterial,
  responseToDeleteMaterial,
  failedToDeleteMaterial,
  resetMaterialDeleteStatus,
  resetDeleteMaterialApiStatus,

  updateMovingModeValue,
  requestToSaveMovingMode,
  responseToSaveMovingMode,
  failedToSaveMovingMode,
  requestToGetAllMovingMode,
  responseToGetAllMovingMode,
  failedToGetAllMovingMode,
  resetMovingMode,
  resetMovingModeApiStatus,
  requestToDeleteMovingMode,
  responseToDeleteMovingMode,
  failedToDeleteMovingMode,
  resetMovingModeDeleteStatus,
  resetDeleteMovingModeApiStatus,

  updateMovingTypeValue,
  requestToSaveMovingType,
  responseToSaveMovingType,
  failedToSaveMovingType,
  requestToGetAllMovingType,
  responseToGetAllMovingType,
  failedToGetAllMovingType,
  resetMovingType,
  resetMovingTypeApiStatus,
  requestToDeleteMovingType,
  responseToDeleteMovingType,
  failedToDeleteMovingType,
  resetMovingTypeDeleteStatus,
  resetDeleteMovingTypeApiStatus,


  updatePackingTypeValue,
  requestToSavePackingType,
  responseToSavePackingType,
  failedToSavePackingType,
  requestToGetAllPackingType,
  responseToGetAllPackingType,
  failedToGetAllPackingType,
  resetPackingType,
  resetPackingTypeApiStatus,
  requestToDeletePackingType,
  responseToDeletePackingType,
  failedToDeletePackingType,
  resetPackingTypeDeleteStatus,
  resetDeletePackingTypeApiStatus,


  updateShiftingLuggageValue,
  requestToSaveShiftingLuggage,
  responseToSaveShiftingLuggage,
  failedToSaveShiftingLuggage,
  requestToGetAllShiftingLuggage,
  responseToGetAllShiftingLuggage,
  failedToGetAllShiftingLuggage,
  resetShiftingLuggage,
  resetShiftingLuggageApiStatus,
  requestToDeleteShiftingLuggage,
  responseToDeleteShiftingLuggage,
  failedToDeleteShiftingLuggage,
  resetShiftingLuggageDeleteStatus,
  resetDeleteShiftingLuggageApiStatus,


  updateTransitInsuranceValue,
  requestToSaveTransitInsurance,
  responseToSaveTransitInsurance,
  failedToSaveTransitInsurance,
  requestToGetAllTransitInsurance,
  responseToGetAllTransitInsurance,
  failedToGetAllTransitInsurance,
  resetTransitInsurance,
  resetTransitInsuranceApiStatus,
  requestToDeleteTransitInsurance,
  responseToDeleteTransitInsurance,
  failedToDeleteTransitInsurance,
  resetTransitInsuranceDeleteStatus,
  resetDeleteTransitInsuranceApiStatus
} = ShiftingManagementSlice.actions;

// watcherDeleteTransitInsuranceSaga
// watcherDeleteShiftingLuggageSaga
// watcherDeletePackingTypeSaga
// watcherDeleteMovingTypeSaga
// watcherDeleteMovingModeSaga
// watcherDeleteMaterialSaga
// watcherDeleteInsurancePercentageSaga
