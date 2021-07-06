import axios from "axios";
import decode from "jwt-decode";
import instance from "./instance";
import { treasuareList } from "./treasureActions";

export const SET_USER = "SET_USER";

export const signUp = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      dispatch(setUser(res.data.token));
      dispatch(await treasuareList());
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

//we didn't need the reducer because we dont those data anymore, in the time being
//and if we put it, it's not gonna be a problem

export const signIn = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", userData);
      // console.log("res", decode(res.data.token));
      dispatch(setUser(res.data.token));
      dispatch(await treasuareList());
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (history) => {
  return setUser();
};
// store.dispatch(treasuareList());
export const checkForToken = () => async (dispatch) => {
  const token = localStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      dispatch(setUser(token));
      dispatch(await treasuareList());

      return;
    }
  }
  dispatch(setUser());
};

export const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = "Bearer " + token;
    console.log(token);
    return {
      type: SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: SET_USER,
      payload: null,
    };
  }
};
