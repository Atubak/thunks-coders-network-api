import { useState } from "react";
import { login } from "../store/auth/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectToken } from "../store/auth/selectors";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const token = useSelector(selectToken());

  function handleSubmit(event) {
    event.preventDefault();

    // TODO
    console.log("TODO login with:", email, password);
    dispatch(login(email, password));
  }

  return (
    <div id="LoginPage">
      <p>{token ? "logged in!" : "not logged in"}</p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}
