import { useContext } from "react"
import CartContext from "../context/CartContext"

const AddProductButton = () => {
  const {addToCart}=useContext(CartContext);

  return (
    <>
      <button type="button" onClick={addToCart} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
        Add product
      </button>
    </>
  )
}

export default AddProductButton
