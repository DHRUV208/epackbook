import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveCarCondition,
  requestToSaveCarCondition,
  responseToSaveCarCondition,
  requestToGetAllCarCondition,
  responseToGetAllCarCondition,
  failedToGetAllCarCondition
} from '../../slices/CarConditionSlice';
import { addCarCondition, listCarCondition } from '../../../services/carCondition';

export function* addCarConditionSaga(action) {
  try {
    const addCarConditionResponse = yield addCarCondition(action?.payload);
    const { status } = addCarConditionResponse;
    if (status === 200) {
      yield put(responseToSaveCarCondition());
    } else {
      yield put(failedToSaveCarCondition());
    }
  } catch (error) {
    yield put(failedToSaveCarCondition());
  }
}
export function* getAllCarConditionSaga(action) {
  try {
    const getAllCarConditionResponse = yield listCarCondition(action?.payload);
    const { status } = getAllCarConditionResponse;
    if (status === 200) {
      yield put(responseToGetAllCarCondition(getAllCarConditionResponse?.data));
    } else {
      yield put(failedToGetAllCarCondition());
    }
  } catch (error) {
    yield put(failedToGetAllCarCondition());
  }
}
export function* watcherAddCarConditionSaga() {
  yield takeLatest(requestToSaveCarCondition.type, addCarConditionSaga);
}
export function* watcherGetAllCarConditionSaga() {
  yield takeLatest(requestToGetAllCarCondition.type, getAllCarConditionSaga);
}
