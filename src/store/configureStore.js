import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { initSagas } from "../initSagas";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleWares = [loggerMiddleware, sagaMiddleware, thunk];
const composables = [applyMiddleware(...middleWares)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {
//   isFetching: false,
//   text: "preloaded",
//   errorDetails: "",
//   userInfo_1: null,
//   userInfo_2: null
// };

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWares))
  );
  initSagas(sagaMiddleware);
  return store;
}
