import { useContext } from "react"
import CartContext from "../context/CartContext"

const Dashboard =()=>{
  const {state,dispatch} = useContext(CartContext)

  const total = state.items.reduce((acc,item)=> acc+item.price,0)

  return (
    <>
    <div className="p-5">
      <h1 className="text-xl">Dashboard</h1>
      <button
        className="bg-green-500 text-white p-2 mr-2 rounded"
        onClick={()=>
          dispatch({
            type:"ADD_ITEM",
            payload:{id:Date.now(),name:"Item",price:100},
          })
        }
      >
        Add Item
      </button>

      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={()=>dispatch({type:"CLEAR_CART"})}
      >
        Clear
      </button>

      <h2 className="mt-3">Total: ₹{total}</h2>

      {state.items.map((item) =>(
        <div key={item.id} className="flex justify-between border p-2 mt-2">
          <span>
            {item.name} - ₹{item.price}
          </span>
          <button className="bg-red-500 p-1 rounded text-white "
            onClick={()=>dispatch({type:"REMOVE_ITEM",payload:item.id})}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Dashboard
