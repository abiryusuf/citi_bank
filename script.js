//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transaction = document.getElementById("transaction-area");
    transaction.style.display = "block";

});

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    console.log("deposit");
})

// const transaction = document.getElementById("transaction-area");
// var newItem = document.createElement("p");
// newItem.textContent = "I am Abir";
// transaction.appendChild(newItem);
