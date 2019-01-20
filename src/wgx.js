

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

	/**
	* Method ticks
	* ticks a callback every interval
	*/
	tick(callback, tick_interval) {
		var tick_interval = typeof tick_interval != "undefined" ? tick_interval : this.tick_interval;
		this.tick_timer = setInterval(callback, tick_interval);
		return true;
	}

	/**
	* Method stopTick
	* stops tick callback
	*/
	stopTick() {
		clearInterval(this.tick_timer);
		return true;
	}

	/**
	* Method background
	* Sets a background color to canvas
	* @param string color
	*/
	background(color) {
		this.fill(color);
		this.rect(0, 0, this.canvas_width, this.canvas_height);
		return true;
	}

	/**
	* Method fill
	* Changes fill style
	* @param string color
	*/
	fill(color) {
		this.context.fillStyle = color;
		return true;
	}

	/**
	* Method rect
	* creates a rectangle
	*/
	rect(x,y,w,h) {
		this.context.fillRect(x, y, w, h);
		return true;
	}

	/**
	* Method keydown
	* @param function callback
	*/
	keydown(callback) {
		document.addEventListener("keydown", function(e) {
			callback(e.keyCode);
		});
		return true;
	}

	/**
	* Method keyup
	* @param function callback
	*/
	keyup(callback) {
		document.addEventListener("keyup", function(e) {
			callback(e.keyCode);
		});
		return true;
	}

	/**
	* Method _construct_canvas
	* Sets canvas width/height and adds it to the body.
	*/
	_construct_canvas() {
		this.canvas.width = this.canvas_width;
		this.canvas.height = this.canvas_height;

		document.body.appendChild(this.canvas)
	}
}
