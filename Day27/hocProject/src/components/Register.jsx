import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({getUsers,saveUsers}) => {
  const [form,setForm] = useState({name: "",email:"",password:""})

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const users = getUsers()
    users.push(form)
    saveUsers(users)
    alert("Registered Successfully")
    navigate("/login")
  };

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Name</label>
          <input type="text" placeholder="Enter your name" className="border p-2 rounded-md" onChange={(e)=>setForm({...form,name:e.target.value})}/>

          <label className="mb-1 text-sm font-medium">Email</label>
          <input type="email" placeholder="Enter your email" className="border p-2 rounded-md" onChange={(e)=>setForm({...form,email:e.target.value})}/>

          <label className="mb-1 text-sm font-medium">Password</label>
          <input type="password" placeholder="Enter your password" className="border p-2 rounded-md mb-4" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
          Register
        </button>
      </form>
    </div>
  )
}


export default Register
