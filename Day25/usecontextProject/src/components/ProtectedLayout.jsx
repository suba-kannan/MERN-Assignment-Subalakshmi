import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import Navbar from "./Navbar"

const ProtectedLayout = () => {
  const {login} = useContext(AuthContext)
  if (!login){
    return <Navigate to="/login" />
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedLayout
