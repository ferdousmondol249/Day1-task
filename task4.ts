function getFirstItem<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  return arr[0]!;
}


const names = ["Ferdous", "Rahim", "Karim"];
const firstName = getFirstItem(names);
console.log(firstName);

const numbers = [10, 20, 30];
const firstNumber = getFirstItem(numbers);
console.log(firstNumber); 

const empty: string[] = [];
const result = getFirstItem(empty);
console.log(result);