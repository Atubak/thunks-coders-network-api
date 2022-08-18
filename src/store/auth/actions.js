import axios from "axios";
import { API_URL } from "../../config";
import { storeToken, storeUser, loading } from "./slice";

export function login(email, password, navigate) {
  return async function thunk(dispatch, getState) {
    //make api request to /login
    dispatch(loading(true));
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });

      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${response.data.jwt}` },
      });

      //make sure to clear localstorage to not get messed up by previous apps' data that was left over. this is bc localhost is always the same in react (port 3000)
      localStorage.clear();
      localStorage.setItem("jwt", response.data.jwt);
      dispatch(storeToken(response.data.jwt));
      dispatch(storeUser(meResponse.data));
      navigate("/");
      dispatch(loading(false));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function bootstrapLoginState() {
  return async function thunk(dispatch, getState) {
    console.log("bootstrapp starting");
    if (!localStorage.jwt) return console.log("no jwt");

    try {
      dispatch(loading(true));
      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.jwt}`,
        },
      });
      console.log(meResponse.data);

      dispatch(storeUser(meResponse.data));
      dispatch(loading(false));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const createAcc =
  (email, password, name) => async (dispatch, getState) => {
    console.log("createthunk", email, password, name);

    const response = axios.get(`${API_URL}/`);
  };
//WRITING THIS API REQUEST NOW
