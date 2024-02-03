import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveFloor,
  responseToSaveFloor,
  failedToSaveFloor,
  requestToGetAllFloor,
  responseToGetAllFloor,
  failedToGetAllFloor,
  requestToDeleteFloor,
  responseToDeleteFloor,
  failedToDeleteFloor,

  requestToSaveInsurancePercentage,
  responseToSaveInsurancePercentage,
  failedToSaveInsurancePercentage,
  requestToGetAllInsurancePercentage,
  responseToGetAllInsurancePercentage,
  failedToGetAllInsurancePercentage,
  requestToDeleteInsurancePercentage,
  responseToDeleteInsurancePercentage,
  failedToDeleteInsurancePercentage,


  requestToSaveMaterial,
  responseToSaveMaterial,
  failedToSaveMaterial,
  requestToGetAllMaterial,
  responseToGetAllMaterial,
  failedToGetAllMaterial,
  requestToDeleteMaterial,
  responseToDeleteMaterial,
  failedToDeleteMaterial,


  requestToSaveMovingMode,
  responseToSaveMovingMode,
  failedToSaveMovingMode,
  requestToGetAllMovingMode,
  responseToGetAllMovingMode,
  failedToGetAllMovingMode,
  requestToDeleteMovingMode,
  responseToDeleteMovingMode,
  failedToDeleteMovingMode,


  requestToSaveMovingType,
  responseToSaveMovingType,
  failedToSaveMovingType,
  requestToGetAllMovingType,
  responseToGetAllMovingType,
  failedToGetAllMovingType,
  requestToDeleteMovingType,
  responseToDeleteMovingType,
  failedToDeleteMovingType,


  requestToSavePackingType,
  responseToSavePackingType,
  failedToSavePackingType,
  requestToGetAllPackingType,
  responseToGetAllPackingType,
  failedToGetAllPackingType,
  requestToDeletePackingType,
  responseToDeletePackingType,
  failedToDeletePackingType,


  requestToSaveShiftingLuggage,
  responseToSaveShiftingLuggage,
  failedToSaveShiftingLuggage,
  requestToGetAllShiftingLuggage,
  responseToGetAllShiftingLuggage,
  failedToGetAllShiftingLuggage,
  requestToDeleteShiftingLuggage,
  responseToDeleteShiftingLuggage,
  failedToDeleteShiftingLuggage,


  requestToSaveTransitInsurance,
  responseToSaveTransitInsurance,
  failedToSaveTransitInsurance,
  requestToGetAllTransitInsurance,
  responseToGetAllTransitInsurance,
  failedToGetAllTransitInsurance,
  requestToDeleteTransitInsurance,
  responseToDeleteTransitInsurance,
  failedToDeleteTransitInsurance,
} from '../../slices/ShiftingManagementSlice';
import {
  addFloor,
  deleteFloor,
  listFloor,
  addInsurancePercentage,
  deleteInsurancePercentage,
  listInsurancePercentage,
  addMaterial,
  deleteMaterial,
  listMaterial,
  addMovingMode,
  deleteMovingMode,
  listMovingMode,
  addMovingType,
  deleteMovingType,
  listMovingType,
  addPackingType,
  deletePackingType,
  listPackingType,
  addShiftingLuggage,
  deleteShiftingLuggage,
  listShiftingLuggage,
  addTransitInsurance,
  deleteTransitInsurance,
  listTransitInsurance
} from '../../../services/shiftingManagement';

///////////////// --ADD-BANK-- ///////////////////////////

export function* addFloorSaga(action) {
  try {
    const addFloorResponse = yield addFloor(action?.payload);
    const { status} = addFloorResponse;
    if (status === 200) {
      yield put(responseToSaveFloor());
    } else {
      yield put(failedToSaveFloor());
    }
  } catch (error) {
    yield put(failedToSaveFloor());
  }
}

export function* deleteFloorSaga(action) {
  try {
    const deleteFloorResponse = yield deleteFloor(action?.payload);
    const { status} = deleteFloorResponse;
    if (status === 200) {
      yield put(responseToDeleteFloor());
    } else {
      yield put(failedToDeleteFloor());
    }
  } catch (error) {
    yield put(failedToDeleteFloor());
  }
}


