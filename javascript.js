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
    if (operator === "x") return multiply(num1, num2);
    if (operator === "÷") return divide(num1, num2);
}

//Update number variables and operator
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operator");
const ansBtn = document.querySelector(".ans");
const clearBtn = document.querySelector(".clear");
let isAns = false; //flag to clear display for new operation

numberBtns.forEach(el => el.addEventListener("click", e => {
    if (!isAns) display.textContent += e.target.textContent;
    else {
        display.textContent = e.target.textContent;
        isAns = false;
        isDecimal = false;
    }
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
        displayAns(display.textContent);
        display.textContent += e.target.textContent;
        isDecimal = false; //Change flag to take new decimal number
        isAns = false; //Change flag to take digits as input after operator
    } else if (operatorString.includes(display.textContent.at(-1)) && display.textContent != "-")
        {
            display.textContent = display.textContent.slice(0,-1) + e.target.textContent;
            isAns = false;
            isDecimal = false;
        }
}
))

ansBtn.addEventListener("click", e => displayAns(display.textContent));

clearBtn.addEventListener("click", e => {
    display.textContent = "";
    isDecimal = false;
});

//display ans function
function displayAns(expr) {
    const operatorString = "+-x÷";
    let arr = [];
    let operator, operatorIndex;
    if (expr.slice(1).search(/[+\-x÷]/) > -1) {
        operatorIndex = expr.slice(1).search(/[+\-x÷]/);
        operator = expr.slice(1).at(operatorIndex);
    }
    console.log(operator);
    if (operator) {
        num1 = +expr.slice(0,operatorIndex + 1);
        num2 = +expr.slice(operatorIndex + 2);

        console.log(`num1: ${num1}, num2: ${num2}`);
    } else return 0;

    //Handle div by 0 by throwing an error

    if (operator === "÷" && num2 === 0) {
        display.textContent = "Div by 0 Error";
        isDecimal = true;
    }
    else {
        let ans = operate(operator, num1, num2);
        isDecimal = Number.isInteger(ans)? false: true; // check if ans is decimal
        display.textContent = !Number.isInteger(ans)? ans.toFixed(2):ans; // round result if float
    }
    isAns = true;
}

//Add decimal functionality
const dotBtn = document.querySelector(".dot");
let isDecimal = false; //flag to check if num is already decimal
dotBtn.addEventListener("click", e => {
    if (!isDecimal) {
    display.textContent += ".";
    isDecimal = true;
    }
})