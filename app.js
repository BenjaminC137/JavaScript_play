function Banana(color, size, speed){
	this.color = color;
	this.size = size;
	this.speed = speed;
}
var banana1 = new Banana('black', '250px', '2');
var banana2 = new Banana('grey', '150px', '5');

var	pexelsAPI;

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
//	$('body')[0].innerHTML.prepend = ("<div id="slider" class="slide" onclick="Slide();"></div>")


  // create a new div element
  var newDiv = document.createElement("div");
//  // and give it some content
//  var newClass = document.createAttribute("class");
//	newClass.value = "slide";
  // add the text node to the newly created div
  newDiv.setAttribute("class", "bad-guy");

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("slider");
  document.body.insertBefore(newDiv, currentDiv);

	var addDiv = document.getElementById("add");
	var newClick = ("Add(" + (number + 1) + ")");
	addDiv.setAttribute("onclick", newClick);

//	var currentBanana = 'banana' += number;
//	var currentColor = currentBanana.color;
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
