import { useState } from "react"
import AuthContext from "../context/AuthContext"

const AuthProvider = ({children}) => {
  const [login,setLogin] = useState(false)

  const handleLogin=()=> {
    setLogin(true)
  }
  const handleLogout=()=>{
    setLogin(false)
  }

  return (
    <AuthContext.Provider value={{login,handleLogin,handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider
