var player_test;

function setup() {
    addScore("player_health", 100);

    console.log(scores);
    player_test = new Player(20,20,50,50);
}

function draw() {
    clear();
    background("purple");
    player_test.draw();
    player_test.movement();
    console.log(keyIsDown("u"), keyIsUp("u"));
}

addInitializer(setup);
addLoopFunc(draw);