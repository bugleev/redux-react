import { put, call, apply, takeEvery } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as urls from "../configs/enviroment";

import {
  FETCH_USER,
  POST_USER,
  retrieveFetchSuccess,
  retrieveFetchError,
  clearFetchError
} from "../actions";

export function* watchFetchUsersSaga() {
  yield [takeEvery(FETCH_USER, fetchUsers)];
}
export function* watchAddUsersSaga() {
  yield [takeEvery(POST_USER, addUser)];
}

function* addUser(passedData) {
  //const URL = `${urls.PROJECT_URL}/createUser`;
  yield put(clearFetchError());
  const URL = `${urls.PROJECT_URL}/posts`;
  let request = new Request(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passedData.data)
  });
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

function* fetchUsers() {
  yield put(clearFetchError());
  const URL = `${urls.PROJECT_URL}/users`;
  let request = new Request(URL, {
    method: "GET"
  });
  try {
    const response = yield call(fetch, request);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = yield apply(response, response.json);
    yield put(retrieveFetchSuccess(data));
  } catch (error) {
    yield put(retrieveFetchError(`${error}`));
  }
}
