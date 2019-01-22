//document.ready = function(event){
//	$('#scrollDiv').scrollIntoView();
//};

$(document).ready(function(){
//	$('#scrollDiv')[0].scrollIntoView(); //works but doesn't register as scrolling down on iOS
//	console.log('ready');
	if("savedHighScore" in localStorage){
		highScore = localStorage.getItem('savedHighScore');
   		console.log('High Score Found! It is: ' + highScore);
		$('#highScore').html(highScore);
	}
	else {
	   console.log('No High Score Found.');
	}

	if(breakpoint == 'small'){
		iOSBottomBarVh = 20;
		iOSBottomBarPx = 40;
		hitBottom = 6.1;
		$('#sliderD')[0].style.top = '70vh';
		$('.zone-center')[0].style.height = '59vh';
		$('.data')[0].style.top = '30vh';
		$('#message')[0].style.height = '20vh';
//			(90 - iOSBottomBarVh) + 'vh';
		currentBottom = 50;

	}
	else{
		iOSBottomBarVh = 0;
		iOSBottomBarPx = 0;
		hitBottom = 7.1;
		currentBottom = 70;
	}
	console.log(window.innerHeight);
	$('#message').prepend(window.innerHeight + '<br>');
	$('#message').prepend('distanceH ' + distanceH + '<br>');
//	try{
//		highScore = localStorage.getItem('highScore');
//		console.log('try');
//	}
//	catch(error){
//		console.log('No high score. error: ' + error);
//	}
});
const bananas = [
	{id: 1, color: 'Turquoise', size: 12, speed: 2},
	{id: 2, color: 'pink', size: 2, speed: 5},
	{id: 3, color: 'orange', size: 15, speed: 0.5},
	{id: 4, color: 'white', size: 3, speed: 4},
	{id: 5, color: 'beige', size: 20, speed: 0.5},
	{id: 6, color: 'crimson', size: 25, speed: 0.5}
];
var highScore = 0;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var	distanceW = windowWidth / 10;
var	distanceH = windowHeight / 10;
var heightStep = 20;
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
var nextBanana = -1;
var maxSize = 1;
var iOSBottomBarVh = 0;
var iOSBottomBarPx = 0;
var hitBottom;
var currentBottom = 70;
//window.onscroll = function SC(e){
//	var status = CheckScroll();
////		console.log(status);
//	if(status == 'done'){
////		window.removeEventListener('scroll', SC);
//////		console.log('done done');
////		var body = $('body')[0];
//////		console.log(body);
////		body.addEventListener("scroll", function(event){
////			console.log('eventfired');
////			event.preventDefault();
////		}, false);
//	}
//};
//document.querySelector("body").addEventListener("scroll", function(event) {
//console.log('newfire');
//         event.preventDefault();
//}, false);

//function CheckScroll() {
//  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
////	window.removeEventListener('scroll', SC);
////		console.log('done done');
//	var body = $('body')[0];
////		console.log(body);
////	body.addEventListener("scroll", function(event){
////		console.log('eventfired');
////		event.preventDefault();
////	}, false);
//	  setTimeout(function(){
//		  $('#scrollMessage').text(' ');
//		  $('#scrollMessage').removeAttr("id");
//		  $('#scrollDiv').addClass("zScroll");
//	  }, 800);
//	  return 'done';
//  }
//	else{
//		return 'not ready';
//	}
//}
window.onresize = function(event) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	distanceW = windowWidth / 10;
	distanceH = windowHeight / 10;
//	if(breakpoint == 'small'){
//
//	}
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
	var slider = document.querySelector('#slider');
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
	var sliderWidth = window.getComputedStyle(slider).width;
	var positionX = Number(sliderLeft.replace("px", ""));
//	var positionY = Number(sliderTop.replace("px", ""));

	console.log(heightStep);

	if(positionX < (distanceW *2) - 5){ // if hit left
		positionX = '20vw';
		slider.style.left = positionX;
	}
	if(positionX > distanceW * 7.1){ // if hit right
		positionX = '70vw';
		slider.style.left = positionX;
	}
