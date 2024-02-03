import { createSlice } from '@reduxjs/toolkit';
import {
  
  surveyInitialValues
} from '../../common-components/validator/survey-validation';
const initialState = {
  add: { ...surveyInitialValues?.add },
  comment:'',
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  surveyList: []
};
const SurveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    updateSurveyDateAndTime: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          dateAndTime: action?.payload
        }
      };
    },
    updateSurveyComment: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          comment: action?.payload
        }
      };
    },
    requestToSaveSurvey: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveSurvey: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveSurvey: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllSurvey: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllSurvey: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        surveyList: action?.payload
      };
    },
    failedToGetAllSurvey: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    resetSurvey: (state, action) => {
      return {
        ...state,
        add: { ...surveyInitialValues.add },
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    resetSurveyApiStatus: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    }
  }
});
export default SurveySlice.reducer;
export const {
  updateSurveyDateAndTime,
  updateSurveyComment,
  requestToSaveSurvey,
  responseToSaveSurvey,
  failedToSaveSurvey,
  requestToGetAllSurvey,
  responseToGetAllSurvey,
  failedToGetAllSurvey,
  resetSurvey,
resetSurveyApiStatus
} = SurveySlice.actions;
