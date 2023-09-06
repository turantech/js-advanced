// Problem 1: Create a function that doubles the age property of each object in an array
const doubleAges = (arr) => {
    return arr.map((person) => {
        return { name: person.name, age: person.age * 2 };
    });
};

// Example usage for Problem 1
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
];
console.log(doubleAges(people)); // Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

// Problem 2: Create a function that capitalizes the first letter of each string in an array
const capitalizeFirstLetter = (arr) => {
    return arr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
};

// Example usage for Problem 2
const fruits = ["apple", "banana"];
console.log(capitalizeFirstLetter(fruits)); // Output: ['Apple', 'Banana']

// Problem 3: Create a function that returns the square of the first element of each sub-array
const squareFirstElement = (arr) => {
    return arr.map((subArray) => {
        return Math.pow(subArray[0], 2);
    });
};

// Example usage for Problem 3
const arrayOfArrays = [
    [2, 3],
    [4, 5],
    [6, 7],
];
console.log(squareFirstElement(arrayOfArrays)); // Output: [4, 16, 36]

// Problem 4: Create a function that concatenates a specific string to each property in an object array
const appendStringToWords = (arr, str) => {
    return arr.map((obj) => {
        return { word: obj.word + str };
    });
};

// Example usage for Problem 4
const words = [{ word: "cat" }, { word: "dog" }];
console.log(appendStringToWords(words, "s")); // Output: [{ word: 'cats' }, { word: 'dogs' }]

// Problem 5: Create a function that calculates the price with tax for each product object
const addTaxToPrices = (arr, tax) => {
    return arr.map((product) => {
        return { name: product.name, price: product.price * (1 + tax) };
    });
};

// Example usage for Problem 5
const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 },
];
console.log(addTaxToPrices(products, 0.1)); // Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]
