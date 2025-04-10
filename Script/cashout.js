document.getElementById('cash-outbtn').addEventListener('click', function (event) {
    event.preventDefault();

    const pin = document.getElementById('cash-outpin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount); // let বা const ইউজ করো

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        if (convertedAmount > 0 && convertedAmount <= convertedMainBalance) {
            const remaining = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = remaining;
            alert("✅ Cash out successful");
        } else {
            alert("⚠️ Invalid amount or insufficient balance");
        }
    } else {
        alert("❌ Incorrect PIN");
    }
});
