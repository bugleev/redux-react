import { put, call, apply, takeEvery, fork, all } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as urls from "../configs/enviroment";

import {
  FETCH_USER,
  POST_USER,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  clearFetchError,
  retrieveFetchStart,
  retrieveFetchSuccess,
  retrieveFetchError,
  retrieveFetchStop
} from "../actions";

export function* watchUserActionsSaga() {
  yield all([
    takeEvery([FETCH_USER, POST_USER], fetchStart),
    takeEvery([FETCH_DATA_ERROR, FETCH_DATA_SUCCESS], fetchStop)
  ]);
}
function* fetchStart(action) {
  yield put(retrieveFetchStart());
  yield put(clearFetchError());
  if (action.type === FETCH_USER) {
    yield fork(fetchUsers);
  } else {
    yield fork(addUser, action);
  }
}

function* fetchStop() {
  yield put(retrieveFetchStop());
}

function* fetchUsers() {
  const URL = `${urls.PROJECT_URL}/users`;
  let request = new Request(URL, {
    method: "GET"
  });
  yield fork(API_request, request);
}

function* addUser(passedData) {
  //const URL = `${urls.PROJECT_URL}/createUser`;
  const URL = `${urls.PROJECT_URL}/posts`;
  let request = new Request(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passedData.data)
  });
  yield fork(API_request, request);
}

function* API_request(request) {
  try {
    const response = yield call(fetch, request);
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = yield apply(response, response.json);
    yield put(retrieveFetchSuccess(data));
  } catch (error) {
    yield put(retrieveFetchError(`${error}`));
  }
}
