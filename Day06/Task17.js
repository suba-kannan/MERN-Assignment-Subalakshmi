const marks = [67, 72, 30, 34, 77, 27, 93];

const above70 = marks.filter((mark) => mark > 70);
console.log("Marks above 70:", above70);

const allPassed = marks.every((mark) => mark >= 35);
console.log("All students passed:", allPassed);

const firstFailed = marks.find((mark) => mark < 35);
console.log("First failed student mark:", firstFailed);

const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
console.log("Average mark:", average);
