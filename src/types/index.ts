import axios from "axios";
export const baseURL = "https://beau-e-commerce.herokuapp.com/api/v1/";

export const API = axios.create({
  baseURL: `${baseURL}`,
});

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

export type User = {
  _id: string;
  isAdmin?: boolean;
  isBanned?: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cart: CartProduct[];
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

export type FormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

//AUTH
export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const LOG_OUT = "LOG_OUT";

export type SignInAction = {
  type: typeof SIGN_IN;
  payload: {
    data: FormData;
  };
};

export type SignUpAction = {
  type: typeof SIGN_UP;
  payload: {
    data: FormData;
  };
};

export type LogOutAction = {
  type: typeof LOG_OUT;
};

export type AuthActions = SignInAction | SignUpAction | LogOutAction;

export type AuthState = {
  user: FormData | null;
};

//CART
export const GET_CART = "GET_CART";

export type CartProduct = {
  _id: string;
  product: Product;
  quantity: number;
};

export type GetCartAction = {
  type: typeof GET_CART;
  payload: {
    cart: CartProduct[];
  };
};

export type CartState = {
  cart: CartProduct[];
};

//FORMIK

export type FormikType = {
  name: string;
  description: string;
  categories: string;
  sizes: string[];
  price: number;
  img: string[];
  img1: string;
  img2: string;
};
