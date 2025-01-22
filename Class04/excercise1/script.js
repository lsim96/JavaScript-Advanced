document.getElementById("space-btn").addEventListener("click", function () {
  fetch("http://api.open-notify.org/iss-now.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (response) {
      console.log(response);
      console.log("Response has failed" + response.status);
      console.log(response.response.text);
    });
});

document
  .getElementById("space-btn-astros")
  .addEventListener("click", function () {
    fetch("http://api.open-notify.org/astros.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (response) {
        console.log(response);
        console.log("Response has failed" + response.status);
        console.log(response.response.text);
      });
  });

document.getElementById("bitcoin-btn").addEventListener("click", function () {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (response) {
      console.log(response);
      console.log("Response has failed" + response.status);
      console.log(response.response.text);
    });
});

let generateBtn = document.getElementById("cat-btn");

generateBtn.addEventListener("click", function () {
  getCatInfo("https://catfact.ninja/fact");
});

function getCatInfo(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showDetails(data);
    });
}

function showDetails(cat) {
  let message = `${cat.fact}`;
  document.getElementById("show-details").innerHTML = message;
}
