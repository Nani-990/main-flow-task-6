// index.js

document.addEventListener("DOMContentLoaded", initialise);

let allProducts;
let cart = [];

function initialise() {
    fetchProducts();
    filterCategories();
    searchProduct();
    openCart();
    closeCart();
}

async function fetchProducts() {
    try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        allProducts = data;
        displayProducts(allProducts);
    } catch (error) {
        console.error(error);
    }
}

function displayProducts(products) {
    const list = document.querySelector("#list");
    list.innerHTML = products
        .map((product) => {
            const { image, category, price, title, id } = product;
            return `
                <li class="card">
                    <div class="img-content">
                        <img src=${image} alt=${category} />
                    </div>
                    <div class="card-content">
                        <p class="card-price">$${price.toFixed(2)}</p>
                        <h4 class="card-title">${title.substring(0, 45)}...</h4>
                        <p class="card-desc hide">${category.toUpperCase()}</p>
                        <div class="btn-container">
                            <button class="card-btn" onclick="addToCart(${id})">Add to Cart</button>
                        </div>
                    </div>
                </li>
            `;
        })
        .join("");
}

function filterCategories() {
    const select = document.querySelector("#filter-btn");
    select.addEventListener("change", filterProducts);

    function filterProducts(e) {
        const list = document.querySelector("#list");
        let content;
        const option = e.target.value;

        list.innerHTML = "";

        switch (option) {
            case "all":
                content = allProducts;
                break;
            case "men":
                content = allProducts.filter((product) => product.category === "men's clothing");
                break;
            case "women":
                content = allProducts.filter((product) => product.category === "women's clothing");
                break;
            case "jewellery":
                content = allProducts.filter((product) => product.category === "jewelery");
                break;
            case "electronics":
                content = allProducts.filter((product) => product.category === "electronics");
                break;
            default:
                content = allProducts;
        }

        displayProducts(content);
    }
}

function searchProduct() {
    const searchInput = document.querySelector("#search-input");
    searchInput.addEventListener("keyup", (e) => {
        const list = document.querySelector("#list");
        list.innerHTML = "";
        const searchTerm = e.target.value.toLowerCase();
        const content = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );
        displayProducts(content);
    });
}

function openCart() {
    const cartBtn = document.querySelector(".cart-container");
    cartBtn.addEventListener("click", seeModal);
}

function seeModal() {
    const body = document.body;
    const cartModal = document.querySelector(".modal");
    cartModal.classList.remove("hide");
    body.classList.add("modal-open");
}

function closeCart() {
    const closeBtn = document.querySelector(".fa-xmark");
    closeBtn.addEventListener("click", closeModal);
}

function closeModal() {
    const body = document.body;
    const cartModal = document.querySelector(".modal");
    cartModal.classList.add("hide");
    body.classList.remove("modal-open");
}

function addToCart(id) {
    const searchCart = cart.find((product) => product.id === id);
    if (searchCart) {
        alert("Product already added to the cart");
    } else {
        const oldProduct = allProducts.find((product) => product.id === id);
        cart.push({ ...oldProduct, quantity: 1 });
    }
    shoppingCart();
}

function shoppingCart() {
    const cartList = document.querySelector("#cart-list");
    const cartTotal = document.querySelector("#cart-total");
    const cartNumber = document.querySelector(".cart-number-container");
    let cartHTML = "";

    cart.forEach((product) => {
        const { title, price, quantity, id } = product;
        cartHTML += `
            <li id="item-container">
                <div class="cart-title">
                    <h3>${title.substring(0, 30)}...</h3>
                </div>
                <div class="cart-quantity-container">
                    <p class="cart-price">$${price.toFixed(2)}</p>
                    <div class="button-quantity-container">
                        <button class="plus" onclick="increment(${id})">+</button>
                        <p>${quantity}</p>
                        <button class="minus" onclick="decrement(${id})">-</button>
                    </div>
                    <p id="item-total">$${(price * quantity).toFixed(2)}</p>
                    <div class="remove-cart-item">
                        <button onclick="deleteCartItem(${id})">X</button>
                    </div>
                </div>
            </li>
        `;
    });

    cartList.innerHTML = cartHTML;

    const itemTotals = document.querySelectorAll("#item-total");
    let sum = 0;
    itemTotals.forEach((itemTotal) => {
        const numericValue = itemTotal.innerHTML;
        const index = numericValue.indexOf("$");
        sum += Number(numericValue.slice(index + 1));
    });

    cartTotal.innerHTML =
        sum > 0
            ? `<button id="checkout" onclick="checkout()">Pay Now: $${sum.toFixed(2)}</button>`
            : `No items in the cart`;

    let newSum = cart.reduce((total, product) => total + product.quantity, 0);

    if (newSum < 1) {
        cartNumber.classList.add("hide");
    } else {
        cartNumber.classList.remove("hide");
        cartNumber.innerHTML = newSum;
    }
}

function increment(id) {
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct) {
        cartProduct.quantity++;
    }
    shoppingCart();
}

function decrement(id) {
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct && cartProduct.quantity > 1) {
        cartProduct.quantity--;
    }
    shoppingCart();
}

function deleteCartItem(id) {
    cart = cart.filter((product) => product.id !== id);
    shoppingCart();
}

function checkout() {
    const cartList = document.querySelector("#cart-list");
    cart = [];
    shoppingCart();
    cartList.innerHTML = `<p class="checkout-message">Thank you for your purchase</p>`;
}