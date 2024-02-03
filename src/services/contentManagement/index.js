import ApiFunction from '../APIFunction';
import {
  ADD_CONTACTDETAILS,
  LIST_CONTACTDETAILS,
  ADD_REGISTRATIONDETAIL,
  LIST_REGISTRATIONDETAIL,
  ADD_FOOTERCONTENT,
  LIST_FOOTERCONTENT,
  ADD_MODULES,
  LIST_MODULES,
  ADD_SUBMODULES,
  LIST_SUBMODULES,
  ADD_FEATURE,
  LIST_FEATURE,
  
  ADD_ENQUIRYSOURCE,
  LIST_ENQUIRYSOURCE,
  ADD_APPROVALAUTHORITY,
  LIST_APPROVALAUTHORITY,
  UPDATE_SUBMODULES,
  DELETE_CONTACT_DETAIL,
  DELETE_REGISTRATION_DETAIL,
  DELETE_FOOTER_CONTENT
} from './constants';

export const addContactDetails = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_CONTACTDETAILS);
};
export const listContactDetails = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_CONTACTDETAILS}/${params}`);
};
export const DeleteContactDetail = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_CONTACT_DETAIL}/${params}`);

};


export const addRegistrationDetail = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_REGISTRATIONDETAIL);
};
export const listRegistrationDetail = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_REGISTRATIONDETAIL}/${params}`);
};

export const DeleteRegistrationDetail = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_REGISTRATION_DETAIL}/${params}`);

};
export const addFooterContent = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FOOTERCONTENT);
};
export const listFooterContent = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FOOTERCONTENT}`);
};
export const DeleteFooterContent = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_FOOTER_CONTENT}/${params}`);

};
export const addModules = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_MODULES);
};
export const listModules = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_MODULES}`);
};
export const listSubModules = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_SUBMODULES}`);
};
export const addSubModules = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_SUBMODULES);
};
export const updateSubModules = async (params) => {
  const apiFunction = new ApiFunction();
  const {subModuleId} = params
  delete params.subModuleId
  return await apiFunction.update(params, `${UPDATE_SUBMODULES}/${subModuleId}`);
};

export const addFeature = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_FEATURE);
};
export const listFeature = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_FEATURE}`);
};
export const addEnquirySource = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_ENQUIRYSOURCE);
};
export const listEnquirySource = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_ENQUIRYSOURCE}`);
};
export const addApprovalAuthority = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_APPROVALAUTHORITY);
};
export const listApprovalAuthority = async () => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_APPROVALAUTHORITY}`);
};
