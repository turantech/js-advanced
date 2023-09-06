// Problem 1: Create a function that checks if any object in an array contains a null value
const checkAnyNullInObjects = (arr) => {
    return arr.some((obj) => obj.value === null);
};

// Example usage for Problem 1
const arrayWithNull = [{ value: 3 }, { value: null }];
console.log(checkAnyNullInObjects(arrayWithNull)); // Output: true

// Problem 2: Create a function that checks if any element in a matrix is a specific value
const checkAnyValueInMatrix = (matrix, value) => {
    return matrix.some((row) => row.some((element) => element === value));
};

// Example usage for Problem 2
const matrixWithValue = [
    [1, 2],
    [3, 4],
];
console.log(checkAnyValueInMatrix(matrixWithValue, 4)); // Output: true

// Problem 3: Create a function that checks if any object in an array has a property with a specific length
const checkAnyPropertyLength = (arr, length) => {
    return arr.some((obj) => obj.word.length === length);
};

// Example usage for Problem 3
const wordsArray = [{ word: "cat" }, { word: "elephant" }];
console.log(checkAnyPropertyLength(wordsArray, 8)); // Output: true

// Problem 4: Create a function that checks if any sub-array contains a specific number
const checkAnyNumberInSubArray = (arr, number) => {
    return arr.some((subArray) => subArray.includes(number));
};

// Example usage for Problem 4
const arrayWithNumber = [
    [1, 2],
    [3, 4, 5],
];
console.log(checkAnyNumberInSubArray(arrayWithNumber, 5)); // Output: true

// Problem 5: Create a function that checks if any date in an array of objects is after a specific date
const checkAnyDateAfter = (arr, targetDate) => {
    const target = new Date(targetDate);
    return arr.some((obj) => new Date(obj.date) > target);
};

// Example usage for Problem 5
const dateArray = [{ date: "2023-01-01" }, { date: "2023-01-04" }];
console.log(checkAnyDateAfter(dateArray, "2023-01-02")); // Output: true
