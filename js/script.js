

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let i = 0; i < order.length; i += 1) {
        total += order[i];
    }
    // Change code above this line
    console.log(total);
    return total;
}


calculateTotalPrice([412, 371, 94, 63, 176])