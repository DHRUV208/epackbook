import ApiFunction from '../APIFunction';
import { ADD_ENQUIRY, LIST_ENQUIRY, UPDATE_ENQUIRY, LIST_ENQUIRY_BY_ID, DELETE_ENQUIRY } from './constants';

export const addEnquiry = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ENQUIRY);
};
export const listEnquiry = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_ENQUIRY}/${params}`);
};
export const getEnquiryById = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_ENQUIRY_BY_ID}/${params}`);
};
// export const updateEnquiry = async (params, data) => {
//   const apiFunction = new ApiFunction();
//   return await apiFunction.update(data, `${UPDATE_ENQUIRY}/${params}`);
// };

export const updateEnquiry = async (params, data) => {
  const {enquiryId} = params
  delete params.enquiryId
  const apiFunction = new ApiFunction();
  return await apiFunction.update(data, `${UPDATE_ENQUIRY}/${enquiryId}`);
};

export const DeleteEnquiry = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_ENQUIRY}/${params}`);

};