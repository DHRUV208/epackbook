import ApiFunction from '../APIFunction';
import {
  ADD_VEHICLE,
  LIST_VEHICLE,
  ADD_VEHICLEDRIVER,
  LIST_VEHICLEDRIVER,
  ADD_VEHICLEACCESSORY,
  LIST_VEHICLEACCESSORY,
  ADD_VEHICLECOLOR,
  LIST_VEHICLECOLOR,
  ADD_VEHICLECOMPANY,
  LIST_VEHICLECOMPANY,
  ADD_VEHICLEINSURANCECOMPANY,
  LIST_VEHICLEINSURANCECOMPANY,
  ADD_VEHICLESIZE,
  LIST_VEHICLESIZE,
  ADD_VEHICLETYPE,
  LIST_VEHICLETYPE,
  ADD_VEHICLEMODEL,
  LIST_VEHICLEMODEL,
  DELETE_VEHICLE,
  DELETE_VEHICLE_DRIVER,
  DELETE_VEHICLE_TYPE,
  DELETE_VEHICLE_COMPANY,
  DELETE_VEHICLE_SIZE,
  DELETE_VEHICLE_MODEL,
  DELETE_VEHICLE_ACCESSORY,
  DELETE_VEHICLE_COLOR,
  DELETE_VEHICLE_INSURANCE_COMPANY,
  GET_VEHICLE_DRIVER
} from './constants';

export const addVehicle = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLE);
};

export const listVehicle = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLE}/${params}`);
};

export const DeleteVehicle = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE}/${params}`);

};

export const DeleteVehicleDriver = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_DRIVER}/${params}`);
};
export const addVehicleDriver = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLEDRIVER);
};

export const listVehicleDriver = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLEDRIVER}/${params}`);
};
export const getVehicleDriverById = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${GET_VEHICLE_DRIVER}/${params}`);
};




export const addVehicleAccessory = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLEACCESSORY);
};
export const listVehicleAccessory = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLEACCESSORY}`);
  
 
};
export const DeleteVehicleAccessory = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_ACCESSORY}/${params}`);

};
export const addVehicleColor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLECOLOR);
};
export const listVehicleColor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLECOLOR}`);
};
export const DeleteVehicleColor = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_COLOR}/${params}`);

};

export const addVehicleCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLECOMPANY);
};
export const listVehicleCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLECOMPANY}`);
};
export const DeleteVehicleCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_COMPANY}/${params}`);

};

export const addVehicleInsuranceCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLEINSURANCECOMPANY);
};
export const listVehicleInsuranceCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLEINSURANCECOMPANY}`);
};
export const DeleteVehicleInsuranceCompany = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_INSURANCE_COMPANY}/${params}`);

};

export const addVehicleSize = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLESIZE);
};
export const listVehicleSize = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLESIZE}`);
};
export const DeleteVehicleSize = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_SIZE}/${params}`);

};
export const addVehicleType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLETYPE);
};
export const listVehicleType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLETYPE}`);
};
export const DeleteVehicleType = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_TYPE}/${params}`);

};




export const addVehicleModel = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_VEHICLEMODEL);
};
export const listVehicleModel = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.get(`${LIST_VEHICLEMODEL}`);
};

export const DeleteVehicleModel = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.delete(`${DELETE_VEHICLE_MODEL}/${params}`);

};
