const language = "JavaScript";

console.log(language[0]);

console.log(language[language.length - 1]);

console.log(language.length);

const name = "om singhal";

console.log(name.toUpperCase());

const sentence = "I am learning full stack development";

console.log(sentence.includes("full stack"));

const technology = "JavaScript";

console.log(technology.slice(0,4));

const username = "    omsinghal   ";

console.log(username.trim());

const word = "developer";

for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}

const word1 = "javascript";

let count = 0;

for(let i = 0; i < word1.length; i++){
    if(word1[i] === "a"){
        count = count + 1;
    }
}
console.log(count);