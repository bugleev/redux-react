import { put, call, apply, takeEvery } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as urls from "../configs/enviroment";

import {
  FETCH_POSTS,
  retrievePostSuccess,
  retrieveFetchError
} from "../actions";

export function* watchFetchPostsSaga() {
  yield [takeEvery(FETCH_POSTS, fetchPosts)];
}

function* fetchPosts() {
  const URL = `${urls.PROJECT_URL}/posts`;
  let request = new Request(URL, {
    method: "GET"
  });
  try {
    const response = yield call(fetch, request);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = yield apply(response, response.json);
    yield put(retrievePostSuccess(data));
  } catch (error) {
    yield put(retrieveFetchError(`${error}`));
  }
}
