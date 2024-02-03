import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveConfiguration,
  responseToSaveConfiguration,
  failedToSaveConfiguration,
  requestToGetAllConfiguration,
  responseToGetAllConfiguration,
  failedToGetAllConfiguration,

  //////////////
  requestToSavePaymentTypes,
  responseToSavePaymentTypes,
  failedToSavePaymentTypes,
  requestToGetAllPaymentTypes,
  responseToGetAllPaymentTypes,
  failedToGetAllPaymentTypes,
  //////////////
  requestToSavePaymentModes,
  responseToSavePaymentModes,
  failedToSavePaymentModes,
  requestToGetAllPaymentModes,
  responseToGetAllPaymentModes,
  failedToGetAllPaymentModes,
  //////////////
  requestToSaveUnitTypes,
  responseToSaveUnitTypes,
  failedToSaveUnitTypes,
  requestToGetAllUnitTypes,
  responseToGetAllUnitTypes,
  failedToGetAllUnitTypes,
  requestDeletePaymentModes,
  responseToDeletePaymentModes,
  failedToDeletePaymentModes,
  responseToDeletePaymentTypes,
  failedToDeletePaymentTypes,
  requestDeletePaymentTypes,
  requestDeleteUnitTypes,
  responseToDeleteUnitTypes,
  failedToDeleteUnitTypes,
  failedToDeleteConfiguration,
  responseToDeleteConfiguration,
  requestDeleteConfiguration
} from '../../slices/AppConfigurationSlice';
import {
  addConfiguration,
  listConfiguration,
  addPaymentTypes,
  listPaymentTypes,
  addPaymentModes,
  listPaymentModes,
  addUnitTypes,
  listUnitTypes,
  DeletePaymentModes,
  DeletePaymentTypes,
  DeleteUnitTypes,
  DeleteConfiguration
} from '../../../services/appConfiguration';

///////////////// --ADD--- ///////////////////////////

export function* addConfigurationSaga(action) {
  try {
    const addConfigurationResponse = yield addConfiguration(action?.payload);
    const { status } = addConfigurationResponse;
    if (status === 200) {
      yield put(responseToSaveConfiguration());
    } else {
      yield put(failedToSaveConfiguration());
    }
  } catch (error) {
    yield put(failedToSaveConfiguration());
  }
}

export function* getAllConfigurationSaga(action) {
  try {
    const getAllConfigurationResponse = yield listConfiguration(action?.payload);
    const { status } = getAllConfigurationResponse;
    if (status === 200) {
      yield put(responseToGetAllConfiguration(getAllConfigurationResponse?.data));
    } else {
      yield put(failedToGetAllConfiguration());
    }
  } catch (error) {
    yield put(failedToGetAllConfiguration());
  }
}


export function* DeleteConfigurationSaga(action) {
  try {
    const DeleteConfigurationResponse = yield DeleteConfiguration(action.payload);
    yield put(responseToDeleteConfiguration());
    const { status } = DeleteConfigurationResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteConfiguration());
    }
  } catch (error) {
    yield put(failedToDeleteConfiguration());
  }
}

export function* watcherAddConfigurationSaga() {
  yield takeLatest(requestToSaveConfiguration.type, addConfigurationSaga);
}
export function* watcherGetAllConfigurationSaga() {
  yield takeLatest(requestToGetAllConfiguration.type, getAllConfigurationSaga);
}
export function* watcherDeleteConfigurationSaga() {
  yield takeLatest(requestDeleteConfiguration.type, DeleteConfigurationSaga);
}

///////////////// --ADD-ACCOUNTS-- ///////////////////////////

