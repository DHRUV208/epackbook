import ApiFunction from '../APIFunction';
import { ADD_EMPLOYEEENROLL, LIST_EMPLOYEEENROLL } from './constants';

export const addEmployeeEnroll = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_EMPLOYEEENROLL);
};
export const listEmployeeEnroll = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_EMPLOYEEENROLL}/${params}`);
};
