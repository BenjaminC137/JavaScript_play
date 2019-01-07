function toWeirdCase(string){
	var wordsArray = string.split(" ");
	var weirdArray = [];
//	console.log(wordsArray);
//	var firstWord = wordsArray[0];
	for(var j = 0; j < wordsArray.length; j++){
		var result = "";
		for(var i = 0; i < wordsArray[j].length; i++){
			if(i % 2 == 0){
				result = result.concat(wordsArray[j][i].toUpperCase());
			}
			else{
				result = result.concat(wordsArray[j][i].toLowerCase())
			}
		}
		weirdArray.push(result);
		console.log(result);
	}
	var weirdString = weirdArray.toString();
	weirdString = weirdString.replace(/,/g, ' ');
	return weirdString;
}
function Slide(){
		var slideButton = document.getElementsByTagName("button");
	Element.onclick(){
		left: 25px;
	}
}

document.onkeypress = function(e){

	var box = document.getElementsByTagName("box")[0];

	var top = window.getComputedStyle(box).top;

	top = Number(top.replace("px", ""));

	var left = window.getComputedStyle(box).left;
	left = Number(left.replace("px", ""));

	var posx = window.getComputedStyle(box).backgroundPositionX;
	posx = Number(posx.replace("px", ""));

	var posy = window.getComputedStyle(box).backgroundPositionY;
	posy = Number(posy.replace("px", ""));

	if(left < 1){ // if hit left
		left = 1;
		left += "px"
		box.style.left = left;
	}

	if(left > window.innerWidth - 50){ // if hit right
		left = window.innerWidth - 55;
		left += "px"
		box.style.left = left;
	}

	if(top < 1){ // if hit top
		top = 1;
		top += "px"
		box.style.top = top;
	}

	if(top > window.innerHeight - 70){ // if hit bottom
		top = window.innerHeight - 76;
		top += "px"
		box.style.top = top;
	}

	if(e.key == 'd'){ //move right
		left += 20;
		left += "px"
		box.style.left = left;

		posy = 320;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;

	}

	if(e.key == 's'){ //move down
		top += 20;
		top += "px"
		box.style.top = top;

		posy = 384;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;


	}

	if(e.key == 'a'){ //move left
	left -= 20;
	left += "px"
	box.style.left = left;

	posx -= 64;
	posx += "px";
	posy = 192;
	posy += "px";
	box.style.backgroundPositionX = posx;		box.style.backgroundPositionY = posy;

	}

	if(e.key == 'w'){ //move up
		top -= 20;
		top += "px"
		box.style.top = top;

		posy = 256;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;
	}
    console.log(e.key);
    }

document.onclick = function (coords){
	var fireball = document.getElementsByTagName("fireball")[0];




	var box = document.getElementsByTagName("box")[0];
	var top = window.getComputedStyle(box).top;
	top = Number(top.replace("px", ""));
	var left = window.getComputedStyle(box).left;
	left = Number(left.replace("px", ""));




	var xcoord = coords.x - 16;
	var ycoord = coords.y - 16;

		xcoord += "px";
		ycoord += "px";
		fireball.style.left = xcoord;
		fireball.style.top = ycoord;

if(((coords.x < left + 51) && (coords.x > left + 13)) && ((coords.y < top + 66) && (coords.y > top + 13))){
	console.log("hit");
	box.style.backgroundColor = "orange";
}
	else{
		box.style.backgroundColor = null;
	}
}

function getFormValues(){
	var f = document.getElementsByName("f")[0];
	var l = document.getElementsByName("l")[0];

	console.log(f.value);
    console.log(l.value);
}

$("p").mouseover(e => {
	$("body").css("background-color", "yellow");
})

$("p").mouseout(e => {
	$("body").css("background-color", "inherit");
})



function displayLarger(a, b){
	if(a > b){
		message = "a";
		alert(message);
	}
	else{
		message = "b";
		alert(message);
	}
}
largest = largest.sort((a, b, c, d, e) => (largest));
	alert(largest);
var entry;
var row = "";
var currentNumber = 0;
function diamond(entry){
	if(!entry){
		entry = 5;
	}
	for(i = 1; i <= entry; i ++){
		currentNumber ++;
		row = row.concat(currentNumber);
		console.log(row);
	}

	for(i = entry; i > 1; i --){
		line --;
		console.log(currentNumber);
	}
}
var a = {};
var person = {
name: "Bob",
age: 29,
gender: "neutral",
}
var employee = {
Name: "Steve",
Title: "chief",
IDnumber: 04,
}
function currentDate () {
	var myDate = new Date (Date.now());
	var month = myDate.getMonth();
	var year = myDate.getFullYear();
	var day = myDate.getDate();
	console.log(month + "/" + day + "/" + year);
	return(month + "/" + day + "/" + year);
}
function isLeap(yearInput){
//	var currentDate = new Date(Date.now());
//	var year = currentDate.getFullYear();

	if(yearInput % 4 != 0){
		return false;
	}
	else if(yearInput % 100 == 0 && yearInput % 400 != 0){
		return false;
	}
	else{
		return true;
	}
	return true;
}
function areConsecutive(a,b,c,d,e){
	var myArray = [a,b,c,d,e];
	for(i = 0; i < 5; i ++)
	if((myArray[i] + 1) != (myArray[i + 1])){
		return false;
	}
	return true;
}
function testForArrays() {
	var myArray = [4,3,4,3,5];
	return myArray;
}
var colorState = 1;
var i = 14;
document.onscroll = function(){
	var j = document.getElementsByTagName("body");
	if(colorState == 1){
//	j[0].style.backgroundColor = "red";
//	j[0].style.color = "yellow";
//	j[0].style.textShadow = "2px 2px 2px green";
	if(i < 100){
		i++
	}
	else{
		i += -1;
		 }
	j[0].style.fontSize = i +"px";

	colorState = 1;
	}
//	else{
////	j[0].style.backgroundColor = "blue";
////	j[0].style.color = "lightgreen";
////	j[0].style.textShadow = "8px 2px 4px #fff";
//	j[0].style.fontSize = "24px";
//	colorState = 1;
//	}
	console.log("key pressed");
}

