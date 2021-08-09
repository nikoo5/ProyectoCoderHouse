import React from "react";
import { URL_DATABASE } from "../../constants/Firebase";
import { useSelector } from "react-redux";
import { User } from "../../models/user";

export const LOAD_USER = "LOAD_USER";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_IMAGE = "SET_USER_IMAGE";

export const loadUser = (uid, token) => {
  return async (dispatch) => {
    const response = await fetch(
      `${URL_DATABASE}/users/${uid}.json?auth=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error("No se pudo cargar el usuario");

    const data = await response.json();
    dispatch({ type: LOAD_USER, user: User.fromJson(uid, data) });
  };
};

export const setUserImage = (auth, uri) => {
  return async (dispatch) => {
    const response = await fetch(
      `${URL_DATABASE}/users/${auth.user}.json?auth=${auth.token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profileImage: uri,
        }),
      }
    );

    if (!response.ok) throw new Error("No se pudo actualizar el usuario");

    dispatch({
      type: SET_USER_IMAGE,
      image: uri,
    });
  };
};

export const setUserName = (name, lastname) => {
  return async (dispatch) => {
    const auth = useSelector((state) => state.auth);

    const response = await fetch(
      `${URL_DATABASE}/users/${auth.user}.json?auth=${auth.token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastName: lastname,
        }),
      }
    );

    if (!response.ok) throw new Error("No se pudo actualizar el usuario");

    dispatch({
      type: SET_USER_NAME,
      name: name,
      lastname: lastname,
    });
  };
};
