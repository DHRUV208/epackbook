import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveTemplate,
  failedToSaveTemplate,
  responseToSaveTemplate,
  responseToGetTemplate,
failedToGetTemplate,
requestToGetAllTemplate
} from '../../slices/TemplateManagementSlice';
import { addTemplate, listTemplate } from '../../../services/templateSetting';

export function* addTemplateSaga(action) {
  try {
    const addTemplateResponse = yield addTemplate(action?.payload);
    const { status } = addTemplateResponse;
    if (status === 200) {
      yield put(responseToSaveTemplate());
    } else {
      yield put(failedToSaveTemplate());
    }
  } catch (error) {
    yield put(failedToSaveTemplate());
  }
}
export function* watcherAddTemplateSaga() {
  yield takeLatest(requestToSaveTemplate.type, addTemplateSaga);
}

export function* getAllTemplateSaga(action) {
  try {
    const getAllTemplateResponse = yield listTemplate();
    const { status } = getAllTemplateResponse;
    if (status === 200) {
      yield put(responseToGetTemplate(getAllTemplateResponse?.data));
    } else {
      yield put(failedToGetTemplate());
    }
  } catch (error) {
    yield put(failedToGetTemplate());
  }
}
export function* watcherGetAllTemplateSaga() {
  yield takeLatest(requestToGetAllTemplate.type, getAllTemplateSaga);
}
