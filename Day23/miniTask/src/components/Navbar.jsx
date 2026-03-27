import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-pink-600 text-white p-4 flex justify-between'>
        <h1 className="text-xl font-bold">Pokemon</h1>
        <div className="flex gap-6">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar