String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

String.prototype.removeVowels = function () {
    let noVowels = "";
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < this.length; i++) {
        const char = this[i].toLowerCase();
        if (!vowels.includes(char)) {
            noVowels += this[i];
        }
    }
    return noVowels;
};

String.prototype.countWords = function () {
    return this.split(" ").length;
};

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

String.prototype.isPalindrome = function () {
    return (
        this.toLowerCase() === this.split("").reverse().join("").toLowerCase()
    );
};

Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) return false;
    }
    return this > 1;
};

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = 2; i <= this; i++) factorial *= i;
    return factorial;
};

Number.prototype.findFactors = function () {
    const factors = [];
    for (let i = 1; i <= this; i++) {
        if (this % i === 0) factors.push(i);
    }
    return factors;
};

Number.prototype.isPerfectSquare = function () {
    for (let i = 0; i <= this; i++) {
        if (i * i === this) return true;
    }
    return false;
};

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

Array.prototype.findMax = function () {
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) max = this[i];
    }
    return max;
};

Array.prototype.findMin = function () {
    let min = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] < min) min = this[i];
    }
    return min;
};

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) sum += this[i];
    return sum / this.length;
};

Array.prototype.removeDuplicates = function () {
    const unique = [];
    const seen = {};
    for (let i = 0; i < this.length; i++) {
        if (!seen[this[i]]) {
            unique.push(this[i]);
            seen[this[i]] = true;
        }
    }
    return unique;
};

Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * this.length);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
