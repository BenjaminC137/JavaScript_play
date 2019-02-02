$(document).ready(function(){
	if("savedHighScore" in localStorage){
		highScore = localStorage.getItem('savedHighScore');
   		console.log('High Score Found: ' + highScore);
		$('#highScore').html(highScore);
	}
	else {
	   console.log('No High Score Found.');
	}
	if("savedBanana" in localStorage){
		texture = localStorage.getItem('savedBanana');
   		console.log('Banana Found: ' + texture);
		$('#slider').attr("class", 'slide ' + texture);
	}
	else {
	   console.log('No Banana Found.');
	}
	if("savedRottenStatus" in localStorage){
		rottenUnlockStatus = localStorage.getItem('savedRottenStatus');
		rottenUnlockStatus = (rottenUnlockStatus == 'true');
		if(rottenUnlockStatus == true){
			$('.rotten').css({'color': 'yellow', 'background-color': 'brown'});
		}
   		console.log('Rotten Status loaded.');
	}
	else {
	   console.log('You have not achieved Rotten Status.');
		console.log(rottenUnlockStatus);
	}
	if("savedMenuStatus" in localStorage){
		panel = localStorage.getItem('savedMenuStatus');
		panel = (panel == 'true');
		Settings('remember');
	}
	if("activeScore" in localStorage){
		score = localStorage.getItem('activeScore');
		score = parseInt(score, 10);
   		console.log('Session Found! Score: ' + score);
		$('#score').html(score);
	}
	else{
		console.log("no activeScore found.")
	}
	if(breakpoint == 'small'){
//		hitBottom = 6.1;
		GoScreen('m');
//		$('#sliderD')[0].style.top = '70vh';
//		$('.wide-button, .wide-button-l').css("top", "20vh");
//		$('.zone-center')[0].style.height = '59vh';
//		$('.data')[0].style.top = '30vh';
//		$('#message')[0].style.height = '17vh';
//		$('#instructions')[0].style.fontSize = '1rem';
//		$("#crossoverBL, #crossoverBR").css('top', '60vh');
//		currentBottom = 50;
//		$('.slideButtonV').css('top', '20vh');
	}
	else{
		GoScreen('d');
//		hitBottom = 7.1;
//		currentBottom = 70;
	}
	ToggleInstructions('c');
	Settings('remember');
});
function GoScreen(screen){
//	console.log('Screen ' + screen);
	if(screen == 'm'){
		$('.sliderD')[0].style.top = '70vh';
		$('.wide-button, .wide-button-l').css("top", "20vh");
		$('.zone-center')[0].style.height = '59vh';
//		$('.data')[0].style.top = '30vh';
		$('#message')[0].style.height = '17vh';
		$('#instructions')[0].style.fontSize = '1rem';
		$("#crossoverBL, #crossoverBR").css('top', '60vh');
		currentBottom = 50;
		$('.slideButtonV').css('top', '20vh');
//		calculatedVH = windowHeight / 100;

//		windowHeight = window.outerHeight;
//		calculatedVH = windowHeight / 100;
		menuTop = '82vh';
	}
	if(screen == 'd'){
		currentBottom = 70;
		$('.sliderD').css("top", "");

		$('.wide-button, .wide-button-l').css("top", "");
		$('.zone-center').css('height', '');
//		$('.data')[0].style.top = '30vh';
//		$('.data').css('top', '');

//		$('#message')[0].style.height = '17vh';
		$('#message').css('height', '');

//		$('#instructions')[0].style.fontSize = '1rem';
		$('#instructions').css('fontSize', '');
		$("#crossoverBL, #crossoverBR").css('top', '');
//		currentBottom = 50;
		$('.slideButtonV').css('top', '');
		menuTop = '100vh';

	}
}
var bananas = [
	{id: 1, color: 'Turquoise', 	size: 10, 	speed: 2, 	right: 'd', down: 'r', left: 'l', up: 'u'},
	{id: 2, color: 'red', 		size: 2, 	speed: 5, 	right: 'r', down: 'u', left: 'l', up: 'd'},
	{id: 3, color: 'orange', 		size: 20, 	speed: 0.5, right: 'l', down: 'r', left: 'd', up: 'u'},
	{id: 4, color: 'red',		 size: 6, 	speed: 4, 	right: 'r', down: 'l', left: 'u', up: 'd'},
	{id: 5, color: 'red', 		size: 22, 	speed: 0.5, right: 'r', down: 'u', left: 'd', up: 'l'},
	{id: 6, color: 'deeppink', 		size: 25, 	speed: 0.5, right: 'd', down: 'u', left: 'l', up: 'r'},
	{id: 7, color: 'navy', 		size: 13, 	speed: 0.5, right: 'u', down: 'd', left: 'r', up: 'l'}
];
var highScore = 0;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
	var calculatedVW = windowWidth / 100;
	var calculatedVH = windowHeight / 100;
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
//var hitBottom;
var currentBottom = 70;
var hitEdgeW = 'n';
var hitEdgeH = 'n';
var panel = true;
var texture;
var availableBadGuys;
var unRottenState = true;
var rottenUnlockStatus = false;
var level = 2;
var randomState = 1;
var instructionsHide = true;
var menuTop = '100vh';
window.onresize = function(event) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	calculatedVW = windowWidth / 100;
	calculatedVH = windowHeight / 100;

	if(breakpoint == 'small'){
		GoScreen('m'); //change screen to mobbile
	}
	else{
		GoScreen('d'); //change screen to desktop
	}
};
document.onkeydown = function(e){
	if(unRottenState == true){
		if(e.key == 'ArrowRight'){
			Slide('r');
		}
		if(e.key == 'ArrowDown'){
			Slide('d');
		}
		if(e.key == 'ArrowLeft'){
			Slide('l');
		}
		if(e.key == 'ArrowUp'){
			Slide('u');
		}
	}
	else{
		if(e.key == 'ArrowRight'){
			Slide('u');
		}
		if(e.key == 'ArrowDown'){
			Slide('r');
		}
		if(e.key == 'ArrowLeft'){
			Slide('d');
		}
		if(e.key == 'ArrowUp'){
			Slide('l');
		}
	}
	if(e.key == ' '){
		Add(nextBanana);
	}
	if(e.key == 'Escape'){
		Settings('c');
		ToggleInstructions('c');
	}
	if(e.key == 'i'){
		ToggleInstructions();
	}
	if(e.key == 'm'){
		Settings();
	}
}
function GetBananaLocation(){
	var slider = document.querySelector('#slider');
	var sliderLeft = window.getComputedStyle(slider).left;
	var sliderTop = window.getComputedStyle(slider).top;
	var positionX = Number(sliderLeft.replace("px", ""));
	var positionY = Number(sliderTop.replace("px", ""));
	return {x: positionX, y: positionY};
}
function Slide(direction){
	if(direction == 'r'){ // --------------------RIGHT
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
		}
		hitEdgeW = 'n';
	}
	if(direction == 'd'){ // --------------------DOWN
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
		}
		hitEdgeH = 'n';
	}
	if(direction == 'l'){ // --------------------LEFT
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
		}
		hitEdgeW = 'n';
	}
	if(direction == 'u'){ // --------------------UP
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
		}
		hitEdgeH = 'n';
	}
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
}
function CountBadGuys(){
	var badGuys = $(".bad-guy");
	availableBadGuys = bananas.length - badGuys.length;
	if(availableBadGuys == bananas.length){
		availableBadGuys = '+';
	}
	$('#addButton').text(availableBadGuys);
}
function Add(number){
	var badGuys = $(".bad-guy");
	CountBadGuys();
	if(badGuys.length >= bananas.length){
		$('#message').prepend("<span class='shadowLight' style='font-size: 1em;'>All bad guys are out!</span><br>");
		return null;
	}
	if(number == bananas.length + 1){
		number = 1;
	}
	for(var i = 1; i <= bananas.length; i++){
		var presence = CheckBadGuy(i);
		if(presence == 'fart'){
			nextBanana = i;
			break;
		}
		else{
			nextBanana = -1;
		}
	}
	if(nextBanana > -1){
		number = nextBanana;
	}
	var currentBanana = bananas.find( banana => banana.id === number);
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
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "bad-guy");
	newDiv.setAttribute("id", "badGuy" + number);
	newDiv.style.backgroundColor = currentColor;
