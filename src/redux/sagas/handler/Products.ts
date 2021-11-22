import { call, put, takeLatest } from "redux-saga/effects";

import { requestGetProducts } from "../request/Products";
import { GetProductsAction, GET_ALL_PRODUCTS } from "../../../types";
import { setProducts } from "../../actions";

function* handleGetProducts(action: GetProductsAction) {
  try {
    const { data } = yield call(requestGetProducts);
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

export default [takeLatest(GET_ALL_PRODUCTS, handleGetProducts)];
