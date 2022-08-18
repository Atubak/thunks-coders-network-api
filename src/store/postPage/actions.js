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

export function createPost(post) {
  // build a post req here that sends an object with title and content properties. send it to api and thats it, no reducer needed
  return async function createPostThunk(dispatch, getState) {
    axios.post(
      `${API_URL}/posts`,
      { title: post.title, content: post.content },
      { headers: { Authorization: `Bearer ${post.token}` } }
    );
  };
}
