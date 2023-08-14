// Specific Filtering Functions (Part-2)

function filterPalindromes(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].split("").reverse().join("")) {
            result.push(strings[i]);
        }
    }
    return result;
}

function filterLowercase(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].toLowerCase()) {
            result.push(strings[i]);
        }
    }
    return result;
}

function isOnlyConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
            return false;
        }
    }
    return true;
}

function filterConsonantWords(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOnlyConsonantWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}

function isOneVowelWord(word) {
    const vowels = "aeiou";
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
            if (counter > 1) {
                return false;
            }
        }
    }
    return true;
}

function filterOneVowelWords(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOneVowelWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}

// Refactor: Generic Filter Function Using Callback

function filterStrings(strings, callback) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (callback(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}

// Specific Callbacks for Refactored Functions

function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

function filterPalindromes(strings) {
    return filterStrings(strings, isPalindrome);
}

function isLowercase(word) {
    return word === word.toLowerCase();
}

function filterLowercase(strings) {
    return filterStrings(strings, isLowercase);
}

function filterConsonantWords(strings) {
    return filterStrings(strings, isOnlyConsonantWord);
}

function isOneVowelWord(word) {
    const vowels = "aeiou";
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
            if (counter > 1) {
                return false;
            }
        }
    }
    return counter === 1;
}

function filterOneVowelWords(strings) {
    return filterStrings(strings, isOneVowelWord);
}
