var textarea = document.querySelector("textarea");
console.log("text area: ", textarea);

var str =
    "But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.xvxvxcvvvvvvvvv vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv";

textarea.addEventListener("input", function() {
    console.log("input addEventListener");
    var length = event.target.value.length;
    event.target.value = str.slice(0, length);
});

// var arr = [];
//
// for (var i = 0; i < str.length - 1; i++) {
//     arr.push(str[i]);
// }
//
//
// event.target.value = arr[length-1];
