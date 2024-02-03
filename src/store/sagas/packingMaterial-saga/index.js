import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSavePackingMaterial,
  responseToSavePackingMaterial,
  failedToSavePackingMaterial,
  requestToGetAllPackingMaterial,
  responseToGetAllPackingMaterial,
  failedToGetAllPackingMaterial
} from '../../slices/MaterialSlice.js';
import { addPackingMaterial, listPackingMaterial } from './../../../services/packingMaterial/index';

export function* addPackingMaterialSaga(action) {
  try {
    const addPackingMaterialResponse = yield addPackingMaterial(action?.payload);
    const { status } = addPackingMaterialResponse;
    if (status === 200) {
      yield put(responseToSavePackingMaterial());
    } else {
      yield put(failedToSavePackingMaterial());
    }
  } catch (error) {
    yield put(failedToSavePackingMaterial());
  }
}

export function* getAllPackingMaterialSaga(action) {
  try {
    const getAllPackingMaterialResponse = yield listPackingMaterial(action?.payload);
    const { status } = getAllPackingMaterialResponse;
    if (status === 200) {
      yield put(responseToGetAllPackingMaterial(getAllPackingMaterialResponse?.data));
    } else {
      yield put(failedToGetAllPackingMaterial());
    }
  } catch (error) {
    yield put(failedToGetAllPackingMaterial());
  }
}

export function* watcherAddPackingMaterialSaga() {
  yield takeLatest(requestToSavePackingMaterial.type, addPackingMaterialSaga);
}

export function* watcherGetAllPackingMaterialSaga() {
  yield takeLatest(requestToGetAllPackingMaterial.type, getAllPackingMaterialSaga);
}
