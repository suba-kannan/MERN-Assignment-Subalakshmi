import { useRef } from "react"

function FeedbackForm() {
  const nameRef = useRef()
  const messageRef = useRef()

  const handleSubmit =(e)=>{

    e.preventDefault() 

    const name = nameRef.current.value
    const message = messageRef.current.value

    console.log("Name:",name)
    console.log("Message:",message)

    nameRef.current.value = ""
    messageRef.current.value = ""
  }

  return (
    <>
    <h1>Feedback form:</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" placeholder="Name" ref={nameRef} /><br />
        <textarea placeholder="feedback" ref={messageRef}></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FeedbackForm
