import { createStore, combineReducers } from "redux";

import AuthReducer from "./reducers/auth.reducer"
import PostsReducer from "./reducers/posts.reducer"
import CommentsReducer from "./reducers/comments.reducer"

const RootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostsReducer,
  comments: CommentsReducer
})

export default createStore(RootReducer);
