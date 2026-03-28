import { useState } from "react"
import RoleContext from "../context/RoleContext"

const RoleProvider = ({children}) => {
  const [isAdmin,setIsAdmin]=useState(false)

  return (
    <RoleContext.Provider value={{isAdmin,setIsAdmin}}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider
