const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 },
];

for(let i=0; i<students.length; i++){
    if(students[i].marks>50){
        console.log("Name:",students[i].name);
    }
}