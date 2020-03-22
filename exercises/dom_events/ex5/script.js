console.log("sanity check!!");

var btn = document.getElementById("btn");
//console.log("btn:", btn);

var input = document.getElementById("input");

input.addEventListener("input", function() {
    console.log("input happening...");
    event.target.value = "test take a break";
    console.log("event.target.value:", event.target.value);
});

btn.addEventListener("click", function() {
    console.log("button clicked on...");
    document.body.style.backgroundColor = "lightsalmon";
});

document.addEventListener("keydown", function(event) {
    console.log("keydown happend!!!!");
    console.log("event:", event);
    if (event.keyCode === 80) {
        console.log("p was clicked");
        document.body.style.backgroundColor = "darkorchid";
    }
});
