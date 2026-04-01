import React, { useState, useMemo } from "react"

const PrimeNumber = () => {
  const [number,setNumber] = useState(0)
  const [check,setCheck] = useState(false)
  const [theme,setTheme] = useState(false)

  const isPrime =(num)=>{

    let count = 0

    for (let i= 1;i<=num;i++){
      if (num% i===0){
        count++ 

    }
    }
    for (let i=0;i<10;i++){
        console.log(i);
        
    }

    return count===2
  }
  
  

  const changeTheme =()=>{
     setTheme(!theme)

  }

  const checkPrime =()=>{
    setCheck(true)
  }

  const handleChange=(e)=>{
    setNumber(Number(e.target.value));
    console.log("setNumber",setNumber)
    setCheck(false)
    
  }

  console.log("number", number)


  const result = useMemo(()=>{
    if (!check){
        return ""
    }
    return isPrime(number)
  },[check,number])

  return (
    <div className={theme?"bg-gray-900 text-white flex flex-col items-center justify-center gap-4":"bg-gray-100 text-black flex flex-col items-center justify-center gap-4"}>
      <h2 className="text-2xl font-bold">Prime number checker</h2>
      <input type="number" value={number} onChange={handleChange} className="border px-3 py-2 rounded w-40 text-center text-black" />
      <button onClick={checkPrime} className="bg-green-500 text-white px-4 py-2 rounded">Check prime</button>
      <p className="text-lg">{result?"Prime Number":"Not Prime"}</p>
      <button onClick={changeTheme} className="bg-purple-500 text-white px-4 py-2 rounded">Toggle theme</button>
    </div>
  )
}

export default PrimeNumber