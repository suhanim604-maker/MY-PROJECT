const products=[
    {
        id:1,
        name:"Shoes",
        price:4000,
        category:"Fashion",
        image:"https://www.tradeinn.com/f/13810/138104888/adidas-supernova--running-shoes.jpg"

        
    },
    {
          id: 2,
        name: "Headphones",
        price: 3500,
        category: "Electronics",
        image: "https://i5.walmartimages.com/seo/onn-Wireless-Over-Ear-Headphones-with-Active-Noise-Canceling-Black-New_aa870ab9-1da6-4f34-a297-9053b1105966.d8e64cb398fb27884b96ded908ea125b.jpeg"

    },
    {
          id: 6,
        name: "sort-kurti",
        price: 500,
        category: "Accessories",
        image: "https://m.media-amazon.com/images/I/71YnnXs0vsL._UL1500_.jpg"

    },
    {
        id: 3,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://www.gadgetbridge.com/wp-content/uploads/2024/01/Swift_Go_14_Pic_2.webp"

    },
    {
        id: 4,
        name: "Backpack",
        price: 1800,
        category: "Accessories",
        image: "https://m.media-amazon.com/images/I/719k5fUz4FL._AC_SL1500_.jpg",
        quantity:1

    },
    {
        id: 5,
        name: "Watch",
        price: 2000,
        category: "Accessories",
        image: "https://i5.walmartimages.com/asr/56e469fc-8192-4849-bb1b-63d5bceab4ea.e9c68a98cfacf7be3034724544dcc076.jpeg"
    }
]


const productContainer=document.getElementById("productContainer");
const cartContainer=document.getElementById("cartContainer");
const searchInput=document.getElementById("search");
const categorySelect=document.getElementById("category");
const total =document.getElementById("total");
const clearCart=document.getElementById("clearCart");
let cart = JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(productsList){

productContainer.innerHTML=""
productsList.forEach(product => {
    productContainer.innerHTML+=`
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.category}</p>
    <h4>${product.price}</h4>
    <button onclick=addToCart(${product.id})>Add to Cart</button>
    </div>
    `
    
});

}

function addToCart(id){

const product=products.find(item=>item.id===id);
const existingProduct=cart.find(item=>item.id===id);

if(existingProduct){
    existingProduct.quantity++;
}else{
    cart.push({
        ...product,
        quantity: 1
    });
}
localStorage.setItem("cart",JSON.stringify(cart));
renderCart()

}

searchInput.addEventListener("input",filterProducts);
categorySelect.addEventListener("change",filterProducts)

function filterProducts(){
    const searchText=searchInput.value.toLowerCase();
    const selectedCategory=categorySelect.value;
    const filtered=products.filter(product=>{
        const matchesSearch=product.name.toLowerCase().includes(searchText);
        const matchCategory=selectedCategory==="All"||product.category===selectedCategory;

        return matchesSearch && matchCategory

    });

    displayProducts(filtered);



}

displayProducts(products)
renderCart()


function renderCart(){
cartContainer.innerHTML="";
if(cart.length===0){
    cartContainer.innerHTML="<p>no items in cart</p>";
    total.textContent=0
    return;
}

let grandTotal=0;
cart.forEach(item=>{
grandTotal+=item.price*item.quantity;
cartContainer.innerHTML+=
`<div class="cart-value">
<img src="${item.image}" alt="${item.name}">
<div class="cart-info">
<h4>${item.name}</h4>
<p>${item.price}</p>
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
`
})

total.textContent=grandTotal;
localStorage.setItem("cart",JSON.stringify(cart));

}

function increaseQuantity(id){
    const product=cart.find(item=>item.id===id);
    if(product){
        product.quantity++
        renderCart()
    }
}

function decreaseQuantity(id){
    const product=cart.find(item=>item.id===id);
    if(!product) return;
    if(product.quantity>1){
        product.quantity--
        renderCart()
    }
    else{
        cart = cart.filter(item=>item.id!==id)
    }
    renderCart()
}
function removeItem(id){
    cart = cart.filter(item=>item.id!==id)
    renderCart()
}

clearCart.addEventListener("click",()=>{
cart=[];
renderCart()
})