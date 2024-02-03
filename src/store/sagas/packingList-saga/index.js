import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSavePackingList,
  requestToSavePackingList,
  responseToSavePackingList,
  failedToGetAllPackingList,
  requestToGetAllPackingList,
  responseToGetAllPackingList
} from '../../slices/AddPackingListSlice';
import { addPackingList, listPackingList } from '../../../services/packingList';

export function* addPackingListSaga(action) {
  try {
    const addPackingListResponse = yield addPackingList(action?.payload);
    const { status } = addPackingListResponse;
    if (status === 200) {
      yield put(responseToSavePackingList());
    } else {
      yield put(failedToSavePackingList());
    }
  } catch (error) {
    yield put(failedToSavePackingList());
  }
}

export function* getAllPackingListSaga(action) {
  try {
    const getAllPackingListResponse = yield listPackingList(action?.payload);
    const { status } = getAllPackingListResponse;
    if (status === 200) {
      yield put(responseToGetAllPackingList(getAllPackingListResponse?.data));
    } else {
      yield put(failedToGetAllPackingList());
    }
  } catch (error) {
    yield put(failedToGetAllPackingList());
  }
}

export function* watcherAddPackingListSaga() {
  yield takeLatest(requestToSavePackingList.type, addPackingListSaga);
}

export function* watcherGetAllPackingListSaga() {
  yield takeLatest(requestToGetAllPackingList.type, getAllPackingListSaga);
}
