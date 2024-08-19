import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Login from "./Pages/Auth/Login";
import PublicRoute from "./layout/routes/PublicRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ApplicationForm from "./Pages/Forms/ApplicationsForm";
import PaymentForm from "./Pages/Forms/PaymentForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<ApplicationForm />} />
            <Route path="/payment-forms" element={<PaymentForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
