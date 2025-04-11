document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextById('main-balance');
    const selectedBank = document.getElementById('allbank').value;

    console.log("Amount:", amount, "| PIN:", pin, "| Account:", account);
    console.log("Current Balance:", mainBalance);

    // amount validation
    if (amount <= 0) {
        alert('⚠️ Please enter a valid amount.');
        return;
    }

    // account and pin validation
    if (account.length === 11) {
        if (pin === 1234) {
            const updatedBalance = mainBalance + amount;
            setInnerTextByIdandValue('main-balance', updatedBalance);

            const container = document.getElementById('transaction-container');

            const div = document.createElement('div');
            div.classList.add('bg-red-500', 'p-3', 'rounded', 'my-2', 'text-white');

            div.innerHTML = `
                <h1 class="text-yellow-300 font-bold">✅ Added Money From ${selectedBank}</h1>
                <h3 class="text-lg">Amount: $${amount}</h3>
                <p>Account Number: ${account}</p>
            `;

            container.appendChild(div);
        } else {
            alert('❌ Incorrect PIN');
        }
    } else {
        alert('❌ Account number is incorrect');
    }
});
