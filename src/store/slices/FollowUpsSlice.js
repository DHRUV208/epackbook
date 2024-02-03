import { createSlice } from '@reduxjs/toolkit';
import { addFollowUpsInitialValues } from '../../common-components/validator/followUps-validation';
const initialState = {
  addFollowUps: { ...addFollowUpsInitialValues?.addFollowUps },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  followUpsList: []
};
const FollowUpsSlice = createSlice({
  name: 'followUps',
  initialState,
  reducers: {
    updateFollowUpDateAndTime: (state, action) => {
      return {
        ...state,
        addFollowUps: {
          ...state.addFollowUps,
          dateAndTime: action?.payload
        }
      };
    },
    updateFollowUpComment: (state, action) => {
      return {
        ...state,
        addFollowUps: {
          ...state.addFollowUps,
          comment: action?.payload
        }
      };
    },
    requestToSaveFollowUps: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveFollowUps: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveFollowUps: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllFollowUps: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllFollowUps: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        followUpsList: action?.payload
      };
    },
    failedToGetAllFollowUps: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    resetFollowUps: (state, action) => {
      return {
        ...state,
        addFollowUps: { ...initialState.addFollowUps }
      };
    }
  }
});
export default FollowUpsSlice.reducer;
export const {
  updateFollowUpDateAndTime,
  updateFollowUpComment,
  requestToSaveFollowUps,
  responseToSaveFollowUps,
  failedToSaveFollowUps,
  requestToGetAllFollowUps,
  resetFollowUps,
  responseToGetAllFollowUps,
  failedToGetAllFollowUps
} = FollowUpsSlice.actions;
