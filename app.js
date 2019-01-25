$(document).ready(function(){
	if("savedHighScore" in localStorage){
		highScore = localStorage.getItem('savedHighScore');
   		console.log('High Score Found! It is: ' + highScore);
		$('#highScore').html(highScore);
	}
	else {
	   console.log('No High Score Found.');
	}
	if("savedBanana" in localStorage){
		texture = localStorage.getItem('savedBanana');
   		console.log('Banana Found! It is: ' + texture);
		$('#slider').attr("class", 'slide' + texture);
	}
	else {
	   console.log('No High Score Found.');
	}
	if(breakpoint == 'small'){
		hitBottom = 6.1;
		$('#sliderD')[0].style.top = '70vh';
		$('.wide-button, .wide-button-l').css("top", "20vh");
		$('.zone-center')[0].style.height = '59vh';
		$('.data')[0].style.top = '30vh';
		$('#message')[0].style.height = '17vh';
		$('#instructions')[0].style.fontSize = '1rem';
		$("#crossoverBL, #crossoverBR").css('top', '60vh');
		currentBottom = 50;
		$('.slideButtonV').css('top', '20vh');
	}
	else{
		hitBottom = 7.1;
		currentBottom = 70;
	}
});
const bananas = [
	{id: 1, color: 'Turquoise', 	size: 10, 	speed: 2, 	right: 'd', down: 'r', left: 'l', up: 'u'},
	{id: 2, color: 'deeppink', 		size: 2, 	speed: 5, 	right: 'r', down: 'u', left: 'l', up: 'd'},
	{id: 3, color: 'orange', 		size: 20, 	speed: 0.5, right: 'l', down: 'r', left: 'd', up: 'u'},
	{id: 4, color: 'rebeccapurple', size: 6, 	speed: 4, 	right: 'r', down: 'l', left: 'u', up: 'd'},
	{id: 5, color: 'beige', 		size: 15, 	speed: 0.5, right: 'r', down: 'u', left: 'd', up: 'l'},
	{id: 6, color: 'crimson', 		size: 25, 	speed: 0.5, right: 'd', down: 'u', left: 'l', up: 'r'}
];
var highScore = 0;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//var	distanceW = windowWidth / 10;
//var	distanceH = windowHeight / 10;
var heightStep = 20;
var widthStep = 70;
var score = 0;
var banana;
var currentColor;
var currentSize;
var currentSpeed;
var currentId;
var directionBadGuy = 'r';
var done;
var difficulty = 1;
var nextBanana = -1;
var maxSize = 1;
var hitBottom;
var currentBottom = 70;
var hitEdgeW = 'n';
var hitEdgeH = 'n';
var panel = 'open';
var texture;
window.onresize = function(event) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
//	distanceW = windowWidth / 10;
//	distanceH = windowHeight / 10;
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
	if(direction == 'r'){
		if(hitEdgeW == 'r'){
			widthStep = 70;
		}
		else if(hitEdgeH == 't' && widthStep > 60){
			heightStep = 20;
			widthStep = 80;
			hitEdgeH = 'n';
		}
		else if(hitEdgeH == 'b' && widthStep > 60){
			heightStep = currentBottom;
			widthStep = 80;
			hitEdgeH = 'n';
		}
		else{
			widthStep += 10;
		}
		for(var i = 1; i <= bananas.length; i++){
			SlideSquare(i, 'right');
//			console.log( 'SS ' + i);
		}
//		SlideSquare(1, 1, 'd')
//		SlideSquare(2, 1, 'r');
//		SlideSquare(3, 1, 'l');
//		SlideSquare(4, 1, 'r');
//		SlideSquare(5, 1, 'r');
//		SlideSquare(6, 1, 'd');
		hitEdgeW = 'n';
	}
	if(direction == 'd'){
		if(hitEdgeH == 'b'){
			heightStep = currentBottom;
		}
		else if(hitEdgeW == 'r' && heightStep > currentBottom - 10){
			widthStep = 70;
			heightStep = currentBottom + 10;
			hitEdgeH = 'b';
			hitEdgeW = 'n';
		}
		else if(hitEdgeW == 'l' && heightStep > currentBottom - 10){
			widthStep = 20;
			heightStep = currentBottom + 10;
			hitEdgeH = 't';
			hitEdgeW = 'n';
		}
		else{
			heightStep += 10;
		}
		for(var i = 1; i <= bananas.length; i++){
			SlideSquare(i, 'down');
//			console.log( 'SS ' + i);
		}
//		SlideSquare(1, 1, 'r');
//		SlideSquare(2, 1, 'u');
//		SlideSquare(3, 1, 'r');
//		SlideSquare(4, 1, 'l');
//		SlideSquare(5, 1, 'u');
//		SlideSquare(6, 1, 'u');
		hitEdgeH = 'n';
	}
	if(direction == 'l'){
		if(hitEdgeW == 'l'){
			widthStep = 20;
		}
		else if(hitEdgeH == 't' && widthStep < 30){
			heightStep = 20;
			widthStep = 10;
			hitEdgeW = 'l';
			hitEdgeH = 'n';
		}
		else if(hitEdgeH == 'b' && widthStep < 30){
			heightStep = currentBottom;
			widthStep = 10;
			hitEdgeW = 'l';
			hitEdgeH = 'n';
		}
		else{
			widthStep -= 10;
		}
		for(var i = 1; i <= bananas.length; i++){
			SlideSquare(i, 'left');
//			console.log( 'SS ' + i);
		}
//		SlideSquare(1, 1, 'l');
//		SlideSquare(2, 1, 'l');
//		SlideSquare(3, 1, 'd');
//		SlideSquare(4, 1, 'u');
//		SlideSquare(5, 1, 'd');
//		SlideSquare(6, 1, 'l');
		hitEdgeW = 'n';
	}
	if(direction == 'u'){
		if(hitEdgeH == 't'){
			heightStep = 20;
		}
		else if(hitEdgeW == 'r' && heightStep < 30){
			widthStep = 70;
			heightStep = 10;
			hitEdgeH = 't';
			hitEdgeW = 'n';
		}
		else if(hitEdgeW == 'l' && heightStep < 30){
			widthStep = 20;
			heightStep = 10;
			hitEdgeH = 't';
			hitEdgeW = 'n';
		}
		else{
			heightStep -= 10;
		}
		for(var i = 1; i <= bananas.length; i++){
			SlideSquare(i, 'up');
//			console.log( 'SS ' + i);
		}
//		SlideSquare(1, 1, 'u');
//		SlideSquare(2, 1, 'd');
//		SlideSquare(3, 1, 'u');
//		SlideSquare(4, 1, 'd');
//		SlideSquare(5, 1, 'l');
//		SlideSquare(6, 1, 'r');
		hitEdgeH = 'n';
	}
