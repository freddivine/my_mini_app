let balance = 0;

// Function to increment balance on button click
function incrementBalance() {
    balance++;
    document.getElementById("balance-value").textContent = balance.toLocaleString();
