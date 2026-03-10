//5.How do you render an array of objects using .map() in React?

import React from 'react'

const Question5 = () => {
    const details =[{
        name:"suba",
        city:"Chennai",
        course:"MERN",
        mobile:6531298542
    },{
        name:"Lajitha",
        city:"Madurai",
        course:"Java",
        mobile:5432198765
    },{
        name:"Mala",
        city:"Virudhunagar",
        course:"Python",
        mobile:9876543215
    },{
        name:"Yohitha",
        city:"Chennai",
        course:"React",
        mobile:3214568798
    }]
  return (
    <>
    <h2>Array of object render:</h2>
      {details.map((detail,i)=>(
        <div key={i}>
          <p>Name:{detail.name}</p>
          <p>City:{detail.city}</p>
          <p>Course:{detail.course}</p>
          <p>Mobile:{detail.mobile}</p>
        </div>
      ))}
    </>
  );
}

export default Question5