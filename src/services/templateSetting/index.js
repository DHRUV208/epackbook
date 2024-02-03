import ApiFunction from '../APIFunction';
import { ADD_TEMPLATE, LIST_TEMPLATE } from './constants';

export const addTemplate = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_TEMPLATE);
};

export const listTemplate = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_TEMPLATE}`);
};
