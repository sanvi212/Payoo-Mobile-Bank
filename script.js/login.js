document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value.trim();
    const pinNumber = document.getElementById('pin').value.trim();
    const convertedPinNumber = parseInt(pinNumber);

    if (accountNumber.length === 11) {
        if (convertedPinNumber === 1234) {
            window.location.href = "main.html";
        } else {
            alert("❌ Incorrect PIN. Please try again.");
        }
    } else {
        alert("❌ Invalid Account Number. It must be 11 digits.");
    }
});
