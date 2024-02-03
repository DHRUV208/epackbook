import ApiFunction from '../APIFunction';
import { LOGIN_TO_APP, VERIFY_OTP_TO_APP, GET_ROLE_BY_AUTH_ID } from './constants';

export const loginService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, LOGIN_TO_APP);
};
export const verifyOTPService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, VERIFY_OTP_TO_APP);
};
export const getRoleByAuthId = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_ROLE_BY_AUTH_ID}/${params}`);
};
