  
let
  loanForm = document.querySelector('#loan-form'),
  amount = document.querySelector('#amount'),
  interest = document.querySelector('#interest'),
  years = document.querySelector('#years'),
  calcBtn = document.querySelector('#calc-btn'),
  loadingGif = document.querySelector('#loading'),
  monthlyPayment = document.querySelector('#monthly-payment'),
  totalPayment = document.querySelector('#total-payment'),
  totalInterest = document.querySelector('#total-interest');

calcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(amount.value&&interest.value&&years.value) {
    let principal = parseFloat(amount.value),
    calculatedInterest = parseFloat(interest.value)/100/12,
    calculatedPayments =  parseFloat(years.value)*12;


    let  x = Math.pow(1 + calculatedInterest, calculatedPayments),
    monthly = (principal * x * calculatedInterest)/(x - 1);

    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
      showError('Please enter finite values');
    }
  } else {
    showError('Please check your numbers');
  }
  
})

function showError(error) {
  let errorAlert = document.createElement('div');
  errorAlert.className = 'alert alert-danger';
  errorAlert.setAttribute('role', 'alert');
  errorAlert.textContent = error;

  loanForm.insertAdjacentElement('afterbegin', errorAlert)
  setTimeout(() => errorAlert.remove(), 3000)
}