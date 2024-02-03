import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveContactDetails,
  responseToSaveContactDetails,
  failedToSaveContactDetails,
  requestToGetAllContactDetails,
  responseToGetAllContactDetails,
  failedToGetAllContactDetails,
  requestToSaveRegistrationDetail,
  responseToSaveRegistrationDetail,
  failedToSaveRegistrationDetail,
  requestToGetAllRegistrationDetail,
  responseToGetAllRegistrationDetail,
  failedToGetAllRegistrationDetail,
  requestToSaveFooterContent,
  responseToSaveFooterContent,
  failedToSaveFooterContent,
  requestToGetAllFooterContent,
  responseToGetAllFooterContent,
  failedToGetAllFooterContent,
  // responseToSaveSelectSubModule,
  // failedToSaveSelectSubModule,
  // requestToSaveSelectSubModule,
  requestToSaveFeature,
responseToSaveFeature,
failedToSaveFeature,
requestToGetAllFeature,
responseToGetAllFeature,
failedToGetAllFeature,

requestToSaveModule,
responseToSaveModule,
failedToSaveModule,
requestToGetAllModule,
responseToGetAllModule,
failedToGetAllModule,


requestToSaveSubModule,
responseToSaveSubModule,
failedToSaveSubModule,
requestToGetAllSubModule,
responseToGetAllSubModule,
failedToGetAllSubModule,

  
  requestToSaveEnquirySource,
  responseToSaveEnquirySource,
  failedToSaveEnquirySource,
  requestToGetAllEnquirySource,
  responseToGetAllEnquirySource,
  failedToGetAllEnquirySource,


  requestToSaveApprovalAuthority,
  responseToSaveApprovalAuthority,
  failedToSaveApprovalAuthority,
  requestToGetAllApprovalAuthority,
  responseToGetAllApprovalAuthority,
  failedToGetAllApprovalAuthority,
  
  failedToUpdateSubModule,
  requestToUpdateSubmodule,
  failedToDeleteContactDetail,
  responseToDeleteContactDetail,
  requestDeleteContactDetail,
  responseToDeleteRegistrationDetail,
  failedToDeleteRegistrationDetail,
  requestDeleteRegistrationDetail,
  responseToDeleteFooterContent,
  failedToDeleteFooterContent,
  requestDeleteFooterContent
} from '../../slices/ContentManagementSlice';
import {
  addContactDetails,
  listContactDetails,
  addRegistrationDetail,
  listRegistrationDetail,
  addFooterContent,
  listFooterContent,
  addModules,
  listModules,
  addSubModules,
  
  addFeature,
  listFeature,
  addEnquirySource,
  listEnquirySource,
  addApprovalAuthority,
  listApprovalAuthority,
  listSubModules,
  updateSubModules,
  DeleteContactDetail,
  DeleteRegistrationDetail,
  DeleteFooterContent
} from '../../../services/contentManagement';

///////////////// --ADD-BANK-- ///////////////////////////

export function* addContactDetailsSaga(action) {
  try {
    const addContactDetailsResponse = yield addContactDetails(action?.payload);
    const { status } = addContactDetailsResponse;
    if (status === 200) {
      yield put(responseToSaveContactDetails());
    } else {
      yield put(failedToSaveContactDetails());
    }
  } catch (error) {
    yield put(failedToSaveContactDetails());
  }
}

export function* getAllContactDetailsSaga(action) {
  try {
    const getAllContactDetailsResponse = yield listContactDetails(action?.payload);
    const { status } = getAllContactDetailsResponse;
    if (status === 200) {
      yield put(responseToGetAllContactDetails(getAllContactDetailsResponse?.data));
    } else {
      yield put(failedToGetAllContactDetails());
    }
  } catch (error) {
    yield put(failedToGetAllContactDetails());
  }
}

export function* DeleteContactDetailSaga(action) {
  try {
    const DeleteContactDetailResponse = yield DeleteContactDetail(action.payload);
    yield put(responseToDeleteContactDetail());
    const { status } = DeleteContactDetailResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteContactDetail());
    }
  } catch (error) {
    yield put(failedToDeleteContactDetail());
  }
}
export function* watcherAddContactDetailsSaga() {
  yield takeLatest(requestToSaveContactDetails.type, addContactDetailsSaga);
}
export function* watcherGetAllContactDetailsSaga() {
  yield takeLatest(requestToGetAllContactDetails.type, getAllContactDetailsSaga);
}

export function* watcherDeleteContactDetail() {
  yield takeLatest(requestDeleteContactDetail.type, DeleteContactDetailSaga);
}

///////////////// --ADD-ACCOUNTS-- ///////////////////////////

export function* addRegistrationDetailSaga(action) {
  try {
    const addRegistrationDetailResponse = yield addRegistrationDetail(action?.payload);
    const { status } = addRegistrationDetailResponse;
    if (status === 200) {
      yield put(responseToSaveRegistrationDetail());
    } else {
      yield put(failedToSaveRegistrationDetail());
    }
  } catch (error) {
    yield put(failedToSaveRegistrationDetail());
  }
}

