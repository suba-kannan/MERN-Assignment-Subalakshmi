import {useState} from 'react'

const UpdateName = () => {
    const [name,setName] = useState("Suba")
    const handleChange=()=>{
        setName("Lajitha")
    }
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">5. Update name:</h1>
      <div className="p-4">
        <h2>Name: {name}</h2>
        <button onClick={handleChange} className='bg-pink-300 hover:bg-pink-200 mt-3 rounded p-2'>Change Name</button>
      </div>
    </>
  );
}

export default UpdateName