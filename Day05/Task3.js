//callback function
const calculateSum = (a,b,callback) => {
    return callback(a,b);
};

const sum = (a,b) => a+b;

console.log(calculateSum(6,7,sum));
