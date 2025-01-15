//Constructor functions (models)
function Todo(id, title, description) {
  this.id = id;
  this.title = title;
  this.discription = description;
  this.isComplete = false;
}

//Global variables
let todoInMemory = {
  todos: [],
  todoIdCounter: 1,
};

let form = document.getElementById("add-todo-form");

//Functions
function createTodo(title, description) {
  let todo = new Todo(todoInMemory.todoIdCounter, title, description);
  todoInMemory.todoIdCounter += 1;
  return todo;
}

function resetInputs(parentElement) {
  let inputs = parentElement.getElementsByTagName("input");
  for (let input of inputs) {
    input.value = "";
  }
}

function getValuesFromInputs(parentElement) {
  let inputs = parentElement.getElementsByTagName("input");
  let inputValues = {};
  for (let input of inputs) {
    inputValues[input.name] = input.value;
  }
  return inputValues;
}

function showHideElement(element, isHidden) {
  //   if (isHidden) {
  //     element.style.display = "none";
  //   } else {
  //     element.style.display = "block";
  //   }
  element.style.display = isHidden ? "none" : "block";
}

//Events
document.querySelector("#add-todo").addEventListener("click", function () {
  showHideElement(form, false);
});

document.querySelector("#reset-todo").addEventListener("click", function () {
  resetInputs(form);
});

document.getElementById("save-todo").addEventListener("click", function () {
  let inputValues = getValuesFromInputs(form);
  let todo = createTodo(inputValues.title, inputValues.description);
  todoInMemory.todos.push(todo);
  resetInputs(form);
  showHideElement(form, true);
  console.log(todoInMemory.todos);
});
