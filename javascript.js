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
container.addEventListener("click", e => {
    if (/[0-9]/g.test(e.target.textContent) && e.target != display) {
        console.log("num was clicked");
        display.textContent += e.target.textContent;
    }
    if (/[+\-x=÷]/g.test(e.target.textContent) && e.target != display) {
        display.textContent += e.target.textContent;
    }
    if (e.target.textContent === "AC") display.textContent = "";
})