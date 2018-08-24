import { FETCH_DATA_ERROR, FETCH_POST_SUCCESS } from "../actions";
import { createReducer } from "../utils/createReducer";

export const posts = createReducer(
  {},
  {
    [FETCH_DATA_ERROR](state, { error }) {
      return Object.assign({}, state, {
        errorDetails: error
      });
    },
    [FETCH_POST_SUCCESS](state, { response }) {
      return Object.assign({}, state, {
        dataOutput: response
      });
    }
  }
);
