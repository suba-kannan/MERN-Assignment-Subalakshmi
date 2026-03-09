const ObjRender = () => {

     const user={
       name: "Suba",
       email: "suba@gmail.com",
       phone: "7426190278",
     };

  return (
    <>
      <h2>Object Rendering</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </>
  );
}

export default ObjRender