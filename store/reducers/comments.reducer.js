import COMMENTS from "../../data/comments";
import { SELECT_COMMENT, FILTER_COMMENTS } from "../actions/comments.actions";

const INITIAL_STATE = {
  list: COMMENTS,
  filteredComments: [],
  selected: null,
};

const CommentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_COMMENT:
      const commentIndex = state.list.findIndex(
        (comment) => comment.id == action.commentID
      );
      if (commentIndex === -1) return { ...state };
      return {
        ...state,
        selected: state.list[commentIndex],
      };
    case FILTER_COMMENTS:
      return {
        ...state,
        filteredComments: [
          ...state.list.filter((comment) => comment.knotId === action.knotID),
        ],
      };
    default:
      return { ...state };
  }
};

export default CommentsReducer;
