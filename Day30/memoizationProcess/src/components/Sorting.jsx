import React from 'react'
import { useState, useMemo } from "react";

const Sorting = () => {
    const [numbers,setNumbers] = useState([])
    const [theme,setTheme] = useState(false)

    const generateArray = ()=>{

      const arr = Array.from({length:10},()=>
        Math.floor(Math.random()*100),
      )
      setNumbers(arr)
    }

    const sortedNumbers =useMemo(()=>{
      console.log("Sorting...")
      
      return [...numbers].sort((a,b)=>a-b)
    },[numbers])

    const handleTheme=()=>{
        setTheme(!theme)
    }
     
  return (
    <>
      <div
        className={theme?"p-6 bg-gray-900 text-white":"p-6 bg-white text-black"}>
        <h2 className="text-2xl font-bold mb-4">useMemo Sorting</h2>

        <div className="flex gap-3 mb-4">
          <button onClick={generateArray} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">Generate numbers</button>
          <button onClick={handleTheme} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow">Toggle theme</button>
        </div>

        <h3 className="text-lg font-semibold">Original array:</h3>
        <p className="mb-4">{numbers.join(", ")}</p>

        <h3 className="text-lg font-semibold">Sorted array:</h3>
        <p>{sortedNumbers.join(", ")}</p>
      </div>
    </>
  )
}

export default Sorting