import {useState} from 'react'

const RemoveItem = () => {
    const [items,setItems]=useState([1,2,3,4,5]);

    const removeLast =()=>{
      setItems(items.slice(0,items.length-1));
    };
  return (
    <>
      <h1 className="font-extrabold text-xl mb-1">9. Remove item:</h1>
      <div className="p-4">
        {items.map((e,i) =>(
          <p key={i}>{e}</p>
        ))}
        <button onClick={removeLast} className="bg-green-300 hover:bg-green-200 mt-3 rounded p-2">Remove</button>
      </div>
    </>
  )
}

export default RemoveItem