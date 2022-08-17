import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments());
  console.log(postData);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div id="PostPage">
      <button onClick={() => navigate("/")}>HOME</button>
      {!postData.post ? (
        "loading..."
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">
            {moment(postData.post.createdAt).format("DD-MM-YYYY")}
            <br />
            {postData.post.developer.name}
            <br />
            {postData.post.tags.map((tag) => {
              return tag.tag;
            })}
          </p>

          <ReactMarkdown children={postData.post.content} />

          <h2>Comments</h2>
          <p>
            {postData.comments.rows.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="commentInstance"
                  style={{ margin: "20px" }}
                >
                  {comment.developer.name} said: <br />
                  <strong>{comment.text}</strong> on{" "}
                  {moment(comment.createdAt).format("DD-MM-YYYY")}
                </div>
              );
            })}
          </p>
        </>
      )}
    </div>
  );
}
