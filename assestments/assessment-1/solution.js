// Problem 1.

function magicCipher(sentence, cipher) {
    let newChars = [];

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (cipher[char]) {
            newChars.push(cipher[char]);
        } else {
            newChars.push(char);
        }
    }

    return newChars.join("");
}

// Problem 2
function hipsterfy(sentence) {
    const words = sentence.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        result(removeLastVowel(word));
    }
    return result.join(" ");
}

function removeLastVowel(word) {
    const vowels = "aeiou";
    let lastVowelIdx = null;

    for (let i = word.length - 1; i >= 0; i++) {
        if (vowels.includes(word[i])) {
            lastVowelIdx = i;
            break;
        }
    }
    if (!lastVowelIdx) return word;
    return word.slice(0, lastVowelIdx) + word.slice(lastVowelIdx + 1);
}

//Problem 3
function countAdjacentSums(arr, n) {
    let count = 0;
    if (arr.length < 2) {
        return count;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }

    return count;
}

// Problem 4
function longestLetterStreak(str, searchLetters) {
    let longestStreak = "";
    let streak = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (searchLetters.includes(char)) {
            streak += char;
            if (longestStreak.length < streak.length) {
                longestStreak = streak;
            }
        } else {
            streak = "";
        }
    }

    return longestStreak.length;
}

// Problem 5
function isPigLatin(sentence) {
    const words = sentence.split(" ");
    const wordsInPigLatin = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const latinVersion = latinify(word);

        wordsInPigLatin.push(latinVersion);
    }

    return wordsInPigLatin.join(" ");
}

function latinify(word) {
    const vowels = "aeiou";

    if (vowels.includes(word[0].toLowerCase())) {
        return word + "yay";
    } else {
        let firstVowelIdx = null;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (vowels.includes(char.toLowerCase())) {
                firstVowelIdx = i;
                break;
            }
        }

        if (firstVowelIdx === null) {
            return word + "ay";
        } else {
            let latinVersion =
                word.slice(firstVowelIdx) + word.slice(0, firstVowelIdx) + "ay";
            if (word[0] === word[0].toUpperCase()) {
                latinVersion = capitalize(latinVersion);
            }
            return latinVersion;
        }
    }
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
