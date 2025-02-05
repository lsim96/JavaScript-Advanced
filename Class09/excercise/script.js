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

// console.log(getUrl(url));

// function getUrlPromise(url) {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: url,
//       success: function (response) {
//         resolve(response);
//       },
//       error: function (error) {
//         console.log("Rejected");
//         reject(error);
//       },
//     });
//   });
// }

// console.log(getUrlPromise(url));

// async function getUrlAsync() {
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   return data;
// }

// async function getNeighboursAsync() {
//   let data = await getUrlAsync();
//   console.log(data.borders);
//   let html = "<ul>";
//   html += `<li>${data.borders}</li>`;
//   html += "<ul>";

//   document.getElementById("content").innerHTML = html;
// }

// getNeighboursAsync();

async function getCountryNeighboursAsync(countryCode) {
  try {
    let countryResponse = await fetch(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );
    let countryData = await countryResponse.json();

    console.log("Country:");
    console.log(countryData);

    let neigbours = countryData.borders;

    if (neigbours && neigbours.length > 0) {
      console.log("Neigbours:");

      for (let borderCode of neigbours) {
        let neighboursResponse = await fetch(
          `https://restcountries.com/v2/alpha/${borderCode}`
        );
        let neighbourData = await neighboursResponse.json();

        console.log(neighbourData.name);
        console.log(neighbourData);
      }
    } else {
      console.log("No neighbouring countries.");
    }
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
}

getCountryNeighboursAsync("SRB");
