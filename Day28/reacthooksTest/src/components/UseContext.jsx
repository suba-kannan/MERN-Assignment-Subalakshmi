// What problem does useContext solve?

// useContext is a react hook that allows a component to access data from a context object directly without passing props through intermediate components.
// It is used to access values from a raect context enabling globle data sharing without props drilling.

// Explain how to create and use context in React (basic steps).

// 1. A context is created using createContext()

// import { createContext } from "react"
// const AuthContext = createContext()
// export default AuthContext

// 2. A provider component passes data to the component tree

// const AuthProvider = ({ children }) => {
//   return (
//     <>
//       <AuthContext.Provider value={{ user: "Suba" }}>
//         {children}
//       </AuthContext.Provider>
//     </>
//   )
// }
// export default AuthProvider

// 3. Add context in the component

// import { useContext } from "react"
// const Home = () => {
//   const { user } = useContext(AuthContext)
//   return <h1>{user}</h1>
// }
// export default Home