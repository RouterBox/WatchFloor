randomSquares = function(){
	var topic = "ten";
	for(var i = 1; i<11; i++){
		var red = getRandomInt(0, 256);
		var green = getRandomInt(0, 256);
		var blue = getRandomInt(0, 256);
		var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+', \"number\":'+i+'}'
		publish(topic, message);
		sleep(35);
	}	
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
thirtyToOne = function(){
	var topic = "thirtyToOne";
	var arr = [];
	for(var i = 0; i<90; i++){
		arr.push(getRandomInt(0, 256));
	}	
	var msg = {};
	msg.number = getRandomInt(1, 10);
	msg.lightValues = arr;
	var message = JSON.stringify(msg);
	publish(topic, message);
}

function setColumnToColor() {	
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+'}'
	publish("lights", message);
}
function randomColorWipes() {	
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+'}'
	publish("randomColorWipes", message);
}
function wipeToColor() {	
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+'}'
	publish("wipeToColor", message);
}
function fireBullet() {
	var box = document.getElementById('boxTxt').value;
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+', \"box\":'+box+'}'
	publish("bullet", message);
}  
function setRowToColor(){
	var box = document.getElementById('boxTxt').value;
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+', \"box\":'+box+'}'
	publish("ten", message);
}
function setCoordToColor(x, y){
	var box = y;
	var column = x;
	
	var red = document.getElementById('redTxt').value;
	var green = document.getElementById('greenTxt').value;
	var blue = document.getElementById('blueTxt').value;
	var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+', \"box\":'+box+'}'
	publish("ten", message);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function paintPattern(patternArray){
	for(var i = 1; i < 11; i++){
		var columnArray = patternArray[i-1];
		chooseWhichOne("huzzah"+i"/");
		for(var j = 0; j < 10; j++){
			var boxColor = columnArray[j];
			var box = j+1;
			var red = boxColor.r;
			var green = boxColor.g;
			var blue = boxColor.b;
			var message = '{\"red\":'+red+', \"green\":'+green+', \"blue\":'+blue+', \"box\":'+box+'}'
			publish("ten", message);
		}
	}
}


///////////////////////////////////////////////////PATTERNS!!!!////////////////////////////////

function heart1(){
	var r1 = {"r":255 "g":0 "b":0 };
	var r2 = {"r":192 "g":0 "b":0 };
	var w = {"r":64 "g":64 "b":64 };
	var b = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[w,w,w,w,b,b,b,b,w,w],
		[w,w,b,r1,r1,r1,r1,b,w],
		[w,w,b,r1,r2,r2,r2,r2,r1,b],
		[w,b,r1,r2,r2,r2,r2,r2,r1,b],
		[b,r1,r2,r2,r2,r2,r2,r1,b,w],
		[b,r2,r2,r2,r2,r2,r2,b,b,w],
		[w,b,r2,r2,r2,r2,r2,r1,r1,b],
		[w,w,b,r2,r2,r2,r2,r2,r1,b],
		[w,w,w,b,r2,r2,r2,r2,b,w],
		[w,w,w,w,b,b,b,b,w,w]
	]
	return arr;
}

function spaceInvader1(){
	var q = {"r":112 "g":48 "b":160 };
	var w = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[w,w,w,w,w,w,w,w,w,w],
		[w,w,q,w,q,q,w,w,w,w],
		[w,q,w,q,q,q,q,w,w,w],
		[w,w,w,w,q,w,q,q,w,w],
		[w,w,w,q,q,q,q,q,q,w],
		[w,w,w,q,q,q,q,q,q,w],
		[w,w,w,w,q,w,q,q,w,w],
		[w,q,w,q,q,q,q,w,w,w],
		[w,w,q,w,q,q,w,w,w,w],
		[w,w,w,w,w,w,w,w,w,w]
	]
	return arr;
}
function spaceInvader2(){
	var q = {"r":0 "g":176 "b":240 };
	var w = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[w,w,w,w,w,w,w,w,w,w],
		[w,q,w,w,q,q,w,w,w,w],
		[w,w,q,w,q,q,q,w,w,w],
		[w,q,w,q,q,w,q,q,w,w],
		[w,w,q,w,q,q,q,q,q,w],
		[w,w,q,w,q,q,q,q,q,w],
		[w,q,w,q,q,w,q,q,w,w],
		[w,w,q,w,q,q,q,w,w,w],
		[w,q,w,w,q,q,w,w,w,w],
		[w,w,w,w,w,w,w,w,w,w]
	]
	return arr;
}
function spaceInvader3(){
	var q = {"r":112 "g":48 "b":160 };
	var w = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[w,w,w,w,q,q,q,q,w,w],
		[w,q,w,q,q,q,q,w,w,w],
		[w,w,q,q,q,q,q,q,w,q],
		[w,w,w,q,q,q,w,q,q,w],
		[w,w,w,q,q,q,q,q,w,w],
		[w,w,w,q,q,q,q,q,w,w],
		[w,w,w,q,q,q,w,q,q,w],
		[w,w,q,q,q,q,q,q,w,q],
		[w,q,w,q,q,q,q,w,w,w],
		[w,w,w,w,q,q,q,q,w,w]
	]
	return arr;
}

