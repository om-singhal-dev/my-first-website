const userIdInput = document.getElementById("userIdInput");

async function getUser(){
    try{
        const userId = Number(userIdInput.value);
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
        if (!response.ok) {
            throw new Error("User not found");
        }
        
        console.log(response.status);
        const data = await response.json();

        console.log(data.name);
        console.log(data.email);
        console.log(data.address.city);

        const userResult = document.getElementById("userResult");
      userResult.textContent = data.name + " - " + data.email + " - " + data.address.city;
    } catch (error){
        console.log(error);
        const userResult = document.getElementById("userResult");
    userResult.textContent = "User not found";

    }
    
}

const loadUserButton = document.getElementById("loadUserButton");

loadUserButton.addEventListener("click", function(){
    getUser();
});