//	if(positionY < (distanceH * 2) - 5){ // if hit top
//		positionY = '20vh';
//		slider.style.top = positionY;
//	}
//	if(heightStep < 21){ // if hit top
////		console.log('yup');
//		positionY = '30vh';
//		heightStep = 30;
//		console.log(positionY);
//		$('#slider').style.top = positionY;
//	}

//	if(positionY > window.innerHeight - (distanceH * 2)){ // if hit bottom
//	if(positionY > distanceH * hitBottom){ // if hit bottom
////		positionY = '70vh';
//		positionY = (70 - iOSBottomBarVh) + 'vh';
//		console.log(positionY);
//		slider.style.top = positionY;
////		positionY = '20vh';
////		slider.style.bottom = positionY;
//	}
//	if(heightStep > 50){ // if hit bottom
//		positionY = '70vh';
//		console.log(positionY);
//		slider.style.top = positionY;
//		console.log(slider);
////		positionY = '20vh';
////		slider.style.bottom = positionY;
//	}
//console.log(positionY);

	if(direction == 'r'){
		positionX = positionX + distanceW;
//		console.log(windowWidth);
		positionX += "px";
		slider.style.left = positionX;

		SlideSquare(1, 1, 'd')
		SlideSquare(2, 1, 'r');
		SlideSquare(3, 1, 'l');
		SlideSquare(4, 1, 'r');

		SlideSquare(5, 1, 'r');
		SlideSquare(6, 1, 'd');

	}
	if(direction == 'd'){
//		positionY = positionY + distanceH;
//		positionY += "px";
		heightStep += 10;
		positionY = heightStep + 'vh';
//		positionY = (heightStep + 10) + 'vh';
//		heightStep += 10;
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
//		positionY = positionY - distanceH;
//		positionY += "px";
		heightStep -= 10;
		positionY = heightStep + 'vh';
		slider.style.top = positionY;

		SlideSquare(1, 1, 'u');
		SlideSquare(2, 1, 'd');
		SlideSquare(3, 1, 'u');
		SlideSquare(4, 1, 'd');

		SlideSquare(5, 1, 'l');
		SlideSquare(6, 1, 'r');
	}
	$('#message').prepend(positionY + '<br>');

	if(heightStep > currentBottom){ // if hit bottom
		positionY = (currentBottom - 10) + 'vh';
		heightStep = currentBottom - 10;
		console.log(positionY);
		$('#slider').style.top = positionY;
//		console.log(slider);
//		positionY = '20vh';
//		slider.style.bottom = positionY;
	}
		if(heightStep < 20){ // if hit top
//		console.log('yup');
		positionY = '30vh';
		heightStep = 30;
		console.log(positionY);
		$('#slider').style.top = positionY;
	}
}
function Add(number){
	var badGuys = $(".bad-guy");
	if(badGuys.length >= bananas.length){
		$('#message').prepend('All bad guys are here!<br>');
		return null;
	}

	if(number == bananas.length + 1){
		number = 1;
	}
	for(var i = 1; i < bananas.length; i++){
//		console.log(i);
		var presence = CheckBadGuy(i);
		if(presence == 'fart'){
			nextBanana = i;
			break;
		}
		else{
			nextBanana = -1;
		}
//		console.log(nextBanana);
	}

	if(nextBanana > -1){
		number = nextBanana;
	}

	const currentBanana = bananas.find( banana => banana.id === number);
	currentId = currentBanana['id'];
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	currentSpeed = currentBanana['speed'];
	if(currentSize > maxSize){
		maxSize = currentSize;
//		console.log(maxSize);
	}
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
//	newDiv.setAttribute("class", "bad-guy");
//	addClassBG(number);
//	console.log(number);
}
//function addClassBG(id){
//	var badGuyId = 'badGuy';
//	badGuyId += id;
//	var badGuy = document.getElementById(badGuyId);
//	badGuy.setAttribute("class", "bad-guy");
//}
function SlideSquare(id, speed, directionBadGuy){
	var badGuyId = 'badGuy';
	badGuyId += id;
	if(CheckBadGuy(id) == 'fart'){
		return null;
	}
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

		badGuy.addEventListener("transitionend", CheckB, false);
//		badGuy.removeEventListener("transitionend", CheckB, false);
		function CheckB(event) {
			CheckBanana(id);
			badGuy.removeEventListener("transitionend", CheckB, false);
		}
	}
}
function CheckBadGuy(id){
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);

	try{
		var badGuyLeft = window.getComputedStyle(badGuy).left;
//		console.log('here');
		return 'here';
	}
	catch(error){
//		console.log('error');
	return 'fart';
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
//	console.log(badGuyId);
	currentSize = (windowWidth / 100) * currentSize;
	currentHeight = (windowHeight / 10);
	if(((bananaLocation.x < positionX + currentSize) && (bananaLocation.x > positionX - 50)) && ((bananaLocation.y < positionY + currentHeight) && (bananaLocation.y > positionY - 1))){
		if(id == 2 || id == 4 || id == 5){
			var pointsLost = Math.round(score / 2);
			score = pointsLost;
			$('#message').prepend("<span style='color: " + currentColor + "' class='shadow'>" + currentColor + "</span> slipped on you" + " - " + pointsLost + "<br>");
			difficulty --;
		}
		else{
			var value = -(currentBanana['size'] / 2) + maxSize;
			var newPoints = (1*difficulty) * value;
			$('#message').prepend("Peeled <span style='color: " + currentColor + "' class='shadow'>" + currentColor + "</span>" + " + " + newPoints + "<br>");
			score += newPoints;
//			console.log(badGuyId + ' value: ' + value + "score: " + newPoints);
			if(score > highScore){
				highScore = score;
				localStorage.setItem('savedHighScore', highScore);
				$('#highScore').html(highScore);
				$('#message').prepend("<span class='shadow' style='color: yellow'>New High Score</span><br>");
			}
		}
		Clone(id);
//		setTimeout(function(){
//			badGuy.remove();
//		}, 800);
//		var old_element = badGuy;
//		var new_element = old_element.cloneNode(true);
//		old_element.parentNode.replaceChild(new_element, old_element);
		var badGuyCloneId = 'badGuyClone';
		badGuyCloneId += id;
		var badGuyClone = document.getElementById(badGuyCloneId);
		setTimeout(function(){
		badGuyClone.remove();
		}, 400);
		setTimeout (function(){
		badGuyClone.style.top = ('0vh');
		badGuyClone.style.left = ('90vw');
		}, 100);
		$('#difficulty').html(difficulty);
		$('#score').html(score);
	}
}
function Clone(id){
	//get current badguy
	const currentBanana = bananas.find( banana => banana.id === id);
	currentId = id;
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	currentSpeed = currentBanana['speed'];
	var badGuyId = 'badGuy';
	badGuyId += id;

	//get badguy location
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft.replace("px", ""));
	var positionY = Number(badGuyTop.replace("px", ""));

	//remove current badguy to remove event listners
	badGuy.remove();

// create clone
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "bad-guy-clone");
	newDiv.setAttribute("id", "badGuyClone" + id);
	newDiv.style.backgroundColor = currentColor;
//	newDiv.style.transition =  '200ms';
	newDiv.style.width = currentSize += 'vw';
	positionX += "px";
	positionY += "px";
	newDiv.style.left = positionX;
	newDiv.style.top = positionY;

	// add the newly created element and its content into the DOM
	var currentDiv = document.getElementById("slider");
	document.body.insertBefore(newDiv, currentDiv);
	console.log(newDiv);
}
function ClearHighScore(){
	if (confirm("Are you sure you want to clear your high score?")) {
		localStorage.removeItem('savedHighScore');
		highScore = 0;
		$('#highScore').html(highScore);
	}
	else {
		console.log('canceled score clearing');
	}
}



// Setup the breakpoint variable
var breakpoint;

// Get the current breakpoint
var getBreakpoint = function () {
	console.log('got here');
	return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};

// Calculate breakpoint on page load
breakpoint = getBreakpoint();
console.log('breakpoint' + breakpoint);

// Recalculate breakpoint on resize
window.addEventListener('resize', function () {
	breakpoint = getBreakpoint();
	console.log('breakpoint' + breakpoint);
}, false);
