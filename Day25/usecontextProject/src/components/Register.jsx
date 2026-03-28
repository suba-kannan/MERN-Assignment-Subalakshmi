import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const navigate =useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/login")
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium">Name</label>
            <input type="text" name="username" placeholder="Enter your name" className="w-full rounded-lg border px-3 py-2"/>          
            <label className="text-sm font-medium">Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="w-full rounded-lg border px-3 py-2"/>
            <label className="text-sm font-medium">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="w-full rounded-lg border px-3 py-2"/>
          </div>

          <button type="submit" className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
            Register
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?
            <Link to="/login" className="font-medium text-blue-500">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register
