(function() {
    var searchField = $("input");
    var resultsDiv = $(".results");
    var body = $("body");
    var timeout;

    searchField.on("input", function() {
        var userInput = searchField.val().toLowerCase();

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $.ajax({
                url: "https://flame-egg.glitch.me/",
                data: {
                    q: userInput
                },
                success: function(countries) {
                    var htmlForCountries = "";

                    for (var j = 0; j < countries.length; j++) {
                        // we want to build up our html...  za kazdym razem przebiegiem petli dodaje element html
                        htmlForCountries +=
                            '<p class="country">' + countries[j] + "</p>";
                    }
                    resultsDiv.html(htmlForCountries);

                    // // if input gibberish display no result
                    if (countries.length == 0) {
                        htmlForCountries +=
                            '<p class="country">' + "no result" + "</p>";
                        resultsDiv.html(htmlForCountries);
                    }

                    // clear list when input clear
                    if (userInput.length == 0) {
                        resultsDiv.empty();
                        countries = [];
                    }
                }
            });
        }, 250);
    });

    resultsDiv.on("mouseover", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        $("p").removeClass("highlighted");
        elem.addClass("highlighted");
    });

    resultsDiv.on("mouseleave", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        elem.removeClass("highlighted");
    });

    resultsDiv.on("mousedown", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        // console.log(elem.html());
        searchField.val(elem.html());
        resultsDiv.empty();
        if (elem.html() != "no result") {
            window.open(`https://en.wikipedia.org/wiki/${elem.html()}`);
        }
    });

    body.click(function(e) {
        console.log("click in body");
        e.stopPropagation();
        resultsDiv.empty();
    });

    searchField.on("keydown", function(e) {
        // var highlighted = $(".highlighted");
        var index = $("p.highlighted").index();
        // console.log("index", index);
        var highlighted = $("p.highlighted");
        // console.log("just highlighted", highlighted);
        // console.log("just highlighted", highlighted.index());

        if (e.keyCode === 40 && index == -1) {
            $("p")
                .eq(0)
                .addClass("highlighted");
            index = 0;
            console.log(index);
        }

        if (e.keyCode === 40 && index < 3) {
            highlighted.next().addClass("highlighted");
            highlighted.removeClass("highlighted");
        }

        if (e.keyCode === 38 && index > 0) {
            highlighted.prev().addClass("highlighted");
            highlighted.removeClass("highlighted");
        }

        if (e.keyCode === 13 && index > -1) {
            e.stopPropagation();
            // console.log(elem.html());
            var putin = $("p.highlighted").html();
            searchField.val(putin);
            resultsDiv.empty();
            window.open(`https://en.wikipedia.org/wiki/${putin}`);
        }
    });

    searchField.focus(function() {
        $(this).css("background-color", "yellow");
    });
    searchField.blur(function() {
        $(this).css("background-color", "#90ee90");
    });
})();
