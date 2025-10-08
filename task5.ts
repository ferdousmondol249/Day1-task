interface User {
  name: string;
  email: string;
  phone?: string;
  active: boolean;
}


const user1: Readonly<User> = {
  name: "Ferdous",
  email: "ferdous@example.com",
  active: true
};

// user1.name = "Rahim";

console.log(user1.name);


function updateUser(user: User, update: Partial<User>): User {
  return { ...user, ...update }; 
}

const user2: User = {
  name: "Karim",
  email: "karim@example.com",
  active: false
};

const updatedUser = updateUser(user2, { active: true, phone: "01712345678" });
console.log(updatedUser);
