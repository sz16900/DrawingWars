var socket;

function setup() {
	createCanvas(400, 400);
	background(51);

	socket = io.connect('http://localhost:3000');
	// If client receives messaage with mouse, trogger function/
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36, 36)
}

function mouseDragged() {
	console.log("sending: " + mouseX + ',' + mouseY);

	// Save the mouseX and mouseY value
	var data = {
		x: mouseX,
		y:mouseY
	}
	// Name the message and attach the data
	socket.emit('mouse', data);


	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36)
}

function draw() {

}