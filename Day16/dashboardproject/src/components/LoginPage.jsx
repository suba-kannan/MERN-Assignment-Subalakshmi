import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const path = location.state?.path?.pathname || "/dashboard";
    navigate(path);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-300">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-75">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-58 mb-4 px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-58 mb-6 px-4 py-2 border rounded-lg"
          />

          <button
            onClick={handleLogin}
            className="w-58 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
