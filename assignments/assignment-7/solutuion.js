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
    const increment = () => {
        count = count + 1;
        return count;
    };
    return increment;
};

// 3. Function Using a Helper Function with Loop
const sumOfSquares = (numbers) => {
    const square = (x) => {
        return x * x;
    };
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + square(numbers[i]);
    }
    return sum;
};

// 4. Function with Multiple Helper Functions
const mathOperations = (a, b) => {
    const add = () => {
        return a + b;
    };
    const multiply = () => {
        return a * b;
    };
    return { add: add, multiply: multiply };
};

// 5. Function with Closure and Callback
const createMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};

// 6. Function with Multiple Callbacks
const stringManipulation = (str, operation1, operation2) => {
    return operation2(operation1(str));
};

// 7. Function with Callback and Loop
const computeAverage = (nums, callback) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return callback(sum / nums.length);
};
