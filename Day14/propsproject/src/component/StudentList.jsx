
const StudentList = ({ studentDetails}) => {
  return (
    <>
      <div className="flex bg-red-300 justify-between p-7">
        <h2>Student details:</h2>
        {studentDetails.map((student, i) => (
          <div key={i + 1} className="  bg-white p-4 rounded">
            <p>Name: {student.name}</p>
            <p>Marks: {student.marks}</p>
            <p>Result: {student.marks >= 40 ? "Pass" : "Fail"}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentList