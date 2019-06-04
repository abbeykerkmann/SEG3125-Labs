var cardType = "";
var message = "";

function validateCard() {
	validateDate();
	validateCardNumber();
}

function validateDate() {
	var today = new Date();
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var monthNum = 0;
	switch(month) {
		case "January":
			monthNum = 1;
			break;
		case "February":
			monthNum = 2;
			break;
		case "March":
			monthNum = 3;
			break;
		case "April":
			monthNum = 4;
			break;
		case "May":
			monthNum = 5;
			break;
		case "June":
			monthNum = 6;
			break;
		case "July":
			monthNum = 7;
			break;
		case "August":
			monthNum = 8;
			break;
		case "September":
			monthNum = 9;
			break;
		case "October":
			monthNum = 10;
			break;
		case "November":
			monthNum = 11;
			break;
		case "December":
			monthNum = 12;
			break;
	}
	if(year < today.getFullYear()) {
		message = "INVALID YEAR";
	}
	else if(year == today.getFullYear() && monthNum < today.getMonth() + 1) {
		message = "INVALID MONTH";
	}
	document.getElementById(message).innerHTML = message;
}

function validateCardNumber() {
	var number = document.getElementById("number").value;
	if(number.length == 13) {
		if(number.substring(0, 1).equals("4")) {
			cardType = "Visa";
		}
		else {
			cardType = "INVALID";
		}
	}
	else if(number.length == 14) {
		if(number.substring(0, 3).equals("300") || number.substring(0, 3).equals("301") || number.substring(0, 3).equals("302") || number.substring(0, 3).equals("303") || number.substring(0, 3).equals("304") || number.substring(0, 3).equals("305") || number.substring(0, 3).equals("36") || number.substring(0, 3).equals("38")) {
			cardType = "Diners Club";
		}
		else {
			cardType = "INVALID"
		}
	}
	else if(number.length == 15) {
		if(number.substring(0, 3).equals("34") || number.substring(0, 3).equals("37")) {
			cardType = "American Express";
		}
		else if(number.substring(0, 1).equals("5")) {
			cardType = "Discover";
		}
		else if(number.substring(0, 5).equals("2131") || number.substring(0, 5).equals("1800")) {
			cardType = "JCB";
		}
		else {
			cardType = "INVALID";
		}
	}
	else if(number.length == 16) {
		if(number.substring(0, 1).equals("4")) {
			cardType = "Visa";
		}
		else if(number.substring(0, 2).equals("51") || number.substring(0, 2).equals("52") || number.substring(0, 2).equals("53") || number.substring(0, 2).equals("54") || number.substring(0, 2).equals("55")) {
			cardType = "Mastercard";
		}
		else if(number.substring(0, 2).equals("35")) {
			cardType = "JBC";
		}
		else if(number.substring(0, 5).equals("6011")) {
			cardType = "Discover";
		}
		else {
			cardType = "INVALID";
		}
	}
	document.getElementById("cardNum").innerHTML = cardType;
}