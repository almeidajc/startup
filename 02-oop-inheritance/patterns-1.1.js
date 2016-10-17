class EventEmitter {
constructor () {
  this.listeners = [];
}

on (event, callback) {
  if(this.listeners[event] != callback){
    this.listeners[event] = callback
  };

}

off (event, callback) {
  if(this.listeners[event])
  delete this.listeners[event];
  ;

}

emit (movie, event) {
   if(this.listeners[event]) this.listeners[event](movie, event);

 }
}


class movieClass extends EventEmitter{
  constructor (title, year, duration) {
    super();
    this.title=title;
    this.year=year;
    this.duration=duration;
  }


  showTitle (){
    console.log(this.title);
  }

  getTitle(){
    return this.title;
  }

  showDuration (){
  console.log(this.duration);
  }

  showYear (){
    console.log(this.year);
  }

  play (){
    super.emit(this, "play");
    console.log("play")
  }

  pause (){
    super.emit(this, "pause");
    console.log("pause")
  }

  resume () {
    super.emit(this, "resume");
    console.log("resume")
  }

}

function createMovie(title, year, duration){
  let movie = new movieClass(title, year, duration);
  return movie;
}

class logger {
  constructor(){
  }

  logg(movie){
      console.log(movie.getTitle())
  }
}

let mylogger = new logger;

let firstMovie = new createMovie("Titanic", 1991, "1:05");
let secondMovie = new createMovie("Terminator", 1992, "2:05");
let thirdMovie = new createMovie("Avatar", 2010, "3:05");


firstMovie.on("play", mylogger.logg(firstMovie));
firstMovie.play();
firstMovie.resume();
firstMovie.pause("play",firstMovie);
firstMovie.off("play",firstMovie);
firstMovie.emit("play",firstMovie);


secondMovie.on("play", mylogger.logg(secondMovie));
secondMovie.play();
secondMovie.resume("play",secondMovie);
secondMovie.off("play",secondMovie);
//secondMovie.pause("play",secondMovie);

// thirdMovie.on("play", mylogger.logg(thirdMovie));
// thirdMovie.play();
// thirdMovie.resume("play",thirdMovie);
// thirdMovie.pause("play",thirdMovie);
