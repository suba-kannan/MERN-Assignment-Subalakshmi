const LogicalAnd = () => {
    const isAdmin = true;
    
  return (

    <>
      <h2>Logical AND(&&) rendering</h2>
      {isAdmin && <h2>Admin Dashboard</h2>}
    </>
  );
}

export default LogicalAnd