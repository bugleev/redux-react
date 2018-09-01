import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { initSagas } from "../initSagas";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleWares = [loggerMiddleware, sagaMiddleware];

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWares))
  );
  initSagas(sagaMiddleware);
  return store;
}