export function* getAllRegistrationDetailSaga(action) {
  try {
    const getAllRegistrationDetailResponse = yield listRegistrationDetail(action?.payload);
    const { status } = getAllRegistrationDetailResponse;
    if (status === 200) {
      yield put(responseToGetAllRegistrationDetail(getAllRegistrationDetailResponse?.data));
    } else {
      yield put(failedToGetAllRegistrationDetail());
    }
  } catch (error) {
    yield put(failedToGetAllRegistrationDetail());
  }
}


export function* DeleteRegistrationDetailSaga(action) {
  try {
    const DeleteContactDetailResponse = yield DeleteRegistrationDetail(action.payload);
    yield put(responseToDeleteRegistrationDetail());
    const { status } = DeleteContactDetailResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteRegistrationDetail());
    }
  } catch (error) {
    yield put(failedToDeleteRegistrationDetail());
  }
}

export function* watcherDeleteRegistrationDetail() {
  yield takeLatest(requestDeleteRegistrationDetail.type, DeleteRegistrationDetailSaga);
}
export function* watcherAddRegistrationDetailSaga() {
  yield takeLatest(requestToSaveRegistrationDetail.type, addRegistrationDetailSaga);
}
export function* watcherGetAllRegistrationDetailSaga() {
  yield takeLatest(requestToGetAllRegistrationDetail.type, getAllRegistrationDetailSaga);
}

export function* addFooterContentSaga(action) {
  try {
    const addFooterContentResponse = yield addFooterContent(action?.payload);
    const { status } = addFooterContentResponse;
    if (status === 200) {
      yield put(responseToSaveFooterContent());
    } else {
      yield put(failedToSaveFooterContent());
    }
  } catch (error) {
    yield put(failedToSaveFooterContent());
  }
}

export function* getAllFooterContentSaga(action) {
  try {
    const getAllFooterContentResponse = yield listFooterContent(action?.payload);
    const { status } = getAllFooterContentResponse;
    if (status === 200) {
      yield put(responseToGetAllFooterContent(getAllFooterContentResponse?.data));
    } else {
      yield put(failedToGetAllFooterContent());
    }
  } catch (error) {
    yield put(failedToGetAllFooterContent());
  }
}

export function* DeleteFooterContentSaga(action) {
  try {
    const DeleteFooterContentResponse = yield DeleteFooterContent(action.payload);
    yield put(responseToDeleteFooterContent());
    const { status } = DeleteFooterContentResponse;
    if (status === 200) {
    } else {
      yield put(failedToDeleteFooterContent());
    }
  } catch (error) {
    yield put(failedToDeleteFooterContent());
  }
}
export function* watcherAddFooterContentSaga() {
  yield takeLatest(requestToSaveFooterContent.type, addFooterContentSaga);
}
export function* watcherGetAllFooterContentSaga() {
  yield takeLatest(requestToGetAllFooterContent.type, getAllFooterContentSaga);
}
export function* watcherDeleteFooterContentSaga() {
  yield takeLatest(requestDeleteFooterContent.type, DeleteFooterContentSaga);
}

export function* addModuleSaga(action) {
  try {
    const addModuleResponse = yield addModules(action?.payload);
    const { status } = addModuleResponse;
    if (status === 200) {
      yield put(responseToSaveModule());
    } else {
      yield put(failedToSaveModule());
    }
  } catch (error) {
    yield put(failedToSaveModule());
  }
}

export function* getAllModuleSaga(action) {
  try {
    const getAllModuleResponse = yield listModules();
    const { status } = getAllModuleResponse;
    if (status === 200) {
      yield put(responseToGetAllModule(getAllModuleResponse?.data));
    } else {
      yield put(failedToGetAllModule());
    }
  } catch (error) {
    yield put(failedToGetAllModule());
  }
}
export function* watcherAddModuleSaga() {
  yield takeLatest(requestToSaveModule.type, addModuleSaga);
}
export function* watcherGetAllModuleSaga() {
  yield takeLatest(requestToGetAllModule.type, getAllModuleSaga);
}

export function* addEnquirySourceSaga(action) {
  try {
    const addEnquirySourceResponse = yield addEnquirySource(action?.payload);
    const { status } = addEnquirySourceResponse;
    if (status === 200) {
      yield put(responseToSaveEnquirySource());
    } else {
      yield put(failedToSaveEnquirySource());
    }
  } catch (error) {
    yield put(failedToSaveEnquirySource());
  }
}

