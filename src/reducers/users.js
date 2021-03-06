import {
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  CLEAR_FETCH_DATA_ERROR
} from "../actions";
import { createReducer } from "../utils";

export const users = createReducer(
  {},
  {
    [CLEAR_FETCH_DATA_ERROR](state) {
      if (state.errorDetails && state.errorDetails.length) {
        return Object.assign({}, state, {
          errorDetails: ""
        });
      } else {
        return state;
      }
    },
    [FETCH_DATA_ERROR](state, { error }) {
      return Object.assign({}, state, {
        errorDetails: error
      });
    },
    [FETCH_DATA_SUCCESS](state, { response }) {
      return Object.assign({}, state, {
        dataOutput: response
      });
    }
  }
);
