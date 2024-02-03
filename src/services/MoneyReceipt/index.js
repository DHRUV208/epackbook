import ApiFunction from '../APIFunction';
import { ADD_MONEYRECEIPT, LIST_MONEYRECEIPT } from './constants';

export const addMoneyReceipt = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MONEYRECEIPT);
};
export const listMoneyReceipt = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_MONEYRECEIPT}/${params}`);
};
