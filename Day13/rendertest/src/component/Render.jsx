
const Render = () => {


     const name = "Suba";

     const student = {
       name: "Suba",
       course: "React",
     };

     const idPractise = true;

     const userName = null;
  return (
    <>
      <p>Hello {name}</p>

      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>

      {idPractise ? <p> practicing render mothod</p> : <p>Not practicing</p>}
      <p>{idPractise ? "Not practicing" : "Praticing render method"}</p>

      {idPractise && <p>Render</p>}

      <p>User Name: {userName ?? "Suba"}</p>
    </>
  );
};

export default Render;
