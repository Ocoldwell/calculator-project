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
//How decimals are handled by checking if the calculator object already includes a decimal.
const inputDecimal = (dec) => {
  if (!calculator.displayValue.includes(dec)) {
    calculator.displayVariable += dec;
  }
};
//Object deconstruction that allows for detection and how to manipulate object when encountered.
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
//Boolean state that allows for more than one number + stores operator in object.
  calculator.waitingForSecondNumber = true;
  calculator.operator = operatorUpdate;
  console.log(calculator);
};
//Performs calculations based on operator stored in calculator object, runs into issues when two operators in a row.
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
//Allows for All Clear, need to add delete function.
const reset = () => {
  calculator.displayValue = "0";
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
}
//Allows for object value to be displayed on calculator screen.
const displayUpdate = () => {
  const display = document.getElementById("calculator-output");
  display.value = calculator.displayValue;
};
displayUpdate();
//Refers to parent element of all buttons on calculator.
const keys = document.querySelector(".calculator-buttons");
//Selector of function to run based on classes of buttons.
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
    displayUpdate();
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


//Make a calculator
// Needs to update and display number as typed or button pressed. yes on button press
//Needs to track key inputs and button presses with correct values. yes on button press
//Validation. yes on button
//updates and displays input on output screen. input is shown on input screen. > needs fix?
//Should show the equation as inputted. no.

//Needs to store number and additional numbers append to it rather than perform an operation. yes done
//Make variables that tracks inputs. yes using calculator object.
//functions required that track inputs onclick and typed. yes onclick events tracked.

//apply an operator. operator added to display but no function to calculate.
//operator needs to be stored and displayed. operator is stored and displayed, potentially move store
//store second number. no


//extra functionality = party? style changes.
//extra functionality = scientific mode. add additional functions, modify style.
