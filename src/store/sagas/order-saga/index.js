import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToListOrder,
  failedToSaveOrder,
  requestToListOrder,
  requestToSaveOrder,
  responseToListOrder,
  responseToSaveOrder,


  requestToUpdateOrder,
  responseToUpdateOrder,
  failedToUpdateOrder,
  responseToGetOrder,
  failedToGetOrder,
  requestToGetOrder
} from '../../slices/OrderSlice';
import { addOrder, getOrderById, listOrder, updateOrder } from '../../../services/order';

export function* addOrderSaga(action) {
  try {
    const addOrderResponse = yield addOrder(action?.payload);
    const { status } = addOrderResponse;
    if (status === 200) {
      yield put(responseToSaveOrder());
    } else {
      yield put(failedToSaveOrder());
    }
  } catch (error) {
    yield put(failedToSaveOrder());
  }
}

export function* listOrderSaga(action) {
  try {
    
    const listOrderResponse = yield listOrder(action?.payload);
  
    const { status } = listOrderResponse;
    if (status === 200) {
      yield put(responseToListOrder(listOrderResponse?.data));
    } else {
      yield put(failedToListOrder());
    }
  } catch (error) {
    yield put(failedToListOrder());
  }
}

export function* updateOrderSaga(action) {
  try {
    const updateOrderResponse = yield updateOrder(action?.payload);
    const { status } = updateOrderResponse;
    if (status === 200) {
      yield put(responseToUpdateOrder(action?.payload));
    } else {
      yield put(failedToUpdateOrder());
    }
  } catch (error) {
    yield put(failedToUpdateOrder());
  }
}

export function* getOrderByIdSaga(action) {
  try {
    const getOrderByIdResponse = yield getOrderById(action?.payload);
    const { status } = getOrderByIdResponse;
    if (status === 200) {
      yield put(responseToGetOrder(getOrderByIdResponse?.data));
    } else {
      yield put(failedToGetOrder());
    }
  } catch (error) {
    yield put(failedToGetOrder());
  }
}


 
export function* watcherAddOrderSaga() {
  yield takeLatest(requestToSaveOrder.type, addOrderSaga);
}

export function* watcherListOrderSaga() {
  yield takeLatest(requestToListOrder.type, listOrderSaga);
}

export function* watcherUpdateOrderSaga() {
  yield takeLatest(requestToUpdateOrder.type, updateOrderSaga);
}

export function* watcherUpdateOrderByIdSaga() {
  yield takeLatest(requestToGetOrder.type, getOrderByIdSaga);
}