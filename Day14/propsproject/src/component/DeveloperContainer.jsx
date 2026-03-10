import DeveloperList from './DeveloperList';

const DeveloperContainer = () => {
    const developers = [
      {
        name:"Suba",
        skills:["HTML","CSS","Javascript"],
      },
      {
        name:"Mala",
        skills:["React","Tailwind","Node.js"],
      },
      {
        name:"Lajitha",
        skills:["Python","Django","flask"],
      },
    ];
  return (
    <>
      <DeveloperList developerDetails={developers} />
    </>
  );
}

export default DeveloperContainer