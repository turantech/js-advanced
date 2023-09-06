// Problem 1: Organize books by genre
const organizeBooks = (books) => {
    return books.reduce((acc, book) => {
        const { title, genre } = book;
        if (!acc[genre]) {
            acc[genre] = [];
        }
        acc[genre].push(title);
        return acc;
    }, {});
};

// Example usage for Problem 1
const booksExample = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
    },
];
console.log(organizeBooks(booksExample));
// Output: { 'Classic': ['To Kill a Mockingbird', 'The Great Gatsby'], 'Science Fiction': ['1984'] }

// Problem 2: Calculate vowel frequency in an array of words
const vowelFrequency = (words) => {
    const vowels = "aeiou";
    return words.reduce(
        (acc, word) => {
            for (const letter of word) {
                if (vowels.includes(letter)) {
                    acc[letter] = (acc[letter] || 0) + 1;
                }
            }
            return acc;
        },
        { a: 0, e: 0, i: 0, o: 0, u: 0 }
    );
};

// Example usage for Problem 2
const wordsExample = ["apple", "orange", "grape"];
console.log(vowelFrequency(wordsExample)); // Output: { 'a': 2, 'e': 2, 'i': 0, 'o': 1, 'u': 0 }

// Problem 3: Perform numerical analysis on an array of numbers
const numericalAnalysis = (numbers) => {
    return numbers.reduce(
        (acc, num) => {
            acc.sum += num;
            acc.product *= num;
            if (num < 0) {
                acc.negativeCount += 1;
            }
            return acc;
        },
        { sum: 0, product: 1, negativeCount: 0 }
    );
};

// Example usage for Problem 3
const numbersExample = [1, -1, 2, -2, 3, -3];
console.log(numericalAnalysis(numbersExample));
// Output: { sum: 0, product: 36, negativeCount: 3 }
