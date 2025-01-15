function generateNumbersDivisibleByThree() {
  let array = [];
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      array.push(i);
    }
  }
  return array;
}

// console.log(generateNumbersDivisibleByThree());

function generateNumbersDivisibleByFour() {
  let array = [];
  let i = 1;
  while (i <= 1000) {
    if (i % 4 === 0) {
      array.push(i);
    }
    i++;
  }
  return array;
}

// console.log(generateNumbersDivisibleByFour());

function generateNumbersContainingOne() {
  let array = [];
  let i = 1;
  do {
    if (i % 10 === 1) {
      array.push(i);
    }
    i++;
  } while (i <= 1000);
  return array;
}

// console.log(generateNumbersContainingOne());

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

function leavesOnlyStrings(arr) {
  let array = [];
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "string") {
      array.push(arr[i]);
    }
  }
  return array;
}

// console.log(leavesOnlyStrings(test));

function leavesOnlyNumbers(arr) {
  let array = [];
  for (let item of arr) {
    if (typeof item === "number" && !Number.isNaN(item)) {
      array.push(item);
    }
  }
  return array;
}

// console.log(leavesOnlyNumbers(test));

function leavesNanAndOthers(arr) {
  let array = [];
  let i = 0;
  while (i < arr.length) {
    let element = arr[i];
    if (element) {
      array.push(element);
    }
    i++;
  }
  return array;
}

// console.log(leavesNanAndOthers(test));

function pickRandomColor() {
  let mainDiv = document.getElementById("mainDiv");
  let rgb = Math.floor(Math.random() * 255);
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);

  let color = `rgb(${rgb}, ${rgb1}, ${rgb2})`;

  mainDiv.style.backgroundColor = color;
  mainDiv.innerText = color;
}

// pickRandomColor();

//Student constructor function
function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy ? academy : "N/A";
  this.grades = grades ? grades : [];

  this.getAge = function () {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.birthYear;
  };
  this.getInfo = function () {
    let academyInfo = "";
    if (this.academy === "N/A") {
      academyInfo = "and its not part of any academy";
    } else {
      academyInfo = `from the academy ${academy}`;
    }
    return `This is student ${firstName} ${lastName} ${academyInfo}`;
  };

  this.getGradesAvarage = function () {
    if (this.grades.length === 0) {
      return 0;
    }
    let avarage = 0;
    for (let grade of this.grades) {
      avarage += grade;
    }
    return Math.floor(avarage / this.grades.length);
  };
}

let student1 = new Student("Leonid", "Simonoski", 1996, "Qinshift");
let student2 = new Student("Macko", "Mackovski", 1993);
let student3 = new Student(
  "Trajko",
  "Trajkovski",
  1968,
  "Qinshift",
  [2, 4, 6, 10]
);

let studentsArray = [student1, student2, student3];

for (let student of studentsArray) {
  console.log("Student age: " + student.getAge());
  console.log("Student info : " + student.getInfo());
  console.log("Student avarage grades: " + student.getGradesAvarage());
}

//Student constructor function
