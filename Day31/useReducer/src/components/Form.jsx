import React, { useReducer } from "react"

const initialState = {name:"",email:"",password:""}

const reducer=(state,action)=>{

  if(action.type==="SET_FIELD"){
    return {...state,[action.field]:action.value}
  }

  if(action.type==="RESET_FORM"){
    return initialState
  }
  return state
}

const Form=()=>{

  const [state,dispatch] = useReducer(reducer,initialState)

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(state)
    dispatch({ type: "RESET_FORM" })
  }


  return (
    <>
    <h1 className="text-3xl ml-3 font-bold">Form handling:</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 max-w-sm mx-auto">

      <input type="text" value={state.name} onChange={(e)=>dispatch({type:"SET_FIELD",field:"name",value:e.target.value})} placeholder="Enter your Name" className="border p-2 rounded" />
      <input type="email" value={state.email} onChange={(e)=>dispatch({type:"SET_FIELD",field:"email",value:e.target.value})} placeholder="Enter your Email" className="border p-2 rounded" />
      <input type="password" value={state.password} onChange={(e)=>dispatch({type:"SET_FIELD",field:"password",value:e.target.value})} placeholder="Enter your Password" className="border p-2 rounded" />
      <button className="bg-green-500 text-white p-2 rounded">Submit</button>
    </form>
    
    </>
  )
}

export default Form