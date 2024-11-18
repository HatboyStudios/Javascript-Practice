var canvas = document.getElementById("game");

canvas.style.width = "100px";
canvas.style.height = "100px";

var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 150, 80);