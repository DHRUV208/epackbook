import { put, takeLatest } from 'redux-saga/effects';
import { getLocation } from '../../../services/utils';
import {
  failedToGetDropLocation,
  failedToGetPickLocation,
  requestToGetDropLocation,
  requestToGetPickLocation,
  responseToGetDropLocation,
  responseToGetPickLocation
} from '../../slices/UtilsSlice';
import { getAllUnique } from '../../../utils';
export function* getPickupLocationSaga(action) {
  try {
    const response = yield getLocation(action?.payload);
    const { status } = response;
    let state = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.State, value: (item?.State).toUpperCase() };
    });
    state = getAllUnique(state);
    let locality = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.Name, value: (item?.Name).toUpperCase() };
    });
    locality = getAllUnique(locality);
    let city = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.District, value: (item?.District).toUpperCase() };
    });
    city = getAllUnique(city);

    if (status === 200) {
      yield put(
        responseToGetPickLocation({
          state,
          city,
          locality
        })
      );
    } else {
      yield put(failedToGetPickLocation());
    }
  } catch (error) {
    yield put(failedToGetPickLocation());
  }
}
export function* watcherGetPickupLocationSaga() {
  yield takeLatest(requestToGetPickLocation.type, getPickupLocationSaga);
}
export function* getDropLocationSaga(action) {
  try {
    const response = yield getLocation(action?.payload);
    const { status } = response;
    let state = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.State, value: (item?.State).toUpperCase() };
    });
    state = getAllUnique(state);
    let locality = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.Name, value: (item?.Name).toUpperCase() };
    });
    locality = getAllUnique(locality);
    let city = response?.data[0]?.PostOffice?.map((item) => {
      return { label: item?.District, value: (item?.District).toUpperCase() };
    });
    city = getAllUnique(city);

    if (status === 200) {
      yield put(
        responseToGetDropLocation({
          state,
          city,
          locality
        })
      );
    } else {
      yield put(failedToGetDropLocation());
    }
  } catch (error) {
    yield put(failedToGetDropLocation());
  }
}
export function* watcherGetDropLocationSaga() {
  yield takeLatest(requestToGetDropLocation.type, getDropLocationSaga);
}
