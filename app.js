$(document).ready(function(){
	if("savedHighScore" in localStorage){
		highScore = localStorage.getItem('savedHighScore');
		$('#highScore').html(highScore);
		welcomeMessage += ('High Score Found: ' + highScore + ' ');
	}
	else {
		welcomeMessage += ('No High Score Found. ');
	}
	if("savedBanana" in localStorage){
		texture = localStorage.getItem('savedBanana');
		$('#slider').attr("class", 'slide ' + texture);
		welcomeMessage += ('Banana Found: ' + texture + ' ');
	}
	else {
		welcomeMessage += ('No Banana Found. ');
	}
	if("savedRottenStatus" in localStorage){
		rottenUnlockStatus = localStorage.getItem('savedRottenStatus');
		rottenUnlockStatus = (rottenUnlockStatus == 'true');
		if(rottenUnlockStatus == true){
			$('.rotten').css({'color': 'yellow', 'background-color': 'brown'});
		}
		welcomeMessage += ('Rotten Status loaded. ');
	}
	else {
		welcomeMessage += ('You have not achieved Rotten Status yet. ')
	}
	if("savedMenuStatus" in localStorage){
		panel = localStorage.getItem('savedMenuStatus');
		panel = (panel == 'true');
	}
	if("activeScore" in localStorage){
		score = localStorage.getItem('activeScore');
		score = parseInt(score, 10);
		welcomeMessage += ('Session Found! Score: ' + score + ' ');
		$('#score').html(score);
	}
	else{
		welcomeMessage += ('No activeScore found. ');
	}
	if(breakpoint == 'small'){
		GoScreen('m');
	}
	else{
		GoScreen('d');
	}
	if("instructions" in localStorage){
		completedInstructions = localStorage.getItem('instructions');
		completedInstructions = (completedInstructions == 'true');
		if(completedInstructions == true){
			$('.close').show();
		}
	}
	else{
		$('.close').hide();
		completedInstructions == false;
	}
	ToggleInstructions('c');
	Settings('remember');
	console.log(welcomeMessage);
});
function GoScreen(screen){
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
var directionBadGuy = 'r';
var done;
var difficulty = 1;
var nextBanana = -1;
var maxSize = 1;
var currentBottom = 70;
var hitEdgeW = 'n';
var hitEdgeH = 'n';
var panel = true;
var texture = 'texture-shippo';
var availableBadGuys;
var unRottenState = true;
var rottenUnlockStatus = false;
var level = 2;
var randomState = 1;
var instructionsHide = true;
var menuTop = '100vh';
var welcomeMessage = 'Welcome: ';
var rottenButtonStatus = false;
var rottenButtonInterval = false;
var completedInstructions = false;
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
			YayMoveButtons('sliderR');
		}
		if(e.key == 'ArrowDown'){
			Slide('d');
			YayMoveButtons('sliderD');
		}
		if(e.key == 'ArrowLeft'){
			Slide('l');
			YayMoveButtons('sliderL');
		}
		if(e.key == 'ArrowUp'){
			Slide('u');
			YayMoveButtons('sliderU');
		}
	}
	else{
		if(e.key == 'ArrowRight'){
			Slide('u');
			YayMoveButtons('sliderU');
		}
		if(e.key == 'ArrowDown'){
			Slide('r');
			YayMoveButtons('sliderR');
		}
		if(e.key == 'ArrowLeft'){
			Slide('d');
			YayMoveButtons('sliderD');
		}
		if(e.key == 'ArrowUp'){
			Slide('l');
			YayMoveButtons('sliderL');
		}
	}
	if(e.key == ' '){
		Add(nextBanana);
		Yay('add')
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
	if(direction == 'restart'){
		hitEdgeH = 'n';
		hitEdgeW = 'n';
		heightStep = 20;
		widthStep = 70;
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
//	rottenButtonInterval = setInterval(RottenBanana, 2000);
	var badGuys = $(".bad-guy");
	CountBadGuys();
	if(badGuys.length >= bananas.length){
		$('#message').prepend("<span class='shadowLight'>All bad guys are out!</span><br>");
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
//	currentId = number;
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
	newDiv.style.width = currentSize += 'vw';
	var currentDiv = document.getElementById("slider");
	document.body.insertBefore(newDiv, currentDiv);
	var addDiv = document.getElementById("add");
	var newClick = ("Add(" + (number + 1) + "); Yay(this.id);");
	addDiv.setAttribute("onclick", newClick);
	CountBadGuys();
}
function SlideSquare(id, button){
	randomState ++;
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
	var positionX = Number((badGuyLeft).replace("px", ""));
	var positionXWas = Number((badGuyLeft).replace("px", ""));
	var positionY = Number((badGuyTop).replace("px", ""));
	var positionYWas = Number((badGuyTop).replace("px", ""));
	positionX = (Math.round(positionX / calculatedVW)) + 'vw';
	positionY = (Math.round(positionY / calculatedVH)) + 'vh';
	positionXWas = (Math.round(positionXWas / calculatedVW)) + 'vw';
	positionYWasIos = Math.round(positionYWas / calculatedVH);
	positionYWas = (Math.round(positionYWas / calculatedVH)) + 'vh';
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
		}
		else{
			if (Number(positionX.replace("vw", "")) < 50){
				positionX = '20vw';
			}
			else{
				positionX = '70vw';
			}
		}
		var middleVh = (((currentBottom + 10) - 20) / 2) + 20;
		if(['20vh', currentBottomVH].indexOf(positionY) +1){
		}
		else{
			if (Number(positionY.replace("vh", "")) < middleVh ){
				positionY = '20vh';
			}
			else{
				positionY = currentBottomVH;
			}
		}
		if(breakpoint == 'small'){
			if(positionYWasIos > 41.5){
				positionYWas = '50vh';
			}
			else{
				positionYWas = '20vh';
			}
		}
		if(positionX == positionXWas && positionY == positionYWas){
			return null;
		}
		else{
			$('#' + badGuyId).animate({left: positionX, top: positionY}, {queue: false, duration: 1000, easing: 'easeOutBack', complete: CheckB});
			function CheckB(event) {
			CheckBanana(id);
			}
		}
	}
}
function CheckBadGuy(id){
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
	CountBadGuys();
	var badGuyExistance = CheckBadGuy(id);
	if(badGuyExistance == 'fart'){
		return null;
	}
	var currentBanana = bananas.find(banana => banana.id === id);
//	currentId = id;
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
			$('#message').prepend("<div class='bad-guy-mini' style='background-color: " + currentColor + "'>" + "</div><span class='shadowLight'> slipped -" + pointsLost + "</span><br>");
			difficulty --;
		}
		else{
			var value = Math.round(-(currentBanana['size'] / 2) + maxSize);
			var newPoints = (1*difficulty) * value;
			$('#message').prepend("<span class='shadowLight' style='color: deeppink'>Peeled </span><div class='bad-guy-mini' style='background-color: " + currentColor + "'></div><span class='shadow' style='color: yellow'> +" + newPoints + "</span><br>");
			score += newPoints;
			if(score > highScore){
				highScore = score;
				localStorage.setItem('savedHighScore', highScore);
				$('#highScore').html(highScore);
				$('#message').prepend("<span class='shadowLight' style='color: deeppink'>New High Score: </span><span class='shadow' style='color: yellow'>" + highScore + "</span><br>");
			}
		}
		CountBadGuys();
		Clone(id);
		var badGuyCloneId = 'badGuyClone';
		badGuyCloneId += id;
		var badGuyClone = document.getElementById(badGuyCloneId);
		setTimeout(function(){
			badGuyClone.remove();
			Yay('add');
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
				$('#message').prepend("<br><span style='color: mediumseagreen; font-size: 2em;' class='shadowLight'>Unlocked ROTTEN BANANA MODE!</span><br>");
				$('.rotten').css({'color': 'yellow', 'background-color': 'brown'});
//				RottenBanana();
//				rottenButtonInterval = setInterval(RottenBanana, 4000);
			}
		}
	}// end of block - if hit bad guy
	CountBadGuys();
}
function Clone(id){
	const currentBanana = bananas.find( banana => banana.id === id);
//	currentId = id;
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
		rottenUnlockStatus = false;
		$('#highScore').html(highScore);
		$('.rotten').removeAttr('style');
		RestartGame('skip');
			$('#message').prepend("<span style='color: deepskyblue; font-size: 2em;' class='shadowLight'>Cleared High Score</span>");
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
	console.log('breakpoint: ' + breakpoint);
}, false);
function Restore(){
	if (confirm("Are you sure you want to restore your game to factory settings?")) {
		RestartGame('skip');
		localStorage.clear();
		highScore = 0;
		rottenUnlockStatus = false;
		completedInstructions = false;
		$('.close').hide();
		$('#highScore').html(highScore);
		$('.rotten').removeAttr('style');
		Settings('c');
		document.location.reload(true);
		$('#message').html("<span style='color: crimson; font-size: 1.5em;' class='shadowLight'>Restored Game</span><br>");
	}
	else {
		$('#message').prepend("<br><br><span style='color: yellow; font-size: 1.5em;' class='shadow'>Game Data Preserved</span><br><br>");
	}
}
function RestartGame(skip){

	function DoIt(){
		Slide('restart');
		score = 0;
		localStorage.removeItem('activeScore');
		if(unRottenState == false){
			Rotten();
		}
		var classes = 'slide ' + texture;
		$('#slider').attr("class", classes);
//		localStorage.removeItem('savedBanana');
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
			CountBadGuys();
		}
		$('#message').html("<br><br><span class='shadowLight' style='color: deepskyblue; font-size: 2em;'>Restarted</span><br><br>");
		Settings();
		document.location.reload(true);
	}
	if(skip == 'skip'){
	   DoIt();
	}
	else if (confirm("Are you sure you want to restart?")) {
		DoIt();
	}
	else{
		$('#message').prepend("<br><span style='color: yellow; font-size: 1.5em;' class='shadow'>Restart Canceled</span><br>");
	}
}
function ChangeBanana(b){
	texture = b.className.replace('slide-demo ', '');
	localStorage.setItem('savedBanana', texture);
	$('#slider').attr("class", 'slide ' + texture);
	$('.slide-demo').removeAttr('style');
	$('.' + texture).css('border-style', 'solid');
	$('#slider').css('border-style', 'hidden');
//	console.log
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
//		console.log('You have played on this device before.');
	}
	if(e == 'c'){
		$( '#menu' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'})
		ToggleInstructions('c');
		panel = false;
	}
	localStorage.setItem('savedMenuStatus', panel);
}
function Rotten(){
//	if(rottenButtonStatus == false){
//		RottenBanana('stop');
//	}
	if(highScore < 100){
		rottenUnlockStatus == false;
		$('#message').prepend("<span class='shadowLight'>Unlock Rotten Banana Mode when you reach 100 points!</span><br>");
		return null;
	}
	else{
		localStorage.setItem('savedRottenStatus', true );
	}
	//	for DESKTOP----------------------------------------------
	if(breakpoint != 'small'){ // DESKTOP
		if(unRottenState == true){

			//backup
			$('#sliderD').css('top', '');

			$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#8B0000", color: 'yellow'}, 1000 );
			$('#wide-button-r').attr("onclick","Slide('u'); YayMoveButtons('sliderU');");
			$('#wide-button-l').attr("onclick","Slide('d'); YayMoveButtons('sliderD')");
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
			$( '#sliderD' )
				.switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true})
				.queue(function() {
      				GoScreen('d');
					$( this ).dequeue();
    			});
			$('#wide-button-r').attr("onclick","Slide('r');YayMoveButtons('sliderR');");
			$('#wide-button-l').attr("onclick","Slide('l'); YayMoveButtons('sliderL');");
//			GoScreen('d'); //I need to get this to be fired off after the unrotten Message.
		}
	}
