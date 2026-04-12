import { useReducer, useEffect } from "react"
import AuthContext from "../context/AuthContext"

const initialState = {user:null,isLoggedIn:false}

const reducer = (state,action)=>{
  if (action.type==="LOGIN"){
    return {user:action.payload,isLoggedIn:true}
  }

  if (action.type==="LOGOUT"){
    return {user:null,isLoggedIn:false}
  }

  return state
}

const AuthProvider =({children})=>{
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    const data = localStorage.getItem("user")
    if(data){
      dispatch({type:"LOGIN",payload:JSON.parse(data)})
    }
  },[])

  return (
    <AuthContext.Provider value={{state,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider