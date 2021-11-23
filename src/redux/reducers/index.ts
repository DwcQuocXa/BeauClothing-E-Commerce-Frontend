import { combineReducers } from "redux";

import products from "./products";
import category from "./category";
import auth from "./auth";
import cart from "./cart";

const reducers = () =>
  combineReducers({
    products,
    category,
    auth,
    cart,
  });

export default reducers;
