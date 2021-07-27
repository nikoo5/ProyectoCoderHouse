export const SELECT_COMMENT = "SELECT_COMMENT";
export const FILTER_COMMENTS = "FILTER_COMMENTS";

export const selectComment = (id) => ({
  type: SELECT_COMMENT,
  commentID: id,
});

export const filterComments = (id) => ({
    type: FILTER_COMMENTS,
    postID: id
})
