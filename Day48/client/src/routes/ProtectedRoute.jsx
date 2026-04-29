import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{


  const token = localStorage.getItem("jwttoken")
  if(!token){

    <Navigate to="/" />
    return
  }

  return children
}

export default ProtectedRoute
