const companyInput = document.getElementById("companyInput");
const roleInput = document.getElementById("roleInput");
const statusInput = document.getElementById("statusInput");
const addButton = document.getElementById("addButton");
const applicationResult = document.getElementById("applicationResult");

addButton.addEventListener("click", function(){
    const company = companyInput.value;
    const role = roleInput.value;
    const status = statusInput.value;

    applicationResult.textContent = company + " - " + role + " - " + status;
});