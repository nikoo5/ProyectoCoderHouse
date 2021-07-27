export const SELECT_POST = "SELECT_POST";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";

import { author_coder } from "../../data/posts"

export const selectPost = (id) => ({
    type: SELECT_POST,
    postID: id
})

export const addPost = (message) => {
  const uuid = require("uuid");
  const newId = uuid.v4();

  return {
    type: ADD_POST,
    postItem: {
      id: newId,
      author: author_coder,
      date: new Date(),
      message: message,
      favorite: false,
    },
  };
};

export const deletePost = (id) => ({
    type: DELETE_POST,
    postID: id
})

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  postID: id,
  userID: author_coder.id,
});

export const getFavorites = () => ({
  type: GET_FAVORITES
})