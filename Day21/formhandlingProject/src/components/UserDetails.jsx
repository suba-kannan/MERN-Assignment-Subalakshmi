import {useState} from 'react'

const UserDetails = () => {
  const [formData,setFormData]=useState({name:"",email:"",age:""})

  const handleChange =(e)=>{
    const {name,value}=e.target

    setFormData((prev)=>({...prev,[name]:value,}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-purple-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
        <h2 className="text-xl font-bold mb-4 text-center">User Form</h2>

        <label className="block mb-1 font-medium">Name</label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full border p-2 mb-3"/>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} className="w-full border p-2 mb-3"/>
        <label className="block mb-1 font-medium">Age</label>
        <input type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} className="w-full border p-2 mb-4"/>

        <button type="submit" className="w-full bg-blue-950 text-white p-2">Submit</button>
      </form>
    </div>
    </>
  )
}

export default UserDetails