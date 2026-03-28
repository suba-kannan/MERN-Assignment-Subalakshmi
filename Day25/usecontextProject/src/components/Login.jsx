import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import RoleContext from "../context/RoleContext"
import AuthContext from "../context/AuthContext"

const Login = () => {
  const {setIsAdmin} =useContext(RoleContext)
  const {handleLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const email= e.target.email.value
    const admin = email==="admin@gmail.com"
    setIsAdmin(admin)
    handleLogin()
    navigate(admin?"/dashboard":"/profile")
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>

          <div className="flex flex-col gap-4">
            <label className="font-medium">Email</label>
            <input type="email" name="email" placeholder="admin@gmail.com" required className="w-full rounded-lg border px-3 py-2"/>
            <label className="font-medium">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <button type="submit" className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
            Login
          </button>

          <p className="mt-4 text-center text-sm">
            No account?
            <Link to="/register" className="font-medium text-blue-500">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login
