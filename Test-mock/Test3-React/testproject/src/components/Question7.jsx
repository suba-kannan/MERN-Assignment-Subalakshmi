//8.How do you render nested arrays (for example, skills inside a user object) in React?

import React from 'react'

const Question7 = () => {
    const details =[{
        id:1,
        name:"suba",
        course:"MERN",
        skills:["React","Node","Mysql"]
    },{
        id:2,
        name:"Lajitha",
        course:"Java",
        skills:["spring","html","css"]
    },{
        id:3,
        name:"Mala",
        course:"python",
        skills:["django","flask","python"]
    }

    ]
  return (
    <>

    <h2>Array of object with nested array:</h2>
      {details.map((detail, i) => (
        <div key={i + 1}>
          <p>{detail.id}</p>
          <p>{detail.name}</p>
          <p>{detail.course}</p>
          {detail.skills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
      ))}
    </>
  );
}

export default Question7