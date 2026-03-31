// What is useState in React? Why do we use it?

// useState is a react hook that allows functional component to acess state and state update function in a same method.
// Using this hook functional component can store and manage data that can change over the time. 
// If that data is changed react automatically re-render the component and update the ui


// What happens if you update state directly without using setter function?

// If we dont use setState and directly upadate the state(variable) directly it will not re-render and update the ui



// Write a small example to store and update a counter using useState.

import { useState } from 'react'

const UseState = () => {
    const [count,setCount]= useState(0)

    const handleChange=()=>{
        setCount(count+1)
    }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleChange}>Click me</button>
    </>
  );
}

export default UseState