var looping = [];
var loop_status = true;

function loop() {
    setInterval(loopingFunc, 1000);
}

function loopingFunc() {
    for(let i = 0; i < looping.length; i++) {
        looping[i]();
    }
}

function testFunc() {
    console.log("hello from loop");
}

function addLoopFunc(func) {
    looping.push(func);
}

addLoopFunc(testFunc);