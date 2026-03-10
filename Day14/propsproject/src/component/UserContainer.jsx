import UserList from "./UserList";

const UserContainer = () => {
  const users = [
    {
      id: 1,
      name: "suba",
      age: 22,
    },
    {
      id: 2,
      name: "Yohitha",
      age: 21,
    },
    {
      id: 3,
      name: "Lajitha",
      age: 23,
    },
  ];
  return (
    <>
      <UserList userDetails={users} />
    </>
  );
};

export default UserContainer;
