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
      console.log(data);
    });

}

//EVENT LISTENERS

currencyEl1.addEventListener('change', calculate);
amountEl1.addEventListener('input', calculate);
currencyEl2.addEventListener('change', calculate);
amountEl2.addEventListener('input', calculate);

calculate();