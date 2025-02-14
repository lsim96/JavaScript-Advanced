function Academy(name, start, end) {
  this.Name = name;
  this.Students = [];
  this.Subjects = [];
  this.Start = start;
  this.End = end;

  this.numberOfClasses = this.Subjects.length * 10;

  this.PrintStudents = function () {
    console.log("Students in " + this.Name + ":");
    this.students.forEach((student) => {
      console.log(student.FirstName + " " + student.LastName);
    });
  };

  this.PrintSubjects = function () {
    console.log("Subjects offered by " + this.Name + ":");
    this.Subjects.forEach((subject) => {
      console.log(subject.Title);
    });
  };
}

function Subject(title, isElective, academy) {
  this.Title = title;
  this.NumberOfClasses = 10;
  this.Academy = academy;
  this.Students = [];
  this.isElective = isElective;

  this.OverrideClasses = function (num) {
    if (num >= 3) {
      this.NumberOfClasses = num;
    }
  };
}

function Student(firstName, lastName, age) {
  this.FirstNameirstName = firstName;
  this.LastName = lastName;
  this.Age = age;
  this.CompletedSubjects = [];
  this.Academy = null;
  this.CurrentSubject = null;

  this.startAcademy = function (academy) {
    this.Academy = academy;
    academy.Students.push(this);
  };
}
