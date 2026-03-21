import {useState} from 'react'

const Skills = () => {
    const [skills,setSkills] =useState(["Html","CSS"])
    const addSkill=()=>{
        setSkills([...skills,"Javascript"])
    }
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">8. Add skill:</h1>
      <div className="p-4">
        {skills.map((e,i) =>(
          <p key={i}>{e}</p>
        ))}
        <button onClick={addSkill} className="bg-red-300 hover:bg-red-200 mt-3 rounded p-2">Add skill</button>
      </div>
    </>
  );
}

export default Skills