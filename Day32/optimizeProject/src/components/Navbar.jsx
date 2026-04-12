import { useContext } from "react"
import CartContext from "../context/CartContext"
import { useLocation, Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import AuthContext from "../context/AuthContext"

const Navbar = ()=>{
  const {toggleTheme} = useContext(ThemeContext)
  const {state,dispatch} = useContext(AuthContext)
  const {state:cart} = useContext(CartContext)

  const location = useLocation()

  if (location.pathname === "/login") return null

  return (
    <div className="flex justify-between p-4 bg-blue-500 text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {state.isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </div>

      <div className="flex gap-4 items-center">
        <button onClick={toggleTheme}>Theme</button>

        <span>Cart: {cart.items.length}</span>

        {state.isLoggedIn ? (
          <button onClick={() =>{
              localStorage.removeItem("user")
              dispatch({ type: "LOGOUT" })}}>
            Logout
          </button>
        ):(
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
