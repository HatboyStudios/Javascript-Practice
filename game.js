var player_test;

function setup() {
    player_test = new Sprite(20,20,100,100);
}

function draw() {
    player_test.draw();
}

addInitializer(setup);
addLoopFunc(draw);