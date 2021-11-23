import { Dispatch } from "redux";
import { SIGN_IN, SIGN_UP, AuthActions, LOG_OUT, FormData } from "../../types";
import { signInRequest, signUpRequest } from "../api/Auth";

export const sendSignInRequest =
  (user: FormData, history: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await signInRequest(user);
      dispatch({
        type: SIGN_IN,
        payload: { data },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export const sendSignUpRequest =
  (user: FormData, history: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await signUpRequest(user);
      dispatch({
        type: SIGN_UP,
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
