//code for hamburger menu toggle

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
    navigationLinks.classList.toggle("active");
});

//code for fetching products from JSON and implementing in Products grid

// window.addEventListener("DOMContentLoaded", function () {
//     let products = productsList;
//     let displayProducts = products.Products.map(function(item) {
//         console.log(item);
//         return `<h1>${item.name}</h1>`;
//     });
//     displayProducts = displayProducts.join("");
//     productsSection.innerHTML = displayProducts;
//     console.log(displayProducts);
// });

const productsGrid = document.querySelector(".products-grid");

function getProducts() {
    fetch("products.json")
        .then(response => response.json())
        .then(data => defineList(data));
}

function defineList(data) {
    let productsData = data;
        let displayProducts = productsData.Products.map(function(item) {
        console.log(item);
        return `<div class="grid-item">
            <img src="${item.img}" alt="">
            <div class="name-and-price">
                <h1 class="name">${item.name}</h1>
                <h2 class="price">${item.price}</h2>
            </div>
            <h3 class="description">${item.description}</button>
            <button>View in Shopify</button>
        </div>
    </div>`;
    });
    displayProducts = displayProducts.join("");
    productsGrid.innerHTML = displayProducts;
    console.log(displayProducts);
}

getProducts();
