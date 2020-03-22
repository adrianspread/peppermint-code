function fun(num) {
    if (num < 0 || num === 0) {
        return "ERROR";
    } else if (isNaN(num) || typeof num !== "number") {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return fun(num * 10);
    }
}

fun(1000);
