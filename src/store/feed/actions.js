import axios from "axios";
import { startLoading, postsFetched } from "./slice";
import { API_URL } from "../../config";

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading());

    const offset = getState().feed.posts.length;

    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    console.log("checking");
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
}
