const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transaction = document.getElementById("transaction-area");
    transaction.style.display = "block";

});

// const transaction = document.getElementById("transaction-area");
// var newItem = document.createElement("p");
// newItem.textContent = "I am Abir";
// transaction.appendChild(newItem);
