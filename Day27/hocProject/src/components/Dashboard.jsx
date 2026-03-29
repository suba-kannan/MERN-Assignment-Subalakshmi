import { useNavigate } from "react-router-dom";

const Dashboard = ({logout}) => {
  const navigate = useNavigate()

  const handleLogout=()=>{
    logout()
    navigate("/login")
  }

  return (
    <>
      <div className="bg-amber-500">
        <h1>Dashboard</h1>
        <button className="bg-gray-400  border p-1" onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard
