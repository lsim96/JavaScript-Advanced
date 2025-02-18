import CodeStudent from "../models/codeStudent.js";
import Student from "../models/student.js";
import {
  printStudents,
  checkIfStudentIsOnCodeAcademy,
} from "../services/studentService.js";

let student = new Student(1, "Leon");
let codeStudent = new CodeStudent(2, "Jane");

printStudents([student, codeStudent]);
checkIfStudentIsOnCodeAcademy(codeStudent);
checkIfStudentIsOnCodeAcademy(student);