function smileyFace(){
	var b = {"r":0 "g":0 "b":0 };
	var y = {"r":128 "g":128 "b":0 };
	var w = {"r":128 "g":128 "b":128 };
	var r = {"r":64 "g":0 "b":0 };
	
	var arr = [
		[b,b,y,y,y,y,y,y,b,b],
		[b,y,y,y,w,y,y,y,y,b],
		[y,y,y,w,y,y,w,w,y,y],
		[y,y,w,y,y,y,w,w,y,y],
		[y,y,w,y,y,y,y,y,y,y],
		[y,y,w,y,y,y,y,y,y,y],
		[y,y,w,y,y,y,w,w,y,y],
		[y,y,y,w,y,y,w,w,y,y],
		[b,y,y,y,w,y,y,y,y,b],
		[b,b,y,y,y,y,y,y,b,b]
	]
	return arr;
}
function smileyFrench(){
	var b = {"r":0 "g":0 "b":0 };
	var y = {"r":128 "g":128 "b":0 };
	var w = {"r":128 "g":128 "b":128 };
	var r = {"r":64 "g":0 "b":0 };
	
	var arr = [
		[b,b,y,y,y,y,y,y,b,b],
		[b,y,y,y,w,y,y,y,y,b],
		[y,y,y,w,y,y,w,w,y,y],
		[y,y,w,y,y,y,w,w,y,y],
		[y,r,r,y,y,y,y,y,y,y],
		
		[y,r,r,y,y,y,y,y,y,y],
		[y,y,w,y,y,y,w,w,y,y],
		[y,y,y,w,y,y,w,w,y,y],
		[b,y,y,y,w,y,y,y,y,b],
		[b,b,y,y,y,y,y,y,b,b]
	]
	return arr;
}

function crabGuy1(){
	var b = {"r":0 "g":176 "b":240 };
	var r = {"r":64 "g":0 "b":0 };
	var w = {"r":128 "g":128 "b":128 };
	var k = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[b,b,b,b,r,r,r,r,r,r],
		[r,b,b,b,r,b,b,b,r,b],
		[b,r,r,r,r,w,w,b,b,r],
		[r,r,r,r,r,k,w,b,b,b],
		[b,r,r,r,r,b,b,b,b,b],
		
		[b,r,r,r,r,b,b,b,b,b],
		[r,r,r,r,r,w,w,b,b,b],
		[b,r,r,r,r,k,w,b,b,r],
		[r,b,b,b,r,b,b,b,r,b],
		[b,b,b,b,r,r,r,r,r,r]
	]
	return arr;
}
function crabGuy2(){
	var b = {"r":0 "g":176 "b":240 };
	var r = {"r":64 "g":0 "b":0 };
	var w = {"r":128 "g":128 "b":128 };
	var k = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[b,b,b,b,r,r,r,r,r,b],
		[r,b,b,b,r,b,b,r,b,b],
		[b,r,r,r,r,k,w,b,r,b],
		[r,r,r,r,r,w,w,b,b,b],
		[b,r,r,r,r,b,b,b,b,b],
		[b,r,r,r,r,b,b,b,b,b],
		[r,r,r,r,r,k,w,b,b,b],
		[b,r,r,r,r,w,w,b,r,b],
		[r,b,b,b,r,b,b,r,b,b],
		[b,b,b,b,r,r,r,r,r,b]
	]
	return arr;
}
function bunny(){
	var b = {"r":0 "g":176 "b":240 };
	var w = {"r":64 "g":64 "b":64 };
	var p = {"r":251 "g":171 "b":240 };
	var k = {"r":0 "g":0 "b":0 };
	
	var arr = [
		[b,b,b,b,b,b,b,b,b,b],
		[b,b,b,w,p,b,b,b,b,b],
		[b,b,w,w,w,w,w,w,w,b],
		[b,w,w,w,k,w,b,b,b,b],
		[b,b,w,w,w,w,w,w,w,b],
		[b,b,w,w,w,b,b,b,b,b],
		[b,w,w,w,w,b,b,b,b,b],
		[b,w,w,w,w,b,b,b,b,b],
		[b,b,b,b,w,b,b,b,b,b],
		[b,b,b,b,b,b,b,b,b,b]
	]
	return arr;
}


