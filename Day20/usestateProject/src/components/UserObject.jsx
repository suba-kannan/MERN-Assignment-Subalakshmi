import {useState} from 'react'

const UserObject = () => {
    const [user,setUser]=useState({name:"Suba",age:22})

    const handleAge=()=>{
        setUser((prev)=>({...prev,age:prev.age+1}))
    }
  return (
    <>
    <div className="p-4 border m-4 text-center">
      <h2 className="text-xl font-bold">User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleAge} className="bg-teal-500 text-white px-3 py-1 mt-2">Increase Age</button>
    </div>
    </>
  )
}

export default UserObject