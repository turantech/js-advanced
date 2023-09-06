// Problem 1: Create a function that checks if all objects have a specific property
const checkPropertyInObjects = (arr, property) => {
    return arr.every((obj) => obj.hasOwnProperty(property));
};

// Example usage for Problem 1
const people = [{ name: "Alice" }, { name: "Bob" }];
console.log(checkPropertyInObjects(people, "name")); // Output: true

// Problem 2: Create a function that checks if all elements in a matrix are positive
const checkAllPositiveInMatrix = (matrix) => {
    return matrix.every((row) => row.every((element) => element > 0));
};

// Example usage for Problem 2
const matrix = [
    [1, 2],
    [3, 4],
];
console.log(checkAllPositiveInMatrix(matrix)); // Output: true

// Problem 3: Create a function that checks if all sub-arrays have a specific length
const checkSubArrayLength = (arr, length) => {
    return arr.every((subArray) => subArray.length === length);
};

// Example usage for Problem 3
const arrays = [
    [1, 2],
    [3, 4],
];
console.log(checkSubArrayLength(arrays, 2)); // Output: true

// Problem 4: Create a function that checks if all dates in an array of objects are before a specific date
const checkAllDatesBefore = (arr, targetDate) => {
    const target = new Date(targetDate);
    return arr.every((obj) => new Date(obj.date) < target);
};

// Example usage for Problem 4
const dateObjects = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(checkAllDatesBefore(dateObjects, "2023-01-03")); // Output: true

// Problem 5: Create a function that checks if all products have a price greater than a specific value
const checkAllProductsPriceAbove = (arr, price) => {
    return arr.every((product) => product.price > price);
};

// Example usage for Problem 5
const productArray = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
];
console.log(checkAllProductsPriceAbove(productArray, 10)); // Output: true
