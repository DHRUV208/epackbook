import ApiFunction from '../APIFunction';
import { ADD_BANK, LIST_BANK, ADD_ACCOUNTS, LIST_ACCOUNTS } from './constants';

export const addBank = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_BANK);
};
export const listBank = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_BANK}` );
};
export const addAccounts = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ACCOUNTS);
};
export const listAccounts = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_ACCOUNTS}/${params}`);
};

