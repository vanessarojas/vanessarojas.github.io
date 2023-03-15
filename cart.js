// Initialize an empty shopping cart array
var shoppingCart = [];

// Define a function to add an item to the shopping cart
function addToCart(itemName, itemPrice) {
  var item = {
    name: itemName,
    price: itemPrice
  };
  shoppingCart.push(item);
  console.log(itemName + " added to cart.");
}

// Define a function to display the contents of the shopping cart
function displayCart() {
  console.log("Shopping Cart:");
  for (var i = 0; i < shoppingCart.length; i++) {
    console.log(shoppingCart[i].name + " - $" + shoppingCart[i].price);
  }
}

// Define a function to calculate the total cost of items in the shopping cart
function calculateTotal() {
  var total = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price;
  }
  return total;
}

// Define a function to checkout and display the total cost
function checkout() {
  var total = calculateTotal();
  console.log("Total cost: $" + total.toFixed(2));
  shoppingCart = [];
}

// Example usage:
addToCart("Book 1", 10.99);
addToCart("Book 2", 12.99);
displayCart();
checkout();
