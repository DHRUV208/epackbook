import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveInvoice,
  requestToSaveInvoice,
  responseToSaveInvoice,
  requestToGetAllInvoice,
  responseToGetAllInvoice,
  failedToGetAllInvoice
} from '../../slices/InvoiceSlice';
import { addInvoice, listInvoice } from '../../../services/invoice';

export function* addInvoiceSaga(action) {
  try {
    const addInvoiceResponse = yield addInvoice(action?.payload);
    const { status } = addInvoiceResponse;
    if (status === 200) {
      yield put(responseToSaveInvoice());
    } else {
      yield put(failedToSaveInvoice());
    }
  } catch (error) {
    yield put(failedToSaveInvoice());
  }
}

export function* getAllInvoiceSaga(action) {
  try {
    const getAllInvoiceResponse = yield listInvoice(action?.payload);
    const { status } = getAllInvoiceResponse;
    if (status === 200) {
      yield put(responseToGetAllInvoice(getAllInvoiceResponse?.data));
    } else {
      yield put(failedToGetAllInvoice());
    }
  } catch (error) {
    yield put(failedToGetAllInvoice());
  }
}
export function* watcherAddInvoiceSaga() {
  yield takeLatest(requestToSaveInvoice.type, addInvoiceSaga);
}
export function* watcherGetAllInvoiceSaga() {
  yield takeLatest(requestToGetAllInvoice.type, getAllInvoiceSaga);
}
