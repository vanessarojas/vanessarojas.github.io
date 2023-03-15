// Get the cart button
var cartButton = document.querySelector('button');

// Add event listener for cart button
cartButton.addEventListener('click', function() {
	addToCart(this.parentElement);
});

// Function to add items to the cart
function addToCart(item) {
	// Create a new list item
	var cartItem = document.createElement('li');
	var title = item.querySelector('h3').textContent;
	var price = item.querySelector('p').textContent;
	cartItem.innerHTML = '<h3>' + title + '</h3>' + '<p>' + price + '</p>';
	
	// Add the new item to the cart
	var cartList = document.querySelector('aside ul');
	cartList.appendChild(cartItem);
	
	// Update the total price
	updateTotal();
}

// Function to update the total price
function updateTotal() {
	var total = 0;
	var cartItems = document.querySelectorAll('aside ul li');
	for (var i = 0; i < cartItems.length; i++) {
		var price = cartItems[i].querySelector('p').textContent;
		price = price.replace('$', '');
		total += parseFloat(price);
	}
	var totalPrice = document.querySelector('aside p:last-of-type');
	totalPrice.textContent = 'Total: $' + total.toFixed(2);
}

// Get the checkout button
var checkoutButton = document.querySelector('aside button');

// Add event listener for checkout button
checkoutButton.addEventListener('click', function() {
	showCheckout();
});

// Function to show the checkout form
function showCheckout() {
	// Hide the books and cart sections
	var booksSection = document.querySelector('main section');
	var cartSection = document.querySelector('main aside');
	booksSection.style.display = 'none';
	cartSection.style.display = 'none';
	
	// Show the checkout form
	var checkoutForm = document.createElement('form');
	checkoutForm.innerHTML = '<section><h2>Payment Method</h2><label><input type="radio" name="payment" value="credit"> Credit Card</label><label><input type="radio" name="payment" value="paypal"> PayPal</label></section><section><h2>Contact Information</h2><label>Name: <input type="text" name="name"></label><label>Email: <input type="email" name="email"></label><label>Address: <input type="text" name="address"></label><label>City: <input type="text" name="city"></label><label>State: <input type="text" name="state"></label><label>Zip Code: <input type="text" name="zip"></label></section><aside><h2>Order Summary</h2><ul></ul><p></p><button type="submit">Place Order</button></aside>';
	var main = document.querySelector('main');
	main.appendChild(checkoutForm);
	
	// Add event listener for form submission
	checkoutForm.addEventListener('submit', function(event) {
		event.preventDefault();
		placeOrder();
	});
}

// Function to place the order
function placeOrder() {
	// Get the form data
	var payment = document.querySelector('input[name="payment"]:checked').value;
	var name = document.querySelector('input[name="name"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var address = document.querySelector('input[name="address"]').value;
	var city = document.querySelector('input[name="city"]').value;
	var state = document.querySelector('input[name="state"]').value;
	var zip = document.querySelector('input[name="zip"]').value;
	var items = [];
	var cartItems = document.querySelectorAll('aside ul li');

  
  	// Loop through cart items and add them to the order
	for (var i = 0; i < cartItems.length; i++) {
		var title = cartItems[i].querySelector('h3').textContent;
		var price = cartItems[i].querySelector('p').textContent;
		price = price.replace('$', '');
		items.push({
			title: title,
			price: price
		});
	}
	
	// Create the order object
	var order = {
		payment: payment,
		name: name,
		email: email,
		address: address,
		city: city,
		state: state,
		zip: zip,
		items: items
	};
	
	// Send the order data to the server
	// Here you would typically use AJAX to send the data to the server
	// For this example, we'll just log the data to the console
	console.log(order);
	
	// Show the thank you message
	var main = document.querySelector('main');
	main.innerHTML = '<h2>Thank You For Your Order!</h2><p>You will receive an email confirmation shortly.</p>';
}

// Call the updateTotal function to calculate the initial total price
updateTotal();


