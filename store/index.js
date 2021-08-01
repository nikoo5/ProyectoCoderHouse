import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./reducers/auth.reducer";
import PostsReducer from "./reducers/posts.reducer";
import CommentsReducer from "./reducers/comments.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
