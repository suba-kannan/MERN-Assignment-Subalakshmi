import { useContext } from "react"
import { Navigate } from "react-router-dom"
import RoleContext from "../context/RoleContext"
import LanguageContext from "../context/LanguageContext"
import AddProductButton from "./AddProductButton"

const Admin = () => {
  const {isAdmin} =useContext(RoleContext)
  const {lang}=useContext(LanguageContext)

  if (!isAdmin){
    return <Navigate to="/profile"/>
  }

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-4 text-lg">{lang?"Vanakkam":"Hello"}</p>
        <div className="mt-8">
          <AddProductButton />
        </div>
      </div>
    </>
  );
};

export default Admin
