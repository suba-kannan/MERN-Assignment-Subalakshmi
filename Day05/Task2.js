// Higher order array methods

// forEach()
const number1 = [1, 2, 3];
number1.forEach((num) => console.log(num));

// map()
const number2= [1, 2, 3];
const doubled = number2.map(num => num * 2);
console.log(doubled); //[2, 4, 6]

//find()
const number3 = [10, 20, 30, 40];
const result3 = number3.find((num) => num > 25);
console.log(result3); //30

//filter()
const number4 = [10, 20, 30, 40];
const result4 = number4.filter((num) => num > 25);
console.log(result4); //[30, 40]

//reduce()
const number5 = [1, 2, 3, 4];
const result5 = number5.reduce((total, num) => total + num, 0);
console.log(result5); //10

//findIndex()
const number6 = [10, 20, 30, 40];
const result6 = number6.findIndex((num) => num > 25);
console.log(result6); //2

//some()
const number7 = [1, 3, 5, 8];
const result7 = number7.some((num) => num % 2 === 0);
console.log(result7); //true

//every()
const number8 = [2, 4, 6];
const result8 = number8.every((num) => num % 2 === 0);
console.log(result8); //true