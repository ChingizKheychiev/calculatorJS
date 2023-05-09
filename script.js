let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];

const action = ['()', '%', '/', '-', '+', '*'];

const calculation = document.querySelector('.calc-screen p');

function clear() {
  firstNumber = '';
  secondNumber = '';
  sign = '';
  finish = false;
  calculation.textContent = 0;
}

document.querySelector('.ac').onclick = clear;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;

  calculation.textContent = '';

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (secondNumber === '' && sign === '') {
      firstNumber += key;
      calculation.textContent = firstNumber;
    } else if (firstNumber !== '' && secondNumber !== '' && finish) {
      secondNumber = key;
      finish = false;
      calculation.textContent = secondNumber;
    } else {
      secondNumber += key;
      calculation.textContent = secondNumber;
    }
    return;
  }

  if (action.includes(key)) {
    sign = key;
    calculation.textContent = sign;
    console.log(sign);
    return;
  }

  if (key === '=') {
    switch (sign) {
      case '+':
        firstNumber = +firstNumber + +secondNumber;
        break;
      case '-':
        firstNumber = firstNumber - secondNumber;
        break;
      case '*':
        firstNumber = firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber === '0') {
          calculation.textContent = 'Error';
          firstNumber = '';
          secondNumber = '';
          sign = '';
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
    }

    finish = true;
    calculation.textContent = firstNumber;
  }
};
