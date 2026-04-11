import { useReducer, useState } from "react"

const initialState = {todos:[],editIndex:null}

const reducer=(state,action)=>{
  if(action.type==="ADD_TODO"){
    return {...state,todos:[...state.todos,action.payload] }
  }

  if(action.type==="DELETE_TODO"){
    return {...state,todos:state.todos.filter((_,i)=> i !== action.index)}}

  if(action.type==="EDIT_TODO"){
    return {...state,editIndex:action.index}
  }

  if(action.type==="UPDATE_TODO"){
    const arr = [...state.todos]
    arr[state.editIndex] = action.payload
    return {...state,todos:arr,editIndex:null}
  }

  return state
}

const Todo = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [inputText,setInputText] = useState("")

  const handleChange=(e)=>{
    setInputText(e.target.value)
    
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Todo App</h2>

      <div className="flex gap-2 mb-4">
        <input value={inputText} onChange={handleChange} className="border p-2 flex-1 rounded outline-none" placeholder="Enter todo"/>
        {state.editIndex===null? (
          <button className="bg-green-500 text-white px-4 rounded" onClick={() => {
            if (!inputText) return
            dispatch({type:"ADD_TODO",payload:inputText})
            setInputText("")
          }}>
            Add
          </button>
        ):(
          <button className="bg-blue-500 text-white px-4 rounded" 
          onClick={()=>{dispatch({type:"UPDATE_TODO",payload:inputText})
           setInputText("")}}>
            Update
          </button>
        )}
      </div>

      {state.todos.map((todo,index) =>(
        <div key={index} className="flex justify-between border p-2 mb-2 rounded">
          <span>{todo}</span>

          <div className="flex gap-2">
            <button className="bg-yellow-500 text-white px-2 rounded" onClick={()=>{
              dispatch({type:"EDIT_TODO",index});
              setInputText(todo)
            }}>
              Edit
            </button>

            <button className="bg-red-500 text-white px-2 rounded" onClick={()=>dispatch({type:"DELETE_TODO",index})}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todo