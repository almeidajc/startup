"use strict";

var _classActor = require("classActor.js");

var Actor = _interopRequireWildcard(_classActor);

var _classEventEmitter = require("classEventEmitter.js");

var EventEmitter = _interopRequireWildcard(_classEventEmitter);

var _classLogger = require("classLogger.js");

var classLogger = _interopRequireWildcard(_classLogger);

var _classMovie = require("classMovie.js");

var movieClass = _interopRequireWildcard(_classMovie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mylogger = new logger();

var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },

  like: function like(friendName) {
    console.log(friendName + " like " + this.title);
  }
};

function createMovie(title, year, duration) {
  var movie = new movieClass(title, year, duration);
  return movie;
}

var titanic = new createMovie("Titanic", 1999, "1:05");
Object.assign(titanic, Social);
var terminator = new createMovie("Terminator", 1992, "2:05");
Object.assign(terminator, Social);
var avatar = new createMovie("Avatar", 2010, "3:05");
Object.assign(avatar, Social);

var leonardo = new Actor("Leonardo Dicaprio", 41);
var michael = new Actor("Michael Biehn", 50);
var paul = new Actor("Paul Winfield", 50);

var otherCast = [new Actor("Linda Hamilton", 50), new Actor("Arnold Schwarzenegger", 50)];

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