import {
  Product,
  SET_ALL_PRODUCTS,
  SetProductsAction,
  GET_ALL_PRODUCTS,
  GetProductsAction,
  SEARCH_PRODUCTS,
  SearchProductsAction,
} from "../../types";

export function setProducts(products: Product[]): SetProductsAction {
  return {
    type: SET_ALL_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function getProducts(): GetProductsAction {
  return {
    type: GET_ALL_PRODUCTS,
  };
}

export function searchProducts(searchTerm: string): SearchProductsAction {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchTerm,
    },
  };
}
