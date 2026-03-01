const missingNumber = (array,n) =>{
  const expected = (n*(n+1))/2;

  let actualSum = 0;
  for(let num of array){
    actualSum += num;
  }
  const missingNum = expected - actualSum;
  console.log(missingNum);
};
missingNumber([1,2,4,5,6],6);

