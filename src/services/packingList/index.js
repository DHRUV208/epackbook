import ApiFunction from '../APIFunction';
import { ADD_PACKING_LIST,  LIST_PACKING_LIST } from './constants';

export const addPackingList = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PACKING_LIST);
};
export const listPackingList = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params,LIST_PACKING_LIST);
};
