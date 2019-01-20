"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* wgx
* Author: Stefanos Vichas
* License: MIT
* Project: https://github.com/svichas/wgx
*/
var wgx =
/*#__PURE__*/
function () {
  function wgx(canvas_width, canvas_height) {
    _classCallCheck(this, wgx);

    this.tick_interval = 1000 / 30;
    this.tick_timer; // canvas height & width.

    this.canvas_width = canvas_width;
    this.canvas_height = canvas_height; // mouse vars

    this.mouse_position = this.vector(0, 0);
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    this._construct_canvas();

    this._construct_mouse_listeners();
  }
  /**
  * Method vector
  */


  _createClass(wgx, [{
    key: "vector",
    value: function vector(x, y) {
      return {
        x: x,
        y: y
      };
    }
    /**
    * Method ticks
    * ticks a callback every interval
    */

  }, {
    key: "tick",
    value: function tick(callback, tick_interval) {
      var tick_interval = typeof tick_interval != "undefined" ? tick_interval : this.tick_interval;
      this.tick_timer = setInterval(callback, tick_interval);
      return true;
    }
    /**
    * Method stopTick
    * stops tick callback
    */

  }, {
    key: "stopTick",
    value: function stopTick() {
      clearInterval(this.tick_timer);
      return true;
    }
    /**
    * Method background
    * Sets a background color to canvas
    * @param string color
    */

  }, {
    key: "background",
    value: function background(color) {
      this.fill(color);
      this.rect(0, 0, this.canvas_width, this.canvas_height);
      return true;
    }
    /**
    * Method fill
    * Changes fill style
    * @param string color
    */

  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      return true;
    }
    /**
    * Method rect
    * creates a rectangle
    */

  }, {
    key: "rect",
    value: function rect(x, y, w, h) {
      this.context.fillRect(x, y, w, h);
      return true;
    }
    /**
    * Method on
    * Attach events to canvas
    * @param string event
    * @param function callback
    */

  }, {
    key: "on",
    value: function on(event, callback) {
      return this.canvas.addEventListener(event, callback);
    }
    /**
    * Method keydown
    * @param function callback
    */

  }, {
    key: "keydown",
    value: function keydown(callback) {
      document.addEventListener("keydown", function (e) {
        callback(e.keyCode);
      });
      return true;
    }
    /**
    * Method keyup
    * @param function callback
    */

  }, {
    key: "keyup",
    value: function keyup(callback) {
      document.addEventListener("keyup", function (e) {
        callback(e.keyCode);
      });
      return true;
    }
    /**
    * Method mousedown
    * @return object
    */

  }, {
    key: "mousedown",
    value: function mousedown(callback) {
      return this.canvas.addEventListener("mousedown", callback);
    }
    /**
    * Method mouseup
    * @return object
    */

  }, {
    key: "mouseup",
    value: function mouseup(callback) {
      return this.canvas.addEventListener("mouseup", callback);
    }
    /**
    * Method to get mouse position
    * @return object
    */

  }, {
    key: "mouse",
    value: function mouse() {
      return this.mouse_position;
    }
    /**
    * Method loadImage
    * Loads an image
    * @param string src
    * @param function onload_callback
    */

  }, {
    key: "loadImage",
    value: function loadImage(src, onload_callback) {
      var image_object = new Image();
      image_object.src = src;
      image_object.onload = onload_callback;
      return image_object;
    }
    /**
    * Method image
    * Displays an image
    * @param object image_object
    * @param int x
    * @param int y
    */

  }, {
    key: "image",
    value: function image(image_object, x, y) {
      this.context.drawImage(image_object, x, y);
      return true;
    }
    /**
    * Method _construct_canvas
    * Sets canvas width/height and adds it to the body.
    */

  }, {
    key: "_construct_canvas",
    value: function _construct_canvas() {
      this.canvas.width = this.canvas_width;
      this.canvas.height = this.canvas_height;
      document.body.appendChild(this.canvas);
    }
  }, {
    key: "_construct_mouse_listeners",
    value: function _construct_mouse_listeners() {
      var _this = this;

      this.canvas.addEventListener("mousemove", function (e) {
        _this.mouse_position.x = e.clientX - _this.canvas.getBoundingClientRect().left;
        _this.mouse_position.y = e.clientY - _this.canvas.getBoundingClientRect().top;
      });
    }
  }]);

  return wgx;
}();