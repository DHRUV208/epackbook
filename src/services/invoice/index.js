import ApiFunction from '../APIFunction';
import { ADD_INVOICE, LIST_INVOICE } from './constants';

export const addInvoice = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_INVOICE);
};
export const listInvoice = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_INVOICE}/${params}`);
};
