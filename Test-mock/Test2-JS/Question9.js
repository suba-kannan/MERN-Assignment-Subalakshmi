const sumArray = (array) =>{
   const result = array.reduce((total, num) => total+num, 0);
   console.log(result);
   
};

sumArray([1,2,3,4]);
