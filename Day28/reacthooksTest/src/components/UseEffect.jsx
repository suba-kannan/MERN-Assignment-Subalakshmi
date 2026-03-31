// What is useEffect and why is it used?

// useEffect is a react hook used to handle side effects in functional component.
// We need api calls, timers, localstorage in our Component. React use useEffect to safely handle them after rendering

// What is the difference between dependency array?

// without dependency array:

// useEffect(() => {});
// Runs on every render initial render, state update, re-render

// empty dependency array:

// useEffect(() => {}, [])
// Runs only once in initial render. Do not run after that.

// with dependency array:

// useEffect(() => {}, [value])
// Runs when the given value updates. Initial render, when the value updates

// How to call an API using useEffect with async/await?

import { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch("https://dummyjson.com/users")
      const result = await res.json()
      setData(result.users)
    }

    fetchData()
  },[])

  return (
    <>
    <h1>UseEffect:</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  )
}

export default UseEffect