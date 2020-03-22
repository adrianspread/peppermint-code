function translateNumberToGerman() {
    try {
        console.log("1");
        var numask = askForNumber();
        console.log("3");
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
        console.log("4");
        return alert(germanNums[numask]);
    } catch (e) {
        alert(e);
        translateNumberToGerman();
    }

    function askForNumber() {
        console.log("2");
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
}

//    return translateNumberToGerman();

translateNumberToGerman();
