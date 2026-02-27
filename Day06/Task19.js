const users = [
  { name: "Suba", age: 22 },
  { name: "Mala", age: 20 },
  { name: "Lajitha", age: 21 },
  { name: "Sree", age: 22 },
  { name: "Haritha", age: 21 },
];

const groupedByAge = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }

  acc[user.age].push(user);
  return acc;
}, {});

console.log(groupedByAge);