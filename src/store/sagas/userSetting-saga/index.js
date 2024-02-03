import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveUserSign,
  failedToSaveUserSign,
  responseToSaveUserSign,
  responseToGetModule,
  failedToGetModule,
  requestToGetModule
} from '../../slices/UserSettingSlice';
import { addUserSign, getAllModules } from '../../../services/userSetting';

export function* addUserSignSaga(action) {
  try {
    const addUserSignResponse = yield addUserSign(action?.payload);
    const { status } = addUserSignResponse;
    if (status === 200) {
      yield put(responseToSaveUserSign());
    } else {
      yield put(failedToSaveUserSign());
    }
  } catch (error) {
    yield put(failedToSaveUserSign());
  }
}
export function* watcherAddUserSignSaga() {
  yield takeLatest(requestToSaveUserSign.type, addUserSignSaga);
}

export function* getAllModulesSaga(action) {
  try {
    const getAllModulesResponse = yield getAllModules(action?.payload);
    const { status } = getAllModulesResponse;
    if (status === 200) {
      yield put(responseToGetModule(getAllModulesResponse?.data));
    } else {
      yield put(failedToGetModule());
    }
  } catch (error) {
    yield put(failedToGetModule());
  }
}

export function* watcherGetAllModulesSaga() {
  yield takeLatest(requestToGetModule.type, getAllModulesSaga);
}