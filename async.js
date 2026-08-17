console.log("Start");

setTimeout(function(){
    console.log("Timer finished");
}, 3000);

console.log("End");

console.log("A");

setTimeout(function(){
    console.log("B")
}, 2000);

console.log("C");

console.log("One");

setTimeout(function(){
    console.log("Two")
}, 0);

console.log("Three");

function showMessage() {
    console.log("Callback executed");
}

setTimeout(showMessage, 1000);

const promise = new Promise(function(resolve, reject){
    resolve("Data received");
});

promise.then(function(result){
    console.log(result);
});

const failedPromise = new Promise(function(resove, reject){
    reject("Something went wrong");
});

failedPromise.catch(function(error){
    console.log(error);
});

const delayedPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Server responded");
    }, 2000);
});

delayedPromise.then(function(result){
    console.log(result);
});

// function getData(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Data loaded");
//         }, 2000);
//     });
// }

// async function showData(){
//     const result = await getData();
//     console.log(result);
// }

// showData();

function getData() {
    return new Promise(function(resolve, reject) {
        resolve("Data received");
    });
}

async function showData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

showData();