export function* getAllFloorSaga(action) {
  try {
    const getAllFloorResponse = yield listFloor();
    const { status } = getAllFloorResponse;
    if (status === 200) {
      yield put(responseToGetAllFloor(getAllFloorResponse?.data));
    } else {
      yield put(failedToGetAllFloor());
    }
  } catch (error) {
    yield put(failedToGetAllFloor());
  }
}
export function* watcherAddFloorSaga() {
  yield takeLatest(requestToSaveFloor.type, addFloorSaga);
}
export function* watcherDeleteFloorSaga() {
  yield takeLatest(requestToDeleteFloor.type, deleteFloorSaga);
}
export function* watcherGetAllFloorSaga() {
  yield takeLatest(requestToGetAllFloor.type, getAllFloorSaga);
}

///////////////// --ADD-ACCOUNTS-- ///////////////////////////
export function* addInsurancePercentageSaga(action) {
  try {
    const addInsurancePercentageResponse = yield addInsurancePercentage(action?.payload);
    const { status } = addInsurancePercentageResponse;
    if (status === 200) {
      yield put(responseToSaveInsurancePercentage());
    } else {
      yield put(failedToSaveInsurancePercentage());
    }
  } catch (error) {
    yield put(failedToSaveInsurancePercentage());
  }
}
export function* deleteInsurancePercentageSaga(action) {
  try {
    const deleteInsurancePercentageResponse = yield deleteInsurancePercentage(action?.payload);
    const { status} = deleteInsurancePercentageResponse;
    if (status === 200) {
      yield put(responseToDeleteInsurancePercentage());
    } else {
      yield put(failedToDeleteInsurancePercentage());
    }
  } catch (error) {
    yield put(failedToDeleteInsurancePercentage());
  }
}
export function* getAllInsurancePercentageSaga(action) {
  try {
    const getAllInsurancePercentageResponse = yield listInsurancePercentage();
    const { status } = getAllInsurancePercentageResponse;
    if (status === 200) {
      yield put(responseToGetAllInsurancePercentage(getAllInsurancePercentageResponse?.data));
    } else {
      yield put(failedToGetAllInsurancePercentage());
    }
  } catch (error) {
    yield put(failedToGetAllInsurancePercentage());
  }
}
export function* watcherAddInsurancePercentageSaga() {
  yield takeLatest(requestToSaveInsurancePercentage.type, addInsurancePercentageSaga);
}
export function* watcherDeleteInsurancePercentageSaga() {
  yield takeLatest(requestToDeleteInsurancePercentage.type, deleteInsurancePercentageSaga);
}
export function* watcherGetAllInsurancePercentageSaga() {
  yield takeLatest(requestToGetAllInsurancePercentage.type, getAllInsurancePercentageSaga);
}

export function* addMaterialSaga(action) {
  try {
    const addMaterialResponse = yield addMaterial(action?.payload);
    const { status } = addMaterialResponse;
    if (status === 200) {
      yield put(responseToSaveMaterial());
    } else {
      yield put(failedToSaveMaterial());
    }
  } catch (error) {
    yield put(failedToSaveMaterial());
  }
}
export function* deleteMaterialSaga(action) {
  try {
    const deleteMaterialResponse = yield deleteMaterial(action?.payload);
    const { status} = deleteMaterialResponse;
    if (status === 200) {
      yield put(responseToDeleteMaterial());
    } else {
      yield put(failedToDeleteMaterial());
    }
  } catch (error) {
    yield put(failedToDeleteMaterial());
  }
}
export function* getAllMaterialSaga(action) {
  try {
    const getAllMaterialResponse = yield listMaterial();
    const { status } = getAllMaterialResponse;
    if (status === 200) {
      yield put(responseToGetAllMaterial(getAllMaterialResponse?.data));
    } else {
      yield put(failedToGetAllMaterial());
    }
  } catch (error) {
    yield put(failedToGetAllMaterial());
  }
}
export function* watcherAddMaterialSaga() {
  yield takeLatest(requestToSaveMaterial.type, addMaterialSaga);
}
export function* watcherDeleteMaterialSaga() {
  yield takeLatest(requestToDeleteMaterial.type, deleteMaterialSaga);
}
export function* watcherGetAllMaterialSaga() {
  yield takeLatest(requestToGetAllMaterial.type, getAllMaterialSaga);
}

