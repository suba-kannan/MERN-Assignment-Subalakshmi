import React from 'react'
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className='bg-blue-500 flex justify-center items-center h-screen'>
        <div className='bg-white p-6 rounded w-80 shadow-lg '>
          <h2 className='text-2xl font-bold text-center mb-5 text-green-700'>Register</h2>

          <label className='font-bold'>Name</label><br/>
          <input type="text" placeholder="Enter your name" className='border w-full p-2 rounded mb-3'/>

          <label className='font-bold'>Email</label><br/>
          <input type="text" placeholder="Enter your email" className='border w-full p-2 rounded mb-3'/>

          <label className='font-bold'>Password</label><br/>
          <input type="password" placeholder="Enter your password" className='border w-full p-2 rounded mb-4'/>

          <NavLink to="/">
            <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
          </NavLink>

          <p className='text-sm mt-3 text-center'>
            Already have an account?
            <NavLink to="/login" className="text-blue-500 ml-1">Login</NavLink>
          </p>

        </div>
      </div>
    </>
  );
}

export default Register;