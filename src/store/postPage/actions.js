import axios from "axios";
import { postFullyFetched, startLoading } from "./slice";
import { API_URL } from "../../config";

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading);

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    const combinedRes = {
      post: postResponse.data,
      comments: commentsResponse.data,
    };

    console.log("fetch results", combinedRes);
    dispatch(postFullyFetched(combinedRes));
  };
}
