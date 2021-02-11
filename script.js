const calculator = {
  displayValue: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

const inputNumber = (number) => {
  const {displayValue, waitingForSecondNumber} = calculator
  if(waitingForSecondNumber === true) {
    calculator.displayValue = number;
    calculator.waitingForSecondNumber = false;
  } else {
    calculator.displayValue = displayValue === '0' ? number : displayValue + number;
  }
  console.log(calculator);
};

const inputDecimal = (dec) => {
  if (!calculator.displayValue.includes(dec)) {
    calculator.displayVariable += dec;
  }
};

const handleOperator = (operatorUpdate) => {
  const { displayValue, firstNumber, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if (firstNumber === null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  }
  calculator.waitingForSecondNumber = true;
  calculator.operator = operatorUpdate;
  console.log(calculator);
};



const displayUpdate = () => {
  const display = document.getElementById("calculator-input");
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
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    displayUpdate();
  }

  if (target.classList.contains("clear-button")) {
    console.log("clear", target.value);
    return;
  }

  inputNumber(target.value);
  displayUpdate();
});

// const keysListener =
// keys.addEventListener('onkeydown', (event) => {

// })

//Make a calculator
// Needs to update and display number as typed or button pressed. yes button
//Needs to track key inputs and button presses with correct values. yes button
//Validation. yes
//updates and displays input on output screen yes
//Should show the equation as inputted. sort of

//Needs to store number and additional numbers append to it rather than perform an operation.
//Make variables that tracks inputs.
//functions required that track inputs onclick and typed.

//apply an operator.
//operator needs to be stored and displayed
//store second number.
// store n additional numbers until an operator seperates.
//should not be limited to operations of just two numbers.
//equals resolves and performs the formula as inputted.

//extra functionality = party? style changes.
//extra functionality = scientific mode. add additional functions, modify style
