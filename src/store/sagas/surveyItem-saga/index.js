import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToSaveSurveyItem,
  responseToSaveSurveyItem,
  failedToSaveSurveyItem,
  requestToGetAllSurveyItem,
  responseToGetAllSurveyItem,
  failedToGetAllSurveyItem,
} from '../../slices/SurveyListSlice';
import { addSurveyItem, listSurveyItem } from '../../../services/surveyItem';

export function* addSurveyItemSaga(action) {
  try {
    const addSurveyItemResponse = yield addSurveyItem(action?.payload);
    const { status } = addSurveyItemResponse;
    if (status === 200) {
      yield put(responseToSaveSurveyItem());
    } else {
      yield put(failedToSaveSurveyItem());
    }
  } catch (error) {
    yield put(failedToSaveSurveyItem());
  }
}
export function* watcherAddSurveyItemSaga() {
  yield takeLatest(requestToSaveSurveyItem.type, addSurveyItemSaga);
}

export function* getAllSurveyItemSaga(action) {
  try {
    const getAllSurveyItemResponse = yield listSurveyItem(action?.payload);
    const { status } = getAllSurveyItemResponse;
    if (status === 200) {
      yield put(responseToGetAllSurveyItem(getAllSurveyItemResponse?.data));
    } else {
      yield put(failedToGetAllSurveyItem());
    }
  } catch (error) {
    yield put(failedToGetAllSurveyItem());
  }
}
export function* watcherGetAllSurveyItemSaga() {
  yield takeLatest(requestToGetAllSurveyItem.type, getAllSurveyItemSaga);
}
