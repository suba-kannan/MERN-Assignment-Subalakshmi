//1.What is Class Component in React?

//A Class Component is a react component that is created using a js ES6 class.
//It is a js class that extends React.Component and returns JSX using a render() method.
//It allows us to store data, use lifecycle methods and create ui logic.

// import React, {Component} from "react";
// class example extends Component{
//     render(){
//     return <h1>Class component</h1>;
//   }
// }

// export default example;

//2.How to Create a Class Component

//Step 1:Import react
//Step 2:Create class
//Step 3:Add render method
//Step 4:Export component

//3.What is State?

// State is an object used to store dynamic data inside a component.
// The data in state can change during the component's life.
// When state changes react automatically updates the UI.

//4.setState() Process

//setState() is used to update the state in a class component.
//When setState() is called react follows these steps:
//State updates with the new value.
//React re-runs the render() method.
//React compares the Virtual DOM with the previous DOM.
//Only the changed part of the UI is updated in the browser.

//5.Lifecycle methods (Mount / Update / Unmount)

//Lifecycle methods are special methods in react class components that run during different stages of a component like mounting, updating, and unmounting.
//1.Mounting - Mounting means the component is created and shown on the screen.
//2.Updating - updating happens when state changes and props change
//3.Unmounting - Unmounting means the component is removed from the screen.



//6.Real example with button

// import React,{Component} from "react";

// class Counter extends Component{
//   state={
//     count: 0,
//   };
//   increase = ()=>{
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render(){
//     return(
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     );
//   }
// }
// export default Counter;



//7.What Happens Without Button?

// If there is no button or event state will not change.
// render() {
//   return <h1>{this.state.count}</h1>;
// }

//What Happens Without setState()?
//React will not rerender UI because react does not detect direct state changes.


//8.What is constructor() in React Class Component?

//constructor() is a special method used to initialize the component. It runs when the component is created.

// constructor() {
//   super();
// }



//9-10. Why We Use constructor() in React Class Component?

//We use constructor() to initialize the state and set up the component when it is created.