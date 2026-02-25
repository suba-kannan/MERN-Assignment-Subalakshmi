// Array methods

// push()
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); //[1,2,3,4]

//pop()
const arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); //[1,2]

// unshift();
let arr3 = [2, 3];
arr3.unshift(1);
console.log(arr3); //[1, 2, 3]

// shift();
let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4); //[2, 3]

// includes()
let arr5 = [1, 2, 3];
const result5 = arr5.includes(2);
console.log(result5); //true

//indexof()
let arr6 = [1, 2, 3];
const result6 = arr6.indexOf(1, 0);
console.log(result6); //0


// slice()
let arr7 = [1, 2, 3, 4];
console.log(arr7.slice(1, 3)); //[2, 3]

// splice()
let arr8 = [1, 2, 3];
arr8.splice(1, 1);
console.log(arr8); //[1, 3]

// concat()
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); //[1, 2, 3, 4]

// join()
let arr9 = ["a", "b", "c"];
console.log(arr9.join("-")); //"a-b-c"

// reverse()
let arr10 = [1, 2, 3];
arr10.reverse();
console.log(arr10); //[3, 2, 1]
