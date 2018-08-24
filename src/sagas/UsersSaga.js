import { put, call, apply, takeEvery } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as urls from "../configs/enviroment";

import {
  FETCH_USER,
  POST_USER,
  retrieveFetchStart,
  retrieveFetchSuccess,
  retrieveFetchError
} from "../actions";

export function* watchFetchUsersSaga() {
  yield [takeEvery(FETCH_USER, fetchUsers)];
}
export function* watchaddUsersSaga() {
  yield [takeEvery(POST_USER, addUser)];
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
  yield put(retrieveFetchStart());
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

function* fetchUsers(URL_order) {
  const URL = `${urls.PROJECT_URL}/users`;
  yield put(retrieveFetchStart());
  let request = new Request(URL, {
    method: "GET"
  });
  try {
    const response = yield call(fetch, request);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = yield apply(response, response.json);
    yield put(retrieveFetchSuccess(data, URL_order));
  } catch (error) {
    yield put(retrieveFetchError(`${error}`));
  }
}