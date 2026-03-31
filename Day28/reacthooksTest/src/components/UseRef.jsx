// What is useRef and how is it different from useState?

// useRef is a react hook used to store a mutable values that presist across renders without causing re-render.
// Unlike state updating a ref do not trigger the component to re-render
// It is mainly used to directly access dom ElementInternals, store previous values.

// How to focus an input field using useRef?

import { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef()

    const handleFocus = () => {
      inputRef.current.focus()
    }
  return (
    <>
      <h1>UseRef:</h1>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default UseRef