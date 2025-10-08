enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let roleStr: Role = Role.Admin;
console.log(roleStr);       // "ADMIN"


enum RoleEnum {
  Admin = "ADMIN",
  User = "USER"
}

interface User {
  name: string;
  role: RoleEnum;
}

const user1: User = {
  name: "Ferdous",
  role: RoleEnum.Admin
};

console.log(`${user1.name} is ${user1.role}`);
