function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    this.width = n;
    this.height = n;
}

function Surface() {}

Surface.prototype.getArea = function() {
    return this.width * this.height;
};

Rectangle.prototype = Object.create(Surface.prototype);
Square.prototype = new Surface(); // Can I do it this way?

var s = new Square(4);
s.getArea(); // 16

var r = new Rectangle(4, 5);
r.getArea(); //20
