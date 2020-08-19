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
    //console.log(depositNumber);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // convert string to float
    // const currentNumber = parseFloat(currentDeposit);
    // const total = depositNumber + currentNumber;
    // document.getElementById("currentDeposit").innerText = total;

    // const balance = document.getElementById("currentBalance").innerText;
    // console.log("balance", balance)
    // const currentBalanceNumber = parseFloat(balance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("depositAmount").value = "";
    //console.log(total);

    // calling function
    updateSpanText("currentBalance", depositNumber);
    updateSpanText("currentDeposit", depositNumber);
   
})
//withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw")

    //current withdraw
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdraw").value = "";
    //console.log(withdrawNumber)

    //console.log("withdraw");
    //const withdraw = document.getElementById("withdraw").value;
    //console.log(withdraw);
    //const withdrawNumber = parseFloat(withdraw)
    //console.log(withdrawNumber);
    
})
//withdraw function 
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    //console.log(withdraw);
    const withdrawNumber = parseFloat(amount)
    //console.log(withdrawNumber);
    return withdrawNumber;
}
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    //console.log("balance", balance)
    const currentBalanceNumber = parseFloat(current);
    //depositNumber comes from out of function
    const total = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = total;

}

// const transaction = document.getElementById("transaction-area");
// var newItem = document.createElement("p");
// newItem.textContent = "I am Abir";
// transaction.appendChild(newItem);
