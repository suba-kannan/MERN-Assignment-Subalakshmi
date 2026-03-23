import {useState} from 'react'

const Toggle = () => {
    const [show,setShow] = useState(true)
    const handleToggle=()=>{
      setShow((prev)=>!prev)
    }
  return (
    <>
    <div className="p-4 border m-4 text-center">
      <h2 className="text-xl font-bold">Toggle</h2>
      <button onClick={handleToggle} className="bg-purple-500 text-white px-3 py-1 mt-4 mb-2">
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This is visible text</p>}
    </div>
   </>
  )
}

export default Toggle