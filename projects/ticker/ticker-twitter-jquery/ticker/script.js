$.ajax({
    url: "/data.json",
    method: "GET",
    success: function(response) {
        // console.log("response: ", response);
        var myAhref = "";
        for (var i = 0; i < response.length; i++) {
            var x =
                '<a href="' +
                response[i].link +
                '">' +
                response[i].title +
                "</a>";
            myAhref += x;
        }
        // console.log(myAhref);
        $("#headlines").html(myAhref);
        $("#headlines2").html(myAhref);
    },
    error: function(err) {
        console.log("err: ", err);
    }
});

let speed = 2;

///////////////////////////////////////////////////////////////////////////////
//TICKER 1

// (function() {
setTimeout(function() {
    var headlines = $("#headlines");
    var left = headlines.offset().left;
    var myReq;

    moveHeadlines();

    function moveHeadlines() {
        var links = $("#headlines a");
        left -= speed;
        if (left < -links.eq(0).outerWidth(true)) {
            left = 0;
            headlines.append(links[0]);
        }
        headlines.eq(0).css({
            left: left + "px"
        });
        myReq = requestAnimationFrame(moveHeadlines);
    }

    var a = $("a");

    for (var i = 0; i < a.length; i++) {
        //console.log("a:", a.length);
        a.eq(i).on("mouseenter", function(e) {
            //        console.log("mouse over link!!");
            $(e.currentTarget).css({
                "text-decoration": "underline"
                // color: "red"
            });
        });

        a.eq(i).on("mouseleave", function(e) {
            //        console.log("mouse leave link!!");
            $(e.currentTarget).css({
                "text-decoration": "none"
            });
        });
    }

    $("#ticker").on("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });

    $("#ticker").on("mouseleave", function() {
        myReq = requestAnimationFrame(moveHeadlines);
    });
}, 2000);

///////////////////////////////////////////////////////////////////////////////
//TICKER 2
setTimeout(function() {
    let headlines2 = $("#headlines2");
    let right = headlines2.offset().left + headlines2.eq(0).outerWidth();
    let myReq;

    moveHeadlines2();

    function moveHeadlines2() {
        let links2 = $("#headlines2 a");
        right -= speed;
        // console.log("links2: ", links2);
        if (right < -links2.eq(links2.length - 1).outerWidth()) {
            // right = 0;
            links2.insertBefore(links2.eq(links2.length - 1));
        }
        headlines2.eq(0).css({
            right: right + "px"
        });
        myReq = requestAnimationFrame(moveHeadlines2);
    }

    // let a = $("#headlines2 a");
    //
    // for (let i = 0; i < a.length; i++) {
    //     //console.log("a:", a.length);
    //     a.eq(i).on("mouseenter", function(e) {
    //         //        console.log("mouse over link!!");
    //         $(e.currentTarget).css({
    //             // textDecoration: "underline"
    //             "text-decoration": "underline"
    //             // color: "red"
    //         });
    //     });
    //
    //     a.eq(i).on("mouseleave", function(e) {
    //         //        console.log("mouse leave link!!");
    //         $(e.currentTarget).css({
    //             "text-decoration": "none"
    //         });
    //     });
    // }

    $("#ticker2").on("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });

    $("#ticker2").on("mouseleave", function() {
        myReq = requestAnimationFrame(moveHeadlines2);
    });
}, 2000);

///////////////////////////////////////////////////////////////////////////////
