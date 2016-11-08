import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';
import { Link } from 'react-router';

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {movieToUpdate: {}}
  }

  render () {
    return (
        <div className="movie">
            <Link to ="/MovieInput/0"><button className="buttonSelect">Movie Input</button></Link>
            <Link to ="/MovieList"><button className="buttonSelect">Movie List</button></Link>
            <h3 id="favouriteListTitle" />
            <ul id="list" />
        </div>
    );
  }
  // <MovieEdit movies={this.getMovies()} onSubmit={this.handleUpdateMovie} />
  // getMovies () {
  //   let movies = [];
  //
  //    if (localStorage.getItem('movieStorage')) {
  //      movies = JSON.parse(localStorage.getItem('movieStorage'));
  //    }
  //    return movies;
  //  }
  //
  // handleMovieInputSubmit (event) {
  //   let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  //   movies.push(event);
  //   localStorage.setItem("movieStorage", JSON.stringify(movies));
  // }
  //
  // handleUpdateMovie (index) {
  //   let movies = JSON.parse(localStorage.getItem("movieStorage"));
  //   this.setState({movieToUpdate: movies[index]});
  // }
};

export default Movie;
