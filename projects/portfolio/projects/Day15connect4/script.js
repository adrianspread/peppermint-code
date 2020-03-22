var board = $("#board");
var currentPlayer = "player1";
var slots = $(".slot");
var columns = $(".column");
var box = $(".box");
var body = $("body");

function formain(e) {
    var i;
    var col = $(e.currentTarget);
    var slotsInCol = col.children();

    for (i = slotsInCol.length - 1; i >= 0; i--) {
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            slotsInCol.eq(i).addClass(currentPlayer);
            break;
        }
    }

    // console.log($('p'));
    if (i == -1) {
        //ignoruje klik bo kolumna pelna
        return; // wywala mnie z klika
    }
    //sprawdzam kto wygral
    var slotsInRow = $(".row" + i);
    var victoryRow = checkForVictory(slotsInRow);
    var victoryCol = checkForVictory(slotsInCol);
    // var vicrotyDiagonally = diagonally();

    if (victoryRow[0]) {
        var arrSlots = victoryRow[1];
        for (var z = 0; z < arrSlots.length; z++) {
            arrSlots[z].addClass("victory");
        }
        won();
        destroyWithAnimation();
    } else if (victoryCol[0]) {
        var arrSlotsTwo = victoryCol[1];
        console.log(arrSlotsTwo);
        for (var x = 0; x < arrSlotsTwo.length; x++) {
            arrSlotsTwo[x].addClass("victory");
        }
        won();
        destroyWithAnimation();
    } else if (diagonally()) {
        won();
        destroyWithAnimation();
        console.log("Diagonally");
    }
    switchPlayer();
}
function destroyWithAnimation() {
    setTimeout(function() {
        for (var u = 0; u < slots.length; u++) {
            setTimeout(
                function(t) {
                    slots.eq(t).addClass("movedown");
                    slots.eq(t + 1).addClass("movedown");
                    slots.eq(t + 2).addClass("movedown");
                },
                u * 100,
                u
            );
        }

        setTimeout(function() {
            for (var s = 0; s < columns.length; s++) {
                setTimeout(
                    function(p) {
                        columns.eq(p).addClass("movedown");
                        columns.eq(p + 1).addClass("movedown");
                        columns.eq(p + 3).addClass("movedown");
                    },
                    s * 900,
                    s
                );
            }
        }, 4000);
    }, 2000);
}
function won() {
    box.removeClass("box");
    $(".overlay").removeClass("hidden");
    $(".overlay").addClass("visible");
    setTimeout(function() {
        $(".won").removeClass("hidden");
        $(".won").addClass("visible");
        var whowin = "";
        whowin = "<div>" + currentPlayer + " won!" + "</div>";
        $(".text").html(whowin);
    }, 2000);
}
function switchPlayer() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
        box.removeClass("player1");
        box.addClass("player2");
    } else {
        currentPlayer = "player1";
        box.removeClass("player2");
        box.addClass("player1");
    }
}
function checkForVictory(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            if (count == 4) {
                var arr = [
                    slots.eq(i),
                    slots.eq(i - 1),
                    slots.eq(i - 2),
                    slots.eq(i - 3)
                ];
                return [true, arr]; // jezeli nie zwoci tego to zwroci undefined czyli false
            }
        } else {
            count = 0;
        }
    }
    return false;
}
function diagonally() {
    var columns = $(".column"); //
    for (var col = 0; col < columns.length - 3; col++) {
        for (var row = 0; row < columns.eq(col).children().length - 3; row++) {
            if (
                columns
                    .eq(col)
                    .children()
                    .eq(row)
                    .hasClass(currentPlayer) &&
                columns
                    .eq(col)
                    .children()
                    .eq(row)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(col + 1)
                        .children()
                        .eq(row + 1)
                        .hasClass(currentPlayer) &&
                columns
                    .eq(col)
                    .children()
                    .eq(row)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(col + 2)
                        .children()
                        .eq(row + 2)
                        .hasClass(currentPlayer) &&
                columns
                    .eq(col)
                    .children()
                    .eq(row)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(col + 3)
                        .children()
                        .eq(row + 3)
                        .hasClass(currentPlayer)
            ) {
                columns
                    .eq(col)
                    .children()
                    .eq(row)
                    .addClass("victory");
                columns
                    .eq(col + 1)
                    .children()
                    .eq(row + 1)
                    .addClass("victory");
                columns
                    .eq(col + 2)
                    .children()
                    .eq(row + 2)
                    .addClass("victory");
                columns
                    .eq(col + 3)
                    .children()
                    .eq(row + 3)
                    .addClass("victory");

                return true;
            }
        }
    }

    for (var colu = columns.length; colu > 2; colu--) {
        for (
            var rows = 0;
            rows < columns.eq(colu).children().length - 3;
            rows++
        ) {
            if (
                columns
                    .eq(colu)
                    .children()
                    .eq(rows)
                    .hasClass(currentPlayer) &&
                columns
                    .eq(colu)
                    .children()
                    .eq(rows)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(colu - 1)
                        .children()
                        .eq(rows + 1)
                        .hasClass(currentPlayer) &&
                columns
                    .eq(colu)
                    .children()
                    .eq(rows)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(colu - 2)
                        .children()
                        .eq(rows + 2)
                        .hasClass(currentPlayer) &&
                columns
                    .eq(colu)
                    .children()
                    .eq(rows)
                    .hasClass(currentPlayer) ==
                    columns
                        .eq(colu - 3)
                        .children()
                        .eq(rows + 3)
                        .hasClass(currentPlayer)
            ) {
                columns
                    .eq(colu)
                    .children()
                    .eq(rows)
                    .addClass("victory");
                columns
                    .eq(colu - 1)
                    .children()
                    .eq(rows + 1)
                    .addClass("victory");
                columns
                    .eq(colu - 2)
                    .children()
                    .eq(rows + 2)
                    .addClass("victory");
                columns
                    .eq(colu - 3)
                    .children()
                    .eq(rows + 3)
                    .addClass("victory");
                return true;
            }
        }
    }
}

