import {useState} from 'react'

const Login = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const toggleLogin = () =>{ 
    setIsLoggedIn(!isLoggedIn);
  }


  return (
    <>
    <h1 className="font-extrabold text-xl mb-1">4. Login Status:</h1>
    <div className="p-4">
      <h2>{isLoggedIn ? "Welcome User":"Please Login"}</h2>
      <button onClick={toggleLogin} className='bg-yellow-300 hover:bg-yellow-200 mt-3 rounded p-2'>Login</button>
    </div>
    </>
  );
};

export default Login