import React from 'react'
import { useState, useEffect, useMemo } from "react";

const Filter = () => {
    const [names,setNames] = useState([])
    const [search,setSearch] =useState("")
    const [theme,setTheme] = useState(false)

    useEffect(()=>{
      const arr = Array.from({length:5000},(_,i)=>`User ${i+1}`)
      setNames(arr)
    },[])

    

    const filteredNames = useMemo(()=>{


      console.log("Filtering...")
      return names.filter((name)=>

        name.toLowerCase().includes(search.toLowerCase())
      )
    },[search,names])

    const handleChange =(e)=>{
        setSearch(e.target.value)

    }

    const handleTheme =()=>{
      setTheme(!theme)
    };
  return (
    <>
      <div className={theme?"p-6 bg-gray-900 text-white":"p-6 bg-white text-black"}>
      <h2 className="text-2xl font-bold mb-4">useMemo search filter</h2>

        <div className="flex gap-3 mb-4">

            <input type="text" placeholder="Search name..." value={search} onChange={handleChange} className={theme?"px-3 py-2 border rounded-lg text-white":"px-3 py-2 border rounded-lg text-black"}/>

            <button onClick={handleTheme} className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow">Toggle theme</button>
        </div>

        <h3 className="text-lg font-semibold">Results:</h3>
        <p className="mb-4">{filteredNames.length}</p>

        <div className="h-64 overflow-y-auto border rounded p-2">
          {filteredNames.slice(0,100).map((name,index)=>(
            <p key={index}>{name}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Filter