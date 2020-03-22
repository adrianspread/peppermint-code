var overlay = document.getElementsByClassName("overlay");
var x = document.getElementsByClassName("x");
var hamburgermenu = document.getElementsByClassName("hamburgermenu");
var sidenav = document.getElementsByClassName("side-nav");

// console.log(sidenav);

hamburgermenu[0].addEventListener("click", function() {
    // console.log("hamburgermenu click");
    overlay[0].classList.remove("zindex");
    sidenav[0].classList.add("move");
});

overlay[0].addEventListener("click", function() {
    // console.log("click on overlay");
    event.stopPropagation();
});

sidenav[0].addEventListener("click", function(e) {
    e.stopPropagation();
});

x[0].addEventListener("click", function() {
    // console.log("click on X");
    sidenav[0].classList.remove("move");
    setTimeout(function() {
        overlay[0].classList.add("zindex");
    }, 1500);
});

//////////////////////////////////////////// jQuery

var body = $("body");
var popup = $(".popup");
var x2 = $(".x2");
var once = 0;

body.mousemove(function() {
    console.log("mouse is moving");
    if (once == 0) {
        once++;
        setTimeout(function() {
            popup.css({
                position: "fixed"
            });
        }, 1000);
    }
});

x2.click(function xoff(e) {
    console.log("clicking on x!!!!");
    popup.css({
        position: "static"
    });
    $(e.currentTarget).off("click", xoff);
});
