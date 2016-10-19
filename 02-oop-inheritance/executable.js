(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

exports.Actor = Actor;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = [];
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] != callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.listeners[event]) {
        delete this.listeners[event];
      }
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) {
        this.listeners[event](movie, event);
      }
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger() {
    _classCallCheck(this, logger);
  }

  _createClass(logger, [{
    key: 'log',
    value: function log(movieExecute, functionName) {
      console.log(movieExecute.title + ' ' + functionName);
    }
  }]);

  return logger;
}();

exports.logger = logger;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classEventEmitter = require("./classEventEmitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var movieClass = function (_EventEmitter) {
  _inherits(movieClass, _EventEmitter);

  function movieClass(title, year, duration) {
    _classCallCheck(this, movieClass);

    var _this = _possibleConstructorReturn(this, (movieClass.__proto__ || Object.getPrototypeOf(movieClass)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.actors = [];
    return _this;
  }

  _createClass(movieClass, [{
    key: "showTitle",
    value: function showTitle() {
      console.log(this.title);
    }
  }, {
    key: "showDuration",
    value: function showDuration() {
      console.log(this.duration);
    }
  }, {
    key: "showYear",
    value: function showYear() {
      console.log(this.year);
    }
  }, {
    key: "play",
    value: function play() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), "emit", this).call(this, this, "play");
    }
  }, {
    key: "pause",
    value: function pause() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), "emit", this).call(this, this, "pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      _get(movieClass.prototype.__proto__ || Object.getPrototypeOf(movieClass.prototype), "emit", this).call(this, this, "resume");
    }
  }, {
    key: "addCast",
    value: function addCast(newActors) {
      this.actors = this.actors.concat(newActors);
    }
  }]);

  return movieClass;
}(_classEventEmitter.EventEmitter);

exports.movieClass = movieClass;

},{"./classEventEmitter":2}],5:[function(require,module,exports){
"use strict";

var _classActor = require("./classActor");

var _classEventEmitter = require("./classEventEmitter");

var _classLogger = require("./classLogger");

var _classMovie = require("./classMovie");

var mylogger = new _classLogger.logger();

var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },

  like: function like(friendName) {
    console.log(friendName + " like " + this.title);
  }
};

function createMovie(title, year, duration) {
  var movie = new _classMovie.movieClass(title, year, duration);
  return movie;
}

var titanic = new createMovie("Titanic", 1999, "1:05");
Object.assign(titanic, Social);
var terminator = new createMovie("Terminator", 1992, "2:05");
Object.assign(terminator, Social);
var avatar = new createMovie("Avatar", 2010, "3:05");
Object.assign(avatar, Social);

var leonardo = new _classActor.Actor("Leonardo Dicaprio", 41);
var michael = new _classActor.Actor("Michael Biehn", 50);
var paul = new _classActor.Actor("Paul Winfield", 50);

var otherCast = [new _classActor.Actor("Linda Hamilton", 50), new _classActor.Actor("Arnold Schwarzenegger", 50)];

titanic.addCast(leonardo);
titanic.addCast(michael);
titanic.addCast(otherCast);

console.log(titanic);
console.log(terminator);
console.log(avatar);

titanic.on("play", mylogger.log);
titanic.play();
titanic.resume();
titanic.pause("play");
titanic.off("play", mylogger.log);
titanic.emit("play");

terminator.on("play", mylogger.log);
terminator.play();
terminator.resume("play");
terminator.off("play", mylogger.log);
terminator.share("octa");
terminator.like("octa");

},{"./classActor":1,"./classEventEmitter":2,"./classLogger":3,"./classMovie":4}]},{},[5]);
