var canvasWidth = 480;
var canvasHeight = 640;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var clippingRegion = {
	x: 400,
	y: 200,
	r: 50
};
image.src = 'images/tu.png';
image.onload = function() {
	initCanvas()
}

function initCanvas() {
	clippingRegion = {
	x: Math.random()*380+50,
	y: Math.random()*540+50,
	r: 50
};
	draw(image, clippingRegion)
}

function setClippingRegion(clippingRegion) {
	context.beginPath()
	context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false)
	context.clip()
}

function draw(image, clippingRegion) {
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.save()
	setClippingRegion(clippingRegion)
	context.drawImage(image, 0, 0)
	context.restore()
}
function reset(){
	initCanvas()
}
function show(){
	
	
	var timer = setInterval(function(){
		console.log(1)
		clippingRegion.r +=20;
		if(clippingRegion.r>=1000){
			clearInterval(timer)
		}
		draw(image,clippingRegion)
	},30)
}

