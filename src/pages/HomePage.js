import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function HomePage() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchPosts() {
    setData({ ...data, loading: true }); //before fetching data, loading is set to true

    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.rows;

    setData({
      loading: false, //once the data is fetched, loading is set to false
      posts: posts,
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data.loading ? "Loading" : data.posts.map((post) => post.title)}
    </div>
  );
}
