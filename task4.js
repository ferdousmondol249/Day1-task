function getFirstItem(arr) {
    if (arr.length === 0) {
        return null;
    }
    else {
        return arr[0];
    }
}
var names = ["Ferdous", "Rahim", "Karim"];
var firstName = getFirstItem(names);
console.log(firstName);
var numbers = [10, 20, 30];
var firstNumber = getFirstItem(numbers);
console.log(firstNumber);
var empty = [];
var result = getFirstItem(empty);
console.log(result);
