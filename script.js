const currencyEl1 = document.getElementById('currency-1');
const amountEl1 = document.getElementById('amount-1');
const currencyEl2 = document.getElementById('currency-2');
const amountEl2 = document.getElementById('amount-2');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');


//FETCH EXCH RATES & UPDATE UI
function calculate() {
  const currency1 = currencyEl1.value;
  const currency2 = currencyEl2.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency2];
      rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
      amountEl2.value = (amountEl1.value * rate).toFixed(2);
    });

}

//SWAP CURRENCY
function swapCurrency() {
  const hold = currencyEl1.value;
  currencyEl1.value = currencyEl2.value;
  currencyEl2.value = hold;
  calculate()
}

//EVENT LISTENERS

currencyEl1.addEventListener('change', calculate);
amountEl1.addEventListener('input', calculate);
currencyEl2.addEventListener('change', calculate);
amountEl2.addEventListener('input', calculate);
swapEl.addEventListener('click', swapCurrency)

calculate();