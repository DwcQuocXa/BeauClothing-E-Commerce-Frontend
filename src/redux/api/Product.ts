import { API } from "../../types";

export const createProduct = (token: string, values: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return API.post("/admin/products", { values }, config);
};
