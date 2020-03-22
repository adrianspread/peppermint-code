function logType(val) {
    if (typeof val == "string") {
        return "string";
    } else if (typeof val === "number") {
        if (isNaN(val) === true) {
            return "not a number!";
        } else {
            return "Number!";
        }
    } else if (typeof val === "object") {
        if (val === null) {
            return null;
        } else if (Array.isArray(val) === true) {
            return "array!";
        } else {
            return "object!";
        }
    } else if (typeof val === "function") {
        return "function!";
    } else if (val === undefined) {
        return "undefined!";
    } else if (typeof val === "boolean") {
        return "boolean";
    } else {
        return "I have no idea";
    }
}

// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"

var a = function() {};
var b = [1, 2, 3, 4];
var c = {};
const mySymbol = Symbol();

console.log(logType(null));
console.log(logType(324));
console.log(logType(NaN));
console.log(logType("asd"));
console.log(logType(true));
console.log(logType(false));
console.log(logType(a));
console.log(logType(b));
console.log(logType(c));
console.log(logType(undefined));
console.log(logType(false));
console.log(logType(true));
console.log(logType(mySymbol));
