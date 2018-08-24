import { FETCH_DATA_START, FETCH_DATA_STOP } from "../actions";
import { createReducer } from "../utils/createReducer";

export const fetchStatus = createReducer(
  {},
  {
    [FETCH_DATA_START](state) {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    [FETCH_DATA_STOP](state) {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
  }
);
