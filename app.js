//var slideButton = document.getElementById('slider');
//var slideLeft = window.getComputedStyle(slideButton).left;
var slideState = true;
function Slide(){
//	slideButton.style.left = "20px";
slideState = !slideState;
	if(slideState == false){
		$('input')[0].style.left = '25px';
		$('input')[0].value = 'go right';

	}
	else{
		$('input')[0].style.left = '550px';
		$('input')[0].value = 'go left';

	}
}
