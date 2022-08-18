import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMe } from "../store/auth/selectors";

export default function NewPost() {
  const user = useSelector(selectMe());
  const [input, setInput] = useState({ title: "", content: "" });

  const formController = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("input", input);
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
