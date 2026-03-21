import {useState} from 'react'

const UpdateCity = () => {
 const [user,setUser] = useState({name:"Suba",role:"Developer",city:"Chennai"})
 
   const handleChange =()=>{
     setUser({ ...user,city:"Madurai"})
   };
 
   return (
     <>
       <h1 className="font-extrabold text-xl mb-1">7. Update city:</h1>
       <div className="p-4">
         <p>Name: {user.name}</p>
         <p>Role: {user.role}</p>
         <p>City: {user.city}</p>
         <button onClick={handleChange} className='bg-orange-300 hover:bg-orange-200 mt-3 rounded p-2'>Change city</button>
       </div>
     </>
   );
 };

export default UpdateCity