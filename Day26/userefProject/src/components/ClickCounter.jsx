import React, { useRef } from 'react'

const ClickCounter = () => {
    const countRef = useRef(0)
    
    const handleClick =()=>{
        const result = countRef.current++
        console.log("Count:", result);
    
    }
  return (
    <>
    <h1>Increase count:</h1>
    <button onClick={handleClick}>click</button>
    
    </>
  )
}

export default ClickCounter