import { User } from "../../models/user";
import {
  LOAD_USER,
  SET_USER_IMAGE,
  SET_USER_NAME,
} from "../actions/user.actions";

const empty_user = new User();

const INITIAL_STATE = empty_user;

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER:
      if (action.user !== null) {
        return {
          ...state,
          ...action.user,
        };
      }
      return {
        ...state,
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name,
        lastName: action.lastname,
      };
    case SET_USER_IMAGE:
      return {
        ...state,
        profileImage: action.image,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
