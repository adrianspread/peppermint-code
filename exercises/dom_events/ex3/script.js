var box = document.getElementById("box");

function getRandomColorNumber() {
    return Math.floor(Math.random() * 255);
}

box.addEventListener("mouseenter", function(event) {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    event.target.style.backgroundColor = randomColor;
});
