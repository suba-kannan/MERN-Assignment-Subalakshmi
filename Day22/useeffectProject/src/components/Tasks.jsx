// 1. what is UseEffect
// useEffect is a React Hook used to perform side effects such as API calls, Dom updatesand timers in a functional component.
// React components normally only render ui but sometimes we need to perform extra operations after rendering.
// useEffect allows us to run code after the component renders.

// Syntax
// useEffect(()=>{

// },[dependency array]);



// 2. What is Dependance array
// Dependency array is an argument of useEffect that controls when the effect runs.

// Empty dependency array: run only once
// With dependencies: run when value changes
// Without dependency array: runs every time the component renders


// 3. Without dependency array

// runs every time the component renders
// Syntax:
// useEffect(() => {
//   code
// });



//4. what is fetch

// fetch is a built in js function used to make HTTP requests to a server(API) and get data.
// it is used to:
// get data from backend(GET)
// send data to backend(POST)
// update data(PUT)
// delete data(DELETE)