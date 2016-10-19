"use strict";

var _classActor = require("classActor.js");

var _classEventEmitter = require("classEventEmitter.js");

var _classLogger = require("classLogger.js");

var _classMovie = require("classMovie.js");

var actor = new _classActor.Actor(settings); // import * as Actor from "classActor.js";
// import * as classLogger from "classLogger.js";
// import * as movieClass from "classMovie.js";

var eventEmitter = new _classEventEmitter.EventEmitter(settings);

var logger = new _classLogger.classLogger(settings);

var movieClass1 = new _classMovie.movieClass(settings);

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