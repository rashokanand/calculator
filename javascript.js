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
const numbers = document.querySelectorAll(".numbers");

container.addEventListener("click", e => {
    
    //Allow entering '-' when display is empty
    if (display.textContent === '' && e.target.textContent === '-') {
        display.textContent = '-';
    }
    

})