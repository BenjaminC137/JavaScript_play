//var slideButton = document.getElementById('slider');
//var slideLeft = window.getComputedStyle(slideButton).left;
var	pexelsAPI;
function Slide(direction){

//	console.log(direction);
	var slider = document.querySelector('#slider');
//	console.log(slider);
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
//	console.log(sliderLeft);
	positionX = Number(sliderLeft.replace("px", ""));
	console.log(positionX);
	positionY = Number(sliderTop.replace("px", ""));

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
