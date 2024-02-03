import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveQuotation,
  requestToSaveQuotation,
  responseToSaveQuotation,
  requestToGetAllQuotation,
  responseToGetAllQuotation,
  failedToGetAllQuotation
} from '../../slices/QuotationSlice';
import { addQuotation, listQuotation } from '../../../services/quotation';

export function* addQuotationSaga(action) {
  try {
    const addQuotationResponse = yield addQuotation(action?.payload);
    const { status } = addQuotationResponse;
    if (status === 200) {
      yield put(responseToSaveQuotation());
    } else {
      yield put(failedToSaveQuotation());
    }
  } catch (error) {
    yield put(failedToSaveQuotation());
  }
}
export function* watcherAddQuotationSaga() {
  yield takeLatest(requestToSaveQuotation.type, addQuotationSaga);
}

export function* getAllQuotationSaga(action) {
  try {
    const getAllQuotationResponse = yield listQuotation(action?.payload);
    const { status } = getAllQuotationResponse;
    if (status === 200) {
      yield put(responseToGetAllQuotation(getAllQuotationResponse?.data));
    } else {
      yield put(failedToGetAllQuotation());
    }
  } catch (error) {
    yield put(failedToGetAllQuotation());
  }
}
export function* watcherGetAllQuotationSaga() {
  yield takeLatest(requestToGetAllQuotation.type, getAllQuotationSaga);
}
