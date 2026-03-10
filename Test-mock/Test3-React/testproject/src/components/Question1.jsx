//1.What is rendering in React and how does React render JSX to the screen?

//Rendering in react is the process of returning jsx and converting it into a html and display it in the browser.

////Jsx will convert to js using React.createElement
//it create a virtual dom and compare it to the privious virtual dom and updates the real dom
//and then the browser diaplays the ui.

//const data = <p>suba</p>
//const data = React.createElement("p",null,"suba")