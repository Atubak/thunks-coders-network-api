import axios from "axios";
import { API_URL } from "../../config";
import { storeToken, storeUser } from "./slice";

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    //make api request to /login
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);

      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: "Bearer faketokenforkelley238765293" },
      });

      console.log(meResponse.data);

      dispatch(storeToken(response.data.jwt));
      dispatch(storeUser(meResponse.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
