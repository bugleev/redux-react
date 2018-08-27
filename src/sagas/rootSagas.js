import { put, takeEvery } from "redux-saga/effects";

import {
  FETCH_USER,
  POST_USER,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  retrieveFetchStart,
  retrieveFetchStop
} from "../actions";

export function* watchFetchStartSaga() {
  yield [takeEvery(FETCH_USER, fetchStart)];
  yield [takeEvery(POST_USER, fetchStart)];
}
function* fetchStart() {
  yield put(retrieveFetchStart());
}
export function* watchFetchStopSaga() {
  yield [takeEvery(FETCH_DATA_ERROR, fetchStop)];
  yield [takeEvery(FETCH_DATA_SUCCESS, fetchStop)];
}
function* fetchStop() {
  yield put(retrieveFetchStop());
}
