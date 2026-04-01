import React, { useState, useMemo } from "react"

const LargeArray = () => {
  const [numbers,setNumbers] = useState([])
  const [theme,setTheme] = useState(false)

  const handleArray = ()=>{
    const arr = []
    for (let i=1;i<=10;i++){
         arr.push(i) 
        }
    setNumbers(arr)
    console.log("arr", arr);
    
  }
  const changeTheme =()=>{
     setTheme(!theme)

  }

  const evenSum = useMemo(()=>{
    console.log("Calculating...")

    let sum = 0
    for (let i=0;i<numbers.length;i++) {
      if (numbers[i]%2===0){
         sum += numbers[i] 
        }
    }
    return sum
  },[numbers])

  return (
    <>
    <div className={theme?"bg-gray-900 text-white flex flex-col items-center justify-center gap-4":"bg-gray-100 text-black flex flex-col items-center justify-center gap-4"}>
      <h2 className="text-2xl font-bold">Large array filtering</h2>
      <button onClick={handleArray} className="bg-green-500 text-white px-4 py-2 rounded">Generate array</button>
      <p className="text-lg">Even sum:{evenSum}</p>
      <button onClick={changeTheme} className="bg-purple-500 text-white px-4 py-2 rounded">Toggle Theme</button>
    </div>
    </>
  )
}

export default LargeArray