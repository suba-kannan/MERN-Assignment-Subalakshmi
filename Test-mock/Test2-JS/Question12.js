Array.prototype.myMap = function(cb){
  let result = [];

  for(let i=0;i<this.length;i++) {
    result.push(cb(this[i],i,this));
  }
  return result;
};

const numbers = [1,2,3,4];
const square = numbers.myMap((num) => num*num);
console.log(square); 
