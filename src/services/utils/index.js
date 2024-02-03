import axios from 'axios';
import { POST_PINCODE_API } from './constants';

export const getLocation = async (pincode) => {
  return await axios.get(`${POST_PINCODE_API}${pincode}`);
};
