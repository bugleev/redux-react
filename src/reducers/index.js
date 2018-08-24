import { combineReducers } from "redux";
//import { routerStateReducer } from 'redux-router'

import {
  FETCH_DATA_START,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  isFetching: false,
  errorDetails: "",
  dataOutput: null
};

export function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errorDetails: action.error
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOutput: action.response
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users: users
});

export default rootReducer;
