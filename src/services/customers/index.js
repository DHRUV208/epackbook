import ApiFunction from '../APIFunction';
import { CUSTOMER_DETAILS, EDIT_CUSTOMERS, LIST_CUSTOMERS } from './constants';

export const customerDetail = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, CUSTOMER_DETAILS);
};

export const editCustomer = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, EDIT_CUSTOMERS);
};

export const listCustomer = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, LIST_CUSTOMERS);
};
