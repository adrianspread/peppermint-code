var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var x = 0;
var y = 0;
//human
//head
c.beginPath();
c.arc(x + 300, y + 180, 50, 0, 2 * Math.PI);
c.strokeStyle = "salmon";
c.lineWidth = 5;
c.fillStyle = "salmon";
c.fill();
//body
c.beginPath();
c.moveTo(x + 300, y + 250);
c.lineTo(x + 300, y + 450);
c.strokeStyle = "red";
c.lineWidth = 9;
c.stroke();
//hends
c.beginPath();
c.moveTo(x + 150, y + 190);
c.lineTo(x + 300, y + 300);
c.lineTo(x + 450, y + 190);
c.strokeStyle = "blue";
c.lineWidth = 11;
c.stroke();

//legs
c.beginPath();
c.moveTo(x + 150, y + 570);
c.lineTo(x + 300, y + 450);
c.lineTo(x + 450, y + 570);
c.strokeStyle = "brown";
c.lineWidth = 14;
c.stroke();
