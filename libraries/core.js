var canvas;
var ctx;

function loadGame() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    init();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}