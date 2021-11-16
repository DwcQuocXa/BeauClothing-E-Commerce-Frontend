import { all } from "redux-saga/effects";

import productSaga from "./handler/handlerProducts";

export function* rootSaga() {
  yield all([...productSaga]);
}
