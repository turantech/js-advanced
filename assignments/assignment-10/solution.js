// Problem 1: Create a function that filters objects with a specific property value
const filterByType = (arr, type) => {
    return arr.filter((item) => item.type === type);
};

// Example usage for Problem 1
const foodItems = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
];
console.log(filterByType(foodItems, "fruit")); // Output: [{ type: 'fruit', name: 'apple' }]

// Problem 2: Create a function that filters all sub-arrays with a specific length
const filterByLength = (arr, length) => {
    return arr.filter((subArray) => subArray.length === length);
};

// Example usage for Problem 2
const numbersArrays = [
    [1, 2],
    [3, 4, 5],
];
console.log(filterByLength(numbersArrays, 2)); // Output: [[1, 2]]

// Problem 3: Create a function that filters products with a price within a specific range
const filterByPriceRange = (arr, min, max) => {
    return arr.filter(
        (product) => product.price >= min && product.price <= max
    );
};

// Example usage for Problem 3
const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
];
console.log(filterByPriceRange(products, 15, 20)); // Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

// Problem 4: Create a function that filters words that start with a specific letter from an array of objects
const filterByStartingLetter = (arr, letter) => {
    return arr.filter((item) => item.word.charAt(0) === letter);
};

// Example usage for Problem 4
const words = [{ word: "cat" }, { word: "dog" }];
console.log(filterByStartingLetter(words, "c")); // Output: [{ word: 'cat' }]

// Problem 5: Create a function that filters dates before a specific date from an array of objects
const filterByDate = (arr, targetDate) => {
    const target = new Date(targetDate);
    return arr.filter((item) => new Date(item.date) < target);
};

// Example usage for Problem 5
const dates = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(filterByDate(dates, "2023-01-02")); // Output: [{ date: '2023-01-01' }]
