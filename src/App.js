import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate("/")}>HOME</button>
      <button onClick={() => navigate("/login")}>login</button>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/post/:id"} element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
