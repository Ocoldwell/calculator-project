const calculator = {
  displayValue: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

const inputNumber = (number) => {
  const { displayValue, waitingForSecondNumber } = calculator;
  if (waitingForSecondNumber === true) {
    calculator.displayValue = number;
    calculator.waitingForSecondNumber = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? number : displayValue + number;
  }
  console.log(calculator);
};

const inputDecimal = (dec) => {
  if (!calculator.displayValue.includes(dec)) {
    calculator.displayVariable += dec;
  }
};

const handleOperator = (operatorUpdate) => {
  const { firstNumber, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if (firstNumber === null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  } else if (operator) {
    const result = calculate(firstNumber, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstNumber = result;
  }

  calculator.waitingForSecondNumber = true;
  calculator.operator = operatorUpdate;
  console.log(calculator);
};

function calculate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  }
  return secondNumber;
}

const reset = () => {
  calculator.displayValue = "0";
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
}

const displayUpdate = () => {
  const display = document.getElementById("calculator-output");
  display.value = calculator.displayValue;
};
displayUpdate();

const keys = document.querySelector(".calculator-buttons");

keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {  
    return;
  }
  if (target.classList.contains("function-button")) {
    handleOperator(target.value);
    displayUpdate();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    displayUpdate();
    return;
  }

  if (target.classList.contains("clear-button")) {
    reset();
    updateDisplay();
    return;
  }

  inputNumber(target.value);
  displayUpdate();
});

//Konami Code implementation.
const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowRight', 'b', 'a'];
let current = 0;

let keyHandler = function (event) {
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]){
    current = 0;
    return;
  }
  current ++;
  if (pattern.length === current) {
    current = 0;
    document.querySelector(".hidden").classList.remove("hidden");
  }
}

document.addEventListener('keydown', keyHandler, false);
