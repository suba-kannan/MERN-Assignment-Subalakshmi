import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data,setData] = useState({email:"",password:""})
    const navigate = useNavigate()

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleClick = async (e) => {

        e.preventDefault()

        try {
            const sendData = await axios.post("http://localhost:5000/api/user/login",data)
            alert(sendData.data.msg)
            setData({email:"",password:""})
            navigate("/dashboard");
            
        } catch (error) {
            alert(error.response.data.msg)
        }

    }
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleClick} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input className="w-full mb-3 p-2 border rounded" type="email" name='email' value={data.email} placeholder='Enter the Email' onChange={handleChange} />
        <input className="w-full mb-3 p-2 border rounded" type="password" name='password' value={data.password} placeholder='Enter the password' onChange={handleChange} />
        <input className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit" value={"Login"}/>
      </form>
    </div>
    </>
  )
}

export default Login