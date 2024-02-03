import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  password: '',
  mobile: '',
  otp: '',
  loginRequested: false,
  loginError: false,
  verifyOTPRequest: false,
  loginSuccess: {},
  loginOTPResponse: {}
};
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateMobileNumber: (state, action) => {
      return {
        ...state,
        mobile: action?.payload
      };
    },
    updatePassword: (state, action) => {
      return {
        ...state,
        password: action?.payload
      };
    },
    updateEmailId: (state, action) => {
      return {
        ...state,
        email: action?.payload
      };
    },
    updateOTP: (state, action) => {
      return {
        ...state,
        otp: action?.payload
      };
    },
    requestToLogin: (state, action) => {
      state.loginRequested = true;
    },
    requestToVerifyOTP: (state, action) => {
      state.verifyOTPRequest = true;
    },

    errorToLogin: (state, action) => {
      state.loginError = true;
    },
    OTPViaLogin: (state, action) => {
      state.loginOTPResponse = action?.payload;
    },
    successToLogin: (state, action) => {
      state.loginSuccess = action?.payload;
    },
    logout: (state, action) => {
      return {
        ...initialState
      };
    }
  }
});
export default AuthSlice.reducer;
export const {
  logout,
  requestToVerifyOTP,
  errorToLogin,
  requestToLogin,
  successToLogin,
  OTPViaLogin,
  updateMobileNumber,
  updateOTP,
  updateEmailId,
  updatePassword
} = AuthSlice.actions;
