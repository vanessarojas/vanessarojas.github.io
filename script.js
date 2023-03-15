// Initialize an empty shopping cart array
var shoppingCart = [];

// Get the "Add to Cart" buttons and add event listeners to them
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Get the "Checkout" button and add an event listener to it
var checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", checkout);

// Define a function to add an item to the shopping cart
function addToCart() {
  var item = {
    name: this.parentNode.getElementsByTagName("h3")[0].innerHTML,
    price: parseFloat(this.parentNode.getElementsByTagName("p")[0].innerHTML.substr(1))
  };
  shoppingCart.push(item);
  alert(item.name + " has been added to your cart.");
}

// Define a function to checkout and display the total price
function checkout() {
  var totalPrice = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
  }
  alert("Your total price is $" + totalPrice.toFixed(2));
}

// Get a reference to the cart items element
var cartItems = document.getElementById("cart-items");

// Loop through the items in the shopping cart and add them to the table
for (var i = 0; i < shoppingCart.length; i++) {
  var item = shoppingCart[i];
  var row = document.createElement("tr");
  var titleCell = document.createElement("td");
  titleCell.textContent = item.title;
  var priceCell = document.createElement("td");
  priceCell.textContent = "$" + item.price.toFixed(2);
  row.appendChild(titleCell);
  row.appendChild(priceCell);
  cartItems.appendChild(row);
}

// Calculate and display the total price of all the items in the shopping cart
var totalPrice = 0;
for (var i = 0; i < shoppingCart.length; i++) {
  totalPrice += shoppingCart[i].price;
}
var totalPriceCell = document.getElementById("total-price");
totalPriceCell.textContent = "$" + totalPrice.toFixed(2);

