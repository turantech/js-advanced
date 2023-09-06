// 1. Callback Function with Loop
const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
};

// 2. Closure with Increment Function
const counter = () => {
    let count = 0;
    const increment = () => ++count;
    return increment;
};

// 3. Function Using a Helper Function with Loop
const sumOfSquares = (numbers) => {
    const square = (x) => x * x;
    let sum = 0;
    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
};

// 4. Function with Multiple Helper Functions
const mathOperations = (a, b) => {
    const add = () => a + b;
    const multiply = () => a * b;
    return { add, multiply };
};

// 5. Function with Closure and Callback
const createMultiplier = (multiplier) => (number) => number * multiplier;

// 6. Function with Multiple Callbacks
const stringManipulation = (str, operation1, operation2) =>
    operation2(operation1(str));

// 7. Function with Callback and Loop
const computeAverage = (nums, callback) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return callback(sum / nums.length);
};

// Summary: All functions have been converted into arrow functions.
