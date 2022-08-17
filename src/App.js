import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/post/:id"} element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
