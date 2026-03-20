import {useState} from 'react'

const ProfileUpdate = () => {
 const [update, setUpdate] = useState({name:"Priya",role:"Developer",experience:2})
     const handleChange=()=>{
       setUpdate({...update,role:"senior developer",experience:update.experience+1})
   
     }
     return (
       <>
       <div className='flex flex-col gap-3 items-center'>
           <p>Name:{update.name}</p>
           <p>Age:{update.role}</p>
           <p>Experience:{update.experience}</p>
         <button onClick={handleChange} className='bg-pink-400 hover:bg-pink-300 p-2 rounded'>Promote</button>
   
       </div>
       </>
     )
   }

export default ProfileUpdate