import {useState} from 'react'

const LiveValue = () => {
    const [text, setText] = useState("");
    const handleChange = (e)=> {
        setText(e.target.value);
    }

  return (
    <>
      <h1 className="font-extrabold text-xl">2. Live Input:</h1>
      <div className="p-4 ">
        <label className='mr-2'>Type:</label>
        <input onChange={handleChange} className="border p-2" />
        <p>Live value: {text}</p>
      </div>
    </>
  );
};
export default LiveValue