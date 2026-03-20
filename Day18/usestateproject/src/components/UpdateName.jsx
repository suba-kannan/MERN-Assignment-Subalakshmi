import {useState} from 'react'

const UpdateName = () => {
  const [update, setUpdate] = useState({name:"Jhon",age:25})
  const handleChange=()=>{
    setUpdate({...update,name:"Sudhan"})

  }

  return (
    <>
    <div className='flex flex-col gap-3 items-center'>
        <p>Name:{update.name}</p>
        <p>Age:{update.age}</p>
      <button onClick={handleChange} className='bg-blue-400 hover:bg-blue-300 p-2 rounded'>Change name</button>

    </div>
    </>
  )
}

export default UpdateName