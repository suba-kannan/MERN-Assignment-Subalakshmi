import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">useState</h1>
        <div className="flex gap-7 items-center ">
          <NavLink to="/counter" className="hover:text-gray-300">
            Counter
          </NavLink>
          <NavLink to="/toggle" className="hover:text-gray-300">
            Toggle
          </NavLink>
          <NavLink to="/updatename" className="hover:text-gray-300">
            Update Name
          </NavLink>
          <NavLink to="/updateage" className="hover:text-gray-300">
            Update Age
          </NavLink>
          <NavLink to="/profile" className="hover:text-gray-300">
            Profile Update
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar