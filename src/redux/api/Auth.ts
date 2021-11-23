import { API, FormData } from "../../types";

export const signInRequest = (user: FormData) => API.post("/auth/signin", user);
export const signUpRequest = (user: FormData) => API.post("/auth/signup", user);
