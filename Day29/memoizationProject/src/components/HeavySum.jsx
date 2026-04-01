import React, { useState, useMemo } from "react"

const HeavySum = () => {
  const [number,setNumber] = useState(0)
  const [theme,setTheme] = useState(false)

  const calculateSum =(num)=>{

    let sum = 0
    for(let i=1;i<=num;i++){ 
        sum += i 
    }
    for(let i=0;i<10;i++){
        console.log(i);
    }
    return sum
  }

  const handleChange=(e)=>{
    setNumber(Number(e.target.value));
    console.log("setNumber", setNumber);
    
  }

  console.log("number", number);

  const changeTheme =()=>{
     setTheme(!theme)

  }

  const result = useMemo(()=>
    calculateSum(number)
  ,[number])

  return (
    <>
    <div className={theme?"bg-gray-900 text-white flex flex-col items-center justify-center gap-4":"bg-gray-100 text-black flex flex-col items-center justify-center gap-4"}>
      <h2 className="text-2xl font-bold">Heavy sum calculation</h2>
      <input type="number" value={number} onChange={handleChange} className="border px-3 py-2 rounded w-40 text-center text-black" />
      <p className="text-lg">Result:{result}</p>
      <button onClick={changeTheme} className="bg-purple-500 text-white px-4 py-2 rounded">Toggle Theme</button>
    </div>
    </>
  )
}

export default HeavySum