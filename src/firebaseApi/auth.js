import axios from "axios";
EXPO_PUBLIC_GOOGLE_API_KEY = `AIzaSyAmyrRp_5RIxY-ieqPdce-M4vppLiDBwk8`
EXPO_PUBLIC_DB_URL = `https://test-292a0-default-rtdb.firebaseio.com`


export const signup = (email, password) => {
  console.log("Email:", email, "Password:", password);
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${EXPO_PUBLIC_GOOGLE_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }, email, password, returnSecureToken: true
    }
  );
};

export const login = (email, password) => {
  console.log("Email:", email, "Password:", password);
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EXPO_PUBLIC_GOOGLE_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }, email, password, returnSecureToken: true
    }
  );
};
