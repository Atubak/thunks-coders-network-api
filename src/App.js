import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
