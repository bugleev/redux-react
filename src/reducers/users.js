import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";
import { createReducer } from "../utils/createReducer";

export const users = createReducer(
  {},
  {
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
