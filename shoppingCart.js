function updatePrice() {
    if (cookieToArray("total") != "") {
        var total_price = cookieToArray("total")[0];
    }
    else {
        var total_price = 0;
    }
    document.getElementById("subtotal").innerHTML = "CA$" + total_price.toFixed(2);
    document.getElementById("tax").innerHTML = "CA$" + (total_price * 0.13).toFixed(2);
    document.getElementById("total").innerHTML = "CA$" + (total_price * 1.13 + 2.25).toFixed(2);
}
function clearCookie() {
    document.cookie = "item=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "count=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "total=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


function arrayToCookie(name, arrayIn) {
    document.cookie = name + "=" + arrayIn;
    return "";
}

function cookieToArray(name) {
    var cookieContent = getCookie(name);
    return eval("[" + cookieContent + "]");
}


function changeQuantity(id, count, price) {
    // item, count and total are three entries of cookie
    if (getCookie("item") == "") {
        arrayToCookie("item", [id]);
        arrayToCookie("count", [count]);
        arrayToCookie("total", [price * count]);
    }
    // Read content, type array
    else {
        var item_cookie = cookieToArray("item");
        var count_cookie = cookieToArray("count");
        var total_cookie = cookieToArray("total");

        var i = item_cookie.indexOf(id);
        if (i != -1) {
            var old_count = count_cookie[i]
            var diff = count - old_count
            count_cookie[i] = count;
            total_cookie[0] = total_cookie[0] + price * diff;
        }
        else {
            item_cookie.push(id);
            count_cookie.push(count);
            total_cookie[0] = total_cookie[0] + price * count;
        }

        arrayToCookie("item", item_cookie);
        arrayToCookie("count", count_cookie);
        arrayToCookie("total", total_cookie);
    }
    updatePrice();

}

function addToCart(id, count, price) {
    var final_count = count;
    if (getCookie("item") != "") {
        var i = cookieToArray("item").indexOf(id);
        if (i != -1) {
            final_count = count + cookieToArray("count")[i]
        }
    }
    changeQuantity(id, final_count, price)
}

function loadCart() {
    var list = document.getElementById("list");
    if (getCookie("item") != "") {
        var item_cookie = cookieToArray("item");
        var count_cookie = cookieToArray("count");
        var result = "<table cellpadding='10'>";

        var to_append = "";
        for (var i = 0; i < item_cookie.length; i++) {
            var item_id = item_cookie[i]
            var curr_item = menu[item_id];
            var item_name = curr_item["name"];
            var item_price = curr_item["price"];
            if (count_cookie[i] != 0) {
                to_append += "<tr><td>" + item_name + "</td><td>" + item_price + "</td><td>" + count_cookie[i] + "</td><td>" + (count_cookie[i] * item_price).toFixed(2) + "</td><td><button onclick='deleteGoods(" + item_id + "," + item_price + ")'>Remove</button></td></tr>";
            }
        }
        if (to_append != "") {
            result += "<tr><td><h3>Item</h3></td><td><h3>Price</h3></td><td><h3>Quantity</h3></td><td><h3>Total</h3></td><td></td></tr>";
            result += to_append;
        }
        else {
            result += "Your cart is empty";
        }
        result += "</table>";
        list.innerHTML = result;
    }
    else {
        list.innerHTML = "Your cart is empty";
    }
}

function deleteGoods(id, price) {
    if (getCookie("item") != "") {
        var i = cookieToArray("item").indexOf(id);
        if (i != -1) {
            changeQuantity(id, 0, price);
            loadCart();
        }
    }

}