function checkAge(age){
    if (age < 18){
        return "Minor";
    }
    return "Adult";
}

console.log(checkAge(15));
console.log(checkAge(27));

function calculateDiscount(price, discount){
    let discountAmount = discount/100 * price;
    let finalPrice = price - discountAmount;
    return finalPrice;
}

console.log(calculateDiscount(1000, 10));

function square(num){
    let squaredNumber = num * num;
    return squaredNumber;
}
function double(squaredNumber){
    return 2 * squaredNumber;
}

console.log(double(square(5)));