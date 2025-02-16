let students = new Map();
// console.log(students);

students.set("Leon", "Simonoski");
students.set("Leon", "Hhe");
students.set("Filip", "Something");
students.set("Macko", "Mackovski");

// let student1 = students.get("Leon");
// console.log(student1);

//check if key exists
// let exists = students.has("Macko");
// console.log(exists);
// let exists1 = students.has("Macko1");
// console.log(exists1);

//checking length
// console.log(students.size);

// //delete record
// students.delete("Filip");

// //clear map
// students.clear();

// for (let [key, value] of students) {
//   console.log("Key: ", key);
//   console.log("Value: ", value);
// }

class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

let john = new Employee(1, "John", "Developer", 100);
let jane = new Employee(2, "Jane", "Developer", 200);
let bob = new Employee(3, "Bob", "Developer", 300);
let jill = new Employee(4, "Jill", "Developer", 400);
let itan = new Employee(5, "Itan", "tester", 500);
let jake = new Employee(6, "Jake", "tester", 600);
let employee1 = new Employee(7, "Employee1", "tester", 700);
let employee2 = new Employee(8, "Employee2", "design", 800);
let employee3 = new Employee(9, "Employee3", "design", 900);

let employees = [
  john,
  jane,
  bob,
  jill,
  itan,
  jake,
  employee1,
  employee2,
  employee3,
];

let mappedEmployees = new Map();
for (let empl of employees) {
  if (mappedEmployees.has(empl.position)) {
    let employees = mappedEmployees.get(empl.position);
    mappedEmployees.set(empl.position, [...employees, empl]);
  } else {
    mappedEmployees.set(empl.position, [empl]);
  }
}

console.log(mappedEmployees);

let developers = mappedEmployees.get("Developer");
for (let empl of mappedEmployees.get("Developer")) {
  console.log(empl);
}

//SET

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);

mySet.add(2); //adds the 2 but we only have unique values

//check if value exists
console.log(mySet.has(2));
console.log(mySet.has(7));

//check size/length

console.log(mySet.size);

mySet.delete(2);
console.log(mySet);

// mySet.clear();

let numbers = [1, 2, 1, 3, 4, 4, 4, 5, 6, 7, 8, 9, 9, 7, 2, 3, 15, 15, 15, 15];
let numbersSet = new Set(numbers);
console.log(numbersSet);
