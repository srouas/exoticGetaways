//open menu

const menu = document.getElementById("menu");

menu.addEventListener("click", openMenu);

function openMenu(){
let dropdown = document.getElementById("dropdown")
dropdown.classList.toggle("show")
};

//open cart 

const cart = document.getElementById("cart");
cart.addEventListener("click", openCart)

function openCart(){
let cartDropdown = document.getElementById("cart-dropdown")
cartDropdown.classList.toggle("show")
}

//filter products by continent

const viewAsia = document.getElementById("view-asia");
viewAsia.addEventListener("click", showAsia)
function showAsia(){
    let hideMed = document.getElementById("mediterranean")
    hideMed.classList.toggle("hide")
    let hideAmerica = document.getElementById("america")
    hideAmerica.classList.toggle("hide")
    let hideAfrica = document.getElementById("african")
    hideAfrica.classList.toggle("hide")
    let hideCarib = document.getElementById("caribbean")
    hideCarib.classList.toggle("hide")
}

const viewMed = document.getElementById("view-med");
viewMed.addEventListener("click",showMed)
function showMed(){
    let hideAsia = document.getElementById("asia")
    hideAsia.classList.toggle("hide")
    let hideAmerica = document.getElementById("america")
    hideAmerica.classList.toggle("hide")
    let hideAfrica = document.getElementById("african")
    hideAfrica.classList.toggle("hide")
    let hideCarib = document.getElementById("caribbean")
    hideCarib.classList.toggle("hide")
}

const viewAmerica = document.getElementById("view-america");
viewAmerica.addEventListener("click", showAmerica)
function showAmerica(){
     let hideAsia = document.getElementById("asia")
    hideAsia.classList.toggle("hide")
    let hideMed = document.getElementById("mediterranean")
    hideMed.classList.toggle("hide")
    let hideAfrica = document.getElementById("african")
    hideAfrica.classList.toggle("hide")
    let hideCarib = document.getElementById("caribbean")
    hideCarib.classList.toggle("hide")
}

const viewAfrica = document.getElementById("view-africa");
viewAfrica.addEventListener("click", showAfrica)
function showAfrica(){
     let hideAsia = document.getElementById("asia")
    hideAsia.classList.toggle("hide")
    let hideMed = document.getElementById("mediterranean")
    hideMed.classList.toggle("hide")
    let hideAmerica = document.getElementById("america")
    hideAmerica.classList.toggle("hide")
    let hideCarib = document.getElementById("caribbean")
    hideCarib.classList.toggle("hide")
}

const viewCaribbean = document.getElementById("view-caribbean");
viewCaribbean.addEventListener("click", showCarib)
function showCarib(){
    let hideAsia = document.getElementById("asia")
    hideAsia.classList.toggle("hide")
    let hideMed = document.getElementById("mediterranean")
    hideMed.classList.toggle("hide")
    let hideAmerica = document.getElementById("america")
    hideAmerica.classList.toggle("hide")
    let hideAfrica = document.getElementById("african")
    hideAfrica.classList.toggle("hide")
}

// add items to cart
 let products = [
    {name:"Thailand",price:1499,inCart: 0},
    {name:"Philippines",price:1799,inCart: 0},
    {name:"India",price:1499,inCart: 0},
    {name:"Vietnam",price:1599,inCart: 0},
    {name:"Indonesia",price:1799,inCart: 0},
    {name:"Sri Lanka",price:1899,inCart: 0},
    {name:"Greece",price:1299,inCart: 0},
    {name:"Malta",price:1099,inCart: 0},
    {name:"Croatia",price:1299,inCart: 0},
    {name:"Canary Islands",price:1199,inCart: 0},
    {name:"Sicily",price:1199,inCart: 0},
    {name:"Cyprus",price:1199,inCart: 0},
    {name:"Hawaii",price:1999,inCart: 0},
    {name:"Belize",price:1599,inCart: 0},
    {name:"Guam",price:1699,inCart: 0},
    {name:"Costa Rica",price:1499,inCart: 0},
    {name:"Isla Mujeres",price:1599,inCart: 0},
    {name:"Miami",price:1899,inCart: 0},
    {name:"Seychelles",price:1899,inCart: 0},
    {name:"Cape Verde",price:1399,inCart: 0},
    {name:"Tanzania",price:1399,inCart: 0},
    {name:"Mauritius",price:1999,inCart: 0},
    {name:"Madagascar",price:1799,inCart: 0},
    {name:"Reunion",price:1899,inCart: 0},
    {name:"St Lucia",price:1799,inCart: 0},
    {name:"Turks and Caicos",price:1999,inCart: 0},
    {name:"Dominican Republic",price:1499,inCart: 0},
    {name:"Jamaica",price:1399,inCart: 0},
    {name:"Barbados",price:1599,inCart: 0},
    {name:"Cuba",price:1499,inCart: 0}];


let addToCartBtn = document.getElementsByClassName("add-button");
let quantity = document.getElementById("quantity");
let docTitle = document.getElementById("doc-title");
let cartItem = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let itemQuantity = localStorage.getItem("cartQuantity");
let clearCart = document.getElementById("clear-cart");
// let cartItems = localStorage.getItem("cartItems");

// increase quantity
for (let i=0; i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener("click", cartQuantity)}

function cartQuantity(){
    let itemQuantity = localStorage.getItem("cartQuantity");
    itemQuantity = parseInt(itemQuantity)

    if(itemQuantity){
    localStorage.setItem("cartQuantity", itemQuantity + 1);
    quantity.textContent = itemQuantity + 1
   docTitle.textContent = `🌴 Exotic Getaways! - Cart (${itemQuantity + 1})`
}
    else{localStorage.setItem("cartQuantity", 1);
    quantity.textContent =  1
    docTitle.textContent = `🌴 Exotic Getaways! - Cart (${1})`
}

}

function loadCartQuantity(){
    let itemQuantity = localStorage.getItem("cartQuantity");
    if(itemQuantity){
    quantity.textContent = itemQuantity;
docTitle.textContent += ` - Cart (${itemQuantity})`
}}

loadCartQuantity()

// clear cart

clearCart.addEventListener("click", function(){
     itemQuantity = localStorage.setItem("cartQuantity",0);
    quantity.textContent = "0";
docTitle.textContent = `🌴 Exotic Getaways! - Cart (0)`;
cartItem.innerText = "";
cartTotal.innerText = "";
})

// add products to cart items
// add product price to Total

// let cartItem = document.getElementById("cart-items");
// let cartTotal = document.getElementById("cart-total");

for (let i=0; i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener("click", function (){
cartItem.innerText += `${products[i].name}, `;
cartTotal.innerHTML +=`${parseInt(products[i].price)}`;
alert("Item added to Cart") })}




//add products to cart items w localstorage
// add product price to Total w llocalstorage

// for (let i=0; i<addToCartBtn.length; i++){
//     addToCartBtn[i].addEventListener("click", function (){
    
//     cartTotal = parseInt(cartTotal);

//     if(cartItem){
//     localStorage.setItem("cartItems", cartItems + `${products[i].name}, `);
//     cartItem.innerText += `${products[i].name}, `;
// cartTotal.innerHTML += `${parseInt(products[i].price)}`;
// alert("Item added to Cart")}})}

// // load cartItems

// function loadCartQuantity(){
//     let itemsInCart = localStorage.getItem("cartItems");
//     if(cartItems){
//     cartItem.innerText = itemsInCart;
// }}