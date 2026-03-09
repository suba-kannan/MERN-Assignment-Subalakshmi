const NestedArray = () => {

    const users =[
      {
        name:"Suba",
        skills:["HTML","CSS","JavaScript"],
      },
      {
        name:"Lajitha",
        skills:["React","Node","MongoDB"],
      },
    ];
  return (
    <>
      <h2>Neated array render</h2>

      {users.map((user,index) =>(
        <div key={index}>
          <h3>{user.name}</h3>
          <ul>
            {user.skills.map((skill,i) =>(
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default NestedArray