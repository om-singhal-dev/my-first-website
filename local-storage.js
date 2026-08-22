localStorage.setItem("name", "Om");

const savedName = localStorage.getItem("name");

console.log(savedName);

const user = {
    name: "Om",
    age: 27
};

const userString = JSON.stringify(user);

console.log(userString);

localStorage.setItem("user", userString);

const savedUserString = localStorage.getItem("user");

const savedUser = JSON.parse(savedUserString);

console.log(savedUser.name);
console.log(savedUser.age);

const fruits = ["apple", "banana", "mango"];

localStorage.setItem("fruits", JSON.stringify(fruits));

const savedFruits = JSON.parse(localStorage.getItem("fruits"));

console.log(savedFruits);

console.log(savedFruits[1]);

