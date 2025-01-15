let arr = [];

let arr1 = [1, "Leon", [1, 2, 3], { firstName: "Leon" }];

let result = ["Leon", "Simonoski", 29];
let firstName = result[0];
let lastName = result[1];
let age = result[2];

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 9];

let arrayOfStudentGrades = [
  {
    name: "Leon",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Leon",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Leon",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Leon",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Leon",
    grades: [1, 2, 3, 4, 5, 6],
  },
];

function getStudent() {
  let name = "Filip";
  let age = 20;
  let address = "N/A";

  return [name, age, address];
}

//get value
let secondElemenent = arrayOfStudentGrades[1];
console.log(secondElemenent);
//set value
arrayOfStudentGrades[3] = {
  name: "Filip",
  grades: [1, 2, 6, 7, 8, 3],
};

console.log(arrayOfStudentGrades);

arrayOfStudentGrades[arrayOfStudentGrades.length] = {
  name: "Bob",
  grades: [1, 2, 3],
};

console.log(arrayOfStudentGrades);

//add element at the end using push
//adding one
arrayOfStudentGrades.push({
  name: "Mikica",
  grades: [1],
});
//adding multiple
arrayOfStudentGrades.push(
  {
    name: "Jill",
    grades: [1, 3],
  },
  {
    name: "Jill2",
    grades: [1, 3],
  }
);

//adding elements in front of the array
arrayOfStudentGrades.unshift({
  name: "Bobi",
  grades: [1],
});

//removing element from the end of the array
let lastElement = arrayOfStudentGrades.pop();

//removing element from the start of the array
let firstElement = arrayOfStudentGrades.shift();
