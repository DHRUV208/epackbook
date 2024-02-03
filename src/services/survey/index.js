import ApiFunction from '../APIFunction';
import { ADD_SURVEY, LIST_SURVEY } from './constants';

export const addSurvey = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SURVEY);
};
export const listSurvey = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_SURVEY}/${params}`);
};
