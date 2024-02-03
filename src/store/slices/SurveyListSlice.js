import { createSlice } from '@reduxjs/toolkit';
import { surveyListInitialValues } from '../../common-components/validator/surveyList-validation';
const initialState = {
  add: { ...surveyListInitialValues.add },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  surveyItemList: []
};

export const SurveyListSlice = createSlice({
  name: 'surveyList',
  initialState,
  reducers: {
    updateAutoNumberInitilize: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          autoNumber: action?.payload
        }
      };
    },
    updateMenualNumberInitilize: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          surveyListNo: action?.payload
        }
      };
    },
    updateSurveyListDate: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          surveyDate: action?.payload
        }
      };
    },
    updateItemName: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          itemName: action?.payload
        }
      };
    },
    updateQuantity: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          quantity: action?.payload
        }
      };
    },
    updateValueOfGoods: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          valueOfGoods: action?.payload
        }
      };
    },
    updateRemark: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          remark: action?.payload
        }
      };
    },

    requestToSaveSurveyItem: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveSurveyItem: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveSurveyItem: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },

    requestToGetAllSurveyItem: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllSurveyItem: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        surveyItemList: action?.payload
      };
    },
    failedToGetAllSurveyItem: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },

    resetSurveyItemList: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
        add: { ...state.add,
            autoNumber: false,
            surveyDate: '',
            itemName: '',
            quantity: '',
            valueOfGoods: '',
            remark: ''
        },
      };
    },
    resetSurveyItemApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    }
  }
});

export default SurveyListSlice.reducer;
export const {
  updateAutoNumberInitilize,
  updateMenualNumberInitilize,
  updateSurveyListDate,
  updateItemName,
  updateQuantity,
  updateValueOfGoods,
  requestToSaveSurveyItem,
  responseToSaveSurveyItem,
  failedToSaveSurveyItem,
  requestToGetAllSurveyItem,
  responseToGetAllSurveyItem,
  failedToGetAllSurveyItem,
  resetSurveyItemList,
  resetSurveyItemApiStatus,
  updateRemark
} = SurveyListSlice.actions;