export function* getAllEnquirySourceSaga(action) {
  try {
    const getAllEnquirySourceResponse = yield listEnquirySource();
    const { status } = getAllEnquirySourceResponse;
    if (status === 200) {
      yield put(responseToGetAllEnquirySource(getAllEnquirySourceResponse?.data));
    } else {
      yield put(failedToGetAllEnquirySource());
    }
  } catch (error) {
    yield put(failedToGetAllEnquirySource());
  }
}
export function* watcherAddEnquirySourceSaga() {
  yield takeLatest(requestToSaveEnquirySource.type, addEnquirySourceSaga);
}
export function* watcherGetAllEnquirySourceSaga() {
  yield takeLatest(requestToGetAllEnquirySource.type, getAllEnquirySourceSaga);
}

export function* addApprovalAuthoritySaga(action) {
  try {
    const addApprovalAuthorityResponse = yield addApprovalAuthority(action?.payload);
    const { status } = addApprovalAuthorityResponse;
    if (status === 200) {
      yield put(responseToSaveApprovalAuthority());
    } else {
      yield put(failedToSaveApprovalAuthority());
    }
  } catch (error) {
    yield put(failedToSaveApprovalAuthority());
  }
}


export function* getAllApprovalAuthoritySaga(action) {
  try {
    const getAllApprovalAuthorityResponse = yield listApprovalAuthority();
    const { status } = getAllApprovalAuthorityResponse;
    if (status === 200) {
      yield put(responseToGetAllApprovalAuthority(getAllApprovalAuthorityResponse?.data));
    } else {
      yield put(failedToGetAllApprovalAuthority());
    }
  } catch (error) {
    yield put(failedToGetAllApprovalAuthority());
  }
}

export function* watcherAddApprovalAuthoritySaga() {
  yield takeLatest(requestToSaveApprovalAuthority.type, addApprovalAuthoritySaga);
}
export function* watcherGetAllApprovalAuthoritySaga() {
  yield takeLatest(requestToGetAllApprovalAuthority.type, getAllApprovalAuthoritySaga);
}


export function* addSubModuleSaga(action) {
  try {
    const addSubModuleResponse = yield addSubModules(action?.payload);
    const { status } = addSubModuleResponse;
    if (status === 200) {
      yield put(responseToSaveSubModule());
    } else {
      yield put(failedToSaveSubModule());
    }
  } catch (error) {
    yield put(failedToSaveSubModule());
  }
}
export function* listSubModuleSaga(action) {
  try {
    const lisSubModulesResponse = yield listSubModules(action?.payload);
    const { status } = lisSubModulesResponse;
    if (status === 200) {
      yield put(responseToGetAllSubModule(lisSubModulesResponse?.data));
    } else {
      yield put(failedToGetAllSubModule());
    }
  } catch (error) {
    yield put(failedToGetAllSubModule());
  }
}
export function* watcheraddSubModuleSaga() {
  yield takeLatest(requestToSaveSubModule.type, addSubModuleSaga);
}
export function* watcherListSubmodulesSaga() {
  yield takeLatest(requestToGetAllSubModule.type, listSubModuleSaga);
}

export function* getAllSubModuleSaga(action) {
  try {
    const getAllSubModuleResponse = yield listSubModules();
    const { status } = getAllSubModuleResponse;
    if (status === 200) {
      yield put(responseToGetAllSubModule(getAllSubModuleResponse?.data));
    } else {
      yield put(failedToGetAllSubModule());
    }
  } catch (error) {
    yield put(failedToGetAllSubModule());
  }
}
export function* watcherGetAllSubModuleSaga() {
  yield takeLatest(requestToGetAllSubModule.type, getAllSubModuleSaga);
}


export function* addFeatureSaga(action) {
  try {
    const addFeatureResponse = yield addFeature(action?.payload);
    const { status } = addFeatureResponse;
    if (status === 200) {
      yield put(responseToSaveFeature());
    } else {
      yield put(failedToSaveFeature());
    }
  } catch (error) {
    yield put(failedToSaveFeature());
  }
}

export function* listFeatureSaga(action) {
  try {
    const listFeatureResponse = yield listFeature();
    const { status } = listFeatureResponse;
    if (status === 200) {
      yield put(responseToGetAllFeature(listFeatureResponse?.data));
    } else {
      yield put(failedToGetAllFeature());
    }
  } catch (error) {
    yield put(failedToGetAllSubModule());
  }
}



export function* watcherAddFeatureSaga() {
  yield takeLatest(requestToSaveFeature.type, addFeatureSaga);
}
export function* watcherListFeatureSaga() {
  yield takeLatest(requestToGetAllFeature.type, listFeatureSaga);
}

export function* updateSubModuleSaga(action) {
  try {
    // const updateSubmoduleResponse = yield updateSubModules(action?.payload);
    // const { status } = updateSubmoduleResponse;
    // if (status === 200) {
    //   yield put(responseToUpdateSubModule());
    // } else {
    //   yield put(failedToUpdateSubModule());
    // }
  } catch (error) {
    yield put(failedToUpdateSubModule());
  }
}
export function* watcherUpdateSubModuleSaga() {
  yield takeLatest(requestToUpdateSubmodule.type, updateSubModuleSaga);
}




