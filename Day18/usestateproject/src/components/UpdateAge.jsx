import {useState} from 'react'

const UpdateAge = () => {
  const [update, setUpdate] = useState({name:"Ravi",age:22,city:"Chennai"})
    const handleChange=()=>{
      setUpdate({...update,age:update.age+1})
  
    }
    return (
      <>
      <div className='flex flex-col gap-3 items-center'>
          <p>Name:{update.name}</p>
          <p>Age:{update.age}</p>
          <p>City:{update.city}</p>
        <button onClick={handleChange} className='bg-blue-400 hover:bg-blue-300 p-2 rounded'>Increase age</button>
  
      </div>
      </>
    )
  }

export default UpdateAge