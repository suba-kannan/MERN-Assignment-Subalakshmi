import {useState} from 'react'

const Product = () => {
    const [product,setProduct] = useState({name:"Laptop",price:50000,stock:2})
    const handleChange= () => {
      setProduct({ ...product, stock: product.stock + 1 })
    }
    
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">13. Product:</h1>
      <div className="p-4">
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <button onClick={handleChange} className="bg-purple-300 hover:bg-purple-200 mt-3 rounded p-2">Increase stock</button>
      </div>
    </>
  );
}

export default Product