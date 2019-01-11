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
//	console.log(direction);
	var slider = document.querySelector('#slider');
//	console.log(slider);
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
//	console.log(sliderLeft);
	var positionX = Number(sliderLeft.replace("px", ""));
	console.log(positionX);
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
		console.log(positionX);
		slider.style.left = positionX;
	}
	if(direction == 'd'){
		positionY = positionY + 100;
		positionY += "px";
		console.log(positionY);
		slider.style.top = positionY;
	}
	if(direction == 'l'){
		positionX = positionX - 100;
		positionX += "px";
		console.log(positionX);
		slider.style.left = positionX;
	}
	if(direction == 'u'){
		positionY = positionY - 100;
		positionY += "px";
		console.log(positionY);
		slider.style.top = positionY;
	}

//	if(slideState == false){
//		$('#slider')[0].style.left = '25px';
//		$('div')[1].value = 'go right';
//	}
//	else{
//		$('div')[1].style.left = '550px';
//		$('div')[1].value = 'go left';
//	}

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
function SlideSquare(id, speed){
	var badGuyId = 'badGuy';
	badGuyId += id;
//	console.log(badGuyId);
	var badGuy = document.getElementById(badGuyId);
	console.log(badGuy);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	console.log(badGuyLeft);
	var positionX = Number(badGuyLeft.replace("px", ""));
	console.log(positionX);
	var positionY = Number(badGuyTop.replace("px", ""));

	if(positionX < 100){ // if hit left
		positionX = 101;
		positionX += "px"
		badGuy.style.left = positionX;
	}

	if(positionX > window.innerWidth - 100){ // if hit right
		positionX = window.innerWidth - 105;
		positionX += "px"
		badGuy.style.left = positionX;
	}

	if(positionY < 100){ // if hit top
		positionY = 101;
		positionY += "px"
		badGuy.style.top = positionY;
	}

	if(positionY > window.innerHeight - 170){ // if hit bottom
		positionY = window.innerHeight - 176;
		positionY += "px"
		badGuy.style.top = positionY;
	}

	if(directionBadGuy == 'r'){
//		positionX = positionX + 25;
		positionX = 75;
		positionX += "vw";
		console.log(positionX);
		badGuy.style.left = positionX;

		badGuy.addEventListener("transitionend", function(event) {
			console.log("Done!");
			directionBadGuy = 'd';
		}, false)
	}
	if(directionBadGuy == 'd'){
//		positionY = positionY + 100;
		positionY = 75;
		positionY += "vh";
		console.log(positionY);
		badGuy.style.top = positionY;
		directionBadGuy = 'l';

	}
	if(directionBadGuy == 'l'){
//		positionX = positionX - 100;
		positionX = 25;
		positionX += "vw";
		console.log(positionX);
		badGuy.style.left = positionX;
		directionBadGuy = 'u';
	}
	if(directionBadGuy == 'u'){
		positionY = positionY - 100;
		positionY += "px";
		console.log(positionY);
		badGuy.style.top = positionY;
		directionBadGuy = 'r';
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
