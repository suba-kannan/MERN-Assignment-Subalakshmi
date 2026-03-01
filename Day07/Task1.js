const createProfile = (user) =>{
    const { name, age, role="user"} = user;
    console.log(`${name} is ${age} years old and works as ${role}`);
    
}

createProfile({name:"Sudhan", age:22})