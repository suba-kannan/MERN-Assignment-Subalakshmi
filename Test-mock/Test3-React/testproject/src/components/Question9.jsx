//9.How does the ternary operator work in React JSX for rendering different UI based on a condition?

//Ternary operator is used to render different ui based on a condition.
//It is a short form of if/else statement.

const Question9 = () => {
     const age = 19;
  return (
    <>
    <h2>Ternary operator rendering:</h2>
    <p>{age>=18 ? <h1>Adult</h1> : <h1>Minor</h1>}</p>
    </>
    
  )
}

export default Question9