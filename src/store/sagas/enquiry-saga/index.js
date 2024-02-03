 import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveEnquiry,
  requestToSaveEnquiry,
  responseToSaveEnquiry,
  failedToGetAllEnquiry,
  requestToGetAllEnquiry,
  responseToGetAllEnquiry,
  requestToGetEnquiry,
  responseToGetEnquiryById,
  failedToGetEnquiryById,
  requestToUpdateEnquiry,
  responseToUpdateEnquiry,
  failedToUpdateEnquiry,

  apiMessageUpdate,
  responseToDeleteEnquiry,
  failedToDeleteEnquiry,
  requestDeleteEnquiry
} from '../../slices/EnquirySlice';
import { addEnquiry, listEnquiry, updateEnquiry, getEnquiryById, DeleteEnquiry } from '../../../services/enquiry';
import { failedToDeleteVehicleDriver } from '../../slices/VehicleManagementSlice';
export function* addEnquirySaga(action) {
  try {
    const addEnquiryResponse = yield addEnquiry(action?.payload);
    const { status } = addEnquiryResponse;
   
    if (status === 200) {
      yield put(responseToSaveEnquiry());
    } else {
      yield put(failedToSaveEnquiry());
    }
  } catch (error) {
    yield put(failedToSaveEnquiry());
  }
}
export function* getAllEnquirySaga(action) {
  try {
    const getAllEnquiryResponse = yield listEnquiry(action?.payload);
    const { status } = getAllEnquiryResponse;
    if (status === 200) {
      yield put(responseToGetAllEnquiry(getAllEnquiryResponse?.data));
    } else {
      yield put(failedToGetAllEnquiry());
    }
  } catch (error) {
    yield put(failedToGetAllEnquiry());
  }
}
// export function* getEnquiryDetailsSaga(action) {
//   try {
//     const getEnquiryWithEnquiryIdResponse = yield enquiryData(action?.payload);
//     const { status } = getEnquiryWithEnquiryIdResponse;
//     if (status === 200) {
//       yield put(responseToGetEnquiryDetails(getEnquiryWithEnquiryIdResponse?.data));
//     } else {
//       yield put(failedToGetEnquiryDetails());
//     }
//   } catch (error) {
//     yield put(failedToGetEnquiryDetails());
//   }
// }

export function* getEnquiryByIdSaga(action) {
  try {
    const getEnquiryByIdResponse = yield getEnquiryById(action?.payload);
    const { status } = getEnquiryByIdResponse;
    if (status === 200) {
      yield put(responseToGetEnquiryById(getEnquiryByIdResponse?.data));
    } else {
      yield put(failedToGetEnquiryById());
    }
  } catch (error) {
    yield put(failedToGetEnquiryById());
  }
}


export function* updateEnquirySaga(action) {
  try {
    const updateEnquiryResponse = yield updateEnquiry(action?.payload);
    const { status } = updateEnquiryResponse;
    if (status === 200) {
      yield put(responseToUpdateEnquiry(action?.payload));
    } else {
      yield put(failedToUpdateEnquiry());
    }
  } catch (error) {
    yield put(failedToUpdateEnquiry());
  }
}

export function* deleteEnquirySaga(action) {
  try {
    const DeleteVehicleEnquiryResponse = yield DeleteEnquiry(action.payload);
    yield put(responseToDeleteEnquiry());
    const { status } = DeleteVehicleEnquiryResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteEnquiry());
    }
  } catch (error) {
    yield put(failedToDeleteVehicleDriver());
  }
}

export function* watcherAddEnquirySaga() {
  yield takeLatest(requestToSaveEnquiry.type, addEnquirySaga);
}
export function* watcherGetAllEnquirySaga() {
  yield takeLatest(requestToGetAllEnquiry.type, getAllEnquirySaga);
}
export function* watcherGetEnquiryByIdSaga() {
  yield takeLatest(requestToGetEnquiry.type, getEnquiryByIdSaga);
}
export function* watcherUpdateEnquirySaga() {
  yield takeLatest(requestToUpdateEnquiry.type, updateEnquirySaga);
}
export function* watcherDeleteEnquirySaga() {
  yield takeLatest(requestDeleteEnquiry.type, deleteEnquirySaga);
}
