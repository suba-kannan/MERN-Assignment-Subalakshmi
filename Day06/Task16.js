const cart = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 },
];

const names = cart.map((item) => item.name);
console.log(names);

const above = cart.filter((item) => item.price > 5000);
console.log(above);

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);

const below = cart.some((item) => item.price < 3000);
console.log(below);
