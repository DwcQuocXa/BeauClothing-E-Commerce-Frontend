import { API } from "../../types";

export const fetchCart = (token: string, userId: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return API.post("/users/cart", { userId }, config);
};

export const manageProductInCart = (
  token: string | null,
  userId: string | undefined,
  productId: string | undefined,
  isIncreased: boolean
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    userId,
    productId,
    isIncreased,
  };
  return API.put("/users/cart", body, config);
};

export const deleteProductInCart = (
  token: string | null,
  userId: string | undefined,
  productId: string | undefined
) =>
  API.delete("/users/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { userId, productId },
  });
