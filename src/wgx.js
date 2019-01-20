

class wgx {

	constructor(canvas_width, canvas_height) {

		this.tick_interval = 1000/30;
		this.tick_timer;

		// canvas height & width.
		this.canvas_width = canvas_width;
		this.canvas_height = canvas_height;

		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");

		this._construct_canvas();
	}

	tick(callback, tick_interval) {
		var tick_interval = typeof tick_interval != "undefined" ? tick_interval : this.tick_interval;
		this.tick_timer = setInterval(callback, tick_interval);
		return true;
	}

	stopTick() {
		clearInterval(this.tick_timer);
		return true;
	}

	background(color) {
		this.fill(color);
		this.rect(0, 0, this.canvas_width, this.canvas_height);
		return true;
	}

	fill(color) {
		this.context.fillStyle = color;
		return true;
	}

	rect(x,y,w,h) {
		this.context.fillRect(x, y, w, h);
		return true;
	}

	keydown(callback) {
		document.addEventListener("keydown", function(e) {
			callback(e.keyCode);
		});
		return true;
	}

	_construct_canvas() {
		this.canvas.width = this.canvas_width;
		this.canvas.height = this.canvas_height;

		document.body.appendChild(this.canvas)
	}
}
