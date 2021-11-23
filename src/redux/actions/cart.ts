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
  (userId: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await fetchCart(userId);
      dispatch(getCart(data));
    } catch (error) {
      console.log(error);
    }
  };

export const manageCartRequest =
  (userId: string, productId: string | undefined, isIncreased: boolean) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await manageProductInCart(
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
  (userId: string, productId: string | undefined) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await deleteProductInCart(userId, productId);
      dispatch(getCart(data));
    } catch (error) {
      console.log(error);
    }
  };
