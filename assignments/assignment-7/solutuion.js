// Easy Problems

// 1 Counter Function

function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 2 Temperature Converter

function temperatureConverter(unit) {
    return function (degree) {
        if (unit === "C") {
            return ((degree - 32) * 5) / 9;
        } else if (unit === "F") {
            return degree * 1.8 + 32;
        }
    };
}

const toCelsius = temperatureConverter("C");
const toFahrenheit = temperatureConverter("F");
console.log(toCelsius(32));
console.log(toFahrenheit(0));

// 3  Greeting Generator

function greet(name) {
    return function () {
        return `Good Morning, ${name}`;
    };
}

const greetGenerator = greet("Ali");
console.log(greetGenerator());

// 4 Interest Calculator

function interestCalculator(rate) {
    return function (amount) {
        return (amount * rate) / 100;
    };
}

const calc1 = interestCalculator(10);
const calc2 = interestCalculator(20);
console.log(calc1(1000));
console.log(calc2(1000));

// 5

function multiplier(factor) {
    return function (number) {
        return factor * number;
    };
}

const double = multiplier(2);
console.log(double(5));

// Medium Problems

// Problem 1: Double Multiplier
function doubleMultiplier(factor1, factor2) {
    return function (num) {
        return factor1 * factor2 * num;
    };
}

const doubleAndTriple = doubleMultiplier(2, 3);
console.log("Problem 1: Double Multiplier");
console.log(doubleAndTriple(5)); // Output: 30
console.log("---------------------------");

// Problem 2: Sequential Greetings
function sequentialGreet(name) {
    return {
        morning: function () {
            return `Good Morning, ${name}!`;
        },
        evening: function () {
            return `Good Evening, ${name}!`;
        },
    };
}

const johnGreeting = sequentialGreet("John");
console.log("Problem 2: Sequential Greetings");
console.log(johnGreeting.morning()); // Output: 'Good Morning, John!'
console.log(johnGreeting.evening()); // Output: 'Good Evening, John!'
console.log("---------------------------");

// Problem 3: Personal Library
function personalLibrary() {
    const books = [];
    return {
        add: function (book) {
            books.push(book);
        },
        list: function () {
            return books;
        },
    };
}

const myLibrary = personalLibrary();
myLibrary.add("The Nation");
console.log("Problem 3: Personal Library");
console.log(myLibrary.list()); // Output: ['The Nation']
console.log("---------------------------");

// Problem 4: Multiplication Table Generator
function multiplicationTable(num) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(i * num);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
console.log("Problem 4: Multiplication Table Generator");
console.log(tableOfThree()); // Output: [3, 6, 9, ..., 30]
console.log("---------------------------");

// Problem 5: Favorite Color Reminder
function favoriteColorReminder(name, color) {
    return function () {
        return `${name}'s favorite color is ${color}.`;
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
console.log("Problem 5: Favorite Color Reminder");
console.log(johnsColor()); // Output: 'John's favorite color is Blue.'
console.log("---------------------------");

// Summary: All problems are solved and demonstrated in this single file.
