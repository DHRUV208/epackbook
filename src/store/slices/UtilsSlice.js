import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  pickup: {
    city: [],
    state: [],
    locality: []
  },
  drop: {
    city: [],
    state: [],
    locality: []
  }
};
export const UtilsSlice = createSlice({
  name: 'Utils',
  initialState,
  reducers: {
    requestToGetPickLocation: (state, action) => { },
    responseToGetPickLocation: (state, action) => {
      const { city, locality } = action?.payload;
      return {
        ...state,
        pickup: {
          city,
          state: action?.payload?.state,
          locality
        }
      };
    },
    failedToGetPickLocation: (state, action) => { },
    requestToGetDropLocation: (state, action) => { },
    responseToGetDropLocation: (state, action) => {
      const { city, locality } = action?.payload;
      return {
        ...state,
        drop: {
          city,
          state: action?.payload?.state,
          locality
        }
      };
    },
    failedToGetDropLocation: (state, action) => { },
    utilsReset: (state, action) => {
      return {
        state: initialState
      };
    },
    utilsPickUpReset: (state, action) => {
      return {
        ...state,
        pickup: {
          ...state.pickup,
          city: [],
          state: [],
          locality: []
        }
      };
    },
    utilsDropReset: (state, action) => {
      return {
        ...state,
        drop: {
          ...state.drop,
          city: [],
          state: [],
          locality: []
        }
      };
    },
  }
});
export default UtilsSlice.reducer;
export const {
  requestToGetPickLocation,
  failedToGetPickLocation,
  responseToGetPickLocation,
  failedToGetDropLocation,
  requestToGetDropLocation,
  utilsReset,
  responseToGetDropLocation,
  utilsPickUpReset,
utilsDropReset
} = UtilsSlice.actions;
