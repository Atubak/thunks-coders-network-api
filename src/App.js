import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <Toolbar></Toolbar>

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/post/:id"} element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
