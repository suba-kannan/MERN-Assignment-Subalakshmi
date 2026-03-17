import image1 from '../../public/1.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white flex justify-between items-center px-6 py-3 ">
        <div className='flex items-center gap-2" '>
          <div className="w-12 h-10">
            <img src={image1} />
          </div>
          <div className="text-l font-semibold">
            <p>ReactApp</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
          </div>
          <div className="h-6 border-l-2 border-gray-400"></div>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/profile"
              className="border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar