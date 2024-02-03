import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveVehicle,
  responseToSaveVehicle,
  failedToSaveVehicle,
  requestToGetAllVehicle,
  responseToGetAllVehicle,
  failedToGetAllVehicle,
  requestToSaveVehicleDriver,
  responseToSaveVehicleDriver,
  failedToSaveVehicleDriver,
  requestToGetAllVehicleDriver,
  responseToGetAllVehicleDriver,
  failedToGetAllVehicleDriver,

  requestToGetVehicleDriverById,
  responseToGetVehicleDriverById,
  failedToGetVehicleDriverById,


  requestToSaveVehicleAccessory,
  responseToSaveVehicleAccessory,
  failedToSaveVehicleAccessory,
  requestToGetAllVehicleAccessory,
  responseToGetAllVehicleAccessory,
  failedToGetAllVehicleAccessory,
  requestToSaveVehicleColor,
  responseToSaveVehicleColor,
  failedToSaveVehicleColor,
  requestToGetAllVehicleColor,
  responseToGetAllVehicleColor,
  failedToGetAllVehicleColor,
  requestToSaveVehicleCompany,
  responseToSaveVehicleCompany,
  failedToSaveVehicleCompany,
  requestToGetAllVehicleCompany,
  responseToGetAllVehicleCompany,
  failedToGetAllVehicleCompany,
  requestToSaveVehicleInsuranceCompany,
  responseToSaveVehicleInsuranceCompany,
  failedToSaveVehicleInsuranceCompany,
  requestToGetAllVehicleInsuranceCompany,
  responseToGetAllVehicleInsuranceCompany,
  failedToGetAllVehicleInsuranceCompany,
  requestToSaveVehicleSize,
  responseToSaveVehicleSize,
  failedToSaveVehicleSize,
  requestToGetAllVehicleSize,
  responseToGetAllVehicleSize,
  failedToGetAllVehicleSize,
  requestToSaveVehicleType,
  responseToSaveVehicleType,
  failedToSaveVehicleType,
  requestToGetAllVehicleType,
  responseToGetAllVehicleType,
  failedToGetAllVehicleType,
  requestToSaveVehicleModel,
  responseToSaveVehicleModel,
  failedToSaveVehicleModel,
  requestToGetAllVehicleModel,
  responseToGetAllVehicleModel,
  failedToGetAllVehicleModel,
  responseToDeleteVehicle,
  failedToDeleteVehicle,
  requestDeleteVehicle,
  responseToDeleteVehicleDriver,
  failedToDeleteVehicleDriver,
  requestDeleteVehicleDriver,
  failedToDeleteVehicleType,
  requestDeleteVehicleType,
  requestDeleteVehicleCompany,
  requestDeleteVehicleSize,
  responseToDeleteVehicleModel,
  requestDeleteVehicleModel,
  responseToDeleteVehicleAccessory,
  requestDeleteVehicleAccessory,
  responseToDeleteVehicleColor,
  requestDeleteVehicleColor,
  requestDeleteVehicleInsuranceCompany
} from '../../slices/VehicleManagementSlice';
import {
  addVehicle,
  listVehicle,
  addVehicleDriver,
  addVehicleAccessory,
  listVehicleAccessory,
  addVehicleColor,
  listVehicleColor,
  addVehicleCompany,
  listVehicleCompany,
  addVehicleInsuranceCompany,
  listVehicleInsuranceCompany,
  addVehicleSize,
  listVehicleSize,
  addVehicleType,
  listVehicleType,
  addVehicleModel,
  listVehicleModel,
  listVehicleDriver,

  getVehicleDriverById,

  DeleteVehicle,
  DeleteVehicleDriver,
  DeleteVehicleType,
  DeleteVehicleCompany,
  DeleteVehicleSize,
  DeleteVehicleModel,
  DeleteVehicleAccessory,
  DeleteVehicleColor,
  DeleteVehicleInsuranceCompany
} from '../../../services/vehicleManagement';

///////////////// --ADD-VehicleDriver-- ///////////////////////////

export function* addVehicleDriverSaga(action) {
  try {
    const addVehicleDriverResponse = yield addVehicleDriver(action?.payload);
    const { status } = addVehicleDriverResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleDriver());
    } else {
      yield put(failedToSaveVehicleDriver());
    }
  } catch (error) {
    yield put(failedToSaveVehicleDriver());
  }
}
export function* DeleteVehicleDriverSaga(action) {
  try {
    const DeleteVehicleDriverResponse = yield DeleteVehicleDriver(action.payload);
    yield put(responseToDeleteVehicleDriver());
    const { status } = DeleteVehicleDriverResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicleDriver());
    }
  } catch (error) {
    yield put(failedToDeleteVehicleDriver());
  }
}


export function* getAllVehicleDriverSaga(action) {
  try {
    const getAllVehicleDriverResponse = yield listVehicleDriver(action?.payload);
    const { status } = getAllVehicleDriverResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleDriver(getAllVehicleDriverResponse?.data));
    } else {
      yield put(failedToGetAllVehicleDriver());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleDriver());
  }
}
export function* getVehicleDriverByIdSaga(action) {
  try {
    const getVehicleDriverByIdResponse = yield getVehicleDriverById(action?.payload);
    const { status } = getVehicleDriverByIdResponse;
    if (status === 200) {
      yield put(responseToGetVehicleDriverById(getVehicleDriverByIdResponse?.data));
    } else {
      yield put(failedToGetVehicleDriverById());
    }
  } catch (error) {
    yield put(failedToGetVehicleDriverById());
  }
}
export function* watcherAddVehicleDriverSaga() {
  yield takeLatest(requestToSaveVehicleDriver.type, addVehicleDriverSaga);
}
export function* watcherGetAllVehicleDriverSaga() {
  yield takeLatest(requestToGetAllVehicleDriver.type, getAllVehicleDriverSaga);
}
export function* watcherDeleteVehicleDriverSaga() {
  yield takeLatest(requestDeleteVehicleDriver.type, DeleteVehicleDriverSaga);
}
export function* watcherGetVehicleDriverByIdSaga() {
  yield takeLatest(requestToGetVehicleDriverById.type, getVehicleDriverByIdSaga);
}


///////////////// --ADD-Vehicle-Accessory- ///////////////////////////

export function* addVehicleAccessorySaga(action) {
  try {
    const addVehicleAccessoryResponse = yield addVehicleAccessory(action?.payload);
    const { status } = addVehicleAccessoryResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleAccessory());
    } else {
      yield put(failedToSaveVehicleAccessory());
    }
  } catch (error) {
    yield put(failedToSaveVehicleAccessory());
  }
}

export function* getAllVehicleAccessorySaga() {
  try {
    const getAllVehicleAccessoryResponse = yield listVehicleAccessory();
    const { status } = getAllVehicleAccessoryResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleAccessory(getAllVehicleAccessoryResponse?.data));
    } else {
      yield put(failedToGetAllVehicleAccessory());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleAccessory());
  }
}

export function* DeleteVehicleAccessorySaga(action) {
  try {
    const DeleteVehicleCompanyResponse = yield DeleteVehicleAccessory(action.payload);
    yield put(responseToDeleteVehicleAccessory());
    const { status } = DeleteVehicleCompanyResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}
export function* watcherAddVehicleAccessorySaga() {
  yield takeLatest(requestToSaveVehicleAccessory.type, addVehicleAccessorySaga);
}
export function* watcherGetAllVehicleAccessorySaga() {
  yield takeLatest(requestToGetAllVehicleAccessory.type, getAllVehicleAccessorySaga);
}
export function* watcherDeleteVehicleAccessorySaga() {
  yield takeLatest(requestDeleteVehicleAccessory.type, DeleteVehicleAccessorySaga);
}

/////////////////////////////////////

export function* addVehicleColorSaga(action) {
  try {
    const addVehicleColorResponse = yield addVehicleColor(action?.payload);
    const { status } = addVehicleColorResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleColor());
    } else {
      yield put(failedToSaveVehicleColor());
    }
  } catch (error) {
    yield put(failedToSaveVehicleColor());
  }
}





export function* getAllVehicleColorSaga() {
  try {
    const getAllVehicleColorResponse = yield listVehicleColor();
    const { status } = getAllVehicleColorResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleColor(getAllVehicleColorResponse?.data));
    } else {
      yield put(failedToGetAllVehicleColor());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleColor());
  }
}
export function* DeleteVehicleColorSaga(action) {
  try {
    const DeleteVehicleColorResponse = yield DeleteVehicleColor(action.payload);
    yield put(responseToDeleteVehicleColor());
    const { status } = DeleteVehicleColorResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}



export function* watcherAddVehicleColorSaga() {
  yield takeLatest(requestToSaveVehicleColor.type, addVehicleColorSaga);
}
export function* watcherGetAllVehicleColorSaga() {
  yield takeLatest(requestToGetAllVehicleColor.type, getAllVehicleColorSaga);
}
export function* watcherDeleteVehicleColorSaga() {
  yield takeLatest(requestDeleteVehicleColor.type, DeleteVehicleColorSaga);
}
// Vehicle Company

export function* addVehicleCompanySaga(action) {
  try {
    
    const addVehicleCompanyResponse = yield addVehicleCompany(action?.payload);
    const { status } = addVehicleCompanyResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleCompany());
    } else {
      yield put(failedToSaveVehicleCompany());
    }
  } catch (error) {
    yield put(failedToSaveVehicleCompany());
  }
}

export function* getAllVehicleCompanySaga() {
  try {
    const getAllVehicleCompanyResponse = yield listVehicleCompany();
    const { status } = getAllVehicleCompanyResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleCompany(getAllVehicleCompanyResponse?.data));
    } else {
      yield put(failedToGetAllVehicleCompany());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleCompany());
  }
}

export function* DeleteVehicleCompanySaga(action) {
  try {
    const DeleteVehicleCompanyResponse = yield DeleteVehicleCompany(action.payload);
    yield put(responseToDeleteVehicle());
    const { status } = DeleteVehicleCompanyResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}

export function* watcherAddVehicleCompanySaga() {
  yield takeLatest(requestToSaveVehicleCompany.type, addVehicleCompanySaga);
}
export function* watcherGetAllVehicleCompanySaga() {
  yield takeLatest(requestToGetAllVehicleCompany.type, getAllVehicleCompanySaga);
}

// //////////////////////////////////////////////

export function* addVehicleInsuranceCompanySaga(action) {
  try {
    const addVehicleInsuranceCompanyResponse = yield addVehicleInsuranceCompany(action?.payload);
    const { status } = addVehicleInsuranceCompanyResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleInsuranceCompany());
    } else {
      yield put(failedToSaveVehicleInsuranceCompany());
    }
  } catch (error) {
    yield put(failedToSaveVehicleInsuranceCompany());
  }
}

export function* getAllVehicleInsuranceCompanySaga() {
  try {
    const getAllVehicleInsuranceCompanyResponse = yield listVehicleInsuranceCompany();
    const { status } = getAllVehicleInsuranceCompanyResponse;
    if (status === 200) {
      yield put(
        responseToGetAllVehicleInsuranceCompany(getAllVehicleInsuranceCompanyResponse?.data)
      );
    } else {
      yield put(failedToGetAllVehicleInsuranceCompany());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleInsuranceCompany());
  }
}

export function* DeleteVehicleInsuranceCompanySaga(action) {
  try {
    const DeleteVehicleInsuranceCompanyResponse = yield DeleteVehicleInsuranceCompany(action.payload);
    yield put(responseToDeleteVehicle());
    const { status } = DeleteVehicleInsuranceCompanyResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}
export function* watcherAddVehicleInsuranceCompanySaga() {
  yield takeLatest(requestToSaveVehicleInsuranceCompany.type, addVehicleInsuranceCompanySaga);
}
export function* watcherGetAllVehicleInsuranceCompanySaga() {
  yield takeLatest(requestToGetAllVehicleInsuranceCompany.type, getAllVehicleInsuranceCompanySaga);
}

export function* watcherDeleteVehicleInsuranceCompanySaga() {
  yield takeLatest(requestDeleteVehicleInsuranceCompany.type, DeleteVehicleInsuranceCompanySaga);
}

///////////////////////////////////

export function* addVehicleSizeSaga(action) {
  try {
    const addVehicleSizeResponse = yield addVehicleSize(action?.payload);
    const { status } = addVehicleSizeResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleSize());
    } else {
      yield put(failedToSaveVehicleSize());
    }
  } catch (error) {
    yield put(failedToSaveVehicleSize());
  }
}

export function* getAllVehicleSizeSaga() {
  try {
    const getAllVehicleSizeResponse = yield listVehicleSize();
    const { status } = getAllVehicleSizeResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleSize(getAllVehicleSizeResponse?.data));
    } else {
      yield put(failedToGetAllVehicleSize());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleSize());
  }
}

export function* DeleteVehicleSizeSaga(action) {
  try {
    const DeleteVehicleCompanyResponse = yield DeleteVehicleSize(action.payload);
    yield put(responseToDeleteVehicle());
    const { status } = DeleteVehicleCompanyResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}

export function* watcherAddVehicleSizeSaga() {
  yield takeLatest(requestToSaveVehicleSize.type, addVehicleSizeSaga);
}
export function* watcherGetAllVehicleSizeSaga() {
  yield takeLatest(requestToGetAllVehicleSize.type, getAllVehicleSizeSaga);
}

//////////////////////////////////////////
export function* addVehicleTypeSaga(action) {
  try {
    const addVehicleTypeResponse = yield addVehicleType(action?.payload);
    const { status } = addVehicleTypeResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleType());
    } else {
      yield put(failedToSaveVehicleType());
    }
  } catch (error) {
    yield put(failedToSaveVehicleType());
  }
}

