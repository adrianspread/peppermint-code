function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
    this.getBy = function() {
        return this.color;
    };
}

let swan = new Bird("Beka", "sebastianowy");

console.log(swan.getBy());
