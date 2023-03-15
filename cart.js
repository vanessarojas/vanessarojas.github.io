let cartItems = [];

function addToCart(item) {
	// Check if the item is already in the cart
	for (let i = 0; i < cartItems.length; i++) {
		if (cartItems[i].item === item) {
			cartItems[i].quantity++;
			updateCart();
			return;
		}
	}
	
	// Add the item to the cart
	cartItems.push({item: item, quantity: 1});
	updateCart();
}

function updateCart() {
	let cartList = document.getElementById('cart-items');
	cartList.innerHTML = '';
	
	// Loop through the cart items and add them to the cart list
	for (let i = 0; i < cartItems.length; i++) {
		let cartItem = document.createElement('li');
		let item = cartItems[i].item;
		let quantity = cartItems[i].quantity;
		
		cartItem.innerHTML = item + ' x ' + quantity;
		cartList.appendChild(cartItem);
	}
}
