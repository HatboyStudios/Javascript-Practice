var intializer = [];

function init() {
    for(let i = 0; i < intializer.length; i++) {
        intializer[i]();
    }

    loop();
}

function addInitializer(func) {
    intializer.push(func);
}