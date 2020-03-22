// Write a function called getLessThanZero that
//  expects an array of numbers to be
// passed to it and returns a new array containing only those numbers
//  from the array that was passed in that are less than zero.

var getLessThanZero = function(arr) {
    return arr.filter(function(negative) {
        return negative < 0;
    });
};

console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log(getLessThanZero([1, -2])); //[]

let a = getLessThanZero([1, -2]);
console.log("a: ", a);
