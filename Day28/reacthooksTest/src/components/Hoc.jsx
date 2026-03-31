// What is HOC in React?

// A higher order component in react is a function that takes a component and return a new enhanced component
// It is used for reusing logics, authentication, loggin and Permissions.

// const Button = ({show,text}) => {
//   return (
//     <>
//     <button onClick={show}>{text}</button>
//     </>
//   )
// }
// export default Button

// const withAlert = (WrapperAlert) => (props) => {
//   const showAlert = () => {
//     alert("Button clicked")
//   }
//   const buttonText = "This is button"
//   return <WrapperAlert {...props} show={showAlert} text={buttonText} />
// }
// export default withAlert

// import Button from "./components/Button"
// import withAlert from "./hoc/withAlert"

// const EnhancedComponent = withAlert(Button)
// const App = () => {
//   const showAlert = () => {
//     alert("hello");
//   };
//   const buttonText = "This is button hoc";
//   return (
//     <>
//       <EnhancedComponent show={showAlert} text={buttonText} />
//       <Button text={"Click me"} />
//     </>
//   );
// }
// export default App