import ApiFunction from '../APIFunction';
import { ADD_BILTY, LIST_BILTY } from './constants';

export const addBilty = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_BILTY);
};
export const listBilty = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_BILTY}/${params}`);
};
