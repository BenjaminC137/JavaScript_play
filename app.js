//function Banana(color, size, speed){
//	this.color = color;
//	this.size = size;
//	this.speed = speed;
//}
//var banana1 = new Banana('red', '250px', '2');
//var banana2 = new Banana('grey', '150px', '5');

const bananas = [
	{id: 1, color: 'red', size: 10, speed: 2},
	{id: 2, color: 'pink', size: 2, speed: 5},
	{id: 3, color: 'orange', size: 15, speed: 0.5},
	{id: 4, color: 'white', size: 3, speed: 4}
];
var banana;
var currentColor;
var currentSize;
var currentSpeed;
var	pexelsAPI;
var currentId;
var directionBadGuy = 'r';
var done;

function Slide(direction){
	var slider = document.querySelector('#slider');
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
	var positionX = Number(sliderLeft.replace("px", ""));
	var positionY = Number(sliderTop.replace("px", ""));

	if(positionX < 100){ // if hit left
		positionX = 101;
		positionX += "px"
		slider.style.left = positionX;
	}
	if(positionX > window.innerWidth - 100){ // if hit right
		positionX = window.innerWidth - 105;
		positionX += "px"
		slider.style.left = positionX;
	}
	if(positionY < 100){ // if hit top
		positionY = 101;
		positionY += "px"
		slider.style.top = positionY;
	}
	if(positionY > window.innerHeight - 170){ // if hit bottom
		positionY = window.innerHeight - 176;
		positionY += "px"
		slider.style.top = positionY;
	}

	if(direction == 'r'){
		positionX = positionX + 100;
		positionX += "px";
		slider.style.left = positionX;

		SlideSquare(1, 1, 'd');
		SlideSquare(2, 1, 'r');
		SlideSquare(3, 1, 'l');
		SlideSquare(4, 1, 'r');
	}
	if(direction == 'd'){
		positionY = positionY + 100;
		positionY += "px";
		slider.style.top = positionY;

		SlideSquare(1, 1, 'r');
		SlideSquare(2, 1, 'u');
		SlideSquare(3, 1, 'r');
		SlideSquare(4, 1, 'l');
	}
	if(direction == 'l'){
		positionX = positionX - 100;
		positionX += "px";
		slider.style.left = positionX;

		SlideSquare(1, 1, 'l');
		SlideSquare(2, 1, 'r');
		SlideSquare(3, 1, 'd');
		SlideSquare(4, 1, 'r');
	}
	if(direction == 'u'){
		positionY = positionY - 100;
		positionY += "px";
		slider.style.top = positionY;

		SlideSquare(1, 1, 'u');
		SlideSquare(2, 1, 'd');
		SlideSquare(3, 1, 'u');
		SlideSquare(4, 1, 'l');
	}

}
function Add(number){
	const currentBanana = bananas.find( banana => banana.id === number);
	console.log(currentBanana)
	currentId = currentBanana['id'];
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	currentSpeed = currentBanana['speed'];
	console.log(currentColor);

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

	SlideSquare(currentId, currentSpeed);
}
function SlideSquare(id, speed, directionBadGuy){
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft.replace("px", ""));
	var positionY = Number(badGuyTop.replace("px", ""));

	Move(directionBadGuy);
	function Move(directionBadGuy){
		if(directionBadGuy == 'r'){
			positionX = '75vw';
			badGuy.style.left = positionX;
			badGuy.addEventListener("transitionend", function(event) {
//				Move('d');
			}, false)
		}
		if(directionBadGuy == 'd'){
			positionY = '75vh';
			badGuy.style.top = positionY;
			badGuy.addEventListener("transitionend", function(event) {
//				Move('l');
			}, false)
		}
		if(directionBadGuy == 'l'){
			positionX = '25vw';
			badGuy.style.left = positionX;
			badGuy.addEventListener("transitionend", function(event) {
//				Move('u');
			}, false)
		}
		if(directionBadGuy == 'u'){
			positionY = '25vh';
			badGuy.style.top = positionY;
			badGuy.addEventListener("transitionend", function(event) {
//				Move('r');
			}, false)
		}
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
