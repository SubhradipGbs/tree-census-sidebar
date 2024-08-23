import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Login from "./Pages/Auth/Login";
import PublicRoute from "./layout/routes/PublicRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ApplicationForm from "./Pages/Forms/ApplicationsForm";
import PaymentForm from "./Pages/Forms/PaymentForm";
import Applicationts from "./Pages/Applications/Applicationts";
import Payments from "./Pages/Applications/Payments";
import TreeSurvey from "./Pages/Reports/TreeSurvey";
import AreaSurvey from "./Pages/Reports/AreaSurvey";
import PaymentReport from "./Pages/Reports/PaymentReport";
import PrivateRoute from "./layout/routes/PrivateRoute";
import Users from "./Pages/UserReport/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<ApplicationForm />} />
            <Route path="/payment-forms" element={<PaymentForm />} />
            <Route path="/applications" element={<Applicationts />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/tree-survey" element={<TreeSurvey />} />
            <Route path="/area-survey" element={<AreaSurvey />} />
            <Route path="/payment-report" element={<PaymentReport />} />
            <Route path="/userlist" element={<Users />} />
            <Route path="/user-assinments" element={<PaymentReport />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
