import { combineReducers } from "redux";

import products from "./products";
import category from "./category";
import auth from "./auth";

const reducers = () =>
  combineReducers({
    products,
    category,
    auth,
  });

export default reducers;
