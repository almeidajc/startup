class EventEmitter {
constructor () {
  this.listeners = [];
}

on (event, callback) {
  if (this.listeners[event] != callback){
    this.listeners[event] = callback
  };

}

off (event, callback) {
  if (this.listeners[event])
  delete this.listeners[event];
  ;

}

emit (movie, event) {
   if (this.listeners[event]) this.listeners[event](movie, event);

 }
}


class movieClass extends EventEmitter{
  constructor (title, year, duration) {
    super ();
    this.title=title;
    this.year=year;
    this.duration=duration;
    this.actors = [];
  }


  showTitle (){
    console.log (this.title);
  }

  showDuration (){
  console.log (this.duration);
  }

  showYear (){
    console.log (this.year);
  }

  play (){
    super.emit (this, "play");
  }

  pause (){
    super.emit (this, "pause");
  }

  resume () {
    super.emit (this, "resume");
  }

  addCast(newActors) {
    this.actors = this.actors.concat(newActors);

  }

}

function createMovie(title, year, duration){
  let movie = new movieClass(title, year, duration);
  return movie;
}




class logger {
 constructor (){
 }

 logg (movieExecute, functionName){
     console.log(movieExecute.title + ' ' + functionName)
 }
}

let mylogger = new logger;


let Social = {
 share:  function(friendName) {
   console.log ("Share " + this.title + " with " + friendName);
 },

 like: function(friendName) {
   console.log (friendName+ " like " + this.title);
 }
}


class Actor {
  constructor (name, age) {
    this.name=name;
    this.age=age;
  }
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


titanic.addCast(leonardo);
titanic.addCast(michael);
titanic.addCast(otherCast);

console.log (titanic);
console.log (terminator);
console.log (avatar);

titanic.on ("play", mylogger.logg);
titanic.play ();
titanic.resume ();
titanic.pause ("play");
titanic.off ("play",mylogger.logg);
titanic.emit ("play");


terminator.on ("play", mylogger.logg);
terminator.play ();
terminator.resume ("play");
terminator.off ("play", mylogger.logg);
terminator.share ("octa");
terminator.like("octa");
