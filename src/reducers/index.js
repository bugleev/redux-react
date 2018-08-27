import { combineReducers } from "redux";
import { users } from "./users";
import { fetchStatus } from "./fetchingStatus";
//import { routerStateReducer } from 'redux-router'

const rootReducer = combineReducers({
  users,
  fetchStatus
});

export default rootReducer;
