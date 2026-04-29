import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [user,setUser] = useState(null)
  const navigate = useNavigate()

  const getDashboard = async()=>{

    try {

      const token = localStorage.getItem("jwttoken")

      const res = await axios.get("http://localhost:5000/api/user/dashboard",{headers:{Authorization:token}})
      setUser(res.data.user)

    } catch (error) {

      console.log("Error",error.response.data.msg);

      localStorage.removeItem("jwttoken")
      navigate("/")
    }
  };

  useEffect(()=>{
    getDashboard()
  },[])

  return (
   <>
    <div>
      <h1>Dashboard</h1>
        <p>Email:{user.email}</p>
    </div>
   </>
  )
}

export default Dashboard
