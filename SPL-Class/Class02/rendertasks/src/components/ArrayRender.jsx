const ArrayRender = () => {


const fruits =["Apple","Mango","Orange","Banana"];
  return (
    <>
      <h2>Array rendering using map()</h2>
      <ul>
        {fruits.map((fruit,index)=>(
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default ArrayRender