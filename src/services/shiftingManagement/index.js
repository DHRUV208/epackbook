import ApiFunction from '../APIFunction';
import {
  ADD_FLOOR,
  DELETE_FLOOR,
  LIST_FLOOR,
  ADD_INSURANCEPERCENTAGE,
  DELETE_INSURANCEPERCENTAGE,
  LIST_INSURANCEPERCENTAGE,
  ADD_MATERIAL,
  DELETE_MATERIAL,
  LIST_MATERIAL,
  ADD_MOVINGMODE,
  DELETE_MOVINGMODE,
  LIST_MOVINGMODE,
  ADD_MOVINGTYPE,
  DELETE_MOVINGTYPE,
  LIST_MOVINGTYPE,
  ADD_PACKINGTYPE,
  DELETE_PACKINGTYPE,
  LIST_PACKINGTYPE,
  ADD_SHIFTINGLUGGAGE,
  DELETE_SHIFTINGLUGGAGE,
  LIST_SHIFTINGLUGGAGE,
  ADD_TRANSITINSURANCE,
  DELETE_TRANSITINSURANCE,
  LIST_TRANSITINSURANCE
} from './constants';

export const addFloor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FLOOR);
};
export const deleteFloor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_FLOOR}/${params}`);
};
export const listFloor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FLOOR}`);
};
export const addInsurancePercentage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_INSURANCEPERCENTAGE);
};
export const deleteInsurancePercentage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_INSURANCEPERCENTAGE}/${params}`);
};
export const listInsurancePercentage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_INSURANCEPERCENTAGE}`);
};
export const addMaterial = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MATERIAL);
};
export const deleteMaterial = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_MATERIAL}/${params}`);
};
export const listMaterial = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_MATERIAL}`);
};
export const addMovingMode = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MOVINGMODE);
};
export const deleteMovingMode = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_MOVINGMODE}/${params}`);
};
export const listMovingMode = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_MOVINGMODE}`);
};
export const addMovingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MOVINGTYPE);
};
export const deleteMovingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_MOVINGTYPE}/${params}`);
};
export const listMovingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_MOVINGTYPE}`);
};
export const addPackingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_PACKINGTYPE);
};
export const deletePackingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_PACKINGTYPE}/${params}`);
};
export const listPackingType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_PACKINGTYPE}`);
};
export const addShiftingLuggage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SHIFTINGLUGGAGE);
};
export const deleteShiftingLuggage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_SHIFTINGLUGGAGE}/${params}`);
};
export const listShiftingLuggage = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_SHIFTINGLUGGAGE}`);
};
export const addTransitInsurance = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_TRANSITINSURANCE);
};
export const deleteTransitInsurance = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_TRANSITINSURANCE}/${params}`);
};
export const listTransitInsurance = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_TRANSITINSURANCE}`);
};
