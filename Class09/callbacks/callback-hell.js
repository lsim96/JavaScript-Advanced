let url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";
let studentsUrl =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let bandsUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json";
let booksUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json";

function getDocumentsCallback(successCallback, errorCallback) {
  $.ajax({
    url: url,
    success: function (response) {
      let data = JSON.parse(response);
      successCallback(data);
    },
    error: function (error) {
      errorCallback(error);
    },
  });
}

function getStudentCallback(successCallback, errorCallback) {
  $.ajax({
    url: studentsUrl,
    success: function (response) {
      let data = JSON.parse(response);
      successCallback(data);
    },
    error: function (error) {
      errorCallback(error);
    },
  });
}

function getBandsCallback(successCallback, errorCallback) {
  $.ajax({
    url: bandsUrl,
    success: function (response) {
      let data = JSON.parse(response);
      successCallback(data);
    },
    error: function (error) {
      errorCallback(error);
    },
  });
}

function getBooksCallback(successCallback, errorCallback) {
  $.ajax({
    url: booksUrl,
    success: function (response) {
      let data = JSON.parse(response);
      successCallback(data);
    },
    error: function (error) {
      errorCallback(error);
    },
  });
}

getDocumentsCallback(
  function (data) {
    console.log(data);
    console.log("First");
    // lots of code ...
    // ....
    // ....
    getStudentCallback(
      function (data) {
        console.log(data);
        console.log("Second");
        // lots of code ....
        // lots of code ....
        // lots of code ....
        getBooksCallback(
          function (data) {
            console.log(data);
            console.log("Third");
            // lots of code ....
            // lots of code ....
            // lots of code ....
            getBandsCallback(
              function (data) {
                console.log(data);
                console.log("Fourth");
                // lots of code ....
                // lots of code ....
                // lots of code ....
              },
              function (error) {
                console.log(error);
              }
            );
          },
          function (error) {
            console.log(error);
          }
        );
      },
      function (error) {
        console.log(error);
      }
    );
  },
  function (error) {
    console.log(error);
  }
);
