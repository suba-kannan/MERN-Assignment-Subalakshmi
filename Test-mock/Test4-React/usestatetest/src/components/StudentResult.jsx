import {useState} from 'react'

const StudentResult = () => {
    const [student,setStudent]=useState({name:"Suba",mark:70,result:"Fail"})
    const updateResult =()=>{
      const res=student.mark>=50? "Pass":"Fail"
      setStudent({...student,result:res})
    };
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">10. Student result:</h1>
      <div className="p-4">
        <p>Name: {student.name}</p>
        <p>Mark: {student.mark}</p>
        <p>Result: {student.result}</p>
        <button onClick={updateResult} className="bg-orange-300 hover:bg-orange-200 mt-3 rounded p-2">Show result </button>
      </div>
    </>
  );
}

export default StudentResult