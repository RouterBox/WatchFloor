function huzzah(){
	var huzzahNumber = 0;
	var arrayOfBoxes = [];
	var buffer = [];
	var timer;
	
	this.init = function(huzzahNumber, arrayOfBoxes){
		this.huzzahNumber = huzzahNumber;
		this.arrayOfBoxes = arrayOfBoxes;
		console.log("huzzah init: "+huzzahNumber+" "+arrayOfBoxes.length+" boxes");
	}
	this.setLightsToAColor = function (val){
		this.buffer = [];
		for(var i = 1; i <= 300; i++){
			this.buffer.push(val);
		}
		this.writeBuffer();
	}
	this.testBuffer = function(){
		this.buffer = [];
		for(var i = 1; i <= 300; i++){
			this.buffer.push(grbToHex(64,64,64));
		}	
		this.buffer[1] = grbToHex(255,0,0);
		this.buffer[2] = grbToHex(255,0,0);
		this.buffer[3] = grbToHex(255,0,0);
		this.buffer[4] = grbToHex(255,0,0);
		this.buffer[5] = grbToHex(255,0,0);
		this.buffer[6] = grbToHex(255,0,0);
		this.buffer[7] = grbToHex(255,0,0);
		this.buffer[8] = grbToHex(255,0,0);
		this.buffer[9] = grbToHex(255,0,0);
		this.buffer[10] = grbToHex(255,0,0);
		this.buffer[11] = grbToHex(255,0,0);
		this.buffer[12] = grbToHex(255,0,0);
		this.buffer[13] = grbToHex(255,0,0);
		this.buffer[14] = grbToHex(255,0,0);
		this.writeBuffer();
		
	}
	this.turboRainbow = function(){
		if(this.timer){
			clearInterval(this.timer);
		}
		this.buffer = [];
		for(var i = 1; i <= 300; i++){
			if(i % 10 == 0){
				this.buffer[i] = grbToHex(0,51,51);
			}
			if(i % 10 == 1){
				this.buffer[i] = grbToHex(0, 51, 153);
			}
			if(i % 10 == 2){
				this.buffer[i] = grbToHex(0,0,255);
			}
			if(i % 10 == 3){
				this.buffer[i] = grbToHex(255,0,0);
			}
			if(i % 10 == 4){
				this.buffer[i] = grbToHex(255,255,0);
			}
			if(i % 10 == 5){
				this.buffer[i] = grbToHex(51,204,0);
			}
			if(i % 10 == 6){
				this.buffer[i] = grbToHex(0,255,0);
			}
			if(i % 10 == 7){
				this.buffer[i] = grbToHex(0,0,0);
			}
			if(i % 10 == 8){
				this.buffer[i] = grbToHex(0,0,0);
			}
			if(i % 10 == 9){
				this.buffer[i] = grbToHex(0,0,0);
			}
		}
		this.writeBuffer();
		this.timer = createInterval(this.cycleBuffer, this, 50);
	}
	this.nyanCat = function(){
		if(this.timer){
			clearInterval(this.timer);
		}
		this.buffer = [];
		for(var i = 1; i <= 300; i++){
			this.buffer.push(grbToHex(64,64,64));
		}
		this.buffer[1] = grbToHex(0,51,51);
		this.buffer[2] = grbToHex(0, 51, 153);
		this.buffer[3] = grbToHex(0,0,255);
		this.buffer[4] = grbToHex(255,0,0);
		this.buffer[5] = grbToHex(255,255,0);
		this.buffer[6] = grbToHex(51,204,0);
		this.buffer[7] = grbToHex(0,255,0);
		this.buffer[8] = grbToHex(0,51,51);
		this.buffer[9] = grbToHex(0, 51, 153);
		this.buffer[10] = grbToHex(0,0,255);
		this.buffer[11] = grbToHex(255,0,0);
		this.buffer[12] = grbToHex(255,255,0);
		this.buffer[13] = grbToHex(51,204,0);
		this.buffer[14] = grbToHex(0,255,0);
		
		this.writeBuffer();
		this.timer = createInterval(this.cycleBuffer, this, 50);
	}
	this.cycleBuffer = function(huzzahScope){
		huzzahScope.buffer.unshift(huzzahScope.buffer.pop());
		huzzahScope.writeBuffer();
	}	
	
	function createInterval(functionToCall, dynamicParameter, interval) { 
		return setInterval(function() { functionToCall(dynamicParameter); }, interval); 
	} 
		
	
	
	
	
	this.writeBuffer = function(){
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 30; j++){
				var lightIndexFromBuffer = (i*30)+j;
				var lightValue = this.buffer[lightIndexFromBuffer];
				var boxIndex = i;
				var lightIndexInsideBox = j+1;
				
				this.arrayOfBoxes[boxIndex].setLightNumToVal( lightIndexInsideBox, lightValue );
			}
		}
	}
}