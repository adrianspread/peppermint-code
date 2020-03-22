var box = document.getElementById("box");

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = x - 50 + "px";
    box.style.top = y - 50 + "px";
});
