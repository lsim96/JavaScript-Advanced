
document.getElementById("btn").addEventListener("click", function() {
let xhr = new XMLHttpRequest();
xhr.onload = function() {
console.log("Request is sent!");

if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Request is successfull!");
    let response = xhr.response;
    let reponseObj = JSON.parse(response);
    console.log(response);
    console.log(reponseObj);
} else {
    console.log(xhr.responseText);
}
};

xhr.open("GET", "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json");
xhr.send();
});