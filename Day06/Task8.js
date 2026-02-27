let arr = [64, 32, 1, 5100, 864];

// Ascending
arr.sort((a, b) => a - b);
console.log("Ascending:", arr);

// Descending
arr.sort((a, b) => b - a);
console.log("Descending:", arr);
