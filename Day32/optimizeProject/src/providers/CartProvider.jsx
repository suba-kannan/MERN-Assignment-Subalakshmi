import { useReducer } from "react"
import CartContext from "../context/CartContext"

const initialState = {items:[]}

const reducer =(state,action) =>{
  if(action.type==="ADD_ITEM"){
    return {...state,items:[...state.items,action.payload]}
  }

  if (action.type==="REMOVE_ITEM"){
    return{
      ...state,items: state.items.filter((i)=>i.id !== action.payload)
    }
  }

  if(action.type==="CLEAR_CART"){
    return {items:[]}
  }

  return state
}

const CartProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <CartContext.Provider value={{state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider