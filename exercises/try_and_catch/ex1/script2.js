function translateNumberToGerman() {
    var numask = askForNumber();
    var germanNums = [
        "Null",
        "Eins",
        "Zwei",
        "Drei",
        "Vier",
        "Fünf",
        "Sechs",
        "Sieben",
        "Acht",
        "Neun",
        "Zehn"
    ];
    if (typeof parseInt(numask) == "number") {
        return alert(germanNums[numask]);
    } else {
        translateNumberToGerman();
    }
}

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

//    return translateNumberToGerman();

try {
    translateNumberToGerman();
} catch (e) {
    alert(e);
}
