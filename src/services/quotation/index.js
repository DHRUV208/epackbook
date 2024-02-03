import ApiFunction from '../APIFunction';
import { ADD_QUOTATION, LIST_QUOTATION } from './constants';

export const addQuotation = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_QUOTATION);
};
export const listQuotation = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_QUOTATION}/${params}`);
};
