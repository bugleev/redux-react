import ActionTypes from "../constants";
import * as urls from "../configs/enviroment";

// Actions
export const printMessage = () => {
  return {
    type: ActionTypes.LOG_STUFF
  };
};
export const retrieveUsersStart = () => {
  return {
    type: ActionTypes.RETRIEVE_USERS_START
  };
};
export const retrieveUsersError = error => {
  return {
    type: ActionTypes.RETRIEVE_USERS_ERROR,
    payload: error
  };
};
export const retrieveUsersSuccess = (response, order) => {
  return {
    type: ActionTypes.RETRIEVE_USERS_SUCCESS,
    payload: response,
    order: order
  };
};
export const retrieveUsers = URL_order => {
  return dispatch => {
    const URL =
      URL_order === "first"
        ? `${urls.PROJECT_URL_1}/users`
        : `${urls.PROJECT_URL_2}/users`;
    let request = new Request(URL, {
      method: "GET"
    });

    dispatch(retrieveUsersStart());
    return fetch(request)
      .then(response => response.json())
      .then(result => dispatch(retrieveUsersSuccess(result, URL_order)))
      .catch(error => dispatch(retrieveUsersError(error)));
  };
};
