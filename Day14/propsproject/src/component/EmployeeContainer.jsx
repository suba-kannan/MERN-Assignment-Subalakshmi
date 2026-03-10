import EmployeeCard from './EmployeeCard';

const EmployeeContainer = () => {
    const employees = [
      {
        name:"Suba",
        role:"Frontend Developer",
        location:"Chennai",
      },
      {
        name:"Mala",
        role:"React Developer",
        location:"Chennai",
      },
      {
        name:"Sree",
        role:"Backend Developer",
        location:"Bangalore",
      },
    ];
  return (
    <>
      <EmployeeCard employeeDetails={employees} />
    </>
  );
}

export default EmployeeContainer