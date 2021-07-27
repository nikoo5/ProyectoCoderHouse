import { LOGIN } from '../actions/auth.actions';

const INITIAL_STATE = {
  token: null,
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    default:
      return {
        ...state
      }
  }
}

export default AuthReducer;