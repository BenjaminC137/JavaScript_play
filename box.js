document.onkeypress = function(e){

	var box = document.getElementsByTagName("box")[0];

	var top = window.getComputedStyle(box).top;

	top = Number(top.replace("px", ""));

	var left = window.getComputedStyle(box).left;
	left = Number(left.replace("px", ""));

	var posx = window.getComputedStyle(box).backgroundPositionX;
	posx = Number(posx.replace("px", ""));

	var posy = window.getComputedStyle(box).backgroundPositionY;
	posy = Number(posy.replace("px", ""));

	if(left < 1){ // if hit left
		left = 1;
		left += "px"
		box.style.left = left;
	}

	if(left > window.innerWidth - 50){ // if hit right
		left = window.innerWidth - 55;
		left += "px"
		box.style.left = left;
	}

	if(top < 1){ // if hit top
		top = 1;
		top += "px"
		box.style.top = top;
	}

	if(top > window.innerHeight - 70){ // if hit bottom
		top = window.innerHeight - 76;
		top += "px"
		box.style.top = top;
	}

	if(e.key == 'd'){ //move right
		left += 25;
		left += "px"
		box.style.left = left;

		posy = 320;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;

	}

	if(e.key == 's'){ //move down
		top += 25;
		top += "px"
		box.style.top = top;

		posy = 384;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;


	}

	if(e.key == 'a'){ //move left
	left -= 25;
	left += "px"
	box.style.left = left;

	posx -= 64;
	posx += "px";
	posy = 192;
	posy += "px";
	box.style.backgroundPositionX = posx;		box.style.backgroundPositionY = posy;

	}

	if(e.key == 'w'){ //move up
		top -= 25;
		top += "px"
		box.style.top = top;

		posy = 256;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;
	}
    console.log(e.key);
    }

document.onmousedown = function (coords){
	var fireball = document.getElementsByTagName("fireball")[0];




	var box = document.getElementsByTagName("box")[0];
	var top = window.getComputedStyle(box).top;
	top = Number(top.replace("px", ""));
	var left = window.getComputedStyle(box).left;
	left = Number(left.replace("px", ""));




	var xcoord = coords.x - 16;
	var ycoord = coords.y - 16;

		xcoord += "px";
		ycoord += "px";
		fireball.style.left = xcoord;
		fireball.style.top = ycoord;

if(((coords.x < left + 51) && (coords.x > left + 13)) && ((coords.y < top + 66) && (coords.y > top + 13))){
	console.log("hit");
	box.style.backgroundColor = "red";
}
	else{
		box.style.backgroundColor = null;
	}

}

