import { combineReducers } from "redux";

import products from "./products";
import category from "./category";

const reducers = () =>
  combineReducers({
    products,
    category,
  });

export default reducers;
