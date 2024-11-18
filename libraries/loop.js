var looping = [];
var loop_status = true;

function loop() {
    setInterval(loopingFunc, 5);
}

function loopingFunc() {
    for(let i = 0; i < looping.length; i++) {
        looping[i]();
    }
}

function addLoopFunc(func) {
    looping.push(func);
}