var a = {
  Berlin: "Germany",
  Paris: "France",
  "New York": "USA"
};

function reverse() {
  var b = {};
  for (var key in a) {
    b[a[key]] = key;
  }
  return b;
}

console.log(reverse(a));
