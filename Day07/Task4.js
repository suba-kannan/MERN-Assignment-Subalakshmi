const students = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 },
];

const result = students.map((student) => {
  const marks = student?.marks ?? 0;
  return `${student.name} scored ${marks}`;
});

console.log(result);
