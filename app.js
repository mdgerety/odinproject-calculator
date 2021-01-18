const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const display = document.querySelector(".display");

let currentNum;


function add(num1, num2) {
    const newNum = num1 + num2;
    return newNum;
}

function subtract(num1, num2) {
    const newNum = num1 - num2;
    return newNum;
}

function multiply(num1, num2) {
    const newNum = num1 * num2;
    return newNum;
}

function divide(num1, num2) {
    const newNum = num1 / num2;
    return newNum;
}

function operate() {
    
}

function updateDisplay(currentNum) {
    display.textContent = currentNum;
}





