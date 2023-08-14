// 1
function filterPalindromes(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].split("").reverse().join("")) {
            result.push(strings[i]);
        }
    }
    return result;
}

// 2
function filterLowercase(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].toLowerCase()) {
            result.push(strings[i]);
        }
    }
    return result;
}

// 3
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

//4
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
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOneVowelWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
