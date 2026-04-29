import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center px-6 py-4 bg-blue-400 text-white">
      <h1 className="text-xl font-bold">Logo</h1>
      <div className="space-x-4">
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar