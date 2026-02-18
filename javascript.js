function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1, num2, operator;

function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

//Update number variables and operator
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operator");

numberBtns.forEach(el => el.addEventListener("click", e => {
    display.textContent += e.target.textContent;
    }
)
)

operatorBtns.forEach(el => el.addEventListener("click", e => {
    //Allow entering '-' when display is empty
    if (display.textContent === '' && e.target.textContent === '-') {
        display.textContent = '-';
    }

    // Change operator if new operator is entered when it already exists
    const operatorString = "+-x÷";
    //Display is not empty and last character is not operator
    if (!operatorString.includes(display.textContent.at(-1)) && display.textContent != "") {
        display.textContent += e.target.textContent;
    } else display.textContent = display.textContent.slice(0,-1) + e.target.textContent;
}
))

