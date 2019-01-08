//var slideButton = document.getElementById('slider');
//var slideLeft = window.getComputedStyle(slideButton).left;
var	pexelsAPI;

var slideState = true;
function Slide(direction){
slideState = !slideState;
	var positionX = $('#slider')[0].
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
