var intializer = [];

function init() {
    for(let i = 0; i < intializer.length; i++) {
        intializer[i]();
    }
}

function addInitializer(func) {
    intializer.push(func);
}

function testFunc() {
    console.log("test function to run through initializer");
}

addInitializer(testFunc);

init();