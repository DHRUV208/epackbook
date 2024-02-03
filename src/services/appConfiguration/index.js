import ApiFunction from '../APIFunction';
import {
  ADD_APPCONFIGURATION,
  LIST_APPCONFIGURATION,
  ADD_PAYMENTTYPES,
  LIST_PAYMENTTYPES,
  ADD_PAYMENTMODES,
  LIST_PAYMENTMODES,
  ADD_UNITTYPES,
  LIST_UNITTYPES,
  DELETE_PAYMENTMODES,
  DELETE_PAYMENTTYPES,
  DELETE_UNITTYPES,
  DELETE_APPCONFIGURATION
} from './constants';

export const addConfiguration = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_APPCONFIGURATION);
};
export const listConfiguration = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_APPCONFIGURATION}/${params}`);
};

export const DeleteConfiguration = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_APPCONFIGURATION}/${params}`);
};


export const addPaymentTypes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PAYMENTTYPES);
};
export const listPaymentTypes = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_PAYMENTTYPES}`);
};

export const DeletePaymentTypes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_PAYMENTTYPES}/${params}`);
};

export const addPaymentModes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PAYMENTMODES);
};
export const listPaymentModes = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_PAYMENTMODES}`);
};
export const DeletePaymentModes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_PAYMENTMODES}/${params}`);
};

export const addUnitTypes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_UNITTYPES);
};
export const listUnitTypes = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_UNITTYPES}`);
};

export const DeleteUnitTypes = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_UNITTYPES}/${params}`);
};
