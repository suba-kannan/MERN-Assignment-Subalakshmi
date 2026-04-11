import { useReducer } from 'react'

const initState = {count:0}

const reducer=(state,action) =>{


  if(action.type==="INCREMENT"){
    return {count:state.count+1}
  }
  if(action.type==="DECREMENT"){
    return {count:state.count-1}
  }
  if(action.type==="RESET"){
    return initState
  }
  if(action.type==="INCREMENT_BY_VALUE"){
    return {count:state.count+action.value}
  }

  return state

}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer,initState)
  return (
    <>
    <h1 className="text-3xl ml-3 font-bold">Counter:</h1>
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Count:{state.count}</h1>

      <div className="flex gap-3">
        <button onClick={()=>dispatch({type:"INCREMENT"})} className="bg-purple-500 px-4 py-2 rounded text-white">Increase</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})} className="bg-yellow-400 px-4 py-2 rounded text-white">Decrease</button>
        <button onClick={()=>dispatch({type:"RESET"})} className="bg-pink-500 px-4 py-2 rounded text-white">Reset</button>
        <button onClick={()=>dispatch({type:"INCREMENT_BY_VALUE",value:5})} className="bg-blue-400 px-4 py-2 rounded text-white">Add +5</button>
      </div>
    </div>
    </>
  )
}

export default Counter