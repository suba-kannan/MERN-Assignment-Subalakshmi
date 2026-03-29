const SubmitButton = ({isDisabled}) => {
  return (
    <>
      <h1>Disable Button HOC:</h1>
        <button disabled={isDisabled} className={`px-6 py-2 rounded-lg text-white  transition ${isDisabled?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"}`}>
          Submit
        </button>
    </>
  )
}

export default SubmitButton
