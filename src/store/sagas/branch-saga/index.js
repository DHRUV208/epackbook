import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveBranch,
  requestToSaveBranch,
  responseToSaveBranch,
  requestToGetAllBranch,
  responseToGetAllBranch,
  failedToGetAllBranch,
  failedToGetBranchById,
  responseToGetBranchById,
  requestToGetBranchById,
  requestToUpdateBranch,
  responseToUpdateBranch,
  failedToUpdateBranch
} from '../../slices/BranchSlice';
import { addBranch, getBranch, listBranch, updateBranch } from '../../../services/branch';

export function* addBranchSaga(action) {
  try {
    const addBranchResponse = yield addBranch(action?.payload);
    const { status } = addBranchResponse;
    if (status === 200) {
      yield put(responseToSaveBranch());
    } else {
      yield put(failedToSaveBranch());
    }
  } catch (error) {
    yield put(failedToSaveBranch());
  }
}

export function* getAllBranchSaga(action) {
  try {
    const getAllBranchResponse = yield listBranch(action?.payload);
    const { status } = getAllBranchResponse;
    if (status === 200) {
      yield put(responseToGetAllBranch(getAllBranchResponse?.data));
    } else {
      yield put(failedToGetAllBranch());
    }
  } catch (error) {
    yield put(failedToGetAllBranch());
  }
}
export function* getBranchById(action) {
  try {
    const getBranchByIdResponse = yield getBranch(action?.payload);
    const { status } = getBranchByIdResponse;
    if (status === 200) {
      yield put(responseToGetBranchById(getBranchByIdResponse?.data));
    } else {
      yield put(failedToGetBranchById());
    }
  } catch (error) {
    yield put(failedToGetBranchById());
  }
}
export function* updateBranchSaga(action) {
  try {
    const updateBranchResponse = yield updateBranch(action?.payload);
    const { status } = updateBranchResponse;
    if (status === 200) {
      yield put(responseToUpdateBranch(action?.payload));
    } else {
      yield put(failedToUpdateBranch());
    }
  } catch (error) {
    yield put(failedToUpdateBranch());
  }
}

export function* watcherAddBranchSaga() {
  yield takeLatest(requestToSaveBranch.type, addBranchSaga);
}
export function* watcherGetAllBranchSaga() {
  yield takeLatest(requestToGetAllBranch.type, getAllBranchSaga);
}
export function* watcherGetBranchByIdSaga() {
  yield takeLatest(requestToGetBranchById.type, getBranchById);
}
export function* watcherUpdateBranchSaga() {
  yield takeLatest(requestToUpdateBranch.type, updateBranchSaga);
}
