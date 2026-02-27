const numbers = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index; //first occurrence of index
});

console.log(removeDuplicate);
