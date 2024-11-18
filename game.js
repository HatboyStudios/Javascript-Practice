var player_test;

function setup() {
    player_test = new Sprite(20,20,100,100);
}

function draw() {
    player_test.draw();
    //console.log(keyIsDown("u"));

    if(keyIsDown("d")) {
        player_test.x += 5;
    }else {
        player_test.x = player_test.x;
    }
}

addInitializer(setup);
addLoopFunc(draw);