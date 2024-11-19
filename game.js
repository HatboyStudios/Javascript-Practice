var player_test;

function setup() {
    player_test = new Player(20,20,50,50);
}

function draw() {
    player_test.draw();
    player_test.movement();
    console.log(keyIsDown("u"), keyIsUp("u"));
}

addInitializer(setup);
addLoopFunc(draw);