function each(obj, callback) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
        }
    } else {
        for (var key in obj) {
            callback(obj[key], key);
        }
    }
}

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
);
