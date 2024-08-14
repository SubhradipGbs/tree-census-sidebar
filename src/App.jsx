import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Login from "./Pages/Auth/Login";
import PublicRoute from "./layout/routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
