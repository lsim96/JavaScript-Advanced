let btn = document.getElementById("generateTitle");
let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
  let header = document.createElement("h1");
  header.style.backgroundColor = color.value;
  header.style.fontSize = fontSize.value + "px";
  header.innerText = text.value;
  document.getElementById("header").appendChild(header);
});
