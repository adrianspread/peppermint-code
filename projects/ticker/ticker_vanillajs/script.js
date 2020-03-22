(function() {
    //this is an iife
    let headlines = document.getElementById("headlines");
    let links = headlines.getElementsByTagName("a");
    let left = headlines.offsetLeft; //offset left is a number measured in pixels, every element has offsetleft
    let ticker = document.getElementById("ticker");
    let myReq;

    moveHeadlines();

    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            // left = left + links[0].offsetWidth;
            left = 0;
            headlines.appendChild(links[0]);

            //add to left the width of currently first link, then make first link, last link
            //first links is off screen
        }
        headlines.style.left = left + "px";
        myReq = requestAnimationFrame(moveHeadlines);
    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function(event) {
            event.target.style.textDecoration = "underline"; // update the style of the a tag that a mouse entered
        });
        links[i].addEventListener("mouseleave", function(event) {
            //change style back to orig
            event.target.style.textDecoration = "none";
        });
    }

    ticker.addEventListener("mouseenter", function() {
        console.log("mouse enter on ticker!!!");
        cancelAnimationFrame(myReq);
    });

    ticker.addEventListener("mouseleave", function() {
        myReq = requestAnimationFrame(moveHeadlines);
    });
    /////////////////////////////////////////////////////////////////////////////
    //TICKER 2
    let ticker2 = document.getElementById("ticker2");

    let headlines2 = document.getElementById("headlines2"),
        links2 = headlines2.getElementsByTagName("a"),
        right = headlines2.offsetLeft + headlines2.offsetWidth;
    let speed = 4,
        myReq2;

    function moveHeadlines2() {
        right -= speed;
        if (right <= -links2[links2.length - 1].offsetWidth) {
            right += links2[links2.length - 1].offsetWidth;
            right = 0;
            headlines2.insertBefore(
                links2[links2.length - 1],
                headlines2.firstChild
            );
        }
        headlines2.style.right = right + "px";
        myReq2 = requestAnimationFrame(moveHeadlines2);
    }

    moveHeadlines2();

    for (let i = 0; i < links2.length; i++) {
        links2[i].addEventListener("mouseenter", function(event) {
            event.target.style.textDecoration = "underline"; // update the style of the a tag that a mouse entered
            cancelAnimationFrame(myReq2);
        });
        links2[i].addEventListener("mouseleave", function(event) {
            //change style back to orig
            event.target.style.textDecoration = "none";
        });
    }

    ticker2.addEventListener("mouseenter", function() {
        cancelAnimationFrame(myReq2);
    });

    ticker2.addEventListener("mouseleave", function() {
        myReq = requestAnimationFrame(moveHeadlines2);
    });
})();
//the functoin sould decrement the current left position and then set the left positionnof the headlines element to the new numbers
//headlines.style.left = left + 'px';
