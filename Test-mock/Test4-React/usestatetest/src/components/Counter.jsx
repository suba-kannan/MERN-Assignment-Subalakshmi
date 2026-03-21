import React, {useState} from 'react'

const counter = () => {
    const [count, setCount]= useState(0)

    const handleIncrease =()=>{
        setCount(count+1)
    }

    const handleDecrease =()=>{
        setCount(count-1)
    }

    const handleReset=()=>{
        setCount(0)
    }

  return (
    <>
    <h1 className='font-extrabold text-xl'>1. counter:</h1>
    <div className='flex flex-col items-center p-3'>
        <h1 className='font-bold '>Counter update</h1>
        <p>Count: {count}</p>
        <div className=' flex gap-3 mt-3'>
        <button onClick={handleIncrease} className='bg-pink-300 hover:bg-pink-200 rounded p-2'>Increase</button>
        <button onClick={handleDecrease} className='bg-pink-300 hover:bg-pink-200 rounded p-2'>Decrease</button>
        <button onClick={handleReset} className='bg-blue-300 hover:bg-blue-200 rounded p-2'>Reset</button>
        </div>
    </div>

    </>
  )
}

export default counter