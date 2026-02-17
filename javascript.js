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
    //Display numbers and operators when clicked    
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

    //Clear display
    (e.target.textContent === "AC")? display.textContent = "":0;
    
    
    if (e.target.textContent === "=") {

        //Capture numbers and operator into variables
        let expr = display.textContent;
        let arr = expr.split(/[+x÷\-]/,2); //split expression on operator
        [num1, num2] = [+arr[0],+arr[1] ]; //Convert to integers

        operator = expr.at(expr.search(/[+x÷\-]/));
        //Handle divide and multiply operators
        operator = (operator === 'x')? "*":
        (operator === "÷")? "/": operator;

        //Operate
        let ans = operate(operator,num1, num2);
        display.textContent = ans;
    }
})