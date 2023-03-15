// Get the "Add to Cart" buttons and add event listeners to them
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", addToCart);
}

// Get the cart link and add an event listener to it
var cartLink = document.getElementById("cart-link");
cartLink.addEventListener("click", showCart);

// Initialize an empty shopping cart array
var shoppingCart = [];

// Define a function to add an item to the shopping cart
function addToCart() {
	var item = {
		name: this.parentNode.getElementsByTagName("h3")[0].innerHTML,
		price: parseFloat(this.parentNode.getElementsByTagName("p")[0].innerHTML.substr(8))
	};
	shoppingCart.push(item);
	alert(item.name + " added to cart.");
}

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
  alert(item.name + " added to cart.");
}

// Define a function to checkout and display the contents of the shopping cart
function checkout() {
  var total = 0;
  var cartContents = "Shopping Cart:\n";
  for (var i = 0; i < shoppingCart.length; i++) {
    cartContents += shoppingCart[i].name + " - $" + shoppingCart[i].price.toFixed(2) + "\n";
    total += shoppingCart[i].price;
  }
  cartContents += "Total: $" + total.toFixed(2);
  alert(cartContents);
  shoppingCart = [];
}


// Define a function to display the contents of the shopping cart
function showCart() {
	var total = 0;
	var cartContents = "Shopping Cart:\n";
	for (
