import { User } from "../../models/user";
import { GET_USER, RELOAD_USER } from "../actions/user.actions";

const empty_user = new User();

const INITIAL_STATE = empty_user;

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case RELOAD_USER:
      const user = new User();
      user.uid = action.uid;
      user.name = action.user.name;
      user.lastName = action.user.lastName;
      user.profileImage = action.user.profileImage;

      return {
        ...state,
        ...user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
