const withLocalStorage = (WrappedComponent)=>(props)=>{

     const getUsers =()=> {
       return JSON.parse(localStorage.getItem("users")) || []
     }
     const saveUsers =(users)=>{
       localStorage.setItem("users",JSON.stringify(users))
     }
     const setLogin =()=>{
       localStorage.setItem("isLoggedIn","true")
     }
     const logout =()=>{
       localStorage.removeItem("isLoggedIn")
     }

    return (
      <WrappedComponent {...props} getUsers={getUsers} saveUsers={saveUsers} setLogin={setLogin} logout={logout}
      />
    );


}

export default withLocalStorage;