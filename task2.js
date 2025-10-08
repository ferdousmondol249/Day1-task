var pid; // only number and string is allowed
pid = 123;
pid = "adbcdd";
//pid=true  Error, Boolean not allowed
//type narrowing
function printId(id) {
    if (typeof id === 'string') {
        console.log("Id as string: ".concat(id.toLocaleUpperCase()));
    }
    else if (typeof id === 'number') {
        console.log("ID as number: ".concat(id));
    }
    else {
        console.log("Invalid data type as a parameter");
    }
}
printId(123);
printId('abcd');
//printId(true)  arg boolean can't pass as a parameter
// array of union types
function processValue(values) {
    var res = "";
    var sum = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var val = values_1[_i];
        if (typeof val === 'string') {
            res += " " + val;
        }
        else if (typeof val === 'number') {
            sum += val;
        }
    }
    console.log("summation of all number in values ".concat(sum));
    console.log("overall string concat is ".concat(res));
}
var values = [1, "hello", 3, "world", 4, 6];
processValue(values);
function information(person) {
    if ("gpa" in person) {
        console.log("student name is: ".concat(person.name, " and gpa is: ").concat(person.gpa));
    }
    else if ("course" in person) {
        console.log("Teacher name is: ".concat(person.name, " and couse tittle is: ").concat(person.course));
    }
}
var student1 = ({
    name: "ferdous mondol",
    gpa: 3.40
});
var teacher = ({
    name: "Nur islam",
    course: "Math"
});
information(student1);
information(teacher);
// class based narrowing
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sound = function () {
        console.log("dog is darking gheu gheu");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sound = function () {
        console.log("cat is says meu meu");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.sound();
    }
    else if (animal instanceof Cat) {
        animal.sound();
    }
}
var d1 = new Dog();
var d2 = new Cat();
makeSound(d1);
makeSound(d2);
