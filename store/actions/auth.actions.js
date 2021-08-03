import {
  URL_AUTH_LOGIN,
  URL_AUTH_SIGNUP,
  URL_AUTH_UPDATE,
  URL_DATABASE,
} from "../../constants/Firebase";
import { User } from "../../models/user";
import { setUserName } from "./user.actions";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

const errorMessages = {
  INVALID_EMAIL: "Email inválido",
  EMAIL_EXISTS: "El E-Mail ingresado ya se encuentra registrado",
  WEAK_PASSWORD: "La contrasña debe contener al menos 6 caracteres",
};

export const signup = (email, password, name, lastname) => {
  return async (dispatch) => {
    const response_signup = await fetch(URL_AUTH_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response_signup.ok) {
      const resData = await response_signup.json();
      const errorCode = resData.error.message;
      const errorMessage =
        errorCode in errorMessages
          ? errorMessages[errorCode]
          : "No se ha podido registrar";

      throw new Error(errorMessage);
    }

    const data = await response_signup.json();

    const response_update = await fetch(URL_AUTH_UPDATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: data.idToken,
        displayName: `${lastname},${name}`,
      }),
    });

    const user = new User();
    user.email = email;
    user.name = name;
    user.lastName = lastname;
    user.creationDate = Date.now();
    user.lastUpdate = Date.now();

    const response_user = await fetch(
      `${URL_DATABASE}/users/${data.localId}.json?auth=${data.idToken}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      user: data.localId,
    });
  };
};

export const loginWithEmail = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) throw new Error("Usuario y/o contraseña incorrectos");

    const data = await response.json();
    dispatch({ type: LOGIN, token: data.idToken, user: data.localId });
  };
};

export const logout = () => ({
  type: LOGOUT,
});
