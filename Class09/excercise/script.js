let url = "https://restcountries.com/v2/alpha/mkd";

// function getUrl(successfulCallback, errorCallback) {
//   $.ajax({
//     url: url,
//     success: function (response) {
//       let data = JSON.stringify(response);
//       successfulCallback(data);
//     },
//     error: function (error) {
//       errorCallback(error);
//     },
//   });
// }

// console.log(getUrl());

function getUrlPromise(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: function (response) {
        resolve(response);
      },
      error: function (error) {
        console.log("Rejected");
        reject(error);
      },
    });
  });
}

console.log(getUrlPromise(url));

// async function getUrlAsync(url) {
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   return data;
// }

// console.log(getUrlAsync(url));
