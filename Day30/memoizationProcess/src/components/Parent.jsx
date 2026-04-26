import React from 'react'
import { useState, useCallback } from "react"
import Child from './Child';

const Parent = () => {
    const [theme,setTheme] = useState(false)

    const calculateSquare = useCallback((num)=>{
      let result=0
      for(let i=0;i<num;i++) {
        result+=num
      }
      return result
    },[])

    const handleTheme =()=>{
      setTheme(!theme)
    }

  return (
    <>
      <div className={theme?"p-6 bg-gray-900 text-white":"p-6 bg-white text-black"}>
        <h2 className="text-2xl font-bold mb-4">useCallback</h2>

        <div className="flex gap-3 mb-4">
          <button onClick={handleTheme} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow">Toggle theme</button>
        </div>
        <Child calculateSquare={calculateSquare} />
      </div>
    </>
  );
}

export default Parent