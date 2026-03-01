const users = [
  {name:"Suba",age:25},
  {name:"Lajitha",age:22},
  {name:"Mala",age:30},
];
const sortByAge = users.sort((a,b) =>a.age-b.age);

console.log(sortByAge);