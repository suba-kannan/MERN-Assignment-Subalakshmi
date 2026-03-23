import {useState} from 'react'

const Skills = () => {
    const [skills, setSkills] = useState(["Html","CSS"])

    const handleAddSkill=()=>{
      const newSkill= "React"
      setSkills((prev)=>[...prev,newSkill])
    }
  return (
    <>
    <div className="p-4 border m-4 text-center">
      <h2 className="text-xl font-bold">Skills</h2>
      <ul>
        {skills.map((e,i)=>(
          <li key={i}>{e}</li>
        ))}
      </ul>
      <button onClick={handleAddSkill} className="bg-orange-500 text-white px-3 py-1 mt-2">Add Skill</button>
    </div>
    </>
  )
}

export default Skills