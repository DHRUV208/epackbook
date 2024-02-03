import { createSlice } from '@reduxjs/toolkit';
import { addMaterialInitialValues } from '../../common-components/validator/material-validator';
const initialState = {
  addMaterial: { ...addMaterialInitialValues?.addMaterial },
  isSaved: false,
  isRequestToSave: false,
  isFailedToSave: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  PackingMaterialList: []
};

export const MaterialSlice = createSlice({
  name: 'Material',
  initialState,
  reducers: {
    updateVehicleSize: (state, action) => {
      return {
        ...state,
        addMaterial: {
          ...state.addMaterial,
          chooseVehicleSize: action?.payload
        }
      };
    },

    updateUnitType: (state, action) => {
      return {
        ...state,
        addMaterial: {
          ...state.addMaterial,
          chooseUnitType: action?.payload
        }
      };
    },
    updateMaterialList: (state, action) => {
      return {
        ...state,
        materialList: action?.payload
      };
    },

    requestToSavePackingMaterial: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isFailedToSave: false,
        isSaved: false
      };
    },
    responseToSavePackingMaterial: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSavePackingMaterial: (state, action) => {
      return {
        ...state,
        isFailedToSave: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllPackingMaterial: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllPackingMaterial: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        PackingMaterialList: action?.payload
      };
    },
    failedToGetAllPackingMaterial: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },

    resetPackingMaterial: (state, action) => {
      return {
        ...state,
        addMaterial: { ...addMaterialInitialValues.addMaterial },
        isSaved: false,
        isResponseFailed: false,
        isFailedToSave: false
      };
    },

    resetPackingMaterialApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isResponseFailed: false,
        isFailedToSave: false,
      };
    }
  }
});

export default MaterialSlice.reducer;
export const {
  requestToSavePackingMaterial,
  responseToSavePackingMaterial,
  failedToSavePackingMaterial,
  requestToGetAllPackingMaterial,
  responseToGetAllPackingMaterial,
  failedToGetAllPackingMaterial,
  updateMaterialList,
  updateVehicleSize,
  updateUnitType,
  resetPackingMaterialApiStatus,
  resetPackingMaterial
} = MaterialSlice.actions;
