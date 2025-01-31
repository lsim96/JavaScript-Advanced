//destructuring

let numbers = [1, 2, 3, 4, 5, 6];

//using index
// let first = numbers[0];
// let second = numbers[1];

// let first = numbers.shift();
// let second = numbers.shift();
// let rest = numbers;

// console.log(first, second, rest);

let [first, second, q, ...rest] = numbers;
// console.log(first, second, a, rest);
// let b = numbers.shift();

let obj = {
  firstName: "Leon",
  lastName: "Simonoski",
  age: 29,
};

// let firstName = obj.firstName;
// let lastName = obj.lastName;
// let age = obj.age;

// destructuring using property names
let { firstName, lastName, age } = obj;
//destructuring using new variable "property: <variable name>"
let { firstName: ime, lastName: prezime, age: godini } = obj;
// console.log(ime, prezime, godini);

function returnAritmenticOperations() {
  let operations = [(num, num1) => num + num1, (num, num1) => num - num1];
  return operations;
}

// let result = returnAritmenticOperations();
// let sum1 = result[0];
// let substract1 = result[1];
let [sum, substract] = returnAritmenticOperations();
// console.log(sum, substract);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let [a, b, c, d, e, f, g, h, i, j] = numbers1;
// console.log(a, b, c, d, e, f, g, h, i, j);

let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9, 0];
let arrC = arrA.concat(arrB);
// console.log(arrC);
let arrD = [...arrA, ...arrB];
// console.log(arrD);

let arrE = [];
arrE.push(...arrB);
// arrE.push(arrB);
// console.log(arrE);

function recurciseSumOfArray(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  //   let first = numbers.shift()
  //   let rest = numbers
  let [first, ...rest] = numbers;

  return first + recurciseSumOfArray(rest);
}

let result = recurciseSumOfArray(numbers);
// console.log(result);

let person = {
  firstName: "Leonid",
  lastName: "Simonoski",
};

let address = {
  street: "Ivan Cankar",
  number: "65",
  town: "Skopje",
};

let combined = {
  ...person,
  ...address,
  age: 29,
};

// console.log(combined);

let combinedChanged = {
  ...person,
  ...address,
  firstName: "Tosho",
  town: "Prilep",
};
// console.log(combinedChanged);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function flatMatrixToArray(array, currentElement) {
  array.push(...currentElement);
  return array;
}

let flatArray = matrix.reduce(flatMatrixToArray, []);
// console.log(flatArray);

//null coalescing operator
let z = null;

//without null coalesing operator
let x = z;
if (x === null) {
  x = 5;
}
console.log(x);

//with it
let y = z ?? 3;
console.log(y);
