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
    //convert string to float
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
     //convert string to float
    const currentNumber = parseFloat(currentDeposit);
    const total = depositNumber + currentNumber;
    document.getElementById("currentDeposit").innerText = total;
    document.getElementById("depositAmount").value = "";
    console.log(total);
})

// const transaction = document.getElementById("transaction-area");
// var newItem = document.createElement("p");
// newItem.textContent = "I am Abir";
// transaction.appendChild(newItem);
