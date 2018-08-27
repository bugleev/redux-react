import { makeActionCreator } from "../utils/makeActionCreator";

// Actions

export const FETCH_DATA_START = "FETCH_DATA_START";
export const retrieveFetchStart = makeActionCreator(FETCH_DATA_START);
export const FETCH_DATA_STOP = "FETCH_DATA_STOP";
export const retrieveFetchStop = makeActionCreator(FETCH_DATA_STOP);

export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const retrieveFetchError = makeActionCreator(FETCH_DATA_ERROR, "error");

export const CLEAR_FETCH_DATA_ERROR = "CLEAR_FETCH_DATA_ERROR";
export const clearFetchError = makeActionCreator(
  CLEAR_FETCH_DATA_ERROR,
  "error"
);
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const retrieveFetchSuccess = makeActionCreator(
  FETCH_DATA_SUCCESS,
  "response"
);

export const FETCH_USER = "FETCH_USER";
export const retrieveUsers = makeActionCreator(FETCH_USER);

export const POST_USER = "POST_USER";
export const addUser = makeActionCreator(POST_USER, "data");
