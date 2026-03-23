import {useState} from 'react'

const DoubleCounter = () => {
    const [count,setCount] = useState(0)
    const handleTwice =()=>{
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
    };

  return (
    <>
    <div className="p-4 border m-4 text-center">
      <h2 className="text-xl font-bold">Increase Twice</h2>
      <p className="text-lg">{count}</p>
      <button onClick={handleTwice} className="bg-blue-500 text-white px-3 py-1 mt-2">Increase Twice</button>
    </div>
    </>
  )
}

export default DoubleCounter