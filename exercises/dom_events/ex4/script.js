var over = document.getElementById("over");
var inover = document.getElementById("in");

function getRandomColorNumber() {
    return Math.floor(Math.random() * 255);
}

over.addEventListener("mouseenter", function(event) {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    event.target.style.backgroundColor = randomColor;
});

inover.addEventListener("mouseenter", function(event) {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    event.target.style.backgroundColor = randomColor;
});
