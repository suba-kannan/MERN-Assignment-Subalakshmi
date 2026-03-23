import {useState} from "react"

const Counter = () => {
  const [count,setCount]=useState(0)

  const handleIncrease= ()=>{
    setCount(prev=>prev+1)
  }
  const handleDecrease =()=>{
    setCount(prev=>prev-1)
  }

  return (
    <>
    <div className="p-4 border m-4 text-center">
      <h2 className="text-xl font-bold">Counter</h2>
      <p className="text-lg">{count}</p>
      <button onClick={handleIncrease} className="bg-green-500 text-white px-3 py-1 m-2">Increase</button>
      <button onClick={handleDecrease} className="bg-red-500 text-white px-3 py-1 m-2">Decrease</button>
    </div>
    </>
  )
}

export default Counter