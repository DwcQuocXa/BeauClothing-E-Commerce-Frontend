import { Dispatch } from "redux";
import { SIGN_IN, SIGN_UP, AuthActions, LOG_OUT, FormData } from "../../types";
import { signInRequest, signUpRequest } from "../sagas/request/User";

export const signIn = (data: FormData): AuthActions => {
  return {
    type: SIGN_IN,
    payload: {
      data,
    },
  };
};

export const signUp = (data: FormData): AuthActions => {
  return {
    type: SIGN_UP,
    payload: {
      data,
    },
  };
};

export const sendSignInRequest =
  (user: FormData, history: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await signInRequest(user);
      dispatch(signIn(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export const sendSignUpRequest =
  (user: FormData, history: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await signUpRequest(user);
      console.log(data);
      dispatch({
        type: SIGN_IN,
        payload: { data },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export function logOut(): AuthActions {
  return {
    type: LOG_OUT,
  };
}
