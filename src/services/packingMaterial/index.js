import ApiFunction from '../APIFunction';
import {ADD_PACKING_MATERIAL, LIST_PACKING_MATERIAL } from './constants';

export const addPackingMaterial = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PACKING_MATERIAL);
};
export const listPackingMaterial = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params,LIST_PACKING_MATERIAL);
};
