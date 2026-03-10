//4.How can you render an array of values in React?

const Question4 = () => {

    const array =[1,2,3,4,5]

  return (
    <>
    <h2>Array render:</h2>
    {array.map((e,i)=>(
        <ul key={i}>
            <li>{e}</li>
        </ul>
    ))}
    </>
  )
}

export default Question4