export function* addMovingModeSaga(action) {
  try {
    const addMovingModeResponse = yield addMovingMode(action?.payload);
    const { status } = addMovingModeResponse;
    if (status === 200) {
      yield put(responseToSaveMovingMode());
    } else {
      yield put(failedToSaveMovingMode());
    }
  } catch (error) {
    yield put(failedToSaveMovingMode());
  }
}
export function* deleteMovingModeSaga(action) {
  try {
    const deleteMovingModeResponse = yield deleteMovingMode(action?.payload);
    const { status} = deleteMovingModeResponse;
    if (status === 200) {
      yield put(responseToDeleteMovingMode());
    } else {
      yield put(failedToDeleteMovingMode());
    }
  } catch (error) {
    yield put(failedToDeleteMovingMode());
  }
}
export function* getAllMovingModeSaga(action) {
  try {
    const getAllMovingModeResponse = yield listMovingMode();
    const { status } = getAllMovingModeResponse;
    if (status === 200) {
      yield put(responseToGetAllMovingMode(getAllMovingModeResponse?.data));
    } else {
      yield put(failedToGetAllMovingMode());
    }
  } catch (error) {
    yield put(failedToGetAllMovingMode());
  }
}
export function* watcherAddMovingModeSaga() {
  yield takeLatest(requestToSaveMovingMode.type, addMovingModeSaga);
}
export function* watcherDeleteMovingModeSaga() {
  yield takeLatest(requestToDeleteMovingMode.type, deleteMovingModeSaga);
}
export function* watcherGetAllMovingModeSaga() {
  yield takeLatest(requestToGetAllMovingMode.type, getAllMovingModeSaga);
}

export function* addMovingTypeSaga(action) {
  try {
    const addMovingTypeResponse = yield addMovingType(action?.payload);
    const { status } = addMovingTypeResponse;
    if (status === 200) {
      yield put(responseToSaveMovingType());
    } else {
      yield put(failedToSaveMovingType());
    }
  } catch (error) {
    yield put(failedToSaveMovingType());
  }
}
export function* deleteMovingTypeSaga(action) {
  try {
    const deleteMovingTypeResponse = yield deleteMovingType(action?.payload);
    const { status} = deleteMovingTypeResponse;
    if (status === 200) {
      yield put(responseToDeleteMovingType());
    } else {
      yield put(failedToDeleteMovingType());
    }
  } catch (error) {
    yield put(failedToDeleteMovingType());
  }
}
export function* getAllMovingTypeSaga(action) {
  try {
    const getAllMovingTypeResponse = yield listMovingType();
    const { status } = getAllMovingTypeResponse;
    if (status === 200) {
      yield put(responseToGetAllMovingType(getAllMovingTypeResponse?.data));
    } else {
      yield put(failedToGetAllMovingType());
    }
  } catch (error) {
    yield put(failedToGetAllMovingType());
  }
}
export function* watcherAddMovingTypeSaga() {
  yield takeLatest(requestToSaveMovingType.type, addMovingTypeSaga);
}
export function* watcherDeleteMovingTypeSaga() {
  yield takeLatest(requestToDeleteMovingType.type, deleteMovingTypeSaga);
}
export function* watcherGetAllMovingTypeSaga() {
  yield takeLatest(requestToGetAllMovingType.type, getAllMovingTypeSaga);
}

export function* addPackingTypeSaga(action) {
  try {
    const addPackingTypeResponse = yield addPackingType(action?.payload);
    const { status } = addPackingTypeResponse;
    if (status === 200) {
      yield put(responseToSavePackingType());
    } else {
      yield put(failedToSavePackingType());
    }
  } catch (error) {
    yield put(failedToSavePackingType());
  }
}
export function* deletePackingTypeSaga(action) {
  try {
    const deletePackingTypeResponse = yield deletePackingType(action?.payload);
    const { status} = deletePackingTypeResponse;
    if (status === 200) {
      yield put(responseToDeletePackingType());
    } else {
      yield put(failedToDeletePackingType());
    }
  } catch (error) {
    yield put(failedToDeletePackingType());
  }
}
export function* getAllPackingTypeSaga(action) {
  try {
    const getAllPackingTypeResponse = yield listPackingType();
    const { status } = getAllPackingTypeResponse;
    if (status === 200) {
      yield put(responseToGetAllPackingType(getAllPackingTypeResponse?.data));
    } else {
      yield put(failedToGetAllPackingType());
    }
  } catch (error) {
    yield put(failedToGetAllPackingType());
  }
}
export function* watcherAddPackingTypeSaga() {
  yield takeLatest(requestToSavePackingType.type, addPackingTypeSaga);
}
export function* watcherDeletePackingTypeSaga() {
  yield takeLatest(requestToDeletePackingType.type, deletePackingTypeSaga);
}
export function* watcherGetAllPackingTypeSaga() {
  yield takeLatest(requestToGetAllPackingType.type, getAllPackingTypeSaga);
}

