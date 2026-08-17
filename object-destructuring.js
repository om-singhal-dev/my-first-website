const student = {
    name: "Om",
    age: 27,
    skill: "JavaScript"
};

const {name, skill} = student;

console.log(name);
console.log(skill);

const numbers = [10, 20, 30];

const [firstNumber, secondNumber] = numbers;

console.log(firstNumber);
console.log(secondNumber);

const fruits = ["apple", "banana"];

const updatedFruits = [...fruits, "mango"];

console.log(updatedFruits);

const scores = [80, 95, 70, 100];

let totalScore = 0;

for (const score of scores){
    console.log(score);
    totalScore += score;
}

console.log(totalScore);

const product = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};

for (const key in product){
    console.log(key, product[key]);
};

const numbers3 = [1, 2, 3, 2];

const uniqueNumbers3 = new Set(numbers3).size;

console.log(numbers3.length);

console.log(uniqueNumbers3);