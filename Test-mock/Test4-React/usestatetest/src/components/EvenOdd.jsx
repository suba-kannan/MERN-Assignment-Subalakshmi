import {useState} from 'react'

const EvenOdd = () => {
    const [count,setCount] =useState(0)
    const increseCount=()=>{
        setCount(count+1)
    }
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">11. Even or Odd:</h1>
      <div className="p-4">
        <p>Count: {count}</p>
        <p>{count%2 === 0? "Even":"Odd"}</p>
        <button onClick={increseCount} className='bg-blue-300 hover:bg-blue-200 mt-3 rounded p-2'>Increase</button>
      </div>
    </>
  )
}

export default EvenOdd