import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-900 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-200">MyStore</h1>

      <div className="flex gap-6 text-white font-medium">
        <Link to="/products" className="hover:text-indigo-200">
          Products
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
