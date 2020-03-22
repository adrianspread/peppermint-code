function sum() {
    var arr = arguments;
    var argsum = 0;
    for (var i = 0; i < arr.length; i++) {
        argsum += arr[i];
    }
    return argsum;
}

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330
