function Pet(name) {
    this.name = name;
    this.hunger = 0;
    this.happiness = 10;
}

Pet.prototype.eat = function () {
    this.happiness += 1;
    if (this.hunger - 1 >= 0) {
        this.hunger -= 1;
    }
};

Pet.prototype.play = function () {
    if (this.happiness + 2 <= 10) {
        this.happiness += 2;
    }
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};

Pet.prototype.sleep = function () {
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};

Pet.prototype.status = function () {
    if (this.happiness >= 8) {
        return `${this.name} is feeling great!`;
    } else if (this.happiness >= 5) {
        return `${this.name} is feeling okay.`;
    } else {
        return `${this.name} is not doing well.`;
    }
};

Pet.prototype.getOlder = function () {
    if (this.happiness - 1 >= 0) {
        this.happiness -= 1;
    }
    if (this.hunger + 1 <= 10) {
        this.hunger += 1;
    }
};
