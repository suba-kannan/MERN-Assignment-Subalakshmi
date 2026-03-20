import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">React Router</h1>
        <div className="flex gap-7 items-center ">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/projects" className="hover:text-gray-300">Projects</NavLink>
          <NavLink to="/login" className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar