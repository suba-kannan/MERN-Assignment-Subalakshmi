
const InputLogger = ({handleChange}) => {
  return (
    <>
      <h1>Input Logger HOC:</h1>
        <input onChange={handleChange} placeholder="Type something..." className="border p-2 rounded-lg w-64 mb-4"/>
    </>
  );
}

export default InputLogger