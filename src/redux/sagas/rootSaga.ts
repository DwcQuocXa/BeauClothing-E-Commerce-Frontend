import { all } from "redux-saga/effects";

import productSaga from "./handler/Products";

export function* rootSaga() {
  yield all([...productSaga]);
}
