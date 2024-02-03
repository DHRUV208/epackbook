import { createSlice } from '@reduxjs/toolkit';
import {subscriptionPlanInitial} from '../../common-components/validator/subscriptionPlan-validation/index'

const initialState = {
  ...subscriptionPlanInitial,
  apiStatus: {
    isRequestToSave:false,
    isResponseToSave: false,
    isFailedToSave: false,
    }
};

export const SubscriptionPlanSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers:{
    requestToSave: (state, action) => {
      return {
        ...state,
        apiStatus:{
          ...state.apiStatus,
          isRequestToSave:true,
    isResponseToSave: false,
    isFailedToSave: false,
        }
        
      };
    },
    responseToSave: (state, action) => {
      return {
        ...state,
        apiStatus:{
          ...state.apiStatus,
          isRequestToSave:true,
    isResponseToSave: true,
    isFailedToSave: false,
        }
        
      };
    },
    failedToSave: (state, action) => {
      return {
        ...state,
        apiStatus:{
          ...state.apiStatus,
          isRequestToSave:true,
    isResponseToSave: false,
    isFailedToSave: true,
        }
        
      };
    },

  }
})

export default SubscriptionPlanSlice.reducer;
export const {failedToSave,requestToSave,responseToSave} = SubscriptionPlanSlice.actions
