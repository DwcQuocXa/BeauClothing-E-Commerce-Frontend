import { API, FormData } from "../../../types";

export const signInRequest = (user: FormData) =>
  API.post("/users/signin", user);
export const signUpRequest = (user: FormData) =>
  API.post("/users/signup", user);
