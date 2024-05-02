/* eslint-disable */

// Get the buttons
const tipAmount = document.querySelectorAll('button');
const billAmount = document.getElementById('bill');

// Add an event listener to each button using a for loop
tipAmount.forEach(amount => {
  amount.addEventListener('click', () => {
    const percentage = amount.getAttribute('data-percentage');
    const bill = +billAmount.value
    const tipAmount = (bill * percentage) / 100;
    const totalBill = bill + tipAmount;
    document.getElementById('amount').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${totalBill.toFixed(2)}`;
  });
});

// function for custom tip to run after input
const custTip = document.getElementById('custTip');
custTip.addEventListener('input', () => {
  // Run the tip calculation using the custom tip percentage
  const custPercentage = custTip.value;
  const bill = +billAmount.value;
  const tipAmount = (bill * custPercentage) / 100;
  const totalBill = bill + tipAmount;
  document.getElementById('amount').textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById('total').textContent = `$${totalBill.toFixed(2)}`;
});
