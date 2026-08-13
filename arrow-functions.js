const sqaure = number => number * number;

console.log(sqaure(5));

const numbers = [1, 2, 3, 4];

const triple = numbers.map(number => number * 3);

console.log(triple);

const numbers2 = [5, 12, 18, 3, 25];

const biggies = numbers2.filter(number => number > 10);

console.log(biggies);

const users = [
  { name: "Om", age: 27 },
  { name: "Rahul", age: 16 },
  { name: "Priya", age: 24 }
];

const child = users.find(user => user.age < 18);

console.log(child.name);