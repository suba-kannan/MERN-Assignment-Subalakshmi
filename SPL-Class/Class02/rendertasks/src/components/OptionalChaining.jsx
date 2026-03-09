import React from 'react'

const OptionalChaining = () => {
    const user ={
      name:"Suba",
      address:{
        city: "Chennai",
      },
    };
  return (
    <>
    
    <h2>Optional chaining</h2>
    <h2>City: {user?.address?.city}</h2>
    </>
  );
}

export default OptionalChaining