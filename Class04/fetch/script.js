let javaScriptObj = {
  name: "Leon",

  getName: function () {
    console.log("Hello");
  },
};

let jsonObj = {
  "name": "Leon",
  "lastName": "Simonoski",


};

let jsObj = JSON.stringify(javaScriptObj);
let jsonObjString = JSON.stringify(jsonObj);

console.log(jsObj);
console.log(jsonObjString);

console.log(JSON.parse(jsObj));
console.log(JSON.parse(jsonObjString));