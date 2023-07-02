// Storing items 
let cartList = [
    { id: 0, name: "men-shirts", price: "400 RS/-", rating : "4 star", image: "assets/men-1.jpg" },
    { id: 1, name: "man-jacekts", price: "800 RS/-", rating: "5 star", image: "assets/men-2.jpg" },
    { id: 2, name: "Men-t-shirts", price: "300 RS/-", rating: "3.5 star", image: "assets/men-3.jpg" },
    { id: 3, name: "women-kurtha", price: "1200 RS/-", phone: "5 star", image: "assets/womens-1.jpg" },
    { id: 4, name: "women-long-dress",  price: "1000 RS/-", rating: "2 star", image: "assets/womens-2.webp" },
    { id: 5, name: "women-frog", price: "2000 RS/-", rating: "3.5 star",  image: "assets/womens-3.jpg" },
    { id: 6, name: "kids-dresses", price: "700 RS/-", rating: "4 star", image: "assets/kids-1.jpg" },
    { id: 7, name: "kids-kurtha", price: "600 RS/-", rating: "5 star", image: "assets/kids-2.webp" },
    { id: 8, name: "Kids-frog", price: "1300 RS/-", rating: "4 star", image: "assets/kids-3.jpg" },
    { id: 9, name: "Heels", price: "1200 RS/-", rating: "4.5 star",  image: "assets/footwear-1.jpg" },
    { id: 10, name: "Shoes", price: "300 RS/-", rating: "2 star",  image: "assets/footwear-2.jpg" },
    { id: 11, name: "slippers", price: "500 RS/-", rating: "1 star", image: "assets/footwear-3.webp" },
    { id: 12, name: "Head-set", price: "1800 RS/-", rating: "2.5 star", image: "assets/electronics-1.jpg" },
    { id: 13, name: "sound-box", price: "1600 RS/-", rating: "3 star", image: "assets/electronics-2.webp" },
    { id: 14, name: "Buds", price: "20500 RS/-", rating: "5 star", image: "assets/electronics-3.jpg" },
];

// Map function
let data = "";
cartList.map(function mapItems(items) {
    const {id, name, price, rating, image } = items;
     data += ` <div class="col-lg-4 cards-data" >
        <div class="student-cards">
            <img src=${image} alt="">
            <div class="students-cards-content">
                <h4>Name :- <span>${name}</span></h4>
                <h6>Price :- ${price} </h6>
                <h6>Rating :- ${rating}</h6>
            </div>
             <button class=" addtocart-button" onclick="itemsAdded(${id})">Add To Cart</button>
        </div>
    </div>`
    document.querySelector(".map-function").innerHTML = data;
});

// Cart icon click function
let itemsCart = [];
let dataCard = "";
function cartIcon() {
    const addedCartItems = document.querySelector(".cartitems");
    addedCartItems.classList.toggle("cartitems-active");
        if (itemsCart.length === 0) {
            document.querySelector(".listempty").innerHTML = `<img class="cart-empty-img" src="assets/empty-cart.png" alt="Empty cart image">`;
        } else {
            dataCard += itemsCart.map(function addItemsToCart(items) {
                const {id, name, price, image } = items;
                dataCard += `<div  data-id="${id}">
                   <div class="cart-list d-flex align-items-center justify-content-between py-3">
                        <div class="cart-buttons">
                            <img src=${image} alt=""> 
                            <button onclick="increment()">+</button>
                            <button class="product-value">0</button>
                            <button onclick="decrement()">-</button>
                        </div>
                       <div>
                           <h6><span>${name}</span></h6>
                           <h6>Price :- ${price} </h6>
                       </div>
                       <p><i class="fa-solid fa-xmark" onclick="buttonDelete(${id})"></i></p>
                   </div>
                </div>`
               document.querySelector(".listempty").innerHTML = dataCard;
            });
    }
};
let countValue = 1;
function increment() {
    document.querySelector(".product-value").innerText = countValue++;
}
function decrement() {
    document.querySelector(".product-value").innerText = countValue--;
}
// Add to cart button function
function itemsAdded(id) { 
    const selectedItems = cartList.find(function findItems(items) {
        return items.id === id;
    });
    if (selectedItems) {
        const findIndex = itemsCart.findIndex((items) => items.id === id);
        if (findIndex !== -1) {
            document.querySelector(".toast-notification").classList.add("toast-notification-active");
            setTimeout(() => {
                document.querySelector(".toast-notification").classList.remove("toast-notification-active");
            }, 2000);
           
        } else {
            itemsCart.push(selectedItems);
        }
    }
    document.querySelector(".quantity").innerText = itemsCart.length;
}

// Remove item from the cart
function buttonDelete(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    card.style.display = "none";
        const filteredArray = itemsCart.filter((items) => {
            return items.id !== id;
        });
        itemsCart = filteredArray;
    document.querySelector(".quantity").innerText = itemsCart.length;
};












