function invertCase(str) {
    var reverted = "";
    var string = str;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            reverted += str[i].toLowerCase();
        } else {
            reverted += str[i].toUpperCase();
        }
    }
    return reverted;
}

console.log(invertCase("alEmAlOta"));
