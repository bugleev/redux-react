import { put, takeEvery, all, call } from "redux-saga/effects";
import { fetchUsers, addUser } from "./UsersSaga";

import {
  FETCH_USER,
  POST_USER,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  clearFetchError,
  retrieveFetchStart,
  retrieveFetchStop
} from "../actions";

export function* watchUserActionsSaga() {
  yield all([
    takeEvery(FETCH_USER, fetchStart),
    takeEvery(POST_USER, fetchStart),
    takeEvery(FETCH_DATA_ERROR, fetchStop),
    takeEvery(FETCH_DATA_SUCCESS, fetchStop)
  ]);
}
function* fetchStart(action) {
  yield put(retrieveFetchStart());
  yield put(clearFetchError());
  if (action.type === FETCH_USER) {
    yield call(fetchUsers);
  } else {
    yield call(addUser, action);
  }
}
function* fetchStop() {
  yield put(retrieveFetchStop());
}
