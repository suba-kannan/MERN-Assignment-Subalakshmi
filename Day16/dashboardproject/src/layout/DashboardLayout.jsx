import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-red-700 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-black">Dashboard</h1>

          <div className="flex gap-6 text-white">
            <Link to="/dashboard" className="hover:text-yellow-200 ">
              Home
            </Link>

            <Link to="/dashboard/profile" className="hover:text-yellow-200">
              Profile
            </Link>
          </div>
        </nav>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
