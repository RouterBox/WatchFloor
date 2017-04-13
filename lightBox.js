function lightBox(){
	var canvas;
	var ctx;
	var boxDimension = 120;
	var lightDimension = 5;
	
	//this isn't wrong, it makes the math work.  Trust me.
	var numLightsPerSide = 9;
	
	var lightPadding = 1
	var boxPadding = 4;
	
	var columnNumber = 0;
	var boxNumber = 0;
	
	var lightValues = [];
	
	this.init = function(columnNumber, boxNumber){
		var canvasIdShouldBe = "column"+columnNumber+"Box"+boxNumber;
		canvas = document.getElementById(canvasIdShouldBe);
		ctx = canvas.getContext("2d");
		
		this.columnNumber = columnNumber;
		this.boxNumber = boxNumber;
		
		canvas.height = boxDimension;
		canvas.width = boxDimension;
		
		canvas.style.left = ((columnNumber-1)*boxDimension)+(columnNumber * boxPadding)+"px";
		canvas.style.top = ((11-boxNumber)*boxDimension)+((11-boxNumber) * boxPadding)+"px";

		this.createBox();
		
		for(var i = 1; i <= 30; i++){
			lightValues.push("#ff0000");
			this.setLightNumToVal(i, "#ff0000");
		}
	}
	
	this.setLightNumToVal = function(lightNum, val){
		lightValues[lightNum] = val;
		this["setLight"+lightNum](val);
	}
	
	this.setLight1 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*6, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	this.setLight2 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*7, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	this.setLight3 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*8, lightDimension, lightDimension);
	}
	this.setLight4 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*7, lightDimension, lightDimension);
	}
	this.setLight5 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*6, lightDimension, lightDimension);
	}
	this.setLight6 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*5, lightDimension, lightDimension);
	}
	this.setLight7 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*4, lightDimension, lightDimension);
	}
	this.setLight8 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*3, lightDimension, lightDimension);
	}
	this.setLight9 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*2, lightDimension, lightDimension);
	}
	this.setLight10 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( boxDimension -( lightDimension + lightPadding), (boxDimension/numLightsPerSide)*1, lightDimension, lightDimension);
	}
	this.setLight11 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*8, lightPadding, lightDimension, lightDimension);
	}
	this.setLight12 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*7, lightPadding, lightDimension, lightDimension);
	}
	this.setLight13 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*6, lightPadding, lightDimension, lightDimension);
	}
	this.setLight14 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*5, lightPadding, lightDimension, lightDimension);
	}
	this.setLight15 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*4, lightPadding, lightDimension, lightDimension);
	}
	this.setLight16 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*3, lightPadding, lightDimension, lightDimension);
	}
	this.setLight17 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*2, lightPadding, lightDimension, lightDimension);
	}
	this.setLight18 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*1, lightPadding, lightDimension, lightDimension);
	}
	this.setLight19 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*1, lightDimension, lightDimension);
	}
	this.setLight20 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*2, lightDimension, lightDimension);
	}
	this.setLight21 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*3, lightDimension, lightDimension);
	}
	this.setLight22 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*4, lightDimension, lightDimension);
	}
	this.setLight23 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*5, lightDimension, lightDimension);
	}
	this.setLight24 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*6, lightDimension, lightDimension);
	}
	this.setLight25 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*7, lightDimension, lightDimension);
	}
	this.setLight26 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( 5, (boxDimension/numLightsPerSide)*8, lightDimension, lightDimension);
	}
	this.setLight27 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*1, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	this.setLight28 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*2, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	this.setLight29 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*3, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	this.setLight30 = function(val){
		ctx.fillStyle = val;
		ctx.fillRect( (boxDimension/numLightsPerSide)*4, boxDimension -( lightDimension + lightPadding), lightDimension, lightDimension);
	}
	
	this.createBox = function(){
		// Create gradient
		var grd=ctx.createRadialGradient(boxDimension/2,boxDimension/2,5,boxDimension/2,boxDimension/2,boxDimension);
		grd.addColorStop(0,"silver");
		grd.addColorStop(1,"white");
		// Fill with gradient
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,boxDimension,boxDimension);
	}
}