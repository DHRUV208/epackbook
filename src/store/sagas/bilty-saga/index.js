import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveBilty,
  requestToSaveBilty,
  responseToSaveBilty,
  failedToGetAllBilty,
  requestToGetAllBilty,
  responseToGetAllBilty
} from '../../slices/BiltySlice';
import { addBilty, listBilty } from '../../../services/bilty';
export function* addBiltySaga(action) {
  try {
    const addBiltyResponse = yield addBilty(action?.payload);
    const { status } = addBiltyResponse;
    if (status === 200) {
      yield put(responseToSaveBilty());
    } else {
      yield put(failedToSaveBilty());
    }
  } catch (error) {
    yield put(failedToSaveBilty());
  }
}
export function* getAllBiltySaga(action) {
  try {
    const getAllBiltyResponse = yield listBilty(action?.payload);
    const { status } = getAllBiltyResponse;
    if (status === 200) {
      yield put(responseToGetAllBilty(getAllBiltyResponse?.data));
    } else {
      yield put(failedToGetAllBilty());
    }
  } catch (error) {
    yield put(failedToGetAllBilty());
  }
}
export function* watcherAddBiltySaga() {
  yield takeLatest(requestToSaveBilty.type, addBiltySaga);
}
export function* watcherGetAllBiltySaga() {
  yield takeLatest(requestToGetAllBilty.type, getAllBiltySaga);
}
