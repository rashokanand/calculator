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
container.addEventListener("click", e => {
    if (e.target.textContent === "1") {
        num1 = 1;
        console.log("1 was clicked");
    }
})