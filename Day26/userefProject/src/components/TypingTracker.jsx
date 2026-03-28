import React, { useRef, useState } from 'react'

const TypingTracker = () => {
    const [text,setText]=useState("")
    const [status,setStatus] = useState("")
    const timerRef = useRef(null)

    const handleChange =(e)=>{

        setText(e.target.value)
        setStatus("Typing...")

        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
          setStatus("user stopped typing...");
        }, 2000);

    }

  return (
    <>
    <div>
        <h1>Type tracker:</h1>
        <label>Type: </label>
        <input type="text" value={text} onChange={handleChange} />
        <p>{status}</p>
    </div>

    </>
  )
}

export default TypingTracker