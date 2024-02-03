import { put, takeLatest } from 'redux-saga/effects';
import {
  failedToSaveSurvey,
  requestToSaveSurvey,
  responseToSaveSurvey,
  requestToGetAllSurvey,
  responseToGetAllSurvey,
  failedToGetAllSurvey
} from '../../slices/SurveySlice';
import { addSurvey, listSurvey } from '../../../services/survey';

export function* addSurveySaga(action) {
  try {
    const addSurveyResponse = yield addSurvey(action?.payload);
    const { status } = addSurveyResponse;
    if (status === 200) {
      yield put(responseToSaveSurvey());
    } else {
      yield put(failedToSaveSurvey());
    }
  } catch (error) {
    yield put(failedToSaveSurvey());
  }
}

export function* getAllSurveySaga(action) {
  try {
    const getAllSurveyResponse = yield listSurvey(action?.payload);
    const { status } = getAllSurveyResponse;
    if (status === 200) {
      yield put(responseToGetAllSurvey(getAllSurveyResponse?.data));
    } else {
      yield put(failedToGetAllSurvey());
    }
  } catch (error) {
    yield put(failedToGetAllSurvey());
  }
}

export function* watcherAddSurveySaga() {
  yield takeLatest(requestToSaveSurvey.type, addSurveySaga);
}

export function* watcherGetAllSurveySaga() {
  yield takeLatest(requestToGetAllSurvey.type, getAllSurveySaga);
}
