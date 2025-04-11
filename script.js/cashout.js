document.getElementById("cash-outbtn").addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueById("cashout-amount");
    const pinNumber = getInputValueById("cash-outpin");
    const mainBalance = getInnerTextById('main-balance');

    if (amount > mainBalance) {
        alert('Invalid Amount');
        return;
    }

    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIdandValue('main-balance', sum);


            const container = document.getElementById('transaction-container');


            const p = document.createElement('p');
            p.innerText = `Cashout Succesfully $ ${amount} From This Number ${accountNumber} `;

            container.appendChild(p);
           container.appendChild(p)


        } else {
            alert('pin not valid');
        }
    } else {
        alert('account number not valid');
    }
});
