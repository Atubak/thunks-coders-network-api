import { useEffect } from "react";
import { selectFeedPosts } from "../store/feed/selectors";
import { fetchPosts } from "../store/feed/actions";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const feedPosts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {!feedPosts.length
        ? "Loading"
        : feedPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          ))}
      <br />
      <button onClick={() => dispatch(fetchPosts)}>Load 5 more posts</button>
    </div>
  );
}
