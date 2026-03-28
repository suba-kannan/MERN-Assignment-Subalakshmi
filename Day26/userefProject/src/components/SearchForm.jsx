import { useRef } from "react"

function SearchForm() {
  const searchRef = useRef()

  const handleSearch =()=>{
    alert(searchRef.current.value)
  }

  return (
    <>
      <h1>Search Form:</h1>
      <input type="text" placeholder="Search..." ref={searchRef} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchForm
