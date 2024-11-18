//document.onkeydown = keyDown;
var val;

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
    val = keycode;
}

function keyIsDown(key) {
    document.onkeydown = keyDown;
    return key === val;
}