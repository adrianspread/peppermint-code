(function() {
    var kitties = document.querySelectorAll("#kitties img");
    var current = 0;
    var dots = document.getElementsByClassName("dot");
    var animation, dotClicked, timer;
    moveKitties();

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 2000);
            animation = false;
            // console.log("animation: ", animation);
        }
    });

    function moveKitties(dotClicked) {
        animation = true;
        // console.log("animation: ", animation);
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("offscreen-left");
        dots[current].classList.remove("highlighted");

        if (dotClicked == undefined) {
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = dotClicked;
        }

        kitties[current].classList.add("onscreen");
        dots[current].classList.add("highlighted");
    }
    // console.log("dots: ", dots);
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            console.log("clicked on dot i:", i);
            if (e.target.classList.contains("highlighted")) {
                console.log("dot has classsss!!");
                return;
            } else if (animation) {
                console.log("animation happening");
                return;
            } else {
                clearTimeout(timer);
                moveKitties(i);
            }
        });
    }
})();
