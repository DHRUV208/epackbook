import ApiFunction from '../APIFunction';
import { ADD_FOLLOWUPS, LIST_FOLLOWUPS } from './constants';

export const addFollowUps = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FOLLOWUPS);
};
export const listFollowUps = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FOLLOWUPS}/${params}`);
};
