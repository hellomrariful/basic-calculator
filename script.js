const screen = document.getElementById('screen');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');

let num1 = '';
let num2 = '';
let operator = '';

function updateScreen(value) {
  screen.innerText = value;
}

function addNumber(value) {
  if (operator === '') {
    num1 += value;
    updateScreen(num1);
  } else {
    num2 += value;
    updateScreen(num2);
  }
}

function performOperation() {
  const operand1 = parseFloat(num1);
  const operand2 = parseFloat(num2);
  let result = 0;

  switch(operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      break;
  }

  updateScreen(result);
  num1 = result.toString();
  num2 = '';
  operator = '';
}

function addOperation(value) {
  operator = value;
}

function clearScreen() {
  num1 = '';
  num2 = '';
  operator = '';
  updateScreen('');
}

numberButtons.forEach(button => {
  button.addEventListener('click', event => {
    addNumber(event.target.value);
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', event => {
    addOperation(event.target.value);
  });
});

equalsButton.addEventListener('click', event => {
  performOperation();
});

clearButton.addEventListener('click', event => {
  clearScreen();
});
