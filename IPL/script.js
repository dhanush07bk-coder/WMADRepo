function showMessage() {
    alert("Welcome to IPL Ticket Booking!");
}

function confirmBooking() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let match = document.getElementById("match").value;
   
    let stand = document.getElementById("stand").value;
    let quantity =document.getElementById("quantity").value;

    let price;
    if (stand == "General Stand") {        price = 500;    }
    else if (stand == "Premium Stand") {        price = 1000;    }
    else {        price = 2000;    }

    let total = price * quantity;
    document.getElementById("summaryMatch").innerHTML = match;

    document.getElementById("summaryStand").innerHTML = stand;
    document.getElementById("summaryQuantity").innerHTML = quantity;
    document.getElementById("summaryPrice").innerHTML = price;
    document.getElementById("summaryTotal").innerHTML = total;

    alert("Booking Confirmed for " + name);
}