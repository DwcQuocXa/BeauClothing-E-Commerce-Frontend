import { API } from "../../types";

export const fetchCart = (userId: string) => {
  return API.post("/users/cart", { userId });
};

export const manageProductInCart = (
  userId: string | undefined,
  productId: string | undefined,
  isIncreased: boolean
) => {
  const body = {
    userId,
    productId,
    isIncreased,
  };
  return API.put("/users/cart", body);
};

export const deleteProductInCart = (
  userId: string | undefined,
  productId: string | undefined
) => API.delete("/users/cart", { data: { userId, productId } });
