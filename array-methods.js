const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number){
    return number * 2;
})

console.log(doubled);

const ages = [12, 18, 25, 14, 30, 16];

const adult = ages.filter(function(age){
    return age >= 18;
})

console.log(adult);

const prices = [100, 250, 500, 750];

const biggerPrice = prices.find(function(price){
    return price > 300;
})

console.log(biggerPrice);

const products = [
    {name: "Phone", price: 30000},
    {name: "Laptop", price: 70000},
    {name: "Mouse", price: 1000},
    {name: "Monitor", price: 15000}
];

const costlyProducts = products.filter(function(product){
    return product.price > 20000;
});

console.log(costlyProducts);