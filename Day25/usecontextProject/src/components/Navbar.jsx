import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import CartContext from "../context/CartContext"
import RoleContext from "../context/RoleContext"
import AuthContext from "../context/AuthContext"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"

const Navbar = () => {
  const {count} =useContext(CartContext)
  const {isAdmin} = useContext(RoleContext)
  const {handleLogout} =useContext(AuthContext)
  const navigate= useNavigate()

  return (
    <>
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <span className="rounded border px-3 py-2 text-sm font-medium">
            Cart:{count}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
          {isAdmin ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <Link to="/profile">Profile</Link>
          )}
          <button
            type="button"
            onClick={() => {
              handleLogout();
              navigate("/login");
            }}
            className="rounded border px-3 py-2 hover:bg-current/10 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar
