import React from "react";
import { URL_DATABASE } from "../../constants/Firebase";

export const GET_USER = "GET_USER";
export const RELOAD_USER = "RELOAD_USER";

export const getUser = () => {
  return async (dispatch) => {
    const user = useSelector((state) => state.user);
    if (user.uid === null) {
      dispatch(reloadUser());
    } else {
      dispatch({ type: GET_USER });
    }
  };
};

export const reloadUser = () => {
  return async (dispatch) => {
    const auth = useSelector((state) => state.auth);

    const response = await fetch(
      `${URL_DATABASE}/users/${auth.user}.json?auth=${auth.token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error("No se pudo cargar el usuario");

    const data = await response.json();
    dispatch({ type: RELOAD_USER, uid: auth.user, user: data.user });
  };
};
