var value = "Hello TypeScript";
//console.log(value.length);  Error
if (typeof value === "string") {
    //safe assertion
    var strValue = value;
    console.log(strValue.length); // 17
    console.log(strValue.toUpperCase()); // "HELLO TYPESCRIPT"
}
function printStringLength(val) {
    if (typeof val === "string") {
        console.log("Length: ".concat(val.length));
    }
    else {
        console.log("Not a string!");
    }
}
printStringLength("Ferdous"); // Length: 7
printStringLength(12345); // Not a string!
