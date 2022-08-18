import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe } from "../store/auth/selectors";

export default function Toolbar() {
  const navigate = useNavigate();
  const me = useSelector(selectMe());
  console.log("me", me);

  const renderLoginBtn = !me ? (
    <button onClick={() => navigate("/login")}>login</button>
  ) : (
    <span>
      <pre>lol welcome back {me.name}</pre>
      <button>log out</button>
      <button onClick={() => navigate("/newpost")}>Add New Post</button>
    </span>
  );
  return (
    <div id="ToolBar" style={{ backgroundColor: "beige" }}>
      <button onClick={() => navigate("/")}>HOME</button>
      {renderLoginBtn}
    </div>
  );
}
