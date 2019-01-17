const bananas = [
	{id: 1, color: 'mediumseagreen', size: 10, speed: 2},
	{id: 2, color: 'pink', size: 2, speed: 5},
	{id: 3, color: 'orange', size: 15, speed: 0.5},
	{id: 4, color: 'white', size: 3, speed: 4},
	{id: 5, color: 'beige', size: 20, speed: 0.5},
	{id: 6, color: 'orangered', size: 25, speed: 0.5}
];
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var distanceH = windowWidth / 25;
var distanceV = windowHeight / 25;
var score = 0;
var banana;
var currentColor;
var currentSize;
var currentSpeed;
var	pexelsAPI;
var currentId;
var directionBadGuy = 'r';
var done;
var difficulty = 1;

window.onresize = function(event) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
//	console.log(windowWidth, windowHeight);
};

function GetBananaLocation(){
	var slider = document.querySelector('#slider');
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
	var positionX = Number(sliderLeft.replace("px", ""));
	var positionY = Number(sliderTop.replace("px", ""));
	return {x: positionX, y: positionY};
}
function Slide(direction){
	distanceW = windowWidth / 10;
	distanceH = windowHeight / 10;

	var slider = document.querySelector('#slider');
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
	var sliderWidth = window.getComputedStyle(slider).width;
	var positionX = Number(sliderLeft.replace("px", ""));
	var positionY = Number(sliderTop.replace("px", ""));

	if(positionX < distanceW){ // if hit left
//		positionX = distanceW;
//		positionX += "px"
		positionX = '10vw';
		slider.style.left = positionX;
	}
	if(positionX > window.innerWidth - (distanceW * 2)){ // if hit right
//		positionX = distanceW;
//		positionX += "px"
		positionX = '80vw';
		slider.style.left = positionX;
	}
	if(positionY < distanceH){ // if hit top
//		positionY = distanceH;
//		positionY += "px"
		positionY = '10vh';
		slider.style.top = positionY;
	}
	if(positionY > window.innerHeight - (distanceH * 2)){ // if hit bottom
//		positionY = window.innerHeight - 176;
//		positionY += "px"
		positionY = '80vh';
		slider.style.top = positionY;
	}

	if(direction == 'r'){
		positionX = positionX + distanceW;
//		console.log(windowWidth);
		positionX += "px";
		slider.style.left = positionX;

		SlideSquare(1, 1, 'd');
		SlideSquare(2, 1, 'r');
		SlideSquare(3, 1, 'l');
		SlideSquare(4, 1, 'r');

		SlideSquare(5, 1, 'r');
		SlideSquare(6, 1, 'd');

	}
	if(direction == 'd'){
		positionY = positionY + distanceH;
		positionY += "px";
		slider.style.top = positionY;

		SlideSquare(1, 1, 'r');
		SlideSquare(2, 1, 'u');
		SlideSquare(3, 1, 'r');
		SlideSquare(4, 1, 'l');

		SlideSquare(5, 1, 'u');
		SlideSquare(6, 1, 'u');
	}
	if(direction == 'l'){
		positionX = positionX - distanceW;
		positionX += "px";
		slider.style.left = positionX;

		SlideSquare(1, 1, 'l');
		SlideSquare(2, 1, 'l');
		SlideSquare(3, 1, 'd');
		SlideSquare(4, 1, 'u');

		SlideSquare(5, 1, 'd');
		SlideSquare(6, 1, 'l');
	}
	if(direction == 'u'){
		positionY = positionY - distanceH;
		positionY += "px";
		slider.style.top = positionY;

		SlideSquare(1, 1, 'u');
		SlideSquare(2, 1, 'd');
		SlideSquare(3, 1, 'u');
		SlideSquare(4, 1, 'd');

		SlideSquare(5, 1, 'l');
		SlideSquare(6, 1, 'r');
	}

}
function Add(number){
	const currentBanana = bananas.find( banana => banana.id === number);
//	console.log(currentBanana)
	currentId = currentBanana['id'];
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	currentSpeed = currentBanana['speed'];
//	console.log(currentColor);
	if ([2,4,5].indexOf(number) > -1){
		difficulty ++;
		$('#difficulty').html(difficulty);
	}

  // create a new div element
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "bad-guy");
	newDiv.setAttribute("id", "badGuy" + number);
	newDiv.style.backgroundColor = currentColor;
//	newDiv.style.transition =  '200ms';
	newDiv.style.width = currentSize += 'vw';

	// add the newly created element and its content into the DOM
	var currentDiv = document.getElementById("slider");
	document.body.insertBefore(newDiv, currentDiv);

	var addDiv = document.getElementById("add");
	var newClick = ("Add(" + (number + 1) + ")");
	addDiv.setAttribute("onclick", newClick);
}
function SlideSquare(id, speed, directionBadGuy){
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft);
	var positionY = Number(badGuyTop);

	Move(directionBadGuy);
	function Move(directionBadGuy){
		if(directionBadGuy == 'r'){
			positionX = '70vw';
		}
		if(directionBadGuy == 'd'){
			positionY = '70vh';
		}
		if(directionBadGuy == 'l'){
			positionX = '20vw';
		}
		if(directionBadGuy == 'u'){
			positionY = '20vh';
		}
		badGuy.style.left = positionX;
		badGuy.style.top = positionY;
		function CheckB(event) {
			CheckBanana(id);
			badGuy.removeEventListener("transitionend", CheckB, false);
		}
		badGuy.addEventListener("transitionend", CheckB, false);
//			badGuy.removeEventListener("transitionend", CheckB, false);
	}
}
function CheckBanana(id){
	const currentBanana = bananas.find( banana => banana.id === id);
	currentId = currentBanana['id'];
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	currentSpeed = currentBanana['speed'];
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft.replace("px", ""));
	var positionY = Number(badGuyTop.replace("px", ""));

	var bananaLocation = GetBananaLocation();
//	console.log("banana: ",  bananaLocation.x);
//	console.log(badGuyId + " : " + positionX);
//	console.log(bananaLocation.x < positionX + 100);
	console.log(badGuyId);
	currentSize = (windowWidth / 100) * currentSize;
//	console.log(badGuyId, windowWidth, currentSize);
	if(((bananaLocation.x < positionX + currentSize) && (bananaLocation.x > positionX - 50)) && ((bananaLocation.y < positionY + 75) && (bananaLocation.y > positionY - 50))){
		if(id == 2 || id == 4 || id == 5){
			score = 0;
			$('#message').prepend('Slipped on ' + badGuyId + '!<br>');
//		badGuy.removeEventListener("transitionend", CheckB, false);
		}
		else{
			$('#message').prepend("Peeled " + badGuyId + "!<br>");
			score = score + (1*difficulty);
//		badGuy.removeEventListener("transitionend", CheckB, false);
		}
		$('#score').html(score);
		badGuy.removeEventListener("transitionend", CheckB, false);
	}
}
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.pexels.com/v1/curated?per_page=15&page=1",
  "method": "GET",
  "headers": {
    "Authorization": "563492ad6f91700001000001d287cf6b84eb4d789e2a5b915da35960",
    "Cache-Control": "no-cache",
    "Postman-Token": "334da920-22c4-4c9c-9de9-f721790e32fd"
  }
}
function ChangeBackground(){
	pexelAPI = '563492ad6f91700001000001d287cf6b84eb4d789e2a5b915da35960';
	$.ajax(settings).done(function (response) {
  console.log(response);
});
}
