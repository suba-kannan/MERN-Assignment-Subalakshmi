const TernaryOperator = () => {

    const age = 20;
  return (
    <>
      <h2>Ternary operator task</h2>
      {age >= 18 ? <h2>Adult</h2> : <h2>Minor</h2>}
    </>
  );
}

export default TernaryOperator