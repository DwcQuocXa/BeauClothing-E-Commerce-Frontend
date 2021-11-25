import { Dispatch } from "redux";
import { GetCartAction, GET_CART, CartProduct } from "../../types";
import {
  fetchCart,
  manageProductInCart,
  deleteProductInCart,
} from "../api/Cart";

export function getCart(cart: CartProduct[]): GetCartAction {
  return {
    type: GET_CART,
    payload: {
      cart,
    },
  };
}

export const fetchCartRequest =
  (token: string, userId: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await fetchCart(token, userId);
      dispatch(getCart(data));
    } catch (error) {
      console.log(error);
    }
  };

export const manageCartRequest =
  (
    token: string | null,
    userId: string,
    productId: string | undefined,
    isIncreased: boolean
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await manageProductInCart(
        token,
        userId,
        productId,
        isIncreased
      );
      dispatch(getCart(data));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteCartRequest =
  (token: string | null, userId: string, productId: string | undefined) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await deleteProductInCart(token, userId, productId);
      dispatch(getCart(data));
    } catch (error) {
      console.log(error);
    }
  };