body.on("keydown", function(e) {
    var columnborder = $(".columnborder");
    var index = columnborder.index();

    if (e.keyCode === 39 && index == -1) {
        $(".column")
            .eq(0)
            .addClass("columnborder");
        index = 0;
    }

    if (e.keyCode === 37 && index == 0) {
        console.log(index);
        $(".column")
            .eq(columns.length - 1)
            .addClass("columnborder");
        columnborder.removeClass("columnborder");
    }

    if (e.keyCode === 39 && index < columns.length) {
        columnborder.next().addClass("columnborder");
        columnborder.removeClass("columnborder");
        index++;
    }

    if (e.keyCode === 39 && index == columns.length) {
        $(".column")
            .eq(0)
            .addClass("columnborder");
        columnborder.removeClass("columnborder");
    }

    if (e.keyCode === 37 && index == -1) {
        $(".column")
            .eq(columns.length - 1)
            .addClass("columnborder");
        index = columns.length - 1;
    }

    if (e.keyCode === 37 && index > 0) {
        columnborder.prev().addClass("columnborder");
        columnborder.removeClass("columnborder");
    }

    if (e.keyCode === 13 && index >= 0) {
        var i;
        var col = columnborder;
        console.log(col);
        var slotsInCol = col.children();

        for (i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        // console.log($('p'));
        if (i == -1) {
            //ignoruje klik bo kolumna pelna
            return; // wywala mnie z klika
        }
        //sprawdzam kto wygral
        var slotsInRow = $(".row" + i);
        var victoryRow = checkForVictory(slotsInRow);
        var victoryCol = checkForVictory(slotsInCol);
        // var vicrotyDiagonally = diagonally();

        if (victoryRow[0]) {
            var arrSlots = victoryRow[1];
            for (var z = 0; z < arrSlots.length; z++) {
                arrSlots[z].addClass("victory");
            }
            won();
            destroyWithAnimation();
        } else if (victoryCol[0]) {
            var arrSlotsTwo = victoryCol[1];
            console.log(arrSlotsTwo);
            for (var x = 0; x < arrSlotsTwo.length; x++) {
                arrSlotsTwo[x].addClass("victory");
            }
            won();
            destroyWithAnimation();
        } else if (diagonally()) {
            won();
            destroyWithAnimation();
        }
        switchPlayer();
    }
});
$(".column").on("click", function(e) {
    //loop przez cala kolume z znajdz pusty slot
    formain(e);
});
$("button").on("click", function() {
    $(".slot").removeClass("player1");
    $(".slot").removeClass("player2");
    $(".slot").removeClass("victory");
    $(".overlay").removeClass("visible");
    $(".overlay").addClass("hidden");
    $(".won").removeClass("visible");
    $(".won").addClass("hidden");
    box.addClass("box");

    $(".slot").removeClass("movedown");
    $(".slot").removeClass("movedown");
    $(".column").removeClass("movedown");
    $(".column").removeClass("movedown");

    $(".slot").addClass("notransition");
    $(".column").addClass("notransition");
});

// box
body.mousemove(function(e) {
    e.stopPropagation();
    box.css({
        left: e.clientX,
        top: e.clientY
    });
});

for (var i = 0; i < columns.length; i++) {
    columns.eq(i).on("mouseenter", function(e) {
        $(e.currentTarget).addClass("columnborder");
    });

    columns.eq(i).on("mouseleave", function(e) {
        $(e.currentTarget).removeClass("columnborder");
    });
}
