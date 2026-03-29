const Button = ({handleClick}) => {
  return (
    <>
    <h1>Button:</h1>
        <button onClick={handleClick} className="bg-blue-500 ml-2 mb-4 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
    </>
  )
}

export default Button