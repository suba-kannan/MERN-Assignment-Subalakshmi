let a = "10";
let b = "hello";

result1 = a*2;
result2 = b*2;

console.log(result1);//20
console.log(result2);//Nan

//js automatically convert "10" into a number. this is called Type coercion(automatic type conversion)
//js tries to convert "hello" into a num but hello is not a numeric value so conversion fails and the result is Nan.