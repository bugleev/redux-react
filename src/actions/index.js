import { makeActionCreator } from "../utils/makeActionCreator";

// Actions

export const FETCH_DATA_START = "FETCH_DATA_START";
export const retrieveFetchStart = makeActionCreator(FETCH_DATA_START);
export const FETCH_DATA_STOP = "FETCH_DATA_STOP";
export const retrieveFetchStop = makeActionCreator(FETCH_DATA_STOP);

export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const retrieveFetchError = makeActionCreator(FETCH_DATA_ERROR, "error");
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const retrieveFetchSuccess = makeActionCreator(
  FETCH_DATA_SUCCESS,
  "response"
);
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const retrievePostSuccess = makeActionCreator(
  FETCH_POST_SUCCESS,
  "response"
);
export const FETCH_USER = "FETCH_USER";
export const retrieveUsers = makeActionCreator(FETCH_USER);
export const FETCH_POSTS = "FETCH_POSTS";
export const retrievePosts = makeActionCreator(FETCH_POSTS);
export const POST_USER = "POST_USER";
export const addUser = makeActionCreator(POST_USER, "data");

// export const retrieveFetchError = error => {
//   return {
//     type: ActionTypes.FETCH_DATA_ERROR,
//     payload: error
//   };
// };
// export const retrieveFetchSuccess = (response, order) => {
//   return {
//     type: ActionTypes.FETCH_DATA_SUCCESS,
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

//     dispatch(retrieveFetchStart());
//     return fetch(request)
//       .then(response => response.json())
//       .then(result => dispatch(retrieveFetchSuccess(result, URL_order)))
//       .catch(error => dispatch(retrieveFetchError(error)));
//   };
// };
