// console.log("Hello from node.js");

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("Leon");

// console.log(document);
// console.log(window);

const say = require("./say");

// console.log(say.sayHello("Leon"));
// console.log(say.sayBye("Jane"));

// const { sum, substract, multiply } = require("./calculator");

// console.log(sum(1, 2));

//WORKING WITH FILE SYSTEM

const textService = require("./testService");

// textService.addText("Hello from Qinshift Academy Group 1");
//
// textService.appendText("We are learning Node.js");

// let textFileContent = textService.readText();
// console.log(textFileContent);

const jsonService = require("./jsonReaderService");

let students = {
  students: [
    {
      firstName: "Leon",
      lastName: "Simonoski",
    },
    {
      firstName: "Jane",
      lastName: "Janevski",
    },
  ],
};

jsonService.addData(students);

let grades = [1, 2, 3, 4, 5, 6];
jsonService.appendData({ grades: grades });
