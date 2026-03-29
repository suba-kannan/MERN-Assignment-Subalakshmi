const withLogger = (WrappedComponent) =>(props) =>{

    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn){
      return(
        <div className="flex justify-center items-center h-screen bg-red-100">
          <h2 className="text-xl font-bold text-red-600">Access Denied</h2>
        </div>
      )
    }
  return (
    <WrappedComponent {...props} />
  )
};

export default withLogger