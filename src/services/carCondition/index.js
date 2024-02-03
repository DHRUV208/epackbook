import ApiFunction from '../APIFunction';
import { ADD_CARCONDITION, LIST_CARCONDITION } from './constants';

export const addCarCondition = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_CARCONDITION);
};
export const listCarCondition = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_CARCONDITION}/${params}`);
};
