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
