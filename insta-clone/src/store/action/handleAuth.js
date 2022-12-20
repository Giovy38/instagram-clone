import Axios from "axios";

const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const LOGOUT = "LOGOUT";

export const auth = (email, password, isSignUp) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      const key = "AIzaSyBclXZCV1IXWozMnbnwQSze78mVG2WyBhc";
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

      if (!isSignUp) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
      }
      const response = await Axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });

      console.log(response.data);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(authSuccess(response.data));
    } catch (error) {
      dispatch(authFail(error));
      console.log(error);
    }
  };
};

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    token: userData.idToken,
    userId: userData.localId,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: LOGOUT,
  };
};

export const authCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const userId = localStorage.getItem("userId");
    dispatch(authSuccess({ idToken: token, localId: userId }));
  };
};

export { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT };
