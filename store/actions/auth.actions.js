import { URL_AUTH_LOGIN } from "../../constants/Firebase";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const errorMessages = {
  INVALID_EMAIL: "Email inválido",
  EMAIL_EXISTS: "Email ya se encuentra registrado",
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUTH_SIGNUP, {
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

    if (!response.ok) {
      const resData = await response.json();
      const errorCode = resData.error.message;
      const errorMessage =
        errorCode in errorMessages
          ? errorMessages[errorCode]
          : "No se ha podido registrar";

      throw new Error(errorMessage);
    }

    const resData = await response.json();
    dispatch({ type: SIGNUP, token: resData.idToken, user: resData.localId });
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
