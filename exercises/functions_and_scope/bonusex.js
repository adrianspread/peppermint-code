function getSuperTotal() {
    var total = 0;
    return function superTotal(num) {
        total += num;
        console.log(total);
        return total;
    };
}
var totaler = getSuperTotal();
totaler(1); //1
totaler(2); //3
totaler(5); //8

// CLOUSERS KNOWKNOW
console.log(totaler);
