const DashboardHome = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Users</p>
            <h2 className="text-3xl font-bold">1,200</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Orders</p>
            <h2 className="text-3xl font-bold">350</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold">₹ 8,400</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardHome;
