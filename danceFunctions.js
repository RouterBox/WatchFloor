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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
