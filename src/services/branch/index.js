import ApiFunction from '../APIFunction';
import { ADD_BRANCH, GET_BRANCH_BY_ID, LIST_BRANCH,UPDATE_BRANCH } from './constants';

export const addBranch = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_BRANCH);
};
export const listBranch = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_BRANCH}/${params}`);
};
export const getBranch = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_BRANCH_BY_ID}/${params}`);
};

export const updateBranch = async (params) => {
  const {branchId} = params
  
  delete params.branchId
  const apiFunction = new ApiFunction();
  return await apiFunction.update(params,`${UPDATE_BRANCH}/${branchId}`);
};