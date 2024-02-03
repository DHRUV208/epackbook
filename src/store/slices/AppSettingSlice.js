import { createSlice } from '@reduxjs/toolkit';
import { appSettingInitialValues } from '../../common-components/validator/settings-validator/app-setting';
const initialState = {
  add: { ...appSettingInitialValues.add }
};
const AppSettingSlice = createSlice({
  name: 'app-management',
  initialState,
  reducers: {
    updateQuotation: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          quotation: action?.payload
        }
      };
    },
    updateMoneyReceipt: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          moneyReceipt: action?.payload
        }
      };
    },
    updateCarCondition: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          carCondition: action?.payload
        }
      };
    },
    updateBilty: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          bilty: action?.payload
        }
      };
    },
    updateInvoice: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          invoice: action?.payload
        }
      };
    }
  }
});
export default AppSettingSlice.reducer;
export const {
  updateQuotation,
  updateMoneyReceipt,
  updateCarCondition,
  updateBilty,
  updateInvoice
} = AppSettingSlice.actions;
