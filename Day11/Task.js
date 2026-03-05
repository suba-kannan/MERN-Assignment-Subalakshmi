//what is component?
//A component in React is a reusable piece of UI that returns JSX (html like code).
//Instead of writing the whole webpage in one file we can break it into small parts called components.


//Functional component:
//Functional Component is a JavaScript function that returns jsx.
//it is the modern and most commonly used component type inreact.
// const FuntionalComponemt = () => {
//   return <h1>funxtional component</h1>;
// };

//Class component:
//Class Component is created using an es6 class and extends React.Component.
//It was used in older react versions before hooks were introduced.
// import React, { Component } from "react";

// class ClassComponent extends Component {
//   render() {
//     return <h1>Class component</h1>;
//   }
// }

// export default ClassComponent;


// What are Fragment Tags in Components?
//Fragment allows you to group multiple elements without adding extra html elements to the DOM.
//React should return only one html element for that fragement is used.