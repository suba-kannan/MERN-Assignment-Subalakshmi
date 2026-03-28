import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedLayout from "./components/ProtectedLayout";
import Admin from "./components/Admin";
import User from "./components/User";

const ThemeShell = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`min-h-screen ${theme ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {children}
    </div>
  );
};

const App = () => (
  <ThemeShell>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Admin />} />
          <Route path="/profile" element={<User />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  </ThemeShell>
);

export default App;
