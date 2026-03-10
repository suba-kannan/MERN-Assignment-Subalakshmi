
const EmployeeCard = ({employeeDetails }) => {
  return (
    <>
      <div className="flex bg-yellow-300 justify-between p-7">
        <h2>Employee details:</h2>
        {employeeDetails.map((emp, i) => (
          <div key={i+1} className="bg-white p-4 rounded">
            <h3>{emp.name}</h3>
            <p>Role:{emp.role}</p>
            <p>Location:{emp.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmployeeCard