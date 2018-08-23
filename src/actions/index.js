import ActionTypes from "../constants";
import * as urls from "../configs/enviroment";
import { makeActionCreator } from "../utils/makeActionCreator";

// Actions

export const LOG_STUFF = "LOG_STUFF";
export const printMessage = makeActionCreator(LOG_STUFF);

export const RETRIEVE_USERS_START = "RETRIEVE_USERS_START";
export const retrieveUsersStart = makeActionCreator(RETRIEVE_USERS_START);

export const RETRIEVE_USERS_ERROR = "RETRIEVE_USERS_ERROR";
export const retrieveUsersError = makeActionCreator(
  RETRIEVE_USERS_ERROR,
  "error"
);
export const RETRIEVE_USERS_SUCCESS = "RETRIEVE_USERS_SUCCESS";
export const retrieveUsersSuccess = makeActionCreator(
  RETRIEVE_USERS_SUCCESS,
  "response",
  "order"
);

export const FETCH_USER = "FETCH_USER";
export const retrieveUsers = makeActionCreator(FETCH_USER, "URL_order");
// export const retrieveUsersError = error => {
//   return {
//     type: ActionTypes.RETRIEVE_USERS_ERROR,
//     payload: error
//   };
// };
// export const retrieveUsersSuccess = (response, order) => {
//   return {
//     type: ActionTypes.RETRIEVE_USERS_SUCCESS,
//     payload: response,
//     order: order
//   };
// };
// export const retrieveUsers = URL_order => {
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
