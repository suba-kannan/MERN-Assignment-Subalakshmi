const flattenArray = (array) =>{
  const result = array.flat(Infinity);
  console.log(result);
  
};
flattenArray([1,[2,[3,4]]]);
