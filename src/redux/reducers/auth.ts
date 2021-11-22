import { AuthState, AuthActions, SIGN_IN, SIGN_UP, LOG_OUT } from "../../types";

const initialState: AuthState = {
  user: null,
};

export default function auth(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action.payload.data })
      );
      return {
        ...state,
        user: action.payload.data,
      };

    case SIGN_UP:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action.payload.data })
      );
      return {
        ...state,
        user: action.payload.data,
      };

    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
