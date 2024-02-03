import ApiFunction from "../APIFunction";
import { ADD_SUBSCRIPTION_PLAN } from "./constants";

export const addSubscriptionPlan = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_SUBSCRIPTION_PLAN);
};