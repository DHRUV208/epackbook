import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveFollowUps,
  requestToSaveFollowUps,
  responseToSaveFollowUps,
  requestToGetAllFollowUps,
  responseToGetAllFollowUps,
  failedToGetAllFollowUps
} from '../../slices/FollowUpsSlice';
import { addFollowUps, listFollowUps } from '../../../services/followUps';

export function* addFollowUpsSaga(action) {
  try {
    const addFollowUpsResponse = yield addFollowUps(action?.payload);
    const { status } = addFollowUpsResponse;
    if (status === 200) {
      yield put(responseToSaveFollowUps());
    } else {
      yield put(failedToSaveFollowUps());
    }
  } catch (error) {
    yield put(failedToSaveFollowUps());
  }
}
export function* watcherAddFollowUpsSaga() {
  yield takeLatest(requestToSaveFollowUps.type, addFollowUpsSaga);
}
export function* getAllFollowUpsSaga(action) {
  try {
    const getAllFollowUpsResponse = yield listFollowUps(action?.payload);
    const { status } = getAllFollowUpsResponse;
    if (status === 200) {
      yield put(responseToGetAllFollowUps(getAllFollowUpsResponse?.data));
    } else {
      yield put(failedToGetAllFollowUps());
    }
  } catch (error) {
    yield put(failedToGetAllFollowUps());
  }
}
export function* watcherGetAllFollowUpsSaga() {
  yield takeLatest(requestToGetAllFollowUps.type, getAllFollowUpsSaga);
}
