import { createSlice } from '@reduxjs/toolkit';
import { packingInitialValues } from '../../common-components/validator/packingList-validation';

const initialState = {
  addPackingList: { ...packingInitialValues.addPackingList },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  packingList: []
};

export const PackingListSlice = createSlice({
  name: 'packingList',
  initialState,
  reducers: {
    updateNumberInitilize: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          numberInitilizeCheck: action?.payload
        }
      };
    },
    updateMenualNumberInitilize: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          numberInitializeValue: action?.payload
        }
      };
    },
    updatePackingListDate: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          packingListDate: action?.payload
        }
      };
    },
    updateItemName: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          itemName: action?.payload
        }
      };
    },
    updateQuantity: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          quantity: action?.payload
        }
      };
    },
    updatePackingType: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          packingType: action?.payload
        }
      };
    },
    updateValueOfGoods: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          valueOfGoods: action?.payload
        }
      };
    },
    updateProductCode: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          productCode: action?.payload
        }
      };
    },
    updateRemark: (state, action) => {
      return {
        ...state,
        addPackingList: {
          ...state.addPackingList,
          remark: action?.payload
        }
      };
    },
    requestToSavePackingList: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSavePackingList: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSavePackingList: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllPackingList: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllPackingList: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        packingList: action?.payload
      };
    },
    failedToGetAllPackingList: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    resetPackingList: (state, action) => {
      return {
        ...state,
        addPackingList: { ...packingInitialValues.addPackingList },
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    resetPackingListApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    }
  }
});

export default PackingListSlice.reducer;
export const {
  updateNumberInitilize,
  updateMenualNumberInitilize,
  updatePackingListDate,
  updateItemName,
  updateQuantity,
  updatePackingType,
  updateValueOfGoods,
  updateProductCode,
  updateRemark,
requestToSavePackingList,
responseToSavePackingList,
failedToSavePackingList,
requestToGetAllPackingList,
responseToGetAllPackingList,
failedToGetAllPackingList,
resetPackingList,
resetPackingListApiStatus
} = PackingListSlice.actions;
