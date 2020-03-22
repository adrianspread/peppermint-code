var textarea = $("textarea");
var button = $("button");
console.log("dziala");

button.on("click", function() {
    try {
        JSON.parse(textarea.val());
        alert("thats JSON!!!!");
    } catch (e) {
        alert("Thas Not The Json Poetry, try again!!");
    }
});
