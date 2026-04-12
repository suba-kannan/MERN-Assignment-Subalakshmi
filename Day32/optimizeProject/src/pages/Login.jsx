import { useState, useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = ()=>{
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleLogin = ()=>{
    const user = {email,password}

    localStorage.setItem("user",JSON.stringify(user))
    dispatch({type:"LOGIN",payload:user})
    navigate("/dashboard")
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border rounded w-80 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <input className="border p-2 w-full mb-3 rounded" placeholder="Email" value={email} onChange={handleEmail} />
        <input className="border p-2 w-full mb-3 rounded" placeholder="Password" value={password} onChange={handlePassword}/>

        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded">Login</button>
      </div>
    </div>
  )
}

export default Login
