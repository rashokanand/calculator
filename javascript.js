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

numbers.forEach(addEventListener("click", e => {    
    display.textContent += (e.target.textContent === "0")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "1")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "2")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "3")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "4")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "5")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "6")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "7")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "8")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "9")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "+")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "-")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "x")? e.target.textContent:"";
    display.textContent += (e.target.textContent === "÷")? e.target.textContent:"";

    (e.target.textContent === "AC")? display.textContent = "":0;
    
}))