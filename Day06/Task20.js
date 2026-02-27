const array = [[1, 2], [3, 4], [5]];
const flattened = array.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened);