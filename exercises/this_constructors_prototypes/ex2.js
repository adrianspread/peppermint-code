function Countdown(arg) {
    this.arg = arg;
}

Countdown.prototype.setTime = function() {
    setTimeout(() => {
        this.log();
    }, 5000);
};

Countdown.prototype.log = function() {
    console.log(this.arg);
};

Countdown.prototype.start = function() {
    for(var i=0; i < this.arg; i++){
        return this.setTime();
    }
};

var countdown = new Countdown(4);

countdown.start();
