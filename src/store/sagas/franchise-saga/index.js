import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveFranchise,
  requestToSaveFranchise,
  responseToSaveFranchise,
  requestToGetAllFranchise,
  responseToGetAllFranchise,
  failedToGetAllFranchise,
  requestToGetByIdFranchise,
  responseToGetByIdFranchise,
  failedToGetByIdFranchise,
  requestToUpdate,
  responseToUpdate,
  failedToUpdate
} from '../../slices/FranchiseSlice';
import { addFranchise, listFranchise, listFranchiseById, updateFranchise } from '../../../services/franchise';

export function* addFranchiseSaga(action) {
  try {
    const addFranchiseResponse = yield addFranchise(action?.payload);
    const { status } = addFranchiseResponse;
    if (status === 200) {
      yield put(responseToSaveFranchise());
    } else {
      yield put(failedToSaveFranchise());
    }
  } catch (error) {
    yield put(failedToSaveFranchise());
  }
}

export function* getAllFranchiseSaga(action) {
  try {
    const getAllFranchiseResponse = yield listFranchise(action?.payload);
    const { status } = getAllFranchiseResponse;
    if (status === 200) {
      yield put(responseToGetAllFranchise(getAllFranchiseResponse?.data));
    } else {
      yield put(failedToGetAllFranchise());
    }
  } catch (error) {
    yield put(failedToGetAllFranchise());
  }
}
export function* getFranchiseByIdSaga(action) {
  try {
    const getFranchiseByIdResponse = yield listFranchiseById(action?.payload);
    const { status } = getFranchiseByIdResponse;
    if (status === 200) {
      yield put(responseToGetByIdFranchise(getFranchiseByIdResponse?.data));
    } else {
      yield put(failedToGetByIdFranchise());
    }
  } catch (error) {
    yield put(failedToGetByIdFranchise());
  }
}

export function* updateFranchiseSaga(action) {
  try {
    const updateFranchiseResponse = yield updateFranchise(action?.payload);
    const { status } = updateFranchiseResponse;
    if (status === 200) {
      yield put(responseToUpdate(action?.payload));
    } else {
      yield put(failedToUpdate());
    }
  } catch (error) {
    yield put(failedToUpdate());
  }
}

export function* watcherAddFranchiseSaga() {
  yield takeLatest(requestToSaveFranchise.type, addFranchiseSaga);
}

export function* watcherGetAllFranchiseSaga() {
  yield takeLatest(requestToGetAllFranchise.type, getAllFranchiseSaga);
}

export function* watcherGetByIdFranchiseSaga() {
  yield takeLatest(requestToGetByIdFranchise.type, getFranchiseByIdSaga);
}

export function* watcherUpdateFranchiseSaga() {
  yield takeLatest(requestToUpdate.type, updateFranchiseSaga);
}
