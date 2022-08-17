import axios from "axios";
import { API_URL } from "../../config";

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    //make api request to /login

    try {
      const response = await axios.post(`${API_URL}/login`);
    } catch (e) {
      console.log(e.message);
    }
  };
}
