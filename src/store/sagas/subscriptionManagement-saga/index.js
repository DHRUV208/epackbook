import { takeLatest,put } from "redux-saga/effects";
import { failedToSave, requestToSave, responseToSave } from "../../slices/SubscriptionPlanSlice";
import { addSubscriptionPlan } from "../../../services/subscriptionManagement";

export function* addSubscriptionPlanSaga(action){
    try{
        const addSubscriptionPlanResponse = yield addSubscriptionPlan(action?.payload);
    const {status} = addSubscriptionPlanResponse;
    if(status === 200) {
        put(responseToSave())
    }
    else {
        put(failedToSave())
    }
    }
    catch(error) {
        put(failedToSave())
    }
}
export function* watcherAddSubscriptionPlanSaga() {
    yield takeLatest(requestToSave, addSubscriptionPlanSaga);
  }