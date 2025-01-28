const urls = {
  category: "https://fakestoreapi.com/products/categories",
  allProducts: "https://fakestoreapi.com/products/",
  productsByCategory: "https://fakestoreapi.com/products/category/",
};

let filtersDiv = document.getElementById("filters");
let productsMainDiv = document.getElementById("products");
let productsDiv = document.getElementById("show-products");
let categoryHeader = document.getElementById("category-title");

//get all catergories

function getAllCategories() {
  fetch(urls.category)
    .then((response) => response.json())
    .then((data) => {
      showCategoriesDropDown(data);
    });
}

function getAllProducts() {
  fetch(urls.allProducts)
    .then((res) => res.json())
    .then((products) => {
      showProducts(products);
    });
}

function getProductsByCategory(category) {
  fetch(`${urls.productsByCategory}${category}`)
    .then((res) => res.json())
    .then((products) => {
      showProducts(products);
    });
}

function addCartEventListeners() {
  let cartBtns = document.querySelectorAll(".cart");
  console.log(cartBtns);
  for (let btn of cartBtns) {
    btn.addEventListener("click", function (e) {
      console.log(e.target);
    });
  }
}

// getAllProducts();

function showCategoriesDropDown(data) {
  let btn = ` <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
    </button>`;
  let ul = " <ul class='dropdown-menu'>";

  for (let category of data) {
    let li = ` <li><button name = "category" class="dropdown-item" value="${category}">${category}</button></li>`;
    ul += li;
    let html = `<div class="dropdown">
    ${btn} ${ul}
    </div>`;
    document.getElementById("category-filter").innerHTML = html;
  }

  ul += "</ul>";
}

function showProducts(products) {
  let html = "";

  for (let product of products) {
    let card = `<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.price} $</p>
    <button href="#" class="btn btn-primary cart" data-product-id = '${product.id}'>Add to cart</button>
  </div>
</div>`;
    html += card;
  }
  productsDiv.innerHTML = html;
  addCartEventListeners();
}

getAllCategories();

document
  .getElementById("category-filter")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" && event.target.name === "category") {
      categoryHeader.innerText = event.target.value;
      getProductsByCategory(event.target.value);
    }
  });

document
  .getElementById("products-navigation")
  .addEventListener("click", function () {
    filtersDiv.style.display = "block";
    productsMainDiv.style.display = "block";
    categoryHeader.innerText = "All products";
    getAllProducts();
  });
