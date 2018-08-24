import { combineReducers } from "redux";
import { users } from "./users";
import { posts } from "./posts";
import { fetchStatus } from "./fetchingStatus";
//import { routerStateReducer } from 'redux-router'

const rootReducer = combineReducers({
  users,
  posts,
  fetchStatus
});

export default rootReducer;
