const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

function randNum(min, max) {
	return Math.random() * (max - min) + min;
}

class Raindrop {
	constructor() {
		this.w = 2;
		this.h = 1;
		this.x = randNum(0 + this.w * 2, canvas.width - this.w * 2);
		this.y = randNum(-60 + this.h * 2, 0 - this.h * 2);
		this.o = randNum(0.1, 0.75);
		this.c = "white";
		this.g = randNum(1, 5);
	}
	update() {
		this.y += this.g;
	}
	draw() {
		c.save();
		this.update();
		c.beginPath();
		c.globalAlpha = this.o;
		c.fillStyle = this.c;
		c.shadowColor = this.c;
		c.rect(this.x, this.y, this.w, this.y);
		c.fill();
		c.restore();
	}
}

function drawClouds() {
	c.save();
	c.fillStyle = "#303030";
	c.arc(50, 0, 100, 0, 2 * Math.PI);
	c.fill();
	c.arc(210, 0, 100, 0, 2 * Math.PI);
	c.fill();
	c.arc(100, 50, 100, 0, 2 * Math.PI);
	c.fill();
	c.arc(400, 0, 100, 0, 2 * Math.PI);
	c.fill();
	c.arc(500, 0, 100, 0, 2 * Math.PI);
	c.fill();
	c.arc(350, 50, 100, 0, 2 * Math.PI);
	c.fill();
	c.restore();
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	rain.forEach((drop, index) => {
		drop.draw();
		if (drop.y > canvas.height) {
			rain.splice(index, 1);
		}
	});
	drawClouds();
}

var rain = [];

window.setInterval(function () {
	rain.push(new Raindrop());
}, 30);

animate();
