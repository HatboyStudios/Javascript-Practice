var player_test;

function setup() {
    player_test = new Sprite(20,20,50,50);
}

function draw() {
    background("purple");
    player_test.draw();
    console.log(keyIsDown("u"), keyIsUp("u"));

    if(keyIsDown("d")) {
        player_test.x += 5;
    }

    if(keyIsDown("a")) {
        player_test.x -= 5;
    }
}

addInitializer(setup);
addLoopFunc(draw);