export function* addShiftingLuggageSaga(action) {
  try {
    const addShiftingLuggageResponse = yield addShiftingLuggage(action?.payload);
    const { status } = addShiftingLuggageResponse;
    if (status === 200) {
      yield put(responseToSaveShiftingLuggage());
    } else {
      yield put(failedToSaveShiftingLuggage());
    }
  } catch (error) {
    yield put(failedToSaveShiftingLuggage());
  }
}
export function* deleteShiftingLuggageSaga(action) {
  try {
    const deleteShiftingLuggageResponse = yield deleteShiftingLuggage(action?.payload);
    const { status} = deleteShiftingLuggageResponse;
    if (status === 200) {
      yield put(responseToDeleteShiftingLuggage());
    } else {
      yield put(failedToDeleteShiftingLuggage());
    }
  } catch (error) {
    yield put(failedToDeleteShiftingLuggage());
  }
}
export function* getAllShiftingLuggageSaga(action) {
  try {
    const getAllShiftingLuggageResponse = yield listShiftingLuggage();
    const { status } = getAllShiftingLuggageResponse;
    if (status === 200) {
      yield put(responseToGetAllShiftingLuggage(getAllShiftingLuggageResponse?.data));
    } else {
      yield put(failedToGetAllShiftingLuggage());
    }
  } catch (error) {
    yield put(failedToGetAllShiftingLuggage());
  }
}
export function* watcherAddShiftingLuggageSaga() {
  yield takeLatest(requestToSaveShiftingLuggage.type, addShiftingLuggageSaga);
}
export function* watcherDeleteShiftingLuggageSaga() {
  yield takeLatest(requestToDeleteShiftingLuggage.type, deleteShiftingLuggageSaga);
}
export function* watcherGetAllShiftingLuggageSaga() {
  yield takeLatest(requestToGetAllShiftingLuggage.type, getAllShiftingLuggageSaga);
}

export function* addTransitInsuranceSaga(action) {
  try {
    const addTransitInsuranceResponse = yield addTransitInsurance(action?.payload);
    const { status } = addTransitInsuranceResponse;
    if (status === 200) {
      yield put(responseToSaveTransitInsurance());
    } else {
      yield put(failedToSaveTransitInsurance());
    }
  } catch (error) {
    yield put(failedToSaveTransitInsurance());
  }
}
export function* deleteTransitInsuranceSaga(action) {
  try {
    const deleteTransitInsuranceResponse = yield deleteTransitInsurance(action?.payload);
    const { status} = deleteTransitInsuranceResponse;
    if (status === 200) {
      yield put(responseToDeleteTransitInsurance());
    } else {
      yield put(failedToDeleteTransitInsurance());
    }
  } catch (error) {
    yield put(failedToDeleteTransitInsurance());
  }
}
export function* getAllTransitInsuranceSaga(action) {
  try {
    const getAllTransitInsuranceResponse = yield listTransitInsurance();
    const { status } = getAllTransitInsuranceResponse;
    if (status === 200) {
      yield put(responseToGetAllTransitInsurance(getAllTransitInsuranceResponse?.data));
    } else {
      yield put(failedToGetAllTransitInsurance());
    }
  } catch (error) {
    yield put(failedToGetAllTransitInsurance());
  }
}
export function* watcherAddTransitInsuranceSaga() {
  yield takeLatest(requestToSaveTransitInsurance.type, addTransitInsuranceSaga);
}
export function* watcherDeleteTransitInsuranceSaga() {
  yield takeLatest(requestToDeleteTransitInsurance.type, deleteTransitInsuranceSaga);
}
export function* watcherGetAllTransitInsuranceSaga() {
  yield takeLatest(requestToGetAllTransitInsurance.type, getAllTransitInsuranceSaga);
}
