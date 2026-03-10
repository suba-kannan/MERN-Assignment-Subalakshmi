import React from 'react'

const UserList = ({userDetails}) => {
  return (
    <>
      <div className="flex bg-blue-100 justify-between p-7">
        <h2>User Details:</h2>
        {userDetails.map((details, i) => (
          <div key={i + 1}>
              <div className="  bg-white p-4 rounded ">
                <p>Id: {details.id}</p>
                <p>Name: {details.name}</p>
                <p>Age: {details.age}</p>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default UserList