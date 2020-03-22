let board = $("#board");
let racers = $(".racer");

let racersLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

board.on("click", function() {
  for (let i = 0; i < racersLeft.length; i++) {
    racersLeft[i] += getRandomNumber(21);
    racers.eq(i).css({
      left: racersLeft[i] + "px"
    });
  }
});

document.getElementById("boost-button").addEventListener("click", function(e) {
  e.stopPropagation();
  racersLeft[0] += 30;
  racers[0].style.left = racersLeft[0] + "px";
});

$("#boost-button").on("click", function boostMe(e) {
  console.log("boost btn clicked");
  e.stopPropagation();
  racersLeft[0] += 30;

  racers
    .eq(0)
    .css({
      left: racersLeft[0] + "px"
    })
    .hide()
    .show(1000);
  $("#boost-button").html('<span id="boost">zoom zoom</span>');
  $(e.currentTarget).off("click", boostMe);
});

$(document).on("keydown", function(e) {
  if (e.keyCode === 82) {
    board.css({
      backgroundColor:
        "rgb(" +
        getRandomNumber(256) +
        "," +
        getRandomNumber(256) +
        "," +
        getRandomNumber(256) +
        ")"
    });
  }
});
