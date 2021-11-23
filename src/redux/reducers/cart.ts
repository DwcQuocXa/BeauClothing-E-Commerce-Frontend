import { CartState, GetCartAction, GET_CART } from "../../types";

const initialState: CartState = {
  cart: [],
};

export default function auth(
  state = initialState,
  action: GetCartAction
): CartState {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload.cart,
      };

    default:
      return state;
  }
}
