interface User {
  id: number;
  name: string;
}


async function getUsers(): Promise<User[]> {
  return [
    { id: 1, name: "Ferdous" },
    { id: 2, name: "Rahim" }
  ];
}


async function main() {
  const users = await getUsers(); 
  console.log(users);
}

main();
