//1. React

// React is a js library used to build a user interface especially for a single-page-application(SPA).
// It was developed by facebook now it's called meta.
// It is mainly used for dynamic webpages and it is fully component based architecture.
// React only focus on view layer of MVC architecture. It means it is responsible only for how UI looks and updates.
// we make large application using reusable components.
// React minimal the dom process and give instant result on each update. This is why it is called React. 


//2. what is js(CRA):

// .js stands for JavaScript file.
// It is a pure js file used for logic,functions, api calls,...
// .js files can also contain jsx because in CRA bable compiler will convert jsx to js automatically.
// so we can write html in cra too.

//what is jsx(vite);

// .jsx -> javascript + xml(html).
// It has both js and html code.
// it helps separate ui components from normal logic.


//3. What is main.jsx? Why do we use it?

// In React(Vite), main.jsx is the entry file.
// It connects react app and html file (index.html)


//4. What is Babel Compiler?

//Bable is a js compiler(transpiler).
// It converts modern js(es6) code into older js(es5) because older browser do not understand the ES6+ featuers.
// If you run es6 directly it will throw error so we use bable.


//5. What is Virtual DOM and Real DOM?

//Real dom:

// The actual dom inside browser.
//Updating it is slow.

//virtual dom:

//A copy of Real DOM (in memory).
//React updates Virtual DOM first.
//Then compare(diffing).
//Updates only changed parts in Real DOM.

//6. What is export default and named exports?

//export default:

//export default is used to export only one main thing from a file.
//You can have only one default export per file.

//named exports:

//Named export allows you to export multiple things from one file.
//You can have many named exports.

//7. How do you import export default?

// default export:
// import App from "./App";

// named export:

// import { name, age } from "./file";
