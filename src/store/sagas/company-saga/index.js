import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToAddNewCompany,
  failedToGetCompanyDetails,
  requestToAddNewCompany,
  requestToGetCompanyDetails,
  responseToAddNewCompany,
  updateCompanyDetails,
  requestToUpdateCompany,
  responseToUpdateCompany,
  failedToUpdateCompany,

} from '../../slices/CompanyRegistrationSlice';
import { addNewCompanyService, getCompanyDetailService, updateCompanyService } from '../../../services/company';

export function* addCompanySaga(action) {
  try {
    const addCompanyResponse = yield addNewCompanyService(action.payload);
    const { status } = addCompanyResponse;
    if (status === 200) {
      yield put(responseToAddNewCompany());
      yield put(updateCompanyDetails(addCompanyResponse?.data));
    } else {
      yield put(failedToAddNewCompany());
    }
  } catch (error) {
    yield put(failedToAddNewCompany());
  }
}
export function* getCompanyDetailSaga(action) {
  try {
    const getResponse = yield getCompanyDetailService(action?.payload);
    const { status } = getResponse;
    if (status === 200) {
      yield put(updateCompanyDetails(getResponse?.data));
    } else {
      yield put(failedToGetCompanyDetails());
    }
  } catch (error) {
    yield put(failedToGetCompanyDetails());
  }
}

export function* updateCompanySaga(action) {
  try {
    const updateCompanyResponse = yield updateCompanyService(action?.payload);
    const { status } = updateCompanyResponse;
    if (status === 200) {
      yield put(responseToUpdateCompany(action?.payload));
    } else {
      yield put(failedToUpdateCompany());
    }
  } catch (error) {
    yield put(failedToUpdateCompany());
  }
}

export function* watcherAddCompanySaga() {
  yield takeLatest(requestToAddNewCompany.type, addCompanySaga);
}
export function* watcherGetCompanyDetailSaga() {
  yield takeLatest(requestToGetCompanyDetails.type, getCompanyDetailSaga);
}
export function* watcherUpdateCompanyDetailSaga() {
  yield takeLatest(requestToUpdateCompany.type, updateCompanySaga);
}
