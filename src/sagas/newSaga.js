import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { FETCH_USER } from "./../actions";

export const retrieveUsers = URL_order => {
  //   return dispatch => {
  //     const URL =
  //       URL_order === "first"
  //         ? `${urls.PROJECT_URL_1}/users`
  //         : `${urls.PROJECT_URL_2}/users`;
  //     let request = new Request(URL, {
  //       method: "GET"
  //     });

  //     dispatch(retrieveUsersStart());
  //     return fetch(request)
  //       .then(response => response.json())
  //       .then(result => dispatch(retrieveUsersSuccess(result, URL_order)))
  //       .catch(error => dispatch(retrieveUsersError(error)));
  //   };
  // };

  export function* retrieveUsers() {
    // const { id } = yield take(FETCH_USER);
    // const response = yield call(fetch, `http://localhost:8081/user/${id}`);
    // const data = yield apply(response, response.json);
    // yield put(setCurrentUser(data));
  }
