const display = document.querySelector("#display");

function toDisplay(input) {
    display.value += input;
}
function toClearDisplay() {
    display.value = '';
}
function toCalculateResult() {
    
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value='error'
    }
}

function convertCurrency() {
    const amount = document.getElementById('currencyAmount').value;
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
  

    const rates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 83.00, USD: 1 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 97.60, EUR: 1 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 110.50, GBP: 1 },
    INR: { USD: 0.012, EUR: 0.010, GBP: 0.009, INR: 1 }
    };
  
    if (amount && rates[from] && rates[from][to]) {
      const result = amount * rates[from][to];
      document.getElementById('currencyResult').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    } else {
      document.getElementById('currencyResult').innerText = 'Invalid input or conversion';
    }
}
  
function currency() {
    const view = document.querySelector('.calculator');
    view.style.display = 'flex';
}

function back() {
    const view = document.querySelector('.calculator');
    view.style.display = 'none';
}