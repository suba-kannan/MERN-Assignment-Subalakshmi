import {useState} from 'react'

const AddNumbers = () => {
    const [nums,setNums] = useState([1,2,3])

    const handleChange=()=>{
      setNums([...nums,nums.length+1])
    }

  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">14. Add number:</h1>
      <div className="p-4">
        {nums.map((e,i) => <p key={i}>{e}</p>)}
        <button onClick={handleChange} className='bg-pink-300 hover:bg-pink-200 mt-3 rounded p-2'>Add</button>
      </div>
    </>
  )
}

export default AddNumbers