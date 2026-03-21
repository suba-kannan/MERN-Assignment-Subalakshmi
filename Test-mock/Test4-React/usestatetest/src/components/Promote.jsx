import {useState} from 'react'

const Promote = () => {
    const [profile,setProfile] = useState({name:"Suba",role:"Developer",experience:3})

    const handleChange =()=>{
        setProfile({...profile,role:"Senior developer",experience:profile.experience+1})
    }
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">15. Promote:</h1>
      <div className="p-4">
        <p>Name: {profile.name}</p>
        <p>Role: {profile.role}</p>
        <p>Experience: {profile.experience}</p>
        <button onClick={handleChange} className='bg-yellow-300 hover:bg-yellow-200 mt-3 rounded p-2'>Promote</button>
      </div>
    </>
  )
}

export default Promote