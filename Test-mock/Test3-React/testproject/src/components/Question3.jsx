//3.How do you render an object’s properties in a React component?

const Question3 = () => {
  const obj ={
    name: "suba",
    course: "MERN",
    frontend: "React",
    backend: "Node",
  };
  return (
    <>
      <h2>Object render:</h2>
      <h3>Name:{obj.name}</h3>
      <h3>Course:{obj.course}</h3>
      <h3>Frontend:{obj.frontend}</h3>
      <h3>Backend:{obj.backend}</h3>
    </>
  );
};

export default Question3;
