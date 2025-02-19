//sesion storage

sessionStorage.setItem("username", "Leon");

let obj = {
  firstName: "Leon",
  lastName: "Simonoski",
};

sessionStorage.setItem("userInfo", JSON.stringify(obj));

let userInfo = sessionStorage.getItem("userInfo");
console.log(userInfo);

// sessionStorage.clear();

//local storage
localStorage.setItem("usertoken", "dasdsadsadassdw");
let userToken = localStorage.getItem("usertoken");
console.log(userToken);

let localStorageService = {
  setItem: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: function (key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

localStorageService.setItem("currentUser", {
  firstName: "name",
  lastName: "lastname",
  age: 123,
  canDance: false,
  academy: "QA",
});

localStorageService.setItem("name", "Trajan");
localStorageService.setItem("age", 123);
localStorageService.setItem("canDance", false);

console.log(localStorageService.getItem("name"));
console.log(localStorageService.getItem("age"));
console.log(localStorageService.getItem("canDance"));
