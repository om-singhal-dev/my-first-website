let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);

console.log(fruits[1]);

console.log(fruits.length);

fruits.push("orange");

fruits.unshift("grapes");

console.log(fruits);

let numbers = [5, 10, 15, 20, 25];

let total = 0;

for(let i = 0; i < numbers.length; i++){
total = total + numbers[i];
}

console.log(total);

let numbers1 = [4, 9, 12, 17, 20];

for(let i = 0; i < numbers1.length; i++){
    if(numbers1[i] > 10){
        console.log(numbers1[i]);
    }
}

let colors = ["red", "blue", "green", "yellow"];

console.log(colors[colors.length - 1]);

console.log(colors.includes("blue"));

console.log(colors.indexOf("green"));

let numbers3 = [10, 25, 30, 45, 50];

for(let i = 0; i < numbers3.length; i++){
    if(numbers3[i] > 20 && numbers3[i] % 2 == 0){
        console.log(numbers3[i]);
    }
}