//document.onkeydown = keyDown;
var val_down;
var val_up

function keyDown(e) {
    var keycode;
	if (window.event)
	{
		keycode = window.event.key;
	}
	else if (e)
	{
		keycode = e.which;
	}

    console.log(keycode);
    val_down = keycode;
}

function keyUp(e) {
	var keycode;
	if (window.event)
	{
		keycode = window.event.key;
	}
	else if (e)
	{
		keycode = e.which;
	}

    console.log(keycode);
    val_up = keycode
}

function keyIsDown(key) {
    document.onkeydown = keyDown;
    return key === val_down;
}

function keyIsUp(key) {
    document.onkeyup = keyUp;
    return key === val_up;
}