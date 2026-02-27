const products = [
  { name: "Bagr", price: 1000 },
  { name: "Watch", price: 2500 },
  { name: "Keyboard", price: 1200 },
  { name: "Smartphone", price: 20000 },
];

const result = products.filter((product) => product.price > 10000);

console.log(result);
