//get all the products from the index.html page
let productList = document.querySelectorAll('ul.product-list li');
let addToCartBtn = document.querySelectorAll('.add-to-cart');
let removeFromCartBtns = [];
let clearAllBtn = document.querySelector('.clear-all');
let cartMessage = document.querySelector('.cart-message');
let totalItems = 0;
let totalPrice = 0;

//event listener for each button click
addToCartBtn.forEach(item =>{
    item.addEventListener('click', addToCart);
});
clearAllBtn.addEventListener('click', clearAll);

//functions
//add to cart function
function addToCart(e) {
    let shoppingCart = document.querySelector('.shopping-cart'); //shopping cart ul
    let li = document.createElement('li'); //cart Item list
    let productId = "cart-"+ e.target.parentElement.id;
    let productName = e.target.parentElement.querySelector('h2').innerText;
    let price = e.target.parentElement.querySelector('.price').innerText;
    li.setAttribute('id', productId);
    li.innerHTML = `<h4>Product: <span>${productName}</span></h4>Price: \$<span class='priceSpan'>${price}</span><button class="remove-from-cart">Remove</button>`;
    shoppingCart.appendChild(li);
    //console.log(li);
    let removeFromCartBtn = li.querySelector('.remove-from-cart');
    removeFromCartBtn.addEventListener('click', removeFromCart);
    removeFromCartBtns.push(removeFromCartBtn);

    //update total items and total price
    totalItems++;
    totalPrice += parseFloat(price);

    //console.log(totalItems, totalPrice);

    updateCartMessage();
    updateItemCountAndTotal();
    updateClearAllButtonVisibility();

    e.preventDefault();
}

//remove from cart function
function removeFromCart(e) {
    let cartItem = e.target.parentElement;
    cartItem.remove();
    removeFromCartBtns.splice(removeFromCartBtns.indexOf(e.target), 1);

    //update total items and total price
    totalItems--;
    totalPrice -= parseFloat(cartItem.querySelector('.priceSpan').innerText);

    //console.log(totalItems, totalPrice);

    updateCartMessage();
    updateItemCountAndTotal();
    updateClearAllButtonVisibility();
    e.preventDefault();
}

//clear all cart functions
function clearAll() {
    let cartItems = document.querySelectorAll('.shopping-cart li');
    cartItems.forEach(item =>{
        item.remove();
    });
    totalItems = 0;
    totalPrice = 0;
    removeFromCartBtns = [];
    updateCartMessage();
    updateItemCountAndTotal();
    updateClearAllButtonVisibility();
}

// Function to check and update the cart message
function updateCartMessage() {
    if (removeFromCartBtns.length === 0) {
        cartMessage.textContent = 'Your cart is empty.';
        clearAllBtn.style.display = 'none';
    } else {
        cartMessage.textContent = '';
        clearAllBtn.style.display = 'block';
    }
}

// Function to check and update the "Clear All" button's visibility
function updateClearAllButtonVisibility() {
    const clearAllBtn = document.querySelector('.clear-all');
    clearAllBtn.style.display = (removeFromCartBtns.length > 0) ? 'block' : 'none';
}

//function to update the cart item count and total price
function updateItemCountAndTotal() {
    const itemCountElement = document.querySelector('.item-count');
    const totalElement = document.querySelector('.total');
    itemCountElement.textContent = totalItems;
    totalElement.textContent = totalPrice.toFixed(2);
}

updateItemCountAndTotal();
