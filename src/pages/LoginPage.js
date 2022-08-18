import { useState } from "react";
import { login, createAcc } from "../store/auth/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectToken } from "../store/auth/selectors";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken());

  function handleSubmit(event) {
    event.preventDefault();

    // TODO
    if (event.target.textContent === "Login") {
      console.log("TODO login with:", email, password);
      dispatch(login(email, password, navigate));
    }
    if (event.target.textContent === "Create Account") {
      dispatch(createAcc(email, password, name));
    }
  }

  return (
    <div id="LoginPage">
      <p>{token ? "logged in!" : "not logged in"}</p>
      <h1>Login</h1>
      <form>
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
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <br />
          {" or "}
          <br />
          <button type="submit" onClick={handleSubmit}>
            Create Account
          </button>{" "}
          <br />
          <label>
            name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
      </form>
    </div>
  );
}
