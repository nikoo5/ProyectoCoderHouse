import { FIREBASE_API_KEY } from "./Keys";

export const URL_DATABASE =     "https://knotit-96fc3-default-rtdb.firebaseio.com";

export const URL_AUTH =         "https://identitytoolkit.googleapis.com/v1/accounts"
export const URL_AUTH_SIGNUP =  `${URL_AUTH}:signUp?key=${FIREBASE_API_KEY}`;
export const URL_AUTH_LOGIN =   `${URL_AUTH}:signInWithPassword?key=${FIREBASE_API_KEY}`;
export const URL_AUTH_UPDATE =  `${URL_AUTH}:update?key=${FIREBASE_API_KEY}`
