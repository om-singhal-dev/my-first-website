const companyInput = document.getElementById("companyInput");

const roleInput = document.getElementById("roleInput");

const statusInput = document.getElementById("statusInput");

const addButton = document.getElementById("addButton");

const applicationList = document.getElementById("applicationList");

const applications = [];


function renderApplications(){

    applicationList.innerHTML = "";

    for (const application of applications) {
        const item = document.createElement("li");

        const deleteButton = document.createElement("button");
        
        deleteButton.textContent = "Delete";

        item.textContent =
            application.company + " - " +
            application.role + " - " +
            application.status;

        item.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            const index = applications.indexOf(application);

            applications.splice(index, 1);

            renderApplications();
        });

        applicationList.appendChild(item);
        
    }
}

addButton.addEventListener("click", function(){

    const company = companyInput.value.trim();

    const role = roleInput.value.trim();

    const status = statusInput.value.trim();

    if(company === "" || role === "" || status === ""){
        alert("Please fill all fields");
        return;
    }

    const application = {company: company, role: role, status: status};

    applications.unshift(application);

    renderApplications();

    companyInput.value = "";

    roleInput.value = "";

    statusInput.value = "";
});