import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveEmployeeEnroll,
  responseToSaveEmployeeEnroll,
  failedToSaveEmployeeEnroll,
  requestToGetAllEmployeeEnroll,
  responseToGetAllEmployeeEnroll,
  failedToGetAllEmployeeEnroll
} from '../../slices/RoleManagementSlice';
import { addEmployeeEnroll, listEmployeeEnroll } from '../../../services/roleManagement';

///////////////// --ADD-Role-- ///////////////////////////

export function* addEmployeeEnrollSaga(action) {
  try {
    const addEmployeeEnrollResponse = yield addEmployeeEnroll(action?.payload);
    const { status } = addEmployeeEnrollResponse;
    if (status === 200) {
      yield put(responseToSaveEmployeeEnroll());
    } else {
      yield put(failedToSaveEmployeeEnroll());
    }
  } catch (error) {
    yield put(failedToSaveEmployeeEnroll());
  }
}

export function* getAllEmployeeEnrollSaga(action) {
  try {
    const getAllEmployeeEnrollResponse = yield listEmployeeEnroll(action?.payload);
    console.log('getAllEmployeeEnrollResponse',getAllEmployeeEnrollResponse)
    const { status } = getAllEmployeeEnrollResponse;
    if (status === 200) {
      yield put(responseToGetAllEmployeeEnroll(getAllEmployeeEnrollResponse?.data));
    } else {
      yield put(failedToGetAllEmployeeEnroll());
    }
  } catch (error) {
    yield put(failedToGetAllEmployeeEnroll());
  }
}
export function* watcherAddEmployeeEnrollSaga() {
  yield takeLatest(requestToSaveEmployeeEnroll.type, addEmployeeEnrollSaga);
}
export function* watcherGetAllEmployeeEnrollSaga() {
  yield takeLatest(requestToGetAllEmployeeEnroll.type, getAllEmployeeEnrollSaga);
}
