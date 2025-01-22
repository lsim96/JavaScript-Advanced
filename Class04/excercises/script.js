document.getElementById("get-sw-people").addEventListener("click", function () {
  getSwapiPerson("https://swapi.dev/api/people");
});

document.getElementById("prev").addEventListener("click", function (event) {
  let url = event.target.value;
  getSwapiPerson(url);
});

document.getElementById("next").addEventListener("click", function (event) {
  let url = event.target.value;
  getSwapiPerson(url);
});

document.getElementById("content").addEventListener("click", function (event) {
  event.stopPropagation();

  if (event.target.tagName === "BUTTON") {
    console.log("event.target");
    let url = event.target.value;
    getSwapiCharacter(url);
  }
});

function showPrevNextPageBtn(data) {
  let prevBtn = document.getElementById("prev");
  prevBtn.style.display = "block";
  let nextBtn = document.getElementById("next");
  nextBtn.style.display = "block";

  if (data.previous) {
    prevBtn.disabled = false;
    prevBtn.value = data.previous;
  } else {
    prevBtn.disabled = true;
  }

  if (data.next) {
    nextBtn.disabled = false;
    nextBtn.value = data.next;
  } else {
    nextBtn.disabled = true;
  }
}

function showSwapiPeople(people) {
  let html = "<ol>";

  for (let person of people) {
    let li = `
    <li>
    ${person.name} has appeared in ${person.films.length}
    <button value="${person.url}">Get items</button>
    </li>
    `;
    html += li;
  }

  html += "</ol";
  document.getElementById("content").innerHTML = html;
}

function getSwapiPerson(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showSwapiPeople(data.results);
      showPrevNextPageBtn(data);
    });
}

function getSwapiCharacter(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showDetails(data);
    });
}

function showDetails(character) {
  let message = `Hi my ${character.name}. I have been in ${character.films.length} movies, and my height is ${character.height}cm. I was born in ${character.birth_year}`;

  document.getElementById("random").innerHTML += message;
}
