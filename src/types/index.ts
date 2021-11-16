export const baseURL = "http://localhost:5000/api/v1";

//PRODUCT

export const SET_ALL_PRODUCTS = "GET_ALL_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SET_CATEGORY = "SET_CATEGORY";

export type Categories = "T-Shirts" | "Pants" | "Shoes" | "Jackets";

export type Product = {
  name: string;
  description: string;
  categories: Categories;
  sizes: string[];
  price: number;
  img: string[];
  _id: string;
};

export type SetProductsAction = {
  type: typeof SET_ALL_PRODUCTS;
  payload: {
    products: Product[];
  };
};

export type GetProductsAction = {
  type: typeof GET_ALL_PRODUCTS;
};

export type SearchProductsAction = {
  type: typeof SEARCH_PRODUCTS;
  payload: {
    searchTerm: string;
  };
};

export type SetCategoryAction = {
  type: typeof SET_CATEGORY;
  payload: {
    category: string;
  };
};

export type CategoryState = {
  category: string;
};

export type ProductsActions =
  | SetProductsAction
  | GetProductsAction
  | SearchProductsAction;

export type ProductsState = {
  productsList: Product[];
  searchTerm: string;
};
