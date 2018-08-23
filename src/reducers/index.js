import { combineReducers } from "redux";
//import { routerStateReducer } from 'redux-router'
import ActionTypes from "../constants";
import { LOG_STUFF, RETRIEVE_USERS_START } from "../actions";

const initialState = {
  isFetching: false,
  text: "preloaded",
  errorDetails: "",
  userInfo_1: null,
  userInfo_2: null
};

export function messages(state = initialState, action) {
  switch (action.type) {
    case LOG_STUFF:
      return Object.assign({}, state, {
        text: "test message"
      });

    case RETRIEVE_USERS_START:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.RETRIEVE_USERS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errorDetails: "Error"
      });
    // case ActionTypes.RETRIEVE_USERS_SUCCESS:
    //   const userOrder = action.order === "first" ? "userInfo_1" : "userInfo_2";
    //   return Object.assign({}, state, {
    //     isFetching: false,
    //     [userOrder]: action.payload
    //   });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  messages: messages
});

export default rootReducer;
