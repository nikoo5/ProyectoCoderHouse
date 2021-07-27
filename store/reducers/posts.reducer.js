import POSTS from "../../data/posts";
import {
  ADD_POST,
  DELETE_POST,
  GET_FAVORITES,
  SELECT_POST,
  TOGGLE_FAVORITE,
} from "../actions/posts.actions";

const INITIAL_STATE = {
  list: POSTS,
  filteredPosts: [],
  selected: null,
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_POST:
      const postIndex = state.list.findIndex(
        (post) => post.id == action.postID
      );
      if (postIndex === -1) return { ...state };
      return {
        ...state,
        selected: state.list[postIndex],
      };

    case ADD_POST:
      return {
        ...state,
        list: [action.postItem, ...state.list],
      };
    case DELETE_POST:
      return {
        ...state,
        list: [...state.list.filter((post) => post.id !== action.postID)],
        selected: null,
      };
    case TOGGLE_FAVORITE: {
      const newList = [ ...state.list ]
      const postIndex = newList.findIndex((post) => post.id == action.postID);
      if(postIndex === -1) return { ...state }
      
      newList[postIndex].favorite = !(newList[postIndex].favorite);

      const newSelected = { ...state.selected };
      if (newSelected != null) {
        newSelected.favorite = !(newSelected.favorite);
      }

      return {
        ...state,
        list: newList,
        filteredPosts: [...newList.filter((post) => post.favorite)],
        selected: newSelected,
      };
    }
    case GET_FAVORITES:
      return {
        ...state,
        filteredPosts: [...state.list.filter((post) => post.favorite)],
      };
    default:
      return { ...state };
  }
};

export default PostsReducer;
