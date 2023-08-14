// Specific Filtering Functions (Part-1)

function filterOddNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function filterDivisibleByThree(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function filterPrimeNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function filterPerfectSquares(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Math.sqrt(numbers[i]) % 1 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// Refactor: Generic Filter Function Using Callback

function filterNumbers(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// Specific Callbacks

function isOdd(number) {
    return number % 2 !== 0;
}

const oddNumbers = filterNumbers([1, 2, 3, 4, 5], isOdd);

function isDivisibleByThree(number) {
    return number % 3 === 0;
}

const divisibleByThreeNumbers = filterNumbers(
    [3, 6, 7, 9, 12],
    isDivisibleByThree
);

function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

const perfectSquares = filterNumbers([1, 4, 5, 9, 16], isPerfectSquare);

// Prime Numbers Filter was already defined
const primeNumbers = filterNumbers([2, 3, 4, 5, 6], isPrime);