//	for MOBILE----------------------------------------------
else{
	if(unRottenState == true){ // if it wasn't rotten, but we're going rotten now:
		$('.slideButtonV, .slideButtonH').animate({backgroundColor: "#8B0000", color: 'yellow'}, 1000 );
		$('#wide-button-r').attr("onclick","Slide('u'); YayMoveButtons('sliderU');");
		$('#wide-button-l').attr("onclick","Slide('d'); YayMoveButtons('sliderD');");
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
		$( '#sliderD' )
			.switchClass( 'sliderL', 'sliderD', {duration: 500, easing: "easeInOutQuad", complete: UnRottenMessage, queue: true})
			.animate({top: '70vh'}, 500)
			.queue(function() {
      			GoScreen('m');
				$( this ).dequeue();
    		});
		$('#wide-button-r').attr("onclick","Slide('r'); YayMoveButtons('sliderR');");
		$('#wide-button-l').attr("onclick","Slide('l'); YayMoveButtons('sliderL');");
//		GoScreen('m'); //I need to get this to be fired off after the unrotten Message.
}//	END of - for mobile-------------------------------------
	}
	if(unRottenState == true){
		difficulty += 10;
		level ++;
	}
	else{
		difficulty -= 10;
		level --;
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
	if(k == 'c'){
			$( '.instructions-container' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
		instructionsHide = true;
	}
	if(k == null){
		if(instructionsHide == true){
			$( '.instructions-container' ).animate({top: '0vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
			}
		else{
			$( '.instructions-container' ).animate({top: '100vh'}, {queue: false, duration: 500, easing: 'easeInOutBack'});
		}
		instructionsHide = !instructionsHide;
	}
}
function Yay(y){
	var currentThing = $('.' + y);
	var newPosition = currentThing.position();
	var currentPosition = currentThing.position();
	var newTop = newPosition.top - 15;
	var newLeft = newPosition.left - 15;
	var newHeight = $(currentThing).height() + 30;
	var currentHeight = $(currentThing).height();
	var newWidth = $(currentThing).width() + 30;
	var currentWidth = $(currentThing).width();
	$(currentThing)
	.animate({height: newHeight, top: newTop, left: newLeft, width: newWidth}, {
    	duration: 100,
		queue: true,
      	complete: function(){
		newHeight -= 30;
		newWidth -=30;
		newTop +=15;
		newLeft +=15;
		$(currentThing)
			.animate({height: currentHeight, top: currentPosition.top, left: currentPosition.left, width: currentWidth},{
      			duration: 10,
				queue: true,
      			complete: function(){
					$(currentThing)
					.css({width: '', height: '', top: '', left: ''});
      			}
    		});
      	}
    });
}
function YayNotFixed(y){
	var currentThing = $(y);
	var currentBackgroundColor = $(currentThing).css('backgroundColor');
	$(currentThing)
	.animate({backgroundColor: 'black', mixBlendMode: 'multiply'}, {
    	duration: 300,
		queue: true,
      	complete: function(){
//		newHeight -= 30;
//		newWidth -=30;
//		newTop +=15;
//		newLeft +=15;
		$(currentThing)
			.animate({backgroundColor: currentBackgroundColor},{
      			duration: 300,
				queue: true,
      			complete: function(){
					$(currentThing)
					.css({width: '', height: '', backgroundColor: ''});
      			}
    		});
      	}
    });
}
function YayMoveButtons(y){
	var currentThing = $('.' + y);
//	console.log(y);
	if((y == 'sliderR') || (y == 'sliderL')){
		var tenVW = calculatedVW * 10;
		var currentWidth = $(currentThing).width();
		var newWidth = currentWidth + tenVW;
		$(currentThing)
		.animate({width: newWidth}, {
			duration: 50,
			queue: true,
			complete: function(){
			newWidth -= tenVW;
			$(currentThing)
				.animate({width: currentWidth},{
					duration: 50,
					queue: true,
					complete: function(){
						$(currentThing)
						.css({width: ''});
					}
				});
			}
		});
	}
	else if((y == 'sliderD') || (y == 'sliderU')){
		var tenVH = calculatedVH * 10;
		var currentHeight = $(currentThing).height();
		var newHeight = currentHeight + tenVH;
		if(y == 'sliderU'){
			$(currentThing).animate({height: newHeight}, {
				duration: 50,
				queue: true,
				complete: function(){
//					newHeight -= tenVH;
					$(currentThing).animate({height: currentHeight},{
						duration: 50,
						queue: true,
						complete: function(){
						$(currentThing).css({height: ''});}});
				}
			});
		}
		if(y == 'sliderD'){
			var currentPosition = currentThing.position();
			var currentTop = currentPosition.top;
//			var newTop = (Math.round(currentPosition.top / calculatedVH) - 10 + 'vh');
			var newTop = (currentBottom + 10 + 'vh');
			$(currentThing).animate({height: newHeight, top: newTop}, {
				duration: 50,
				queue: true,
				complete: function(){
//					newHeight -= tenVH;
					$(currentThing).animate({height: currentHeight, top: currentBottom +20 + 'vh'},{
						duration: 50,
						queue: true,
						complete: function()
						{$(currentThing).css({height: ''});}
					});
				}
			});
		}
	}
	else{
		console.log('received invalid input');
	}
}
function RottenBanana(e){
	if(e == null){
		if(rottenButtonStatus == false){
			$( '#rotten' )
				.animate({left: '10vw', top: '10vh'}, 600)
				.animate({left: '0vw', top: '0vh'}, 300);
	//		rottenButtonStatus == true;
		}
	}
	if ( e == 'stop'){
		clearInterval(rottenButtonInterval);
		rottenButtonStatus == false;
	}
	rottenButtonStatus != rottenButtonStatus;
}
function ShowX(){
	if(completedInstructions == false){
		localStorage.setItem('instructions', true);
	}
	$('.close').show();
	completedInstructions = true;
}
