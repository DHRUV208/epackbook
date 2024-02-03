import ApiFunction from '../APIFunction';
import { ADD_COMPANY, GET_COMPANY_BY_AUTH_ID, GET_COMPANY_BY_COMPANY_ID,UPDATE_COMPANY } from './constants';
export const getCompanyByAuthId = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(GET_COMPANY_BY_AUTH_ID + params);
};
export const addNewCompanyService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_COMPANY);
};
export const getCompanyDetailService = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_COMPANY_BY_COMPANY_ID}${params}`);
};

export const updateCompanyService = async (params) => {
  // const {companyId} = params
  // delete params.companyId;
  const apiFunction = new ApiFunction();
  return await apiFunction.update(params,`${UPDATE_COMPANY}`);
};
