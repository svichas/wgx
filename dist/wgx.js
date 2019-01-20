"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var wgx =
/*#__PURE__*/
function () {
  function wgx(canvas_width, canvas_height) {
    _classCallCheck(this, wgx);

    this.tick_interval = 1000 / 30;
    this.tick_timer; // canvas height & width.

    this.canvas_width = canvas_width;
    this.canvas_height = canvas_height;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    this._construct_canvas();
  }

  _createClass(wgx, [{
    key: "tick",
    value: function tick(callback, tick_interval) {
      var tick_interval = typeof tick_interval != "undefined" ? tick_interval : this.tick_interval;
      this.tick_timer = setInterval(callback, tick_interval);
      return true;
    }
  }, {
    key: "stopTick",
    value: function stopTick() {
      clearInterval(this.tick_timer);
      return true;
    }
  }, {
    key: "background",
    value: function background(color) {
      this.fill(color);
      this.rect(0, 0, this.canvas_width, this.canvas_height);
      return true;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      return true;
    }
  }, {
    key: "rect",
    value: function rect(x, y, w, h) {
      this.context.fillRect(x, y, w, h);
      return true;
    }
  }, {
    key: "keydown",
    value: function keydown(callback) {
      document.addEventListener("keydown", function (e) {
        callback(e.keyCode);
      });
      return true;
    }
  }, {
    key: "_construct_canvas",
    value: function _construct_canvas() {
      this.canvas.width = this.canvas_width;
      this.canvas.height = this.canvas_height;
      document.body.appendChild(this.canvas);
    }
  }]);

  return wgx;
}();