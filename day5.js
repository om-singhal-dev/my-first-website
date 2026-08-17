const title = document.getElementById("title");

title.textContent = "DOM is working!";

const button = document.getElementById("changeButton");

button.addEventListener("click", function(){
    title.textContent = "I am learning the DOM";
})

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function(){
    const name = nameInput.value;

    greeting.textContent = "Hello " + name;
})

const cityInput = document.getElementById("cityInput");
const citybutton = document.getElementById("cityButton");
const city = document.getElementById("city");

citybutton.addEventListener("click", function(){
    const cityName = cityInput.value;

    city.textContent = "Your city is: " + cityName;
})

const ageInput = document.getElementById("ageInput");
const ageButton = document.getElementById("ageButton");
const ageResult = document.getElementById("ageResult");

ageButton.addEventListener("click", function(){
    const age = Number(ageInput.value);

    if (age >= 18){
        ageResult.textContent = "You are an adult";
    } else {
        ageResult.textContent = "You are a minor";
    }
})