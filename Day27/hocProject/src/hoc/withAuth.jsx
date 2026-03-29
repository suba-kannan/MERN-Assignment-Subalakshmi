import { Navigate } from "react-router-dom"

const withAuth = (WrappedComponent) => (props)=>{
    const isLoggedIn=localStorage.getItem("isLoggedIn")

    if (!isLoggedIn){
      return <Navigate to="/login" />;
    }

    return (
    <WrappedComponent {...props} />
    )
  };

export default withAuth;