export function* addPaymentTypesSaga(action) {
  try {
    const addPaymentTypesResponse = yield addPaymentTypes(action?.payload);
    const { status } = addPaymentTypesResponse;
    if (status === 200) {
      yield put(responseToSavePaymentTypes());
    } else {
      yield put(failedToSavePaymentTypes());
    }
  } catch (error) {
    yield put(failedToSavePaymentTypes());
  }
}
export function* getAllPaymentTypesSaga(action) {
  try {
    const getAllPaymentTypesResponse = yield listPaymentTypes();
    const { status } = getAllPaymentTypesResponse;
    if (status === 200) {
      yield put(responseToGetAllPaymentTypes(getAllPaymentTypesResponse?.data));
    } else {
      yield put(failedToGetAllPaymentTypes());
    }
  } catch (error) {
    yield put(failedToGetAllPaymentTypes());
  }
}
export function* DeletePaymentTypesSaga(action) {
  try {
    const DeletePaymentTypesResponse = yield DeletePaymentTypes(action.payload);
    yield put(responseToDeletePaymentTypes());
    const { status } = DeletePaymentTypesResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeletePaymentTypes());
    }
  } catch (error) {
    yield put(failedToDeletePaymentTypes());
  }
}
export function* watcherAddPaymentTypesSaga() {
  yield takeLatest(requestToSavePaymentTypes.type, addPaymentTypesSaga);
}
export function* watcherGetAllPaymentTypesSaga() {
  yield takeLatest(requestToGetAllPaymentTypes.type, getAllPaymentTypesSaga);
}

export function* watcherDeletePaymentTypesSaga() {
  yield takeLatest(requestDeletePaymentTypes.type, DeletePaymentTypesSaga);
}

export function* addPaymentModesSaga(action) {
  try {
    const addPaymentModesResponse = yield addPaymentModes(action?.payload);
    const { status } = addPaymentModesResponse;
    if (status === 200) {
      yield put(responseToSavePaymentModes());
    } else {
      yield put(failedToSavePaymentModes());
    }
  } catch (error) {
    yield put(failedToSavePaymentModes());
  }
}
export function* getAllPaymentModesSaga(action) {
  try {
    const getAllPaymentModesResponse = yield listPaymentModes();
    const { status } = getAllPaymentModesResponse;
    if (status === 200) {
      yield put(responseToGetAllPaymentModes(getAllPaymentModesResponse?.data));
    } else {
      yield put(failedToGetAllPaymentModes());
    }
  } catch (error) {
    yield put(failedToGetAllPaymentModes());
  }
}

export function* DeletePaymentModesSaga(action) {
  try {
    const DeletePaymentModesResponse = yield DeletePaymentModes(action.payload);
    yield put(responseToDeletePaymentModes());
    const { status } = DeletePaymentModesResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeletePaymentModes());
    }
  } catch (error) {
    yield put(failedToDeletePaymentModes());
  }
}
export function* watcherAddPaymentModesSaga() {
  yield takeLatest(requestToSavePaymentModes.type, addPaymentModesSaga);
}
export function* watcherGetAllPaymentModesSaga() {
  yield takeLatest(requestToGetAllPaymentModes.type, getAllPaymentModesSaga);
}

export function* watcherDeletePaymentModesSaga() {
  yield takeLatest(requestDeletePaymentModes.type, DeletePaymentModesSaga);
}

export function* addUnitTypesSaga(action) {
  try {
    const addUnitTypesResponse = yield addUnitTypes(action?.payload);
    const { status } = addUnitTypesResponse;
    if (status === 200) {
      yield put(responseToSaveUnitTypes());
    } else {
      yield put(failedToSaveUnitTypes());
    }
  } catch (error) {
    yield put(failedToSaveUnitTypes());
  }
}
export function* getAllUnitTypesSaga(action) {
  try {
    const getAllUnitTypesResponse = yield listUnitTypes();
    const { status } = getAllUnitTypesResponse;
    if (status === 200) {
      yield put(responseToGetAllUnitTypes(getAllUnitTypesResponse?.data));
    } else {
      yield put(failedToGetAllUnitTypes());
    }
  } catch (error) {
    yield put(failedToGetAllUnitTypes());
  }
}

export function* DeleteUnitTypesSaga(action) {
  try {
    const DeleteUnitTypesResponse = yield DeleteUnitTypes(action.payload);
    yield put(responseToDeleteUnitTypes());
    const { status } = DeleteUnitTypesResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteUnitTypes());
    }
  } catch (error) {
    yield put(failedToDeleteUnitTypes());
  }
}
export function* watcherAddUnitTypesSaga() {
  yield takeLatest(requestToSaveUnitTypes.type, addUnitTypesSaga);
}
export function* watcherGetAllUnitTypesSaga() {
  yield takeLatest(requestToGetAllUnitTypes.type, getAllUnitTypesSaga);
}

export function* watcherDeleteUnitTypesSaga() {
  yield takeLatest(requestDeleteUnitTypes.type, DeleteUnitTypesSaga);
}


