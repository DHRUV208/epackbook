import ApiFunction from '../APIFunction';
import { ADD_USERSIGN, GET_ALL_MODULES } from './constants';

export const addUserSign = async (params) => {
  const apiFunction = new ApiFunction();
  return await apiFunction.post(params, ADD_USERSIGN);
};
export const getAllModules = async () =>{
  const apiFunction = new ApiFunction();
  return await apiFunction.get( `${GET_ALL_MODULES}`);
}
