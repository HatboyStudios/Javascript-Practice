var canvas;
var ctx;

function loadGame() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    init();
}