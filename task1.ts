interface User{
    name: String
    email: String
    phone?: String
    active?:boolean

}


const users: User[]=[]

users.push({ name: "Ferdous", email: "ferdous@example.com" }); 
users.push({ name: "Rahim", email: "rahim@example.com", active: true }); 
users.push({name:"alice", email:"alice@gmail.com", phone:"023283727"})
console.log(users)


for (const user of users){
    console.log(user)
}