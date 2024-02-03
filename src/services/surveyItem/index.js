import ApiFunction from '../APIFunction';
import { ADD_SURVEYITEM, LIST_SURVEYITEM } from './constants';

export const addSurveyItem = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SURVEYITEM);
};

export const listSurveyItem = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params,LIST_SURVEYITEM);
};
