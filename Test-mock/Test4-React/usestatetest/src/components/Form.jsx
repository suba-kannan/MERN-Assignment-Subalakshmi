import {useState} from 'react'

const Form = () => {
    const [form,setForm] = useState({name:"",email:""})

    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <>
      <h1 className="font-extrabold text-xl">12. Form:</h1>
      <div className="p-4 ">
        <label>Name </label>
        <input name="name" onChange={handleChange} placeholder="Enter your name" />
        <label>Email  </label>
        <input name="email" onChange={handleChange} placeholder="Enter your email" />
        <p>Name:{form.name}</p>
        <p>Email:{form.email}</p>
      </div>
    </>
  );
}

export default Form