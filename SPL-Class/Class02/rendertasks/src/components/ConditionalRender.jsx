const ConditionalRender = () => {

    const isLoggedIn = true;

  return (

    <>
    <h2>Conditional rendering</h2>
        {isLoggedIn ? <h2>Welcome User</h2>:<h2>Please Login</h2>}
    </>
  )
}

export default ConditionalRender