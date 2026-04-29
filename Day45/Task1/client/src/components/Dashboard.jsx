import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users,setUsers] = useState([])
  

  const fetchUsers = async()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/user/all")
      setUsers(res.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchUsers()
  },[])

  const mapped = users.map((e)=>e.name)
  const filtered = users.filter((e)=>e.email.includes("gmail"))

  const search = users.find((e)=>e.name.includes("Suba"))

  return (
    <div className="p-6">

      <h2 className="text-lg font-bold mt-4">All users(map)</h2>
      {mapped.map((name,i)=>(
        <p key={i}>{name}</p>
      ))}

      <h2 className="text-lg font-bold mt-4">Filtered users(gmail)</h2>
      {filtered.map((e)=>(

        <p key={e._id}>{e.email}</p>
      ))}

      <h2 className="text-lg font-bold mt-4">Find user</h2>
      <p>{search?search.name:"No user found"}</p>
    </div>
  )
}

export default Dashboard;
