// Default view: show add money section
document.getElementById('addmoney').style.display = 'block';
document.getElementById('cashout').style.display = 'none';

// Add Money button click
document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
    this.classList.add('bg-green-600', 'text-white');
    document.getElementById('cash-out').classList.remove('bg-green-600', 'text-white');
});

// Cash Out button click
document.getElementById('cash-out').addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('addmoney').style.display = 'none';
    this.classList.add('bg-green-600', 'text-white');
    document.getElementById('add-money-box').classList.remove('bg-green-600', 'text-white');
});