export function* DeleteVehicleTypeSaga(action) {
  try {
    const DeleteVehicleTypeResponse = yield DeleteVehicleType(action.payload);
    yield put(responseToDeleteVehicleDriver());
    const { status } = DeleteVehicleTypeResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicleType());
    }
  } catch (error) {
    yield put(failedToDeleteVehicleType());
  }
}

export function* getAllVehicleTypeSaga() {
  try {
    const getAllVehicleTypeResponse = yield listVehicleType();
    const { status } = getAllVehicleTypeResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleType(getAllVehicleTypeResponse?.data));
    } else {
      yield put(failedToGetAllVehicleType());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleType());
  }
}
export function* watcherAddVehicleTypeSaga() {
  yield takeLatest(requestToSaveVehicleType.type, addVehicleTypeSaga);
}
export function* watcherGetAllVehicleTypeSaga() {
  yield takeLatest(requestToGetAllVehicleType.type, getAllVehicleTypeSaga);
}

// Vehicle model

export function* addVehicleModelSaga(action) {
  try {
    const addVehicleModelResponse = yield addVehicleModel(action?.payload);
    const { status } = addVehicleModelResponse;
    if (status === 200) {
      yield put(responseToSaveVehicleModel());
    } else {
      yield put(failedToSaveVehicleModel());
    }
  } catch (error) {
    yield put(failedToSaveVehicleModel());
  }
}

export function* getAllVehicleModelSaga() {
  try {
    const getAllVehicleModelResponse = yield listVehicleModel();
    const { status } = getAllVehicleModelResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicleModel(getAllVehicleModelResponse?.data));
    } else {
      yield put(failedToGetAllVehicleModel());
    }
  } catch (error) {
    yield put(failedToGetAllVehicleModel());
  }
}

export function* DeleteVehicleModelSaga(action) {
  try {
    const DeleteVehicleModelResponse = yield DeleteVehicleModel(action.payload);
    yield put(responseToDeleteVehicleModel());
    const { status } = DeleteVehicleModelResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}

export function* watcherAddVehicleModelSaga() {
  yield takeLatest(requestToSaveVehicleModel.type, addVehicleModelSaga);
}
export function* watcherGetAllVehicleModelSaga() {
  yield takeLatest(requestToGetAllVehicleModel.type, getAllVehicleModelSaga);
}

// Add vehicle

export function* addVehicleSaga(action) {
  try {
    const addVehicleResponse = yield addVehicle(action?.payload);
    const { status } = addVehicleResponse;
    if (status === 200) {
      yield put(responseToSaveVehicle());
    } else {
      yield put(failedToSaveVehicle());
    }
  } catch (error) {
    yield put(failedToSaveVehicle());
  }
}

export function* getAllVehicleSaga(action) {
  try {
    const getAllVehicleResponse = yield listVehicle(action?.payload);
    const { status } = getAllVehicleResponse;
    if (status === 200) {
      yield put(responseToGetAllVehicle(getAllVehicleResponse?.data));
    } else {
      yield put(failedToGetAllVehicle());
    }
  } catch (error) {
    yield put(failedToGetAllVehicle());
  }
}

export function* DeleteVehicleSaga(action) {
  try {
    const DeleteVehicleResponse = yield DeleteVehicle(action.payload);
    yield put(responseToDeleteVehicle());
    const { status } = DeleteVehicleResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteVehicle());
    }
  } catch (error) {
    yield put(failedToDeleteVehicle());
  }
}

export function* watcherDeleteVehicleSaga() {
  yield takeLatest(requestDeleteVehicle.type, DeleteVehicleSaga);
}
export function* watcherDeleteVehicleCompanySaga() {
  yield takeLatest(requestDeleteVehicleCompany.type, DeleteVehicleCompanySaga);
}

export function* watcherDeleteVehicleSizeSaga() {
  yield takeLatest(requestDeleteVehicleSize.type, DeleteVehicleSizeSaga);
}


export function* watcherDeleteVehicleTypeSaga() {
  yield takeLatest(requestDeleteVehicleType.type, DeleteVehicleTypeSaga);
}
export function* watcherAddVehicleSaga() {
  yield takeLatest(requestToSaveVehicle.type, addVehicleSaga);
}
export function* watcherGetAllVehicleSaga() {
  yield takeLatest(requestToGetAllVehicle.type, getAllVehicleSaga);
}
export function* watcherDeleteVehicleModelSaga() {
  yield takeLatest(requestDeleteVehicleModel.type, DeleteVehicleModelSaga);
}
