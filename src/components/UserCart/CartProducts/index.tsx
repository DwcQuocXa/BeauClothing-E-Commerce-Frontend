import React from "react";

import { CartProduct } from "../../../types";
import CartProductDetail from "./CartProduct";

type CartProductsProps = {
  cart: CartProduct[];
};

const CartProducts = ({ cart }: CartProductsProps) => {
  return (
    <div>
      {cart
        ? cart.map((product) => <CartProductDetail product={product} />)
        : "Cart Empty"}
    </div>
  );
};

export default CartProducts;
