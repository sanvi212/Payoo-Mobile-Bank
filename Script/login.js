
document.getElementById("login-btn").addEventListener('click', function (event) {
    event.preventDefault();

    // input field থেকে মানগুলো নেওয়া
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)

    // account number ১১ digit হলে চেক করবো পিন ঠিক কিনা
    if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = "./main.html";
        } else {
            alert('❌ ভুল PIN দিয়েছেন');
        }
    } else {
        alert('⚠️ ১১ digit এর valid account number দিন');
    }
});