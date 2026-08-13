function greet(name) {
    console.log("Hello " + name);
}

greet("Om");

function add(a, b){
    return a + b;
}

let result = add(10, 20);
console.log(result);

function isEven(num){
    if(num%2===0){
        return true;
    } else {
        return false;
    }
}

function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}