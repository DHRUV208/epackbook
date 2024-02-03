import ApiFunction from '../APIFunction';
import { ADD_FRANCHISE, LIST_FRANCHISE,LIST_FRANCHISE_BY_ID, UPDATE_FRANCHISE } from './constants';

export const addFranchise = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FRANCHISE);
};
export const listFranchise = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FRANCHISE}/${params}`);
};

export const listFranchiseById = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FRANCHISE_BY_ID}/${params}`);
};
export const updateFranchise = async (params) => {
  const {franchiseId} = params
  
  delete params.franchiseId
  const apiFunction = new ApiFunction();
  return await apiFunction.update(params,`${UPDATE_FRANCHISE}/${franchiseId}`);
};
