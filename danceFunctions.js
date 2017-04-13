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
