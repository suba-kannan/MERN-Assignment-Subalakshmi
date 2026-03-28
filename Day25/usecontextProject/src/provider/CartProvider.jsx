import { useState } from "react"
import CartContext from "../context/CartContext"

const CartProvider = ({children}) => {
  const [count,setCount]=useState(0)
  const addToCart=()=>{
    setCount(count+1)
  }

  return (
    <CartContext.Provider value={{count,addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
