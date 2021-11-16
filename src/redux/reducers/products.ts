import {
  ProductsState,
  SEARCH_PRODUCTS,
  SET_ALL_PRODUCTS,
  ProductsActions,
} from "../../types";

const initialState: ProductsState = {
  productsList: [],
  searchTerm: "",
};

export default function products(
  state = initialState,
  action: ProductsActions
): ProductsState {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      const { products } = action.payload;
      return {
        ...state,
        productsList: [...state.productsList].concat(products),
      };

    case SEARCH_PRODUCTS:
      const { searchTerm } = action.payload;
      return {
        ...state,
        searchTerm,
      };

    default:
      return state;
  }
}
