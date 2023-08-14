function addTwoNumbers(num1, num2) {
    return `The result of adding is ${num1 + num2}.`;
}

function subtractTwoNumbers(num1, num2) {
    return `The result of subtracting is ${num1 - num2}.`;
}

function multiplyTwoNumbers(num1, num2) {
    return `The result of multiplying is ${num1 * num2}.`;
}

function divideTwoNumbers(num1, num2) {
    return `The result of dividing is ${num1 / num2}.`;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, operation, operationName) {
    const result = operation(num1, num2);
    return `The result of ${operationName} is ${result}.`;
}

console.log(calculate(10, 5, add, "adding")); // "The result of adding is 15."
console.log(calculate(10, 5, subtract, "subtracting")); // "The result of subtracting is 5."
console.log(calculate(10, 5, multiply, "multiplying")); // "The result of multiplying is 50."
console.log(calculate(10, 5, divide, "dividing")); // "The result of dividing is 2."
