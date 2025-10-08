let value: unknown = "Hello TypeScript";

//console.log(value.length);  Error



if (typeof value === "string") {
  //safe assertion
  const strValue = value as string;
  console.log(strValue.length); // 17
  console.log(strValue.toUpperCase()); // "HELLO TYPESCRIPT"
}


function printStringLength(val: unknown) {
  if (typeof val === "string") {
    console.log(`Length: ${(val as string).length}`);
  } else {
    console.log("Not a string!");
  }
}

printStringLength("Ferdous");  // Length: 7
printStringLength(12345);      // Not a string!
