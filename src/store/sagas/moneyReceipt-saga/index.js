import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveMoneyReceipt,
  requestToSaveMoneyReceipt,
  responseToSaveMoneyReceipt,
  failedToGetAllMoneyReceipt,
  requestToGetAllMoneyReceipt,
  responseToGetAllMoneyReceipt
} from '../../slices/MoneyReceiptSlice';
import { addMoneyReceipt, listMoneyReceipt } from '../../../services/MoneyReceipt';

export function* addMoneyReceiptSaga(action) {
  try {
    const addMoneyReceiptResponse = yield addMoneyReceipt(action?.payload);
    const { status } = addMoneyReceiptResponse;
    if (status === 200) {
      yield put(responseToSaveMoneyReceipt());
    } else {
      yield put(failedToSaveMoneyReceipt());
    }
  } catch (error) {
    yield put(failedToSaveMoneyReceipt());
  }
}

export function* getAllMoneyReceiptSaga(action) {
  try {
    const getAllMoneyReceiptResponse = yield listMoneyReceipt(action?.payload);
    const { status } = getAllMoneyReceiptResponse;
    if (status === 200) {
      yield put(responseToGetAllMoneyReceipt(getAllMoneyReceiptResponse?.data));
    } else {
      yield put(failedToGetAllMoneyReceipt());
    }
  } catch (error) {
    yield put(failedToGetAllMoneyReceipt());
  }
}

export function* watcherAddMoneyReceiptSaga() {
  yield takeLatest(requestToSaveMoneyReceipt.type, addMoneyReceiptSaga);
}

export function* watcherGetAllMoneyReceiptSaga() {
  yield takeLatest(requestToGetAllMoneyReceipt.type, getAllMoneyReceiptSaga);
}
