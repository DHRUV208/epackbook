import ApiFunction from '../APIFunction';
import { ADD_ORDER, LIST_ORDER, UPDATE_ORDER, LIST_ORDER_BY_ID } from './constants';

export const addOrder = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ORDER);
};

export const listOrder = async (params) => {
  const apiFunction = new ApiFunction();
  // const {authId, companyId} = params
  return await apiFunction.post(params,LIST_ORDER);
  
  // return await apiFunction.get(`${LIST_ORDER}/${authId}/${companyId}`);
};

export const getOrderById = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_ORDER_BY_ID}/${params}`);
};

export const updateOrder = async (params, data) => {
  const {orderId} = params
  delete params.enquiryId
  const apiFunction = new ApiFunction();
  return await apiFunction.update(data, `${UPDATE_ORDER}/${orderId}`);
};


