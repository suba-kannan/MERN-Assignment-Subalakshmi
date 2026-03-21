import {useState} from 'react'

const Mode = () => {
    const [dark, setDark] = useState(false);
    const toggle=()=>{
        setDark(!dark)
    }
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">3. Theme:</h1>
      <div className={dark ? "bg-black text-white p-4" : "bg-white p-4"}>
        <p>{dark ? "Dark Mode" : "Light Mode"}</p>
        <button onClick={toggle} className='bg-blue-300 hover:bg-blue-200 mt-3 rounded p-2'>Toggle</button>
      </div>
    </>
  );
}

export default Mode