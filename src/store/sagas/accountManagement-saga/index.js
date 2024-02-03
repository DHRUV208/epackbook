import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveBank,
  requestToSaveBank,
  responseToSaveBank,
  requestToGetAllBank,
  responseToGetAllBank,
  failedToGetAllBank,
  requestToSaveAccounts,
  responseToSaveAccounts,
  failedToSaveAccounts,
  requestToGetAllAccounts,
  responseToGetAllAccounts,
  failedToGetAllAccounts
} from '../../slices/AccountManagementSlice';
import { addBank, listBank, addAccounts, listAccounts } from '../../../services/accountManagement';

///////////////// --ADD-BANK-- ///////////////////////////

export function* addBankSaga(action) {
  try {
    const addBankResponse = yield addBank(action?.payload);
    const { status } = addBankResponse;
    if (status === 200) {
      yield put(responseToSaveBank());
    } else {
      yield put(failedToSaveBank());
    }
  } catch (error) {
    yield put(failedToSaveBank());
  }
}

export function* getAllBankSaga(action) {
  try {
    const getAllBankResponse = yield listBank(action?.payload);
    const { status } = getAllBankResponse;
    if (status === 200) {
      yield put(responseToGetAllBank(getAllBankResponse?.data));
    } else {
      yield put(failedToGetAllBank());
    }
  } catch (error) {
    yield put(failedToGetAllBank());
  }
}


export function* watcherAddBankSaga() {
  yield takeLatest(requestToSaveBank.type, addBankSaga);
}
export function* watcherGetAllBankSaga() {
  yield takeLatest(requestToGetAllBank.type, getAllBankSaga);
}

///////////////// --ADD-ACCOUNTS-- ///////////////////////////

export function* addAccountsSaga(action) {
  try {
    const addAccountsResponse = yield addAccounts(action?.payload);
    const { status } = addAccountsResponse;
    if (status === 200) {
      yield put(responseToSaveAccounts());
    } else {
      yield put(failedToSaveAccounts());
    }
  } catch (error) {
    yield put(failedToSaveAccounts());
  }
}

export function* getAllAccountsSaga(action) {
  try {
    const getAllAccountsResponse = yield listAccounts(action?.payload);
    
    const { status } = getAllAccountsResponse;
    if (status === 200) {
      yield put(responseToGetAllAccounts(getAllAccountsResponse?.data));
    } else {
      yield put(failedToGetAllAccounts());
    }
  } catch (error) {
    yield put(failedToGetAllAccounts());
  }
}
export function* watcherAddAccountsSaga() {
  yield takeLatest(requestToSaveAccounts.type, addAccountsSaga);
}
export function* watcherGetAllAccountsSaga() {
  yield takeLatest(requestToGetAllAccounts.type, getAllAccountsSaga);
}
