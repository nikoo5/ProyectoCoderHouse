import { FIREBASE_API_KEY } from "./Keys";

export const URL_DATABASE = "https://knotit-96fc3-default-rtdb.firebaseio.com/";
export const URL_AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
export const URL_AUTH_LOGIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