//	newDiv.style.transition =  '200ms';
	newDiv.style.width = currentSize += 'vw';
	var currentDiv = document.getElementById("slider");
	document.body.insertBefore(newDiv, currentDiv);
	var addDiv = document.getElementById("add");
	var newClick = ("Add(" + (number + 1) + ")");
	addDiv.setAttribute("onclick", newClick);
	CountBadGuys();
}
function SlideSquare(id, button){
	randomState ++;
//	console.log(randomState);
	if(randomState > 180){
		const currentBanana = bananas.find( banana => banana.id === 5);
		currentBanana.right = 'u';
		currentBanana.down = 'r';
		currentBanana.left = 'l';
		currentBanana.up = 'd';
		if(randomState > 270){
			randomState = 3;
		}
	}
	else if(randomState > 90){
		const currentBanana = bananas.find( banana => banana.id === 5);
		currentBanana.right = 'l';
		currentBanana.down = 'd';
		currentBanana.left = 'r';
		currentBanana.up = 'u';
		randomState ++;	}
	else{
		const currentBanana = bananas.find( banana => banana.id === 5);
		currentBanana.right = 'r';
		currentBanana.down = 'u';
		currentBanana.left = 'd';
		currentBanana.up = 'l';
	}
	var dir;
	const currentBanana = bananas.find( banana => banana.id === id);
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
	var badGuyId = 'badGuy';
	badGuyId += id;
	if(CheckBadGuy(id) == 'fart'){
		return null;
	}
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
//	console.log(badGuyLeft, badGuyTop);
	var positionX = Number((badGuyLeft).replace("px", ""));
	var positionXWas = Number((badGuyLeft).replace("px", ""));
	var positionY = Number((badGuyTop).replace("px", ""));
	var positionYWas = Number((badGuyTop).replace("px", ""));
	console.log('windowHeight: ' + windowHeight);	console.log('calculatedVH: ' + calculatedVH);
	positionX = (Math.round(positionX / calculatedVW)) + 'vw';
//	console.log(positionX);
	positionY = (Math.round(positionY / calculatedVH)) + 'vh';
	console.log('posY: ' + positionY);
	positionXWas = (Math.round(positionXWas / calculatedVW)) + 'vw';
//	console.log(positionXWas);
	positionYWasIos = Math.round(positionYWas / calculatedVH);
	positionYWas = (Math.round(positionYWas / calculatedVH)) + 'vh';
	console.log('posYWasIos: ' + positionYWasIos);

	console.log('posYWas: ' + positionYWas);

	Move(dir);
	function Move(directionBadGuy){
		var currentBottomVH = currentBottom + 'vh';

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

//		ensure they go to the nearest corner:
		if(['20vw', '70vw'].indexOf(positionX) +1){
//			console.log('position X == 20vw or 70vw');
		}
		else{
			if (Number(positionX.replace("vw", "")) < 50){
				positionX = '20vw';
			}
			else{
				positionX = '70vw';
			}
		}


//		var currentBottomVH = currentBottom + 'vh';
		var middleVh = (((currentBottom + 10) - 20) / 2) + 20;
		if(['20vh', currentBottomVH].indexOf(positionY) +1){
//			console.log('position Y == 20vh or bottom');
		}
		else{
			if (Number(positionY.replace("vh", "")) < middleVh ){
				positionY = '20vh';
			}
			else{
				positionY = currentBottomVH;
			}
		}



//		badGuy.style.left = positionX;
//		badGuy.style.top = positionY;
		if(breakpoint == 'small'){
			if(positionYWasIos > 41.5){
				positionYWas = '50vh';
			}
			else{
				positionYWas = '20vh';
			}

		}
		console.log(positionX, positionXWas, positionY, positionYWas);

//		var iOSpositionY =

		if(positionX == positionXWas && positionY == positionYWas){
			console.log(id + 'no move needed');
			return null;
		}
		else{
			$('#' + badGuyId).animate({left: positionX, top: positionY}, {queue: false, duration: 1000, easing: 'easeOutBack', complete: CheckB});
//			badGuy.addEventListener("transitionend", CheckB, false);
			function CheckB(event) {
			CheckBanana(id);
//			badGuy.removeEventListener("transitionend", CheckB, 				false);
			}
		}
	}
}
function CheckBadGuy(id){
//	console.log('checkedbadguy');
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);

	try{
		var badGuyLeft = window.getComputedStyle(badGuy).left;
		return 'here';
	}
	catch(error){
	return 'fart';
	}
}
function CheckBanana(id){
//	console.log('checkedbanana');
	CountBadGuys();
	const currentBanana = bananas.find(banana => banana.id === id);
	currentId = currentBanana['id'];
	currentColor = currentBanana['color'];
	currentSize = currentBanana['size'];
	var badGuyId = 'badGuy';
	badGuyId += id;
	var badGuy = document.getElementById(badGuyId);
	var badGuyLeft = window.getComputedStyle(badGuy).left;
	var badGuyTop = window.getComputedStyle(badGuy).top;
	var positionX = Number(badGuyLeft.replace("px", ""));
	var positionY = Number(badGuyTop.replace("px", ""));
	var bananaLocation = GetBananaLocation();
	currentSize = (windowWidth / 100) * currentSize;
	currentHeight = (windowHeight / 10);
	if(((bananaLocation.x < positionX + currentSize) && (bananaLocation.x >= positionX - 1)) && ((bananaLocation.y < positionY + (currentHeight - 1)) && (bananaLocation.y > positionY - 1))){
		if(id == 2 || id == 4 || id == 5){
			var pointsLeft = Math.round(score / level);
			var pointsLost = score - pointsLeft;
			score = pointsLeft;
			$('#message').prepend("<div class='bad-guy-mini' style='background-color: " + currentColor + "'>" + "</div> slipped" + "<span class='shadowLight'> -" + pointsLost + "</span><br>");
			difficulty --;
		}
		else{
			var value = Math.round(-(currentBanana['size'] / 2) + maxSize);
//			console.log('value' + value);
			var newPoints = (1*difficulty) * value;
			$('#message').prepend("Peeled <div class='bad-guy-mini' style='background-color: " + currentColor + "'></div><span class='shadow' style='color: yellow'> +" + newPoints + "</span><br>");
			score += newPoints;
			if(score > highScore){
				highScore = score;
				localStorage.setItem('savedHighScore', highScore);
				$('#highScore').html(highScore);
				$('#message').prepend("<span class='shadow' style='color: yellow'>New High Score: </span><span class='shadowLight' style='color: deeppink'>" + highScore + "</span><br>");
			}
		}
		CountBadGuys();
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
		localStorage.setItem('activeScore', score);
		$('#score').html(score);
		if(rottenUnlockStatus == false){
			if(highScore > 100){
				rottenUnlockStatus = true;
				localStorage.setItem('savedRottenStatus', true);
				$('#message').prepend("<br><br><span style='color: mediumseagreen; font-size: 2em;' class='shadowLight'>Unlocked ROTTEN BANANA MODE!</span><br><br>");
				$('.rotten').css({'color': 'yellow', 'background-color': 'brown'});
			}
		}
	}// end of block - if hit bad guy
	CountBadGuys();
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
	newDiv.style.width = currentSize += 'vw';
	positionX += "px";
	positionY += "px";
	newDiv.style.left = positionX;
	newDiv.style.top = positionY;
	// add into the DOM
	var currentDiv = document.getElementById("slider");
	document.body.insertBefore(newDiv, currentDiv);
}
function ClearHighScore(){
	if (confirm("Are you sure you want to clear your high score & current score?")) {
		localStorage.removeItem('savedHighScore');
		localStorage.removeItem('savedRottenStatus');
		highScore = 0;
		$('#highScore').html(highScore);
			$('#message').prepend("<br><br><span style='color: crimson; font-size: 2em;' class='shadow'>Cleared High Score</span><br><br>");
		$('.rotten').removeAttr('style');
		RestartGame('skip');
	}
	else {
		$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>High Score Preserved</span><br><br>");
	}
}
var breakpoint; // for communicating size with JS from CSS
var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};
breakpoint = getBreakpoint();
window.addEventListener('resize', function () {
	breakpoint = getBreakpoint();
	console.log('breakpoint ' + breakpoint);
}, false);
function Restore(){
	if (confirm("Are you sure you want to restore your game to factory settings?")) {
		localStorage.clear();

		score = 0;
		if(unRottenState == false){
			Rotten();
		}
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
		$('#slider').removeAttr('style');
		$('#slider').attr("class", 'slide');
		highScore = 0;
		$('#highScore').html(highScore);
		$('.rotten').removeAttr('style');
		$('#addButton').html('+');
		$('#message').html("<br><br><span style='color: crimson; font-size: 1.5em;' class='shadowLight'>Restored Game</span><br><br>");
		Settings();
	}
	else {
		$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>Game Data Preserved</span><br><br>");
	}
}
function RestartGame(skip){

	function DoIt(){
		score = 0;
		localStorage.removeItem('activeScore');
		if(unRottenState == false){
			Rotten();
		}
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
		$('#message').prepend("<br><br><span class='shadowLight' style='color: crimson; font-size: 2em;'>Restarted</span><br><br>");
		Settings();
	}
	if(skip == 'skip'){
	   DoIt();
	}
	else if (confirm("Are you sure you want to restart?")) {
		DoIt();
	}
	else{
		$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>Restart Canceled</span><br><br>");
	}
}
function ChangeBanana(b){
	texture = b.className.replace('slide-demo ', '');
	localStorage.setItem('savedBanana', texture);
	$('#slider').attr("class", 'slide ' + texture);
	$('.slide-demo').removeAttr('style');
	$('.' + texture).css('border-style', 'solid');
	$('#slider').css('border-style', 'hidden');
	console.log
}
function Settings(e){
	if(e == null){
		if(panel == true){
			$( '#menu' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			panel = false;
			}
		else{
			$( '#menu' ).animate({top: '0vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			panel = true;
		}
//		panel = !panel;

//
//		if(panel == false){
//			$('.options').css({'bottom': menuTop});
//			panel = true;
//		}
//		else{
//			$('.options').css('bottom', '0vh');
//			panel = false;

	}
	if(e == 'remember'){
		if(panel == true){
			$( '#menu' ).animate({top: '0vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			panel = true;
		}
		else{
			$( '#menu' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			panel = false;
		}
		console.log('You have played on this device before.');
	}
	if(e == 'c'){
		$( '#menu' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'})
		panel = false;
	}
	localStorage.setItem('savedMenuStatus', panel);
}
function Rotten(){
	if(highScore < 100){
		rottenUnlockStatus == false;
		$('#message').prepend('Unlock Rotten Banana Mode when you reach 100 points<br>');
		return null;
	}
	else{
		localStorage.setItem('savedRottenStatus', true );
	}
	//	for DESKTOP----------------------------------------------
	if(breakpoint != 'small'){
		if(unRottenState == true){
			$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#8B0000", color: 'yellow'}, 1000 );
			$('#wide-button-r').attr("onclick","Slide('u')");
			$('#wide-button-l').attr("onclick","Slide('d')");
			$( '.slideButtonH' ).switchClass( 'slideButtonH', 'slideButtonV',{duration: 1000, easing: "easeInOutQuad" , queue: true} );
			$( '.slideButtonV' ).switchClass( 'slideButtonV', 'slideButtonH', {duration: 1000, easing: "easeInOutQuad" , queue: true});
			$( '#sliderR' ).switchClass( 'sliderR', 'sliderD', {duration: 1000, easing: "easeInOutQuad" , queue: true});
			$( '#sliderL' ).switchClass( 'sliderL', 'sliderU', {duration: 1000, easing: "easeInOutQuad" , queue: true});
			$( '#sliderU' ).switchClass( 'sliderU', 'sliderR', {duration: 1000, easing: "easeInOutQuad" , queue: true});
			$( '#sliderD' ).switchClass( 'sliderD', 'sliderL', {duration: 1000, easing: "easeInOutQuad", complete: RottenMessage, queue: true});
		}
		else{
			$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#98FB98", color: 'black'}, 300 );
			$( '#sliderR' ).switchClass( 'sliderD', 'sliderR', {duration: 500, easing: "easeInOutQuad" , queue: true});
			$( '#sliderL' ).switchClass( 'sliderU', 'sliderL', {duration: 500, easing: "easeInOutQuad" , queue: true});
			$( '#sliderU' ).switchClass( 'sliderR', 'sliderU', {duration: 500, easing: "easeInOutQuad" , queue: true});
			$( '.slideButtonH' ).switchClass( 'slideButtonH', 'slideButtonV',{duration: 500, easing: "easeInOutQuad" , queue: true} );
			$( '.slideButtonV' ).switchClass( 'slideButtonV', 'slideButtonH', {duration: 500, easing: "easeInOutQuad" , queue: true});



//			$( '#sliderD' ).switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true});

			$( '#sliderD' )
				.switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true})
				.queue(function() {
      				GoScreen('d');
					console.log('queueue-desktop');
					$( this ).dequeue();
    			});


			$('#wide-button-r').attr("onclick","Slide('r')");
			$('#wide-button-l').attr("onclick","Slide('l')");

//			GoScreen('d'); //I need to get this to be fired off after the unrotten Message.

		}
	}
//	for MOBILE----------------------------------------------
else{



	if(unRottenState == true){
		$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#8B0000", color: 'yellow'}, 1000 );

		$('#wide-button-r').attr("onclick","Slide('u')");
		$('#wide-button-l').attr("onclick","Slide('d')");


		$( '#sliderD' ).switchClass( 'sliderD', 'sliderL', {duration: 500, easing: "easeInOutQuad", complete: RottenMessage, queue: true});

		$( '.slideButtonH').switchClass( 'slideButtonH', 'slideButtonV',{duration: 1000, easing: "easeInOutQuad" , queue: true} ).animate({top: '20vh'}, 500);
		$( '.slideButtonV' ).switchClass( 'slideButtonV', 'slideButtonH', {duration: 1000, easing: "easeInOutQuad" , queue: true});
		$( '#sliderR' ).switchClass( 'sliderR', 'sliderD', {duration: 1000, easing: "easeInOutQuad" , queue: true}).animate({top: '70vh'}, 500);

		$( '#sliderL' ).switchClass( 'sliderL', 'sliderU', {duration: 1000, easing: "easeInOutQuad" , queue: true}).animate({top: '0vh'}, 500);
		$( '#sliderU' ).switchClass( 'sliderU', 'sliderR', {duration: 1000, easing: "easeInOutQuad" , queue: true});

	}
	else{ // mobile - leaving rotten mode
		$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#98FB98", color: 'black'}, 300 );

		$( '#sliderR' ).switchClass( 'sliderD', 'sliderR', {duration: 500, easing: "easeInOutQuad" , queue: true}).animate({top: '20vh'}, 500);
		$( '#sliderL' ).switchClass( 'sliderU', 'sliderL', {duration: 500, easing: "easeInOutQuad" , queue: true}).animate({top: '20vh'}, 500);
		$( '#sliderU' ).switchClass( 'sliderR', 'sliderU', {duration: 500, easing: "easeInOutQuad" , queue: true}).animate({top: '0vh'},{duration: 500, complete: function(){$('#sliderU').css('top', '')}});

		$( '.slideButtonH' ).switchClass( 'slideButtonH', 'slideButtonV',{duration: 500, easing: "easeInOutQuad" , queue: true} );
		$( '.slideButtonV' ).switchClass( 'slideButtonV', 'slideButtonH', {duration: 500, easing: "easeInOutQuad" , queue: true});

//		$( '#sliderD' ).switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true}).animate({top: '70vh'}, 500);
		$( '#sliderD' )
			.switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true})
			.animate({top: '70vh'}, 500)
			.queue(function() {
      			GoScreen('m');
				console.log('queueue-mobile');
				$( this ).dequeue();
    		});



		$('#wide-button-r').attr("onclick","Slide('r')");
		$('#wide-button-l').attr("onclick","Slide('l')");



//		GoScreen('m'); //I need to get this to be fired off after the unrotten Message.

}//	END of - for mobile-------------------------------------

	}
	if(unRottenState == true){
		difficulty += 10;
		level ++;
		console.log(level);
	}
	else{
		difficulty -= 10;
		level --;
		console.log(level);
	}
	unRottenState = !unRottenState;
	$('#difficulty').text(difficulty);
}
function RottenMessage(){
	$('#message').prepend("<span class='shadow' style='color: yellow'>ROTTEN BANANA MODE ACTIVATED</span><br>");
}
function UnRottenMessage(){
	$('#message').prepend("<span class='shadow' style='color: yellow'>ROTTEN BANANA MODE DEACTIVATED</span><br>");
}
function ToggleInstructions(k){
	console.log(k);
	if(k == 'c'){
		console.log('c');
//		$( '.instructions-container' ).hide();
			$( '.instructions-container' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
		instructionsHide = true;
	}
	if(k == null){
		if(instructionsHide == true){
		console.log('f');
//			$( '.instructions-container' ).show();
			$( '.instructions-container' ).animate({top: '0vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			}
		else{
//			$( '.instructions-container' ).hide();
			$( '.instructions-container' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
		}
		instructionsHide = !instructionsHide;
	}
}
