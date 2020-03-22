(function() {
    var kitties = document.querySelectorAll("#kitties img");
    var current = 0;
    var dots = document.getElementsByClassName("dot");
    moveKitties();

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            setTimeout(moveKitties, 2000);
        }
    });

    function moveKitties() {
        kitties[current].classList.add("offscreen-left");
        kitties[current].classList.remove("onscreen");
        dots[current].classList.remove("highlighted");

        current++;
        if (current >= kitties.length) {
            current = 0;
        }
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("highlighted");
    }
})();
