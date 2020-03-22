// (function() {
var headlines = $("#headlines");
var ticker = $("#ticker");
var left = headlines.offset().left;
var myReq;

//console.log(headlines.length);
//console.log(ticker.length);

moveHeadlines();

function moveHeadlines() {
    var links = $("a");
    left = left - 2;
    if (left < -links.eq(0).outerWidth()) {
        // console.log("1.left!!:", left);
        // console.log("2.outerWidth!!:", -links.eq(0).outerWidth());
        // left = left - links.eq(0).outerWidth();
        left = 0;
        headlines.append(links[0]);
    }
    headlines.eq(0).css({
        left: left + "px"
    });
    myReq = requestAnimationFrame(moveHeadlines);
}

var a = $("a");
//console.log(a);

for (var i = 0; i < a.length; i++) {
    //console.log("a:", a.length);
    ticker.eq(i).on("mouseenter", function(e) {
        //        console.log("mouse over link!!");
        $(e.currentTarget).css({
            color: "red"
        });
        cancelAnimationFrame(myReq);
    });

    ticker.eq(i).on("mouseleave", function(e) {
        //        console.log("mouse leave link!!");
        $(e.currentTarget).css({
            color: "blue"
        });
        requestAnimationFrame(moveHeadlines);
    });

    a.eq(i).on("mouseenter", function(e) {
        //        console.log("mouse over link!!");
        $(e.currentTarget).css({
            color: "red"
        });
    });

    a.eq(i).on("mouseleave", function(e) {
        //        console.log("mouse leave link!!");
        $(e.currentTarget).css({
            color: "blue"
        });
    });
}

// ex 2
// wyskakujace okienko jest nieruchome na srodku
// robie w jquery, metoda setimeout
