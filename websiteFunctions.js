var numItem = 0; // the number of items currently in the shopping cart
var MenuItem = { // contains information about menu items so that information can be easily calculated
	name: "",
	price: ""
};
var shoppingCart = []; // contains menu items that have been added to cart
var totalCost = 0; // variable to contain the total cost of the items in the cart
var tax = 0;
var costAfterTax = 0;
function calcTotalCost() { // function to calculate total cost of shopping cart items
	totalCost = 0;
	for(var i = 0; i < shoppingCart.length(); i++) {
		totalCost += shoppingCart[i].price;
	}
};

function calcTax() { // function to calculate the tax on the total cost
	tax = totalCost * 0.13;
};

function calcCostAfterTax() {
	costAfterTax = totalCost + tax;
}

function addToCart(name, price) {
	var item = new Object();
	item.name = name;
	item.price = price;
	shoppingCart.push(item);
}