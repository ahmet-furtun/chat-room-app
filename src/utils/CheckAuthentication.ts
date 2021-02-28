//in CheckAuthentication.ts
import jwtDecode from "jwt-decode"; //you must install jwt-decode using npm
import { logoutUser, getUserData } from "../redux/actions/userActions";
import store from "../redux/store";
import axios from "axios";
import { SET_AUTHENTICATED } from "../redux/types";
export const CheckAuthentication = () => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    const decodedToken: any = jwtDecode(authToken);
    console.log(decodedToken);
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = "Bearer " + authToken;
    store.dispatch(getUserData());
  }
};