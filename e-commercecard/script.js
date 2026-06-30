const products = [
    {
        id: 1,
        name: "Shoes",
        price: 4000,
        category: "Fashion",
        image: "https://picsum.photos/200?1"
    },
    {
        id: 2,
        name: "Headphones",
        price: 3500,
        category: "Electronics",
        image: "https://picsum.photos/200?2"
    },
    {
        id: 3,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://picsum.photos/200?3"
    },
    {
        id: 4,
        name: "Backpack",
        price: 1800,
        category: "Accessories",
        image: "https://picsum.photos/200?4"
    },
    {
        id: 5,
        name: "Watch",
        price: 2000,
        category: "Accessories",
        image: "https://picsum.photos/200?5"
    }
];

const productContainer = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const total = document.getElementById("total");
const clearCart = document.getElementById("clearCart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Products
function displayProducts(productsList) {
    productContainer.innerHTML = "";

    productsList.forEach(product => {
        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <h4>₹${product.price}</h4>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
        `;
    });
}

// Add To Cart
function addToCart(id) {
    const product = products.find(item => item.id === id);
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Search + Filter
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

// Render Cart
function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>No items in cart</p>";
        total.textContent = 0;
        return;
    }

    let grandTotal = 0;

    cart.forEach(item => {
        grandTotal += item.price * item.quantity;

        cartContainer.innerHTML += `
        <div class="cart-value">
            <img src="${item.image}" alt="${item.name}">
            
            <div class="cart-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>

                <div class="quantity">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>

            <button class="remove-btn" onclick="removeItem(${item.id})">
                Remove
            </button>
        </div>
        `;
    });

    total.textContent = grandTotal;
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Increase Quantity
function increaseQuantity(id) {
    const item = cart.find(product => product.id === id);

    if (item) {
        item.quantity++;
        renderCart();
    }
}

// Decrease Quantity
function decreaseQuantity(id) {
    const item = cart.find(product => product.id === id);

    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart = cart.filter(product => product.id !== id);
        }

        renderCart();
    }
}

// Remove Item
function removeItem(id) {
    cart = cart.filter(product => product.id !== id);
    renderCart();
}

// Clear Cart
clearCart.addEventListener("click", () => {
    cart = [];
    renderCart();
});

// Initial Load
displayProducts(products);
renderCart();