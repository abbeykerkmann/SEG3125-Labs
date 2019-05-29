var numItem = 0; // the number of items currently in the shopping cart
var menuItem = { // contains information about menu items so that information can be easily calculated
	name: "",
	price: "",
	quantity: 0
};
var shoppingCart = []; // contains menu items that have been added to cart
var totalCost = 0; // variable to contain the total cost of the items in the cart
var tax = 0;
function calcTotalCost() { // function to calculate total cost of shopping cart items
	totalCost = 0;
	for(var i = 0; i < shoppingCart.length(); i++) {
		totalCost += shoppingCart[i].price;
	}
};

function calcTax() { // function to calculate the tax on the total cost
	tax = totalCost * 0.13;
};