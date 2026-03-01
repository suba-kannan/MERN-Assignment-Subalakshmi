const createUser = (key, value) => {
  return {
    [key]: value,
    display() {
      console.log(`${key}: ${this[key]}`);
    },
  };
};

const user = createUser("role", "Admin");

console.log(user);
user.display();
