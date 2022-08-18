import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMe } from "../store/auth/selectors";
import { createPost } from "../store/postPage/actions";

export default function NewPost() {
  const user = useSelector(selectMe());
  const dispatch = useDispatch();
  const initialInput = { title: "", content: "" };
  const [input, setInput] = useState(initialInput);

  const formController = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("input", input);
    dispatch(createPost({ ...input, token: localStorage.jwt }));
    setInput(initialInput);
  };
  return (
    <div id="NewPost">
      <form onSubmit={submit}>
        <p>Hello, {user.name}</p>
        <br />
        <label>
          title:
          <br />
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => formController(e)}
          />
        </label>
        <br />
        <label>
          content:
          <br />
          <textarea
            cols="30"
            rows="10"
            name="content"
            value={input.content}
            onChange={(e) => formController(e)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
