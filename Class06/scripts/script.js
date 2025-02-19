const urls = {
  category: "https://fakestoreapi.com/products/categories",
  allProducts: "https://fakestoreapi.com/products/",
  productsByCategory: "https://fakestoreapi.com/products/category/",
};

let pageSize = [3, 6, 9];
let currentPageSize = 6;
let pagination = {
  totalItems: 0,
  maxPages: 0,
  currentPage: 0,
};

let filtersDiv = document.getElementById("filters");
let productsMainDiv = document.getElementById("products");
let productsDiv = document.getElementById("show-products");
let categoryHeader = document.getElementById("category-title");
let divToShowSelect = document.getElementById("divRandom");

//get all catergories

function getAllCategories() {
  fetch(urls.category)
    .then((response) => response.json())
    .then((data) => {
      showCategoriesDropDown(data);
    });
}

function getAllProducts(page, pageSize) {
  fetch(urls.allProducts)
    .then((res) => res.json())
    .then((products) => {
      pagination.totalItems = products.length;
      pagination.maxPages = Math.ceil(pagination.totalItems / pageSize);
      let currentPageNumber = document.getElementById("currentPageNumber");
      currentPageNumber.innerText = `${pagination.currentPage} / ${pagination.maxPages}`;
      // console.log(pagination.maxPages);

      let newProducts = products.splice(page * pageSize, pageSize);

      showProducts(newProducts);
    });
}

function getProductsByCategory(category) {
  fetch(`${urls.productsByCategory}${category}`)
    .then((res) => res.json())
    .then((products) => {
      showProducts(products);
    });
}

let cartProductIds = [];

function addCartEventListeners() {
  let cartBtns = document.querySelectorAll(".cart");
  console.log(cartBtns);
  for (let btn of cartBtns) {
    btn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data-product-id"));
      let id = e.target.getAttribute("data-product-id");
      cartProductIds.push(+id);
      console.log(cartProductIds);
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
  setPageSize();
}

getAllCategories();

function setPageSize() {
  let selectDiv = document.getElementById("pageSize");
  let html = "";
  for (let page of pageSize) {
    let option = ` <option value="${page}"
    ${page === currentPageSize ? "selected" : ""}
    >${page}</option>`;

    html += option;
  }

  selectDiv.innerHTML = html;
}

function getAllProductDetails(ids) {
  return fetch(urls.allProducts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let result = data.filter((x) => ids.includes(x.id));
      return result;
    });
}

function addingToCart() {
  let cartDiv = document.getElementById("cartDiv");
  cartDiv.style.display = "block";
  getAllProductDetails(cartProductIds).then((data) => {
    let ul = `<ul>`;
    for (let product of data) {
      let li = `
      <li style="display: block">
      ${product.title}
      $${product.price}
      <button href="#" id="btn-remove-cart" data-product-id = '${product.id}'>Remove</button>
      </li>
      `;

      ul += li;
    }
    cartDiv.innerHTML = ul;
  });
}

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
    divToShowSelect.style.display = "block";
    getAllProducts(pagination.currentPage, currentPageSize);
  });

document.getElementById("pageSize").addEventListener("change", function (e) {
  currentPageSize = e.target.value;
  getAllProducts(pagination.currentPage, currentPageSize);
  console.log(currentPageSize);
  console.log(e.target.value);
});

document.getElementById("prevBtn").addEventListener("click", function () {
  if (pagination.currentPage !== 0) {
    pagination.currentPage--;
  }
  getAllProducts(pagination.currentPage, currentPageSize);
});

document.getElementById("nextBtn").addEventListener("click", function () {
  if (pagination.currentPage !== pagination.maxPages) {
    pagination.currentPage++;
  } else {
    pagination.currentPage === pagination.maxPages;
  }
  getAllProducts(pagination.currentPage, currentPageSize);
});

document.getElementById("cartSection").addEventListener("click", function () {
  addingToCart();
});
