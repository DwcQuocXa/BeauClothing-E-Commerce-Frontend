import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import { rootSaga } from "./sagas/rootSaga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

export const store = createStore(
  reducers(),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
