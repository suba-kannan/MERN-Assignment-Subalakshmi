const ArrayObj = () => {

    const users =[
      {id:1, name:"Suba", age: 22 },
      {id:2, name:"Lajitha", age: 25 },
      {id:3, name:"Mala", age: 23 },
    ];
  return (
    <>
      <h2>Array of object rendering</h2>

      {users.map((user) =>(
        <p key={user.id}>
          Name:{user.name}, 
          Age:{user.age}
        </p>
      ))}
    </>
  );
}

export default ArrayObj