import {useState} from 'react'

const UpdateAge = () => {
  const [user,setUser] = useState({name:"Suba",age:22})

  const handleChange =()=>{
    setUser({ ...user,age:user.age+1})
  };

  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">6. Update age:</h1>
      <div className="p-4">
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={handleChange} className='bg-purple-300 hover:bg-purple-200 mt-3 rounded p-2'>Increase Age</button>
      </div>
    </>
  );
};

export default UpdateAge