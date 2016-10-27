import React from 'react';
import ReactDOM from 'react-dom';


class movieClass extends React.Component {
  constructor (title, year, duration, favourite) {
    super ();
    this.title=title;
    this.year=year;
    this.duration=duration;
    this.isFavourite=favourite;
    // this.actors = [];
  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", year: "" , duration: "", isFavourite:""};
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleIsFavourite = this.handleIsFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowFavourites = this.handleShowFavourites.bind(this);
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleDuration(event) {
    this.setState({
      duration: event.target.value
    });
  }

  handleYear(event) {
    this.setState({
      year: event.target.value
    });
  }

  handleIsFavourite(event) {
    this.setState({
      isFavourite: event.target.value
    });
  }

  handleSubmit(event) {
    let movie = new movieClass(this.state.title, this.state.year, this.state.duration, this.state.isFavourite);
    let key = localStorage.key("movieStorage");
    let movies = localStorage.getItem(key);

    if (movies === null) {
      localStorage.setItem("movieStorage", JSON.stringify(this.state));
    } else {
      localStorage.setItem("movieStorage", movies.concat(";" ,JSON.stringify(this.state)));

    }

  }

  handleReset(event) {
    document.getElementById("name").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("year").value = "";
  }

  handleShowFavourites(event){
    let movies = localStorage.getItem("movieStorage");
    let array = localStorage.movieStorage.split(';');
    let object = {}
    let favourites = [];
    let indexA, indexB=0;
    let list, newLine, data;

    let columnNode = document.createElement("li");
    let textNode = document.createTextNode(array[0].title);

    for( indexA = 0; indexA < array.length; indexA++)
    {
      object[indexA] = JSON.parse(array[indexA]);

      if(object[indexA].isFavourite === "true") {
        favourites[indexB] = object[indexA];
        indexB++;
      }

    }

    favourites.map(function (item) {
     columnNode = document.createElement("li");
     textNode = document.createTextNode("title: " + item.title + " year: " + item.year + " duration: " + item.duration);
     columnNode.appendChild(textNode);
     document.getElementById("listOfMovies").appendChild(columnNode);
     });


  }

  render() {
    return (
      <div>
          <label for="name"> name  </label>
          <input id="name" type="text" value={this.state.title} onChange={this.handleTitle} /> <br /> <br />
          <label for="duration"> duration </label>
          <input id="duration" type="number" value={this.state.duration} onChange={this.handleDuration} min="15" max="600" />
          <label for="minutes"> min</label><br /> <br />
          <label for="year"> year </label>
          <input id="year" type="number" value={this.state.year} onChange={this.handleYear} min="1900" max="2016" /> <br /> <br />

          <label for="favourite"> Is your favourite?   </label>
          <select name="isFavourite" id="isFavourite" onChange={this.handleIsFavourite} required>
            <option value="false">falsaa</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <br /> <br />

          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleReset}> Reset </button>
          <button onClick={this.handleShowFavourites}> Show Favourites </button>


          <div>
            <ul id="listOfMovies"> </ul>
          </div>

      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
