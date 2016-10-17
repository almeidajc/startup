class EventEmitter {
 constructor () {
   this.listeners = new Object ();
 }

 on (event, callback) {
   let i, flag;
   for(i=0; i<this.listeners.length; i++){
     if(this.listeners[i] === event) flag = true;
   }
   if(flag === false){
     this.listeners[++i] = {event, callback}
   }
 }

 off (event, callback) {
   let isFunction = function(obj) {
    return typeof obj == 'function' || false;
    }
   let listeners = this.listeners.get(event),
   index;

   if (listeners && listeners.length) {
     index = listeners.reduce((i, listener, index) => {
       return (isFunction(listener) && listener === callback) ?
       i = index :
       i;
     }, -1);

     if (index > -1) {
       listeners.splice(index, 1);
       this.listeners.set(event, listeners);
       return true;
     }
   }
   return false;
 }

 emit (movie, event) {
   let listeners = this.listeners.get(movie);
   listeners.forEach((listener) => {
     listener(movie, event);
   });
  }
}

class logger {
  constructor(){

  }

  logg(info){
      console.log(info.getTitle())
  }
}

let mylogger = new logger;

class classMovie extends EventEmitter{
 constructor(title, year, duration){
   super();
   this.title = title;
   this.year = year;
   this.duration = duration;
 }
 play(){
   super.emit(this, 'play');
 }
 pause(){
   super.emit(this, 'pause');
 }
 resume(){
   super.emit(this, 'resume');
 }
}

let Movie1 = new classMovie("Spider Man", "2016", "120");
let Movie2 = new classMovie("Iron Man", "2015", "95");
console.log(Movie1);


Movie1.on('play', mylogger.logg(this));

Movie1.play();
Movie1.resume();

Movie1.pause();
