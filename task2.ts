let pid: number | String // only number and string is allowed

pid=123
pid="adbcdd"
//pid=true  Error, Boolean not allowed


//type narrowing
function printId(id: number | string){
    if(typeof id==='string'){
        console.log(`Id as string: ${id.toLocaleUpperCase()}`)
    }
    else if(typeof id ==='number'){
        console.log(`ID as number: ${id}`)
    }
    else{
        console.log(`Invalid data type as a parameter`)
    }
}

printId(123)
printId('abcd')
//printId(true)  arg boolean can't pass as a parameter



// array of union types



function processValue(values:(number| String)[])
{
     let res=""
    let sum=0
    for(const val of values){
   
    if (typeof val==='string'){
        res+=" "+val
    }
    else if(typeof val==='number'){
        sum+=val
    }
   
}
 console.log(`summation of all number in values ${sum}`)
 console.log(`overall string concat is ${res}`)
}
const values: (number | string)[]=[1, "hello", 3, "world", 4, 6]

processValue(values)


// in operator in Narrowing

interface Student{
    name:String
    gpa:number
}

interface Teacher{
    name:String
    course:String
}

function information(person: Student | Teacher){
    if("gpa" in person){
        console.log(`student name is: ${person.name} and gpa is: ${person.gpa}`)
    }
    else if("course" in person){
        console.log(`Teacher name is: ${person.name} and couse tittle is: ${person.course}`)
    }
}

const student1: Student=({
    name:"ferdous mondol",
    gpa:3.40
})
const teacher: Teacher=({
    name:"Nur islam",
    course:"Math"
})


information(student1)
information(teacher)

// class based narrowing

class Dog{

    sound(){
        console.log(`dog is darking gheu gheu`)
    }

}

class Cat{
    sound(){
        console.log(`cat is says meu meu`)
    }
}


function makeSound(animal: Dog| Cat){
    if(animal instanceof Dog){
        animal.sound()
    }
    else if(animal instanceof Cat){
        animal.sound()
    }

}


const d1=new Dog()
const d2=new Cat()
makeSound(d1)
makeSound(d2)
