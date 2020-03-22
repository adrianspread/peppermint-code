function waitThenRun(func) {
    setTimeout(func, 1500);
}

waitThenRun(function() {
    console.log("Hello!");
    waitThenRun(function() {
        console.log("Goodbye!");
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later
