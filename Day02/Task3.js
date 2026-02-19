let a = "string";
let b = 12;
let c = false;
let d = 123456789764n;
let e = null;
let f;

console.log("String:", typeof a);
console.log("Number:", typeof b);
console.log("Boolean", typeof c);
console.log("Bigint:", typeof d);
console.log("Null:", typeof e);//typeof null returns object due to a js bug
console.log("Undefined:", typeof f);

