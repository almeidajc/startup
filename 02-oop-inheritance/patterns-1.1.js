import * as Actor from "classActor.js";
import * as EventEmitter from "classEventEmitter.js";
import * as classLogger from "classLogger.js";
import * as movieClass from "classMovie.js";


let mylogger = new logger;

let Social = {
 share:  function(friendName) {
   console.log ("Share " + this.title + " with " + friendName);
 },

 like: function(friendName) {
   console.log (friendName+ " like " + this.title);
 }
}

function createMovie(title, year, duration){
  let movie = new movieClass(title, year, duration);
  return movie;
}

let titanic = new createMovie ("Titanic", 1999, "1:05");
Object.assign(titanic, Social);
let terminator = new createMovie ("Terminator", 1992, "2:05");
Object.assign(terminator, Social);
let avatar = new createMovie ("Avatar", 2010, "3:05");
Object.assign(avatar, Social);


let leonardo = new Actor ("Leonardo Dicaprio", 41);
let michael = new Actor ("Michael Biehn", 50);
let paul = new Actor ("Paul Winfield", 50);

let otherCast = [
  new Actor ("Linda Hamilton", 50),
  new Actor ("Arnold Schwarzenegger", 50),
];


titanic.addCast (leonardo);
titanic.addCast (michael);
titanic.addCast (otherCast);

console.log(titanic);
console.log(terminator);
console.log(avatar);

titanic.on ("play", mylogger.log);
titanic.play ();
titanic.resume ();
titanic.pause ("play");
titanic.off ("play",mylogger.log);
titanic.emit ("play");


terminator.on ("play", mylogger.log);
terminator.play ();
terminator.resume ("play");
terminator.off ("play", mylogger.log);
terminator.share ("octa");
terminator.like("octa");
