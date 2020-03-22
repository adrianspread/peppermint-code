console.log("sanity check!!");
var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");
var boostBtn = document.getElementById("boost-button");

var leftRacingCar = 0;
var leftMotorbike = 0;
var leftPoliceCar = 0;
var leftTractor = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 70);
}

function getRandomColorNumber() {
  return Math.floor(Math.random() * 255);
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    board.style.backgroundColor = randomColor;
  }
});

boostBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  leftTractor += 100;
  racers[3].style.left = leftTractor + "px";
});

document.addEventListener("click", function() {
  leftRacingCar += getRandomNumber();
  leftMotorbike += getRandomNumber();
  leftPoliceCar += getRandomNumber();
  leftTractor += getRandomNumber();

  racers[0].style.left = leftRacingCar + "px";
  racers[1].style.left = leftMotorbike + "px";
  racers[2].style.left = leftPoliceCar + "px";
  racers[3].style.left = leftTractor + "px";
});
