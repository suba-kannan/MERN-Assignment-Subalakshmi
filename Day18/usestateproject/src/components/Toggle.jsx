import {useState} from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true)
    const handleClick =()=>{
        setToggle(!toggle)
    }
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-3">
        <h1 className='font-bold'>Result: <p >{toggle ? "online" : "offline"}</p></h1>
        <button onClick={handleClick} className='bg-green-400 hover:bg-green-300 p-2 rounded'>Toggle status</button>
      </div>
    </>
  );
}

export default Toggle