//	positionX = widthStep +'vw';
//	positionY = heightStep + 'vh';
	$('#slider')[0].style.left =  widthStep +'vw';
	$('#slider')[0].style.top = heightStep + 'vh';

	if(widthStep < 20){ // if hit left
		hitEdgeW = 'l';
	}
	if(widthStep > 70){ // if hit right
		hitEdgeW = 'r';
	}
	if(heightStep > currentBottom){ // if hit bottom
		hitEdgeH = 'b';
	}
	if(heightStep < 20){ // if hit top
		hitEdgeH = 't';
	}
	console.log(hitEdgeW, hitEdgeH);
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
	for(var i = 1; i <= bananas.length; i++){
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
function SlideSquare(id, button){
	var dir;
	const currentBanana = bananas.find( banana => banana.id === id);
//	currentId = currentBanana['id'];
//	currentColor = currentBanana['color'];
//	currentSize = currentBanana['size'];
//	currentSpeed = currentBanana['speed'];
	if(button == 'right'){
		dir = currentBanana.right;
	}
	if(button == 'down'){
		dir = currentBanana.down;
	}
	if(button == 'left'){
		dir = currentBanana.left;
	}
	if(button == 'up'){
		dir = currentBanana.up;
	}
//	dir = currentBanana[button];
//	console.log(currentBanana.button);
	console.log(dir);
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
	Move(dir);
	function Move(directionBadGuy){
		if(directionBadGuy == 'r'){
			positionX = '70vw';
		}
		if(directionBadGuy == 'd'){
			positionY = currentBottom + 'vh';
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
//	currentSpeed = currentBanana['speed'];
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);
	console.log(badGuy);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft.replace("px", ""));
	var positionY = Number(badGuyTop.replace("px", ""));
	var bananaLocation = GetBananaLocation();
	currentSize = (windowWidth / 100) * currentSize;
	currentHeight = (windowHeight / 10);
	if(((bananaLocation.x < positionX + currentSize) && (bananaLocation.x >= positionX - 1)) && ((bananaLocation.y < positionY + currentHeight) && (bananaLocation.y > positionY - 1))){
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
			if(score > highScore){
				highScore = score;
				localStorage.setItem('savedHighScore', highScore);
				$('#highScore').html(highScore);
				$('#message').prepend("<span class='shadow' style='color: yellow'>New High Score: </span><span class='shadow' style='color: deeppink'>" + highScore + "</span><br>");
			}
		}
		Clone(id);
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
}
function ClearHighScore(){
	if (confirm("Are you sure you want to clear your high score?")) {
		localStorage.removeItem('savedHighScore');
		highScore = 0;
		$('#highScore').html(highScore);
			$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>Cleared High Score</span><br><br>");
	}
	else {
		$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>High Score Preserved</span><br><br>");
	}
}
var breakpoint; // for communicating size with JS
var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};
breakpoint = getBreakpoint();
window.addEventListener('resize', function () {
	breakpoint = getBreakpoint();
	console.log('breakpoint' + breakpoint);
}, false);
function RestartGame(){
	score = 0;
	$('#score').html(score);
	difficulty = 1;
	$('#difficulty').html(difficulty);
	for(var i = 1; i <= bananas.length; i++){
		var presence = CheckBadGuy(i);
		if(presence == 'here'){
			var badGuyId = 'badGuy' + i;
			var badGuy = document.getElementById(badGuyId);
			badGuy.remove();
		}
		nextBanana = 1;
	}
	$('#message').prepend("<br><br><span style='color: brown; font-size: 2em;'>Restarted</span><br><br>");
//	clear divs of bad guys
}
function ChangeBanana(b){
	texture = b.className.replace('slide-demo', '');
	localStorage.setItem('savedBanana', texture);
	$('#slider').attr("class", 'slide' + texture);
}
function Settings(){
	if(panel == 'closed'){
		$('.options').css('bottom', '55vh');
		panel = 'open';
	}
	else{
		$('.options').css('bottom', '1.1em');
		panel = 'closed';
	}
}
