import { LOGIN, LOGOUT } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
