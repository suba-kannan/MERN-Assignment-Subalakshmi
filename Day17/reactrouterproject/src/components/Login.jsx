import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="bg-green-500 flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded w-80 shadow-lg ">
          <h2 className="text-2xl font-bold text-center mb-5 text-blue-700">Login</h2>

          <label className="font-bold ">Email</label><br/>
          <input type="text" placeholder="Enter your email" name="email" className="border w-full p-2 rounded mb-3"/>

          <label className="font-bold ">Password</label><br/>
          <input type="password" placeholder="Enter your password" name="password" className="border w-full p-2 rounded mb-4"/>

          <NavLink to="/">
            <button className="w-full bg-blue-600 text-white p-2 rounded mt-3 hover:bg-blue-700">Login</button>
          </NavLink>

          <p className="text-sm mt-3 text-center ">
            Not registered?
            <NavLink to="/register" className="text-blue-500 ml-1">Register</NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login