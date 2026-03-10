import StudentList from './StudentList';

const StudentContainer = () => {
    const students = [
      {
        name:"Suba",
        marks:80,
      },
      {
        name:"Sree",
        marks:32,
      },
      {
        name:"Mala",
        marks:67,
      },
      
    ];
  return (
    <>
      <StudentList studentDetails={students} />
    </>
  );
}

export default StudentContainer