import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./reducers/auth.reducer";
import KnotsReducer from "./reducers/knots.reducer";
import CommentsReducer from "./reducers/comments.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  knots: KnotsReducer,
  comments: CommentsReducer,
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
