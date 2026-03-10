
const DeveloperList = ({ developerDetails }) => {
  return (
    <>
      <div className="flex bg-green-300 justify-between p-7">
        <h2>Developer Details:</h2>
        {developerDetails.map((dev, i) => (
          <div key={i+1} className="bg-white p-4 rounded">
            <h3 className="font-bold mb-2">{dev.name}</h3>

            <ul className="ml-5">
              {dev.skills.map((skill, i) => (
                <li key={i+1}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeveloperList