import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [data,setData] = useState({name:"",email:"",password:""});
    const navigate = useNavigate()

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleClick = async(e) =>{

        e.preventDefault()
        try {
            const sendData = await axios.post("http://localhost:5000/api/user/register",data);
            alert(sendData.data.msg)
            setData({name:"",email:"",password:""})
            navigate("/");
            
        } catch (error) {
            alert(error.response.data.msg)
        }

    };
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleClick} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input className="w-full mb-3 p-2 border rounded" type="text" name='name' value={data.name} placeholder='Enter the name' onChange={handleChange} />
        <input className="w-full mb-3 p-2 border rounded" type="email" name='email' value={data.email} placeholder='Enter the Email' onChange={handleChange} />
        <input className="w-full mb-3 p-2 border rounded" type="password" name='password' value={data.password} placeholder='Enter the password' onChange={handleChange} />
        <input className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" type="submit" value={"Register"}/>
     </form>
    </div>
    
    </>
  )
}

export default Register