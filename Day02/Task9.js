let age = 22;
let hasID = true;

if (age>18 && hasID===true){
    console.log("Eligible");
}
else if (age<18 || hasID===false){
    console.log("Not Eligible");
}