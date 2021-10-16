// Get Input Field
let inputField = document.querySelector('.screen');
// Get Calc Buttons
let calcNumBtns = document.querySelectorAll('.num');
// Get Arithmetic Operators Buttons
let calcOperatorBtns = document.querySelectorAll('.operator');
// Get Current Value
let prevValueEl = document.querySelector('.current-val');
// PrevValue
let prevValue;
// Current Value
let currentValue;
// Get Clear Button
let clearBtn = document.querySelector('.del');
// Final Result
let finalResult;

calcNumBtns.forEach(numBtn => {
  numBtn.addEventListener('click', function(e) {
    if (inputField.value === '') {
      inputField.value += e.target.getAttribute('data-number');
    } else {
      inputField.value += e.target.getAttribute('data-number');
      prevValue = inputField.value;
      console.log(`prev value : ${prevValue}`);
    }
  })
})

calcOperatorBtns.forEach(operBtn => {
  operBtn.addEventListener('click', function(e) {
    if (e.target.getAttribute('data-operater') == '+') {
      // Statement Here
    }
  })
})

clearBtn.onclick = function() {
  prevValue.innerText = '';
  inputField.value = '';
}

function addition() {
  finalResult = prevValue + currentValue;
}










/*

  Old Code :

  calcNumBtns.forEach(numBtn => {
  numBtn.addEventListener('click', function(e) {
    if (inputField.value !== '') {
      // inputField.value += e.target.getAttribute('data-number');
      prevValueEl = inputField.value;
      console.log(`Prev Value : ${prevValue}`)
    } else {
      inputField.value += e.target.getAttribute('data-number');
      prevValueEl = inputField.value;
    }
  })
})

calcOperatorBtns.forEach(operBtn => {
  operBtn.addEventListener('click', function(e) {
    if (e.target.getAttribute('data-operater') == '+') {
      // Set Prev Value
      prevValue = inputField.value;
      // console.log(`Prev Value : ${prevValue}`)
      prevValueEl.innerHTML = `${prevValue} ${e.target.getAttribute('data-operater')}`;
      inputField.value = '';
      // currentValue = e.target.getAttribute('data-number');
      console.log(`Current Value : ${currentValue}`)
      addition();
    }
  })
})

*/