function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

let person = new Person("Leonid", "Simonoski", 29);

function Student(firstName, lastName, age, studentId, academyName) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));

  this.academyName = academyName;
  this.studentId = studentId;

  this.study = function () {
    console.log(
      `The student ${this.firstName} is studying in the ${academyName}`
    );
  };
}

Person.prototype.getAcademy = function (student) {
  return student.academyName;
};

function DesignStudent(firstName, lastName, age, isStudentOfTheMonth) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, 1123, "DesignAcademy")
  );

  this.isStudentOfTheMonth = isStudentOfTheMonth;

  this.attendAdobeExam = function () {
    console.log(`The student ${firstName} is doign an adobe exam`);
  };
}

function CodeStudent(
  firstName,
  lastName,
  age,
  hasIndividualProject,
  hasGroupProject
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, 11223, "CodeAcademy")
  );

  this.hasIndividualProject = hasIndividualProject;
  this.hasGroupProject = hasGroupProject;

  this.doProject = function (type) {
    if (type === "individual") {
      this.hasIndividualProject = true;
      this.hasGroupProject = false;
    } else if (type === "group") {
      this.hasGroupProject = true;
      this.hasIndividualProject = false;
    }
  };
}

function NetworkStudent(firstName, lastName, age, academyPart) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, 22345, "NetWorkAcademy")
  );

  this.academyPart = academyPart;

  this.attendCiscoExam = function () {
    console.log(`The student ${firstName} is doing a cisco exam`);
  };
}

let network = new NetworkStudent("Filip", "Mircevski", 34, 12);
console.log(network);

let code = new CodeStudent("Mirce", "Acevski", 18, true, false);
console.log(code);
code.doProject("individual");

let design = new DesignStudent("Stefan", "Kirovski", 24, true);
console.log(design);
