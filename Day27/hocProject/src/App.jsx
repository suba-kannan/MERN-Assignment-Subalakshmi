import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import withLocalStorage from "./hoc/withLocalStorage";
import withAuth from "./hoc/withAuth";

const RegisterWithLS = withLocalStorage(Register)
const LoginWithLS = withLocalStorage(Login)
const DashboardWithLS = withLocalStorage(Dashboard)
const ProtectedDashboard = withAuth(DashboardWithLS)

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterWithLS />} />
        <Route path="/login" element={<LoginWithLS